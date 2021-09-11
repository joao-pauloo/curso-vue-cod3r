<template>
  <nav class="menu">
    <ul>
      <!-- exact identifica exatamente o nome da rota e não parte dela. -->
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Início</a>
      </router-link>
      <router-link to="/usuario" tag="li" active-class="active" exact>
        <a>Usuário</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>