var Request = require('superagent');
require('superagent-jsonp')(Request);

var Constraint = {
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
                rclimit: Constraint.M_LIMIT
            };
        }

        return {
            format: "json",
            action: "query",
            list: list,
            rnnamespace: Constraint.M_NAMESPACE,
            rnlimit: Constraint.M_LIMIT
        };
    }
};

var WikiStorage = {
    findAll: function(callback, list) {
        Request
            .get(Constraint.API_URL)
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
            .get(Constraint.API_URL)
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

module.exports = WikiStorage;
