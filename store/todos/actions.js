export default {
  addTodo({ commit }, todo) {
    commit('ADD_TODO', todo);
  },

  removeTodos({ commit }, payload) {
    commit('REMOVE_TODOS', payload);
  },

  toggleTodoDoneStatus({ commit }, id) {
    commit('TOGGLE_TODO', id);
  },

};
