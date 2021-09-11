<template>
  <div class="contadores">
    <app-contador v-for="c in 9" :key="c" />
  </div>
</template>

<script>
import Contador from "./Contador";
export default {
  name: "Contadores",
  components: { 'app-contador': Contador}
}
</script>

<style scoped>

</style>