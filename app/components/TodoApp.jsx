var React = require('react');
var PropTypes = React.PropTypes;
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  handleAddTodo (text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle (id){    
    var updatedTodos = this.state.todos.map((todo) =>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        console.log('Completed', todo);
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  },
  handleSearch (showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render (){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
