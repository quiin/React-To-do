const React = require('react');
const ReactDom = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const Todo = require('Todo');

describe('Todo', () =>{
  it('should exist', () =>{
    expect(Todo).toExist();
  });
  it('should call onToggle prop with id on click', () =>{
    var dummyTodo = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...dummyTodo} onToggle={spy}/>);
    var $el = $(ReactDom.findDOMNode(todo));
    TestUtils.Simulate.change($el.find('input')[0]);
    expect(spy).toHaveBeenCalledWith(dummyTodo.id);
  });
  
});
