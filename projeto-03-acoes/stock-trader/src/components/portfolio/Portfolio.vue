<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
import Stock from "./Stock";
import { mapGetters } from 'vuex'

export default {
  components: { Stock },
  name: "Porfolio",
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>

<style scoped>

</style>