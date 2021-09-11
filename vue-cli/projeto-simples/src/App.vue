<template>
  <div id="app">
    {{ titulo }}

    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data() {
    return  {
      titulo: 'Teste usando VueJS'
    }
  }
}
</script>

<style>
  #app {
    background-color: chocolate;
    color: white;
  }
</style>
