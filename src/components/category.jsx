var React = require('react');
var CategoryList = require('./category_list.jsx');
var SearchForm = require('./search_form.jsx');

var Category = React.createClass({
    handleSubmit: function (prefix) {
        this.props.setCategory(prefix);
    },
    render: function() {
        return (
            <div className="container">
                <SearchForm handleSubmit={this.handleSubmit}/>
                <CategoryList category={this.props.category}/>
            </div>
        );
    }
});

module.exports = Category;
