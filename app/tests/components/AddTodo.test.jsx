const React = require('react');
const ReactDom = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const AddTodo = require('AddTodo');

describe('AddTodo', () =>{
  it('should exist', () =>{
    expect(AddTodo).toExist();
  });
  it('should call onAddTodo prop with valid data', () =>{
    const todoText = 'Check mail';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy}/>);
    var $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });
  it('should NOT call onAddTodo prop with invalid data', () =>{
    const todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy}/>);
    var $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
