const expect = require('expect');

const TodoApi = require('TodoApi');


describe('TodoApi', () =>{
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () =>{
    expect(TodoApi).toExist();
  });

  describe('setTodos()', () =>{
    it('should set valid todos array', () =>{
      const validTodos = [{
        id: 123,
        text: 'dummy todo',
        completed: false
      }];
      TodoApi.setTodos(validTodos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(validTodos);
    });
    it('should not update todos array with invalid todos', () =>{
      const invalidTodos = 'this is invalid';
      TodoApi.setTodos(invalidTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos()', () =>{
    it('should return empty array for bad localStorage data', () =>{
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);

    });
    it('should return todos if valid array in local Storage', () =>{
      const validTodos = [{
        id: 123,
        text: 'dummy todo',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(validTodos));
      expect(TodoApi.getTodos()).toEqual(validTodos);
    });
  });

});
