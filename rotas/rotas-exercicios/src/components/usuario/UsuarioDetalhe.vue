<template>
  <div class="usuario-detalhe">
    <h3>Usuaŕio Detalhe</h3>
    <p><strong>Código: </strong> {{ id }}</p>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link tag="button" primario
                 :to="{ name: 'editarUsuario', params: { id },
                         query: { completo: true, lingua: 'pt-br'}, hash: '#rodape' }"
    >
        Editar
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UsuarioDetalhe",
  props: ['id'], //estratégia 2. É neceessário configurar a rota (props: true),
  beforeRouteEnter(to, from, next) {
    console.log('dentro do componente usuário detalhe')
    next(vm => { //acessando ID pela instancia do vue
      console.log(vm.id)
    })
  }
  /*
  //para atualizar o id após a rota ser alterada. Estratégia 1
  data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    $route(to, from) { //para atualizar o id após a rota ser alterada
      this.id = to.params.id
    }
  },*/
}
</script>

<style scoped>

</style>