var Request = require('superagent');
require('superagent-jsonp')(Request);

var Constraint = {
    API_URL: 'https://ja.wikipedia.org/w/api.php',
    M_LIMIT: 10,
    M_NAMESPACE: 0
};

var CategoryStorage = {
    find: function(callback, id) {
        Request
            .get(Constraint.API_URL)
            .query({
                format: "json",
                action: "query",
                prop: "categories",
                pageids: id
            })
            .jsonp()
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                callback(res.body.query.pages[id].categories);
            });
    }
};

module.exports = CategoryStorage;
