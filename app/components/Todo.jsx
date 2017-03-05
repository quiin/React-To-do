var React = require('react');
var PropTypes = React.PropTypes;

var Todo = React.createClass({

  render (){
    var {text, id, completed} = this.props;
    return (
      <div>
        <label>
          <input type="checkbox" checked={completed} onChange={() => { this.props.onToggle(id) }} /> {text}
        </label>
      </div>
    );
  }

});

module.exports = Todo;
