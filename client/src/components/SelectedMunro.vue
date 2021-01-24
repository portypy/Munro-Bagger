<template v-if="selectedMunro" lang="html">
<div class="munro">
    <h2>{{ selectedMunro.name }}</h2>
    <h3>Height: {{ selectedMunro.height }}</h3>
    <h4>Meaning: {{ selectedMunro.meaning}}</h4>
    <button>Bag Munro</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    name: 'selected-munro',
    data (){
        return {
             selectedMunro: {}
        }
    },
    mounted() {
    eventBus.$on('selectMunro', (selectedMunro) => {
      this.selectedMunro = selectedMunro
      })
     
  }
}
</script>

<style>

</style>