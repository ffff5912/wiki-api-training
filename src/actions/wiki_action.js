var ListStorage = require('../stores/list_storage.js');
var CategoryStorage = require('../stores/category_storage.js');

var WikiAction = {
    get: function(callback, list) {
        ListStorage.findAll(function(res) {
            callback(res);
        }, list);
    },
    search: function(callback, keyword) {
        ListStorage.findBy(function(res) {
            callback(res);
        }, keyword)
    },
    getCategory: function(callback, keyword) {
        CategoryStorage.find(function(res) {
            callback(res);
        }, keyword);
    },
}

module.exports = WikiAction;
