var React = require('react');
var Router = require('react-router');
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var WikiAction = require('./wiki_action.js');
var Header = require('./header.js');
var Wiki =require('./wiki.js');

var App = React.createClass({
    getInitialState: function() {
        return {
            wiki: [],
            ready: false
        };
    },
    componentDidMount: function() {
        this.setWiki();
    },
    setWiki: function() {
        var self = this;
        WikiAction.get(function(res) {
            self.setState({
                wiki: res,
                ready: true
            });
        }, 'random');
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
                <Header />
                <div className="container">
                    <Link onClick={this.setWiki} to="wiki">wiki</Link>
                    <RouteHandler searchWiki={this.searchWiki} {...this.state}/>
                </div>
            </div>
        );
    }
});

var routes = (
    <Route handler={App} name="app" path="/">
        <Route handler={Wiki} name="wiki" path="wiki"/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});
