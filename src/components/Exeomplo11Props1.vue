<script setup>
import Exeomplo11Props2 from './Exeomplo11Props2.vue'

// VARIAVEIS
let cidade = 'Belém'
let estados = ['SP', 'PA', 'SE', 'PI', 'MA']

function mensagem() {
  alert('funcao criada no componente Exemplo11Props1')
}
</script>

<template>
  <Exeomplo11Props2
    nome="Marlon"
    idade="45"
    :cidade="cidade"
    :estados="estados"
    :funcao="mensagem"
  />
</template>
