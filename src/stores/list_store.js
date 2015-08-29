var Request = require('superagent');
require('superagent-jsonp')(Request);
var Emitter = require('../event_emitter.js')

var Constant = {
    API_URL: 'https://ja.wikipedia.org/w/api.php',
    M_LIMIT: 10,
    M_NAMESPACE: 0
};

var Query = {
    get: function(list) {
        if ('recentchanges' === list) {
            return {
                format: "json",
                action: "query",
                list: list,
                rcnamespace: 0,
                rclimit: Constant.M_LIMIT
            };
        }

        return {
            format: "json",
            action: "query",
            list: list,
            rnnamespace: Constant.M_NAMESPACE,
            rnlimit: Constant.M_LIMIT
        };
    }
};

var ListStore = (function(Emitter) {
    function ListStore(dispatcher) {
        Emitter.call(this);
        dispatcher.on('update', this.findAll);
        dispatcher.on('search_wiki', this.findBy);
    }

    ListStore.prototype.findAll = function(data) {
        Request
            .get(Constant.API_URL)
            .query(Query.get(data.list))
            .jsonp()
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                data.callback(res.body.query[data.list]);
            });
    };

    ListStore.prototype.findBy = function(data) {
        Request
            .get(Constant.API_URL)
            .query({
                format: "json",
                action: "query",
                list: "search",
                srsearch: data.keyword
            })
            .jsonp()
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                data.callback(res.body.query.search);
            });
    };

    return ListStore;
})(Emitter);

module.exports = ListStorage;
