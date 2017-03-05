var React = require('react');
var PropTypes = React.PropTypes;
const uuid = require('node-uuid');
const moment = require('moment');

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle (id){
    var updatedTodos = this.state.todos.map((todo) =>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo = {this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TodoApp;
