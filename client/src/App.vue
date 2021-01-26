<template>
  <div id="app">
    <munros-list :munros="munros" :bagged="bagged"/> 
    <map-section :munros="munros" :bagged="bagged"/>
    
  </div>
</template>

<script>
import { eventBus} from './main.js';
import MunroService from './services/MunroService';
import MunrosList from './components/MunrosList';
import MapSection from './components/MapSection';
// import Weather from './components/Weather'


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
    // 'weather-section': Weather
    
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

    eventBus.$on('delete-bagged', (id) => {
      MunroService.deleteBagged(id);
      const index = this.bagged.findIndex(bagged => bagged._id === id);
      this.bagged.splice(index, 1);
    })
     
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
  display: flex;
  width: 100%;
}

</style>
