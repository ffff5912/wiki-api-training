var React = require('react');
var Router = require('react-router');
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var WikiAction = require('./wiki_action.js');
var Header = require('./header.js');

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

var SearchForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var keyword = React.findDOMNode(this.refs.keyword).value;
        if (!keyword) {
            return;
        }
        this.props.searchWiki(keyword);
        return;
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input ref="keyword" type="text"/>
                    <button type="submit" className="btn">検索</button>
                </form>
            </div>
        );
    }
});

var Wiki = React.createClass({
    render: function() {
        return (
            <div>
                <SearchForm searchWiki={this.props.searchWiki}/>
                <WikiList wiki={this.props.wiki}/>
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
        <Route  handler={Wiki} name="wiki" path="wiki"/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});
