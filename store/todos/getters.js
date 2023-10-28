export default {
  allTodos: state => state.todos,
  completedTodos: state => state.todos.filter(todo => todo.status.done),
  activeTodos: state => state.todos.filter(todo => !todo.status.done),
  newTodoId: state => {
    if (state.todos.length === 0) return 1;
    const maxId = Math.max(...state.todos.map(todo => todo.id));
    return maxId + 1;
  }
};
