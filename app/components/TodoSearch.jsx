var React = require('react');
var PropTypes = React.PropTypes;

var TodoSearch = React.createClass({
  handleSearch (){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText)

  },
  render (){
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

});

module.exports = TodoSearch;
