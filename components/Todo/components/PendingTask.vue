<template>
  <v-container>
    <v-list>
      <v-list-item
        class="outlined-list-item my-3"
        color="success"
        v-for="(todo, index) in todoList"
        :key="index"
      >
        <v-checkbox :input-value="!(todo.status.done)" @change="toggleTodoDoneStatus(todo.id)" />
        <v-list-item-content :class="{ 'scratched-content': todo.status.done }" :disabled="todo.status.done">
          {{ todo.name }}
        </v-list-item-content>
        <v-list-item-action class="hide-action" @click="removeTodo(todo.id)">
          <v-icon>mdi-delete</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>


<script>
import TodoMixin from "~/mixins/TodoMixin";
export default {
  mixins: [TodoMixin]
};
</script>

<style lang="scss">

.hide-action {
  display: none;
}

.v-list-item:hover .hide-action {
  display: block;
}

.outlined-list-item {
  border: 1px solid #5B626C;
  border-radius: 5px;
  height: 50px;
  .v-icon {
    color: red;
  }
}

.scratched-content {
  text-decoration: line-through;
  color: #888;
}
</style>
