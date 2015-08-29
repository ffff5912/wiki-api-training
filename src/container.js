'use strict';

var Emitter = require('./event_emitter.js');
var ActionCreator = require('./actions/action_creator.js');
var ListStore = require('./stores/list_store.js');
var CategoryStore = require('./stores/category_store.js');

var Container = (function() {
    function Container() {
        var dispatcher = new Emitter();
        this.container = {
            action: new ActionCreator(dispatcher),
            list_store: new ListStore(dispatcher),
            category_store: new CategoryStore(dispatcher)
        };
    };

    Container.prototype.get = function(key) {
        return this.container[key];
    };

    Container.prototype.set = function(key, value) {
        this.container[key] = value;
    };

    return Container;
})();

module.exports = new Container();
