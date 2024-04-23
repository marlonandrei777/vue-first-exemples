<script setup>
let exibir = true
let media = 4
</script>

<template>
  <div>
    <h1 v-if="exibir">Hellou</h1>

    <p v-if="media >= 7">Aprovado</p>
    <p v-else-if="media >= 5">Em exame</p>
    <p v-else>Reprovado</p>
  </div>
</template>
