var React = require('react');
var WikiList = require('./wiki_list.jsx');
var SearchForm = require('./search_form.jsx');

var Wiki = React.createClass({
    handleSubmit: function (keyword) {
        this.props.searchWiki(keyword);
    },
    render: function() {
        return (
            <div className="container">
                <SearchForm handleSubmit={this.handleSubmit}/>
                <WikiList wiki={this.props.wiki}/>
            </div>
        );
    }
});

module.exports = Wiki;
