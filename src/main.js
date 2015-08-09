var React = require('react');
var WikiList = require('./wiki_list.js');

var Main = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h3>最新の更新</h3>
                <WikiList wiki={this.props.wiki} />
            </div>
        );
    }
});

module.exports = Main;
