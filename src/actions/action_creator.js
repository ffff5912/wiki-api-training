'use strict';

var ActionCreator = (function() {
    function ActionCreator(dispatcher) {
        this.dispatcher = dispatcher;
    }

    ActionCreator.prototype.fetchWiki = function(callback, list) {
        var data = {callback: callback, list: list};
        this.dispatcher.emit('update', data);
    }

    ActionCreator.prototype.search = function(onWikiChange, keyword) {
        var data = {callback: onWikiChange, keyword: keyword};
        this.dispatcher.emit('search_wiki', data);
    };

    ActionCreator.prototype.fetchCategory = function(onCategoryChange, prefix) {
        var data = {callback: onCategoryChange, prefix: prefix};
        this.dispatcher.emit('search_category', data);

    };

    return ActionCreator;
})();

module.exports = ActionCreator;
