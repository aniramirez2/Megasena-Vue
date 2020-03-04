<template>
  <div>
    <div :class="classObject">{{this.value}}</div>
  </div>
</template>

<script>
  export default {
    name: "Numero",
    props: {
      value: {
        type: Number,
        default: 0
      },
      picked: {
        type:Boolean,
        default: false
      }
    },
    data() {
      return {
        selectedItem: null
      }
    },
    computed: {
      classObject: function () {
        return {
          number: true,
          'picked': this.picked,
          'not-picked': !this.picked,
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid black;
    font-family: monospace;
    font-size: 30px;
    font-weight: bold;
    margin-right: 10px;
  }

  .picked {
    background: lightgreen;
    color: red;
  }

  .not-picked {
    background: lightgoldenrodyellow;
  }
</style>