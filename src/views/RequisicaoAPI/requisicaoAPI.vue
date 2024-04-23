<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import styles from './style.module.css'

const todos = ref()
const erro = ref()

async function fetchData() {
  try {
    const response = await axios.get('todos')
    todos.value = response.data
  } catch (error) {
    erro.value = error.message
  }
}

onMounted(fetchData)

function updateTodoStatus(todo) {
  const data = {
    completed: !todo.completed
  }

  axios.patch(`todos/${todo.id}`, data).then((response) => {
    todo.completed = response.data.completed
  })
}

function deleteTodo(id) {
  axios.delete(`todos/${id}`).then((response) => {
    const idx = todos.value.findIndex((obj) => obj.id === id)
    todos.value.splice(idx, 1)
  })
}
</script>

<template>
  <div :class="styles.container">
    <div v-for="todo of todos" :key="todo.id" :class="styles.containerTodo">
      <button @click="updateTodoStatus(todo)">
        <div :class="styles.circle" v-if="!todo.completed"></div>

        <div :class="styles.circleGreen" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
            <path
              fill="currentColor"
              d="M9.9 20.21c-.35 0-.69-.14-.94-.39l-5.94-5.94c-.52-.52-.52-1.36 0-1.88s1.36-.52 1.88 0l5 5L20.91 4.29c.52-.52 1.36-.52 1.88 0s.52 1.36 0 1.88l-12 12c-.25.25-.59.39-.94.39z"
            />
          </svg>
        </div>
      </button>
      <h3 :class="styles.titulo">{{ todo.title }}</h3>

      <button :class="styles.buttonDeletar" title="Apagar" @click="deleteTodo(todo.id)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path
            fill="currentColor"
            d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-.55 0-1 .45-1 1s.45 1 1 1h1v13c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h1c.55 0 1-.45 1-1s-.45-1-1-1zm-8-2h4v2h-4V4zm5 16H7V8h10v12zM9 10h2v8H9v-8zm4 0h2v8h-2v-8z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
