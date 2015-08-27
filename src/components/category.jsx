var React = require('react');
var CategoryList = require('./category_list.jsx');

var Category = React.createClass({
    render: function() {
        return (
            <div className="container">
                <CategoryList category={this.props.category}/>
            </div>
        );
    }
});

module.exports = Category;
