<template>
  <div id="app">
    <p>{{ bagged }}</p>
    <munros-list :munros="munros"/>
  </div>
</template>

<script>
import MunroService from './services/MunroService'
import MunrosList from './components/MunrosList';

export default {
  name: 'App',
  data() {
     return {
       bagged: [],
       munros: []
     }
  },
  components: {
    'munros-list': MunrosList
  },
  mounted() {
    this.fetchBagged();
    this.fetchMunros();
  },
  methods: {
    fetchBagged() {
      MunroService.getBagged()
      .then(bagged => this.bagged = bagged);
    },

    fetchMunros: function(){
        fetch("https://munroapi.herokuapp.com/munros")
          .then(response => response.json())
          .then(munros => this.munros = munros);
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
</style>
