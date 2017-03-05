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

  describe('filterTodos()', () => {
    const todos = [
      {
        id: 1,
        text: 'Some text',
        completed: true
      },
      {
        id: 2,
        text: 'Other text',
        completed: false
      },
      {
        id: 3,
        text: 'Some other text',
        completed: true
      }
    ];
    it('should return all items if showCompleted is true', () =>{
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return all non-completed todos if showCompleted is false', () =>{
      var filteredTodos = TodoApi.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', () =>{
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });
    it('should filter todos by searchText', () =>{
      var filteredTodos = TodoApi.filterTodos(todos, true, undefined);
      expect(filteredTodos.length).toBe(3);
    });
    it('should return all todos if searchText is empty', () =>{
      var filteredTodos = TodoApi.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    })
  });

});
