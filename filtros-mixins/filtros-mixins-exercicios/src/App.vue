<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ cpf | formatarCpf | inverter }}</p>
    <input type="text" :value="cpf | formatarCpf">
    <hr>
    <Frutas />
	</div>
</template>

<script>
import Frutas from "./Frutas";

export default {
  components: { Frutas },
  filters: {
    formatarCpf(valor) {
      const arr = valor.split('')
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')

      return arr.join('')
    }
  },
  data() {
    return {
      cpf: '11122233305'
    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
