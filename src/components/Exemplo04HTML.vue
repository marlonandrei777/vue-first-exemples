<script setup>
let texto = '<p style="color:red">Aprendendo a directiva v-html</p>'
</script>

<template>
  <div v-html="texto"></div>

  <div>{{ texto }}</div>
</template>
