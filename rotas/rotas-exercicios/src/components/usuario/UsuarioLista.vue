<template>
  <div class="usuario-lista">
    <h3>Lista de Usuários</h3>
    <ul class="lista">
      <router-link tag="li" class="item-lista" to="/usuario/1">Usuário 1</router-link>
      <router-link tag="li" class="item-lista" to="/usuario/2">Usuário 2</router-link>
      <router-link tag="li" class="item-lista" to="/usuario/3">Usuário 3</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsuarioLista"
}
</script>

<style scoped>

</style>