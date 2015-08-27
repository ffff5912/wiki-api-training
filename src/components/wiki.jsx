var React = require('react');
var WikiList = require('./wiki_list.jsx');

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
                <form onSubmit={this.handleSubmit}>
                    <input ref="keyword" type="text"/>
                    <button type="submit" className="btn">検索</button>
                </form>
        );
    }
});

var Wiki = React.createClass({
    render: function() {
        return (
            <div className="container">
                <SearchForm searchWiki={this.props.searchWiki}/>
                <WikiList wiki={this.props.wiki}/>
            </div>
        );
    }
});

module.exports = Wiki;
