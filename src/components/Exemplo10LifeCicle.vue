<script setup>
import { onMounted, ref } from 'vue'

let texto = ref('Heeeloouuuu')

/* LifeCycle onMounted -  dps q o componente for montado em tela
algo vai ser executado */
onMounted(() => {
  setTimeout(() => {
    texto.value = 'Alterando texto'
  }, 3000)
})
</script>

<template>
  <h1>{{ texto }}</h1>
</template>
