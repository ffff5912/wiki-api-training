var WikiStorage = require('./wiki_storage.js');

var WikiAction = {
    get: function(callback, list) {
        WikiStorage.findAll(function(res) {
            callback(res);
        }, list);
    },
    search: function(callback, keyword) {
        WikiStorage.findBy(function(res) {
            callback(res);
        }, keyword)
    }
}

module.exports = WikiAction;
