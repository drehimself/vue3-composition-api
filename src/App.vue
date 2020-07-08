<template>
  <Todo title="Todo App" />
  <!-- <Another /> -->
</template>

<script>
import Todo from './components/Todo.vue'
import Another from './components/Another.vue'

export default {
  name: 'App',
  components: {
    Todo,
    Another
  }
}
</script>
