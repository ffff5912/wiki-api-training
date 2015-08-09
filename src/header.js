var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    onClick: function() {
        this.props.setWiki('recentchanges')
    },
    render: function() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="app" className="navbar-brand" onClick={this.onClick}>MediaWiki Sample</Link>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
