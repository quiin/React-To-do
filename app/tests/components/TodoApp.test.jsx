const React = require('react');
const ReactDom = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const TodoApp = require('TodoApp');

describe('TodoApp', () =>{
  it('should exist', () =>{
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on handleAddTodo', () =>{
    const todoText = 'Test new functionality'
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos.length).toBe(1);
  });
  it('should toggle completed value when handleToggle called', () =>{
    var dummyTodo = {
      id: 11,
      text: 'Test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [dummyTodo]});

    expect(todoApp.state.todos[0]).toBe(dummyTodo);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });

});
