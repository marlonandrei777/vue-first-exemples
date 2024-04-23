<script setup>
/* PEGANDO AS PROPRIEDADES */
const props = defineProps(['nome', 'idade', 'cidade', 'estados', 'funcao'])
</script>

<template>
  <div>
    <h1>
      Nome: {{ nome }} <br />
      Idade: {{ idade }} <br />
      Cidade: {{ cidade }}
    </h1>

    <ul>
      <li v-bind:key="estado" v-for="estado of estados">
        {{ estado }}
      </li>
    </ul>

    <button @click="funcao">clique aq</button>
  </div>
</template>
