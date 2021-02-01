<template>
  <div id="app">
    <munros-list :munros="munros" :bagged="bagged" class="munros-list"/> 
    <map-section :munros="munros" :bagged="bagged"/>
    
  </div>
</template>

<script>
import { eventBus} from './main.js';
import MunroService from './services/MunroService';
import MunrosList from './components/MunrosList';
import MapSection from './components/MapSection';


export default {
  name: 'app',
  data() {
     return {
       bagged: null,
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
      eventBus.$on('bag-munro', payload => {
          if(this.bagged.some(munro => munro.name === payload.name)){
        alert("Munro already in your bagged list");
        } else{
        MunroService.postBagged(payload)
          .then(munro => this.bagged.push(munro));
        }
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
  color: #0B2D31;
  display: flex;
  margin-left: 2em;
  margin-top: -0.5em;
}
.munros-list {
  width: 35%;

}
button:focus {outline:0;}
</style>
