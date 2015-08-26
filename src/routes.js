var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var App = require('./app.jsx');
var NotFound = require('./components/not_found.jsx');
var Wiki =require('./components/wiki.jsx');
var Category =require('./components/category.jsx');
var Main = require('./components/main.jsx');

var routes = (
    <Route handler={App} name="app" path="/">
        <Route handler={Wiki} name="wiki" path="wiki"/>
        <Route handler={Category} name="category" path="category"/>
        <DefaultRoute handler={Main}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, Router.HashLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('container'));
});
