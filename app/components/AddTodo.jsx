var React = require('react');
var PropTypes = React.PropTypes;

var AddTodo = React.createClass({

  handleSubmit (e){
    e.preventDefault();
    var inputRef = this.refs.todoText;
    var todoText = inputRef.value;
    if(todoText.length > 0){
      inputRef.value = "";
      this.props.onAddTodo(todoText);
    }else{
      this.refs.todoText.focus();
    }
  },
  render (){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodo;
