<template>
  <div id="app">
    
    <munros-list :munros="munros"/> 
    <map-section :munros="munros" :bagged="bagged"/>
  </div>
</template>

<script>
import MunroService from './services/MunroService';
import MunrosList from './components/MunrosList';
import MapSection from './components/MapSection';


export default {
  name: 'app',
  data() {
     return {
       bagged: [],
       munros: []
     }
  },
  components: {
    'munros-list': MunrosList,
    'map-section': MapSection,
    
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
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  width: 100%;
}

</style>
