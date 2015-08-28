var React = require('react');

var Constant = {
    WIKI_URL: 'https://ja.wikipedia.org/wiki/Category'
}
var CategoryList = React.createClass({
    render: function() {
        var rows = this.props.category.map(function(value) {
            var link = Constant.WIKI_URL + value['*'];
            return (
                <li>
                    <a href={link} target="blank">{value['*']}</a>
                </li>
            );
        }.bind(this));
        if (0 === rows.length) {
            rows = 'not found category';
        }
        return (
            <div>
                <ul>{rows}</ul>
            </div>
        );
    }
});

module.exports = CategoryList;
