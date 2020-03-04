<template>
  <div id="app">
    <div v-show="loading">loading...</div>
    <a href="javascript:;" @click="generatePickedNumbers">Sortear</a>
    <Lottery :numbers="pickedNumbers" />
    <h2>Meus jogos</h2>
    <div v-for="game in games" :key="game" class="row game">
      <Numero v-for="n in game" :value="n" :key="n" :picked="isNumberPicked(n)" />
    </div>
  </div>
</template>

<script>
import Lottery from './components/Lottery.vue';
import Numero from './components/Number.vue';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { randomNumbers, randomNumber } from './helpers/randomHelpers';
export default {
  name: 'App',
  data() {
    return {
      customGames: [],
      interval: 2000,
      loading: false,
      sorted: 0,
      numberQuantity: 6,
      games: [],
      numbers: [],
      pickedNumbers: []
    }
  },
  watch: {
    // whenever question changes, this function will run
    pickedNumbers: function () {
      this.sorted = this.sorted + 1
      if (this.sorted < this.numberQuantity) {
        setTimeout(() => {
          this._generatePickedNumber();
        }, 1000)
      } else {
        this.loading = false;
      }
    }
  },
  components: {
    Lottery, Numero
  },
  created() {
    this._generateRandomGames();
    this.games.concat(this.customGames);
  },
  methods: {
    _generateRandomGames(numberOfGames = 3) {
      const games = [];
      for (let i = 0; i < numberOfGames; i++) {
        games.push(randomNumbers(1, 60, 6));
      }
      this.games = games;
    },
    generatePickedNumbers() {
      this.sorted = 0;
      this.pickedNumbers = [];
      this.loading = true;
      this._generatePickedNumber();
    },
    _generatePickedNumber() {
      let numberOk = false;
      while (!numberOk) {
        const newNumber = randomNumber(1, 60);
        if (this.pickedNumbers.indexOf(newNumber) === -1) {
          this.pickedNumbers.push(newNumber);
          numberOk = true;
        }
      }
    },
    isNumberPicked(num) {
      return this.pickedNumbers.includes(num)
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #app .row {
    display: flex;
  }
</style>
