var React = require('react');
var PropTypes = React.PropTypes;
const moment = require('moment');

var Todo = React.createClass({

  render (){
    var {text, id, completed, createdAt, completedAt} = this.props;
    var renderDate = () =>{
      var message =  completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;


      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div>
        <label>
          <input type="checkbox" checked={completed} onChange={() => { this.props.onToggle(id) }} />
          <p>{text}</p>
          <p>{renderDate()}</p>
        </label>
      </div>
    );
  }

});

module.exports = Todo;
