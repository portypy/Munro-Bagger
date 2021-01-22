<template>
  <div id="app">
    <p>{{ bagged }}</p>
  </div>
</template>

<script>
import MunroService from './services/MunroService'

export default {
  name: 'App',
  data() {
     return {
       bagged: []
     }
  },
  mounted() {
    this.fetchBagged();
  },
  methods: {
    fetchBagged() {
      MunroService.getBagged()
      .then(bagged => this.bagged = bagged);
    }
  },
  components: {
    
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
