<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- PRIMEIRA forma de se utilizar routerLink -->

  <router-link to="/pagina1">Pagina 1</router-link> <br />
  <router-link to="/pagina2/30">Pagina 2</router-link><br />

  <!-- SEGUNDA forma de se utilizar routerLink -->
  <RouterLink to="/pagina1">Pagina 1 utilizando RouterLink</RouterLink> <br />
  <RouterLink to="/pagina2/30">Pagina 2 utilizando RouterLink</RouterLink> <br />
  <RouterLink to="/requisicao">Pagina API - utilizando RouterLink</RouterLink>
</template>
