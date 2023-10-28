import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      newTodo : ""
    };
  },
  computed: {
    ...mapGetters('todos',['completedTodos', 'activeTodos', 'allTodos', 'newTodoId']),
    todoList() {
      return this.allTodos;
    },
    activeTodoCount() {
      return this.activeTodos.length.toString();
    },
    completedTodoCount() {
      return this.completedTodos.length.toString();
    },
    showCompleteTodoDeleteBtn() {
      return this.completedTodos.length > 0;
    }
  },
  methods: {
    ...mapActions('todos',['addTodo', 'toggleTodoDoneStatus', 'removeTodos', 'removeTodoById', 'removeTodoByDoneStatus']),
    createTodo(todo) {
      if (this.newTodo === "") {
        return;
      }
      this.addTodo({ id: this.newTodoId,name: this.newTodo, status: { done: false } });
      this.newTodo = "";
    },

    removeTodoList() {
      this.removeTodos({ type: 'ALL' });
    },

    removeTodo(id) {
      this.removeTodos({ type: 'ID', id: id });
    },

    removeDoneTodoList() {
      this.removeTodos({ type: 'STATUS', status: {'done':true} });
    },
  }
};
