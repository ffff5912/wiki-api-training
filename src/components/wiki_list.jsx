var React = require('react');
var WikiAction = require('../actions/wiki_action.js');
var CategoryList = require('./category_list.jsx');

var Constant = {
    WIKI_URL: 'https://ja.wikipedia.org/wiki/'
}

var WikiList = React.createClass({
    render: function() {
        var rows = this.props.wiki.map(function(value) {
            var link = Constant.WIKI_URL + value.title;
            return (
                <li>
                    <a href={link} target="blank">{value.title}</a>
                </li>
            );
        }.bind(this));
        return (
            <div>
                <ul>{rows}</ul>
            </div>
        );
    }
});

module.exports = WikiList;
