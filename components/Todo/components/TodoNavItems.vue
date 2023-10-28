<template>
  <v-row wrap class="py-2 px-1" justify="end">
    <v-col>
      <v-chip-group
        mandatory
        active-class="primary--text"
      >
        <v-chip class="d-flex align-end">
          <v-badge
            value="3"
            overlap
            color="red"
            content-class="rounded-badge"
            :content="activeTodoCount"
            class="pr-5 align-center"
            offset-y="17"
          >Tasks</v-badge>
        </v-chip>
        <v-chip>
          <v-badge
            value="3"
            overlap
            color="red"
            content-class="rounded-badge"
            :content="completedTodoCount"
            class="pr-5 align-center"
            offset-y="17"
          >Tasks Done</v-badge>
        </v-chip>
        <v-chip
          delete
          @click="removeDoneTodoList"
          v-if="showCompleteTodoDeleteBtn"
        >
          <v-icon small>mdi-delete</v-icon>
          Tasks Done
        </v-chip>
        <v-chip
          delete
          @click="removeTodoList"
        >
          <v-icon small>mdi-delete</v-icon>
          Tasks
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>

import TodoMixin from "~/mixins/TodoMixin";

export default {
  mixins: [TodoMixin]
}
</script>

<style scoped>


</style>
