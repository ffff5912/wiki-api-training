var React = require('react');
var WikiAction = require('../actions/wiki_action.js');

var Constraint = {
    WIKI_URL: 'https://ja.wikipedia.org/wiki/'
}

var WikiList = React.createClass({
    categories: [],
    setCategory: function(keyword) {
        var self = this
        WikiAction.getCategory(function(res) {
            self.categories = res;
        }, keyword);
    },
    render: function() {
        var self = this;
        var rows = this.props.wiki.map(function(value) {
            self.setCategory(value.pageid);
            var categories = self.categories.map(function(category) {
                return (
                    <span>{category.title}</span>
                );
            });
            var link = Constraint.WIKI_URL + value.title;
            return (
                <li>
                    <a href={link} target="blank">{value.title}</a>
                    <p>{categories}</p>
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
