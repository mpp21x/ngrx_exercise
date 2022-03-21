import { todoListReducer, initialState } from './todo-list.reducer';

describe('TodoList Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = todoListReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
