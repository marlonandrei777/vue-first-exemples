<!-- PEGANDO PARAMETROS PELA ROTA. ID -->
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id
</script>

<template>
  <h1>Pagina 2 com o id: {{ id }}</h1>
</template>
