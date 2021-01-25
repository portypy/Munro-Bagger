<template>
  <div id="app">
    <bagged-munros-list :bagged="bagged"/>
    <munros-list :munros="munros"/> 
    <map-section :munros="munros" :bagged="bagged"/>
    <weather-section></weather-section>
  </div>
</template>

<script>
import { eventBus} from './main.js';
import BaggedMunrosList from './components/BaggedMunrosList';
import MunroService from './services/MunroService';
import MunrosList from './components/MunrosList';
import MapSection from './components/MapSection';
import Weather from './components/weather'


export default {
  name: 'app',
  data() {
     return {
       bagged: [],
       munros: [],
       selectedMunro: []
     }
  },
  components: {
    'munros-list': MunrosList,
    'map-section': MapSection,
    'weather-section': Weather,
    'bagged-munros-list': BaggedMunrosList
    
  },
  mounted() {
    this.fetchBagged();
    this.fetchMunros();
    eventBus.$on('selectMunro', (selectedMunro) => {
      this.selectedMunro = selectedMunro
      });

    eventBus.$on('bag-munro', payload => {
      MunroService.postBagged(payload)
      .then(munro => this.bagged.push(munro));
    });
     
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
  /* margin-top: 60px; */
  display: flex;
  width: 100%;
}

</style>
