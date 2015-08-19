var React = require('react');
var WikiList = require('./wiki_list.jsx');
var Router = require('react-router');
var Link = Router.Link;

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <div className="container">
                    <h3>最新の更新</h3>
                    <WikiList wiki={this.props.wiki} />
                </div>
            </div>
        );
    }
});

module.exports = Main;
