<script setup>
let validacao = true
</script>

<template>
  <p :class="validacao ? 'ok' : 'falha'">utilizando a diretictiva class</p>
</template>

<style>
.ok {
  color: green;
}

.falha {
  color: red;
}
</style>
