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
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  it('should toggle completed value when handleToggle called', () =>{
    var dummyTodo = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [dummyTodo]});

    expect(todoApp.state.todos[0]).toBe(dummyTodo);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  it('should toggle todo from completed to incompleted', () =>{
    var dummyTodo = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 1488691608,
      completedAt: 1488691888
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [dummyTodo]});

    expect(todoApp.state.todos[0]).toBe(dummyTodo);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
