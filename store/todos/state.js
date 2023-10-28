export default () => ({
  todos: JSON.parse(localStorage.getItem('todos')) || []
});
