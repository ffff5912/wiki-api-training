var Request = require('superagent');
require('superagent-jsonp')(Request);

var Constant = {
    API_URL: 'https://ja.wikipedia.org/w/api.php',
};

var CategoryStorage = {
    find: function(callback, prefix) {
        Request
            .get(Constant.API_URL)
            .query({
                format: "json",
                action: "query",
                list: "allcategories",
                acprefix: prefix,
                acprop: "size"
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
