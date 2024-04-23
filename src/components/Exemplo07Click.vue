<script setup>
function mensagem() {
  alert('Evento de click')
}
</script>

<template>
  <button @click="mensagem">click aq</button>
</template>
