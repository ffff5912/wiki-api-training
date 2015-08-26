var React = require('react');
var WikiAction = require('../actions/wiki_action.js');

var Constraint = {
    WIKI_URL: 'https://ja.wikipedia.org/wiki/'
}
var CategoryList = React.createClass({
    categories: [],
    setCategory: function(keyword) {
        var self = this
        WikiAction.getCategory(function(res) {
            self.categories = res;
        }, keyword);
    },
    render: function() {
        this.setCategory(this.props.pageid);
        var categories = this.categories.map(function(category) {
            return (
                <span>
                    {category.title}
                </span>
            );
        });
        return (
            <div>
                {categories}
            </div>
        );
    }
});

module.exports = CategoryList;
