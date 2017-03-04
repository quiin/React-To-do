var React = require('react');
var PropTypes = React.PropTypes;

var Todo = React.createClass({

  render (){
    var {text, id} = this.props;
    return (
      <div>
        <p>
          {id}: {text}
        </p>
      </div>
    );
  }

});

module.exports = Todo;
