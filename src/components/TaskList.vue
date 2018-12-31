<template lang="pug">
  ul
    li(v-for='(task, index) in tasks', :key='index')
      | {{ task.title }}
    input(type='text', placeholder='Add a new task...', v-model='title', @keyup.enter='add()')

</template>
<script>
export default {
  name: "task-list",
  props: {
    listId: String,
    tasks: Array,
    list: [{listId: '',
            title: ''}]
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    add() {
      this.addTask({ list: this.listId, title: this.title });
      this.title = "";
    }
  }
};
</script>
