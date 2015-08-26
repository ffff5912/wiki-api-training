var Request = require('superagent');
require('superagent-jsonp')(Request);

var Constraint = {
    API_URL: 'https://ja.wikipedia.org/w/api.php',
    M_LIMIT: 10,
    M_NAMESPACE: 0
};

var CategoryStorage = {
    findAll: function(callback, id) {
        Request
            .get(Constraint.API_URL)
            .query({
                format: "json",
                action: "query",
                list: "allcategories",
            })
            .jsonp()
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                callback(res.body.query.allcategories);
            });
    }
};

module.exports = CategoryStorage;
