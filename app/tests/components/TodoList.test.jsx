const React = require('react');
const ReactDom = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () =>{
  it('should exist', () =>{
    expect(TodoList).toExist();
  });
  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: "Do something"
      },
      {
        id: 2,
        text: "Do something else"
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>)
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todos.length).toBe(todosComponents.length);
  });
  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>)
    var $el = $(ReactDom.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
