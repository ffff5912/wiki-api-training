var React = require('react');

var SearchForm = React.createClass({
    _onSubmit: function(e) {
        e.preventDefault();
        var keyword = React.findDOMNode(this.refs.keyword).value;
        if (!keyword) {
            return;
        }
        this.props.searchWiki(keyword);
    },
    render: function() {
        return (
            <form onSubmit={this._onSubmit}>
                <input ref="keyword" type="text"/>
                <button className="btn" type="submit">検索</button>
            </form>
        );
    }
});

module.exports = SearchForm;
