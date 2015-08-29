var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Header = require('./components/header.jsx');
var Container = require('./container.js');
var dispatcher = Container.get('dispatcher');
var action = Container.get('action');

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
        action.fetchWiki(this.onWikiChange, list);
    },
    searchWiki: function(keyword) {
        action.search(this.onWikiChange, keyword);
    },
    setCategory: function(prefix) {
        action.fetchCategory(this.onCategoryChange, prefix);
    },
    onWikiChange: function(wiki) {
        this.setState({wiki: wiki})
    },
    onCategoryChange: function(category) {
        this.setState({category: category})
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
