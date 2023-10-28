export default {
  ADD_TODO(state, todo) {
    state.todos.push(todo);
  },

  REMOVE_TODOS(state, payload) {
    switch (payload.type) {
      case 'ALL':
        state.todos = []
        break;
      case 'ID':
        state.todos = state.todos.filter(todo => todo.id !== payload.id)
        break;
      case 'STATUS':
        if (payload.status.done === true) {
          state.todos = state.todos.filter(todo => !todo.status.done)
        }
        break;
      default:
        break;
    }
  },

  TOGGLE_TODO(state, id) {
    const item = state.todos.find(t => t.id === id);
    item.status.done = !item.status.done;
  },

};
