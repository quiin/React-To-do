var React = require('react');
var PropTypes = React.PropTypes;
const uuid = require('node-uuid');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const TodoApi = require('TodoApi');

var TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: TodoApi.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  },
  componentDidUpdate(prevProps, prevState) {
    TodoApi.setTodos(this.state.todos);
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
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
