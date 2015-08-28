var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var WikiAction = require('./actions/wiki_action.js');
var CategoryStorage = require('./stores/category_storage.js');
var Header = require('./components/header.jsx');

var App = React.createClass({
    getInitialState: function() {
        return {
            wiki: [],
            category: [],
            prefix: '',
            ready: false
        };
    },
    componentDidMount: function() {
        this.setWiki('recentchanges');
        this.setCategory(2015);
    },
    setWiki: function(list) {
        var self = this;
        WikiAction.get(function(res) {
            self.setState({
                wiki: res,
                ready: true
            });
        }, list);
    },
    searchWiki: function(keyword) {
        var self = this;
        WikiAction.search(function(res) {
            self.setState({
                wiki: res,
                ready: true
            });
            self.setCategory(res.pageid);
        }, keyword);
    },
    setCategory: function(prefix) {
        var self = this;
        CategoryStorage.find(function(res) {
            self.setState({category: res});
        }, prefix);
    },
    render: function() {
        return (
            <div>
                <Header setWiki={this.setWiki}/>
                <div className="container">
                    <Link to="wiki" className="col-md-1 btn btn-link">wiki</Link>
                    <Link to="category" className="col-md-1 btn btn-link">Category</Link>
                </div>
                <RouteHandler setWiki={this.setWiki} searchWiki={this.searchWiki} setCategory={this.setCategory} {...this.state}/>
            </div>
        );
    }
});

module.exports = App;
