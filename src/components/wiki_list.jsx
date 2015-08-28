var React = require('react');

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
