var React = require('react');

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

module.exports = Wiki;
