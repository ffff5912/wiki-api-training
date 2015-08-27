var Request = require('superagent');
require('superagent-jsonp')(Request);

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

var ListStorage = {
    findAll: function(callback, list) {
        Request
            .get(Constant.API_URL)
            .query(Query.get(list))
            .jsonp()
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                callback(res.body.query[list]);
            });
    },
    findBy: function(callback, keyword) {
        Request
            .get(Constant.API_URL)
            .query({
                format: "json",
                action: "query",
                list: "search",
                srsearch: keyword
            })
            .jsonp()
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                callback(res.body.query.search);
            });
    }
};

module.exports = ListStorage;
