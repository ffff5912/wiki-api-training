var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var WikiAction = require('./actions/wiki_action.js');
var Header = require('./components/header.jsx');

var App = React.createClass({
    getInitialState: function() {
        return {
            wiki: [],
            ready: false
        };
    },
    componentDidMount: function() {
        this.setWiki('recentchanges');
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
        }, keyword);
    },
    render: function() {
        return (
            <div>
                <Header setWiki={this.setWiki}/>
                <div className="container">
                    <Link to="wiki">wiki</Link>
                </div>
                <RouteHandler setWiki={this.setWiki} searchWiki={this.searchWiki} {...this.state}/>
            </div>
        );
    }
});

module.exports = App;
