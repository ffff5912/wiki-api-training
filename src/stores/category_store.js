var Request = require('superagent');
require('superagent-jsonp')(Request);
var Emitter = require('../event_emitter.js')

var Constant = {
    API_URL: 'https://ja.wikipedia.org/w/api.php',
};

var CategoryStore = (function(Emitter) {
    function CategoryStore(dispatcher) {
        Emitter.call(this);

        dispatcher.on('search_category', this.find);
    };

    CategoryStore.prototype.find = function(data) {
        Request
            .get(Constant.API_URL)
            .query({
                format: "json",
                action: "query",
                list: "allcategories",
                acprefix: data.prefix,
                acprop: "size"
            })
            .jsonp()
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                data.callback(res.body.query.allcategories);
            });
    }

    return CategoryStore;
})(Emitter);

module.exports = CategoryStore;
