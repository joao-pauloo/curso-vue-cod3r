<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (callback) </button>
      <p>Idade do usuário: <strong>{{ idade }}</strong></p>
    </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
      //default: 'Anônimo'
    },
    reiniciarFn: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('')
    },
    reiniciarNome() {
      this.nome = 'João Paulo'
      this.$emit('nomeMudou', this.nome)
    }
  }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
