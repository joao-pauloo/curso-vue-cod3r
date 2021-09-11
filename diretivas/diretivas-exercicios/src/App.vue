<template>
	<div id="app">
		<h1>Diretivas</h1>
    <p v-text="'string'"></p>
    <p v-html="'<strong>string</strong>'"></p>
    <hr>
    <p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada com argumento fundo.</p>
    <p v-destaque="cor">Usando diretiva personalizada sem argumento fundo.</p>
    <p v-destaque-local:fundo.atrasar.alterar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Usando diretiva personalizada com argumento fundo.</p>
    <p v-destaque-local="{cor1: 'green', atraso: 5000}">Usando diretiva personalizada sem argumento fundo.</p>
	</div>
</template>

<script>
export default {
  components: {},
  directives: {
    'destaque-local': {
      bind(el, binding) {
        const aplicarCor = cor => {
          if (binding.arg === 'fundo') {
            el.style.backgroundColor = cor
          } else {
            el.style.color = cor
          }
        }

        const cor1 = binding.value.cor1
        const cor2 = binding.value.cor2
        let corAtual = cor1

        setTimeout(() => {
          if (binding.modifiers['alterar']) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1
              aplicarCor(corAtual)
            }, binding.value.intervalo)
          } else {
            aplicarCor(binding.value.cor1)
          }

        }, binding.value.atraso)
      }
    }
  },
	data() {
	  return {
	    cor: 'red'
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
