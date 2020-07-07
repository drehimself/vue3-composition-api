<template>
  <div class="bg-gray-200 min-h-screen antialiased text-gray-800">
    <div class="container mx-auto lg:px-64 pt-8">
      <div class="bg-white shadow-md rounded px-8 py-8">
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <form action="#" class="mt-4" @submit.prevent="addTodo">
          <input v-model="todoFromInput" type="text" class="w-full border border-gray-500 rounded placeholder-gray-600 px-2 py-3" placeholder="What needs to be done?">
        </form>
        <div v-if="todos.length">
          <ul class="text-2xl mt-4 space-y-6">
            <li v-for="todo in todos" :key="todo.id" class="flex items-center justify-between">
              <div class="flex items-center">
                <input type="checkbox" v-model="todo.isComplete">
                <div
                  class="ml-4"
                  :class="{'line-through' : todo.isComplete}"
                >
                  {{ todo.description }}
                </div>
              </div>
              <button @click="deleteTodo(todo.id)">&times;</button>
            </li>
          </ul>
          <div class="border-t border-gray-500 py-2 mt-6">
            Items Left: {{ itemsLeft }}
          </div>
        </div>
        <div v-else class="mt-4">
          Nothing to do! Add a new item...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted, watch, ref } from 'vue'
export default {
  props: ['title'],
  setup(props) {
    const todoFromInput = ref('')
    const todoId = ref(4)
    const todos = ref([
      {
        id: 1,
        description: 'Finish Screencast',
        isComplete: false,
      },
      {
        id: 2,
        description: 'Learn Vue 3',
        isComplete: false,
      },
      {
        id: 3,
        description: 'Paint Wall',
        isComplete: false,
      },
    ])

    function addTodo() {
      todos.value.push({
        id: todoId.value,
        description: todoFromInput.value,
        isComplete: false,
      })

      todoId.value++
      todoFromInput.value = ''
    }

    function deleteTodo(id) {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const itemsLeft = computed(() => todos.value.filter(todo => !todo.isComplete).length)

    onMounted(() => {
      console.log('Todo mounted')
      console.log(props.title)
    })

    watch(
      () => todoId.value,
      (newValue, oldValue) => {
        console.log('New Value: ' + newValue)
        console.log('Old Value: ' + oldValue)
      }
    )

    return {
      todoFromInput,
      todoId,
      todos,
      addTodo,
      deleteTodo,
      itemsLeft,
    }
  },
}
</script>
