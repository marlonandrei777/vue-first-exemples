<script setup>
function validarFormulario(e) {
  e.preventDefault()

  alert('formulario Enviado')
}
</script>

<template>
  <form action="http://www.google.com" @submit="validarFormulario">
    <button type="submit">Enviar Form</button>
  </form>
</template>
