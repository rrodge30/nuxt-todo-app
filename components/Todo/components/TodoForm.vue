<template>
  <div>
    <v-form @submit.prevent="createTodo">

      <v-text-field
        label="New Task"
        outlined
        v-model="newTodo"
      >
        <template v-slot:append>
          <v-btn icon type="submit">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-form>
  </div>
</template>

<script>
import TodoMixin from "~/mixins/TodoMixin";

export default {
  mixins: [TodoMixin],
}
</script>

<style scoped lang="scss">
$inputColor: #3579CC !important;

.v-text-field--outlined {
  ::v-deep .v-input__slot {
    border-radius: 25px;
  }
  ::v-deep fieldset {
    color: $inputColor;
    border-width: 3px;
  }
  ::v-deep .v-icon {
    background: $inputColor;
    border-radius: 25px;
    font-size: 30px;
    padding: 18px;
  }
  ::v-deep .v-input__append-inner {
    align-items: center;
    margin-top: 10px;
  }
}

</style>
