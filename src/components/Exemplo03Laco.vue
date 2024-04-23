<script setup>
const nomes = ['marlon', 'Andrei', 'Lima', 'Sena']
</script>

<template>
  <ul>
    <li v-bind:key="nome" v-for="nome in nomes">{{ nome }}</li>
  </ul>
</template>
