var React = require('react');
var Router = require('react-router');
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var WikiAction = require('./wiki_action.js');

var Constraint = {
    WIKI_URL: 'https://ja.wikipedia.org/wiki/'
}

var WikiList = React.createClass({
    render: function() {
        var rows = this.props.wiki.map(function(value) {
            var link = Constraint.WIKI_URL + value.title;
            return (
                <li>
                    <a href={link} target="blank">{value.title}</a>
                </li>
            );
        });
        return (
            <div>
                <ul>{rows}</ul>
            </div>
        );
    }
});

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
        WikiAction.Search(function(res) {
            self.setState({
                wiki: res,
                ready: true
            });
        }, keyword)
    },
    render: function() {
        return (
            <div>
                <div>
                    <Link to="app">HOME</Link>
                </div>
                <div>
                    <Link to="wiki" onClick={this.setWiki}>wiki</Link>
                </div>
                <RouteHandler {...this.state}/>
            </div>
        );
    }
});

var routes = (
    <Route handler={App} name="app" path="/">
        <Route  handler={WikiList} name="wiki" path="wiki"/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});
