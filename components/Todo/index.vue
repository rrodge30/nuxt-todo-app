<template>
  <div>
    <v-toolbar class="transparent">
      <v-spacer></v-spacer>
      <v-toolbar-title>
        Vue ToDo List
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container class="d-flex justify-center">
      <v-card fluid class="mx-5 my-5 pa-5" width="500">
        <todo-nav-items/>
        <pending-task/>
        <TodoForm class="ml-3" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import PendingTask from "~/components/Todo/components/PendingTask";
import TodoForm from "~/components/Todo/components/TodoForm";
import TodoNavItems from "~/components/Todo/components/TodoNavItems";
import TodoMixin from "~/mixins/TodoMixin";
export default {
  mixins: [TodoMixin],
  components: { PendingTask, TodoForm, TodoNavItems },
  data() {
    return {}
  },
  methods: {

  }
};
</script>
