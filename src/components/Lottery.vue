<template>
  <div class="row">
    <Numero v-for="number in this.numbers" :key="number" :value="number" picked />
    <div class="md-headline" v-if="this.numbers.length === 0" variant="headline">
      Nenhum número sorteado
    </div>
  </div>
</template>

<script>
import Numero from './Number.vue';
  export default {
    name: "Lottery",
    components: {
      'Numero': Numero,
    },
    props: {
      numbers: Array,
    },
    data() {
      return {
        selectedItem: null,
      }
    },
    created() {
      console.log("numeros", this.numbers);
    },
    methods: {
      _renderNumbers() {
        this.numbers = this.numbers
          .sort((a, b) => a > b)
      },
    }
  }
</script>

<style scoped>

</style>