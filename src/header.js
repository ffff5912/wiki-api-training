var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="app" className="navbar-brand">MediaWiki Sample</Link>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
