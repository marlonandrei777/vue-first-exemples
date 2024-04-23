<script setup>
function menssagem() {
  alert('evento de Enter')
}
</script>

<template>
  <input type="text" @keyup.enter="menssagem" />
</template>
