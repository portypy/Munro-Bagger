<template  lang="html">

<div v-if="selectedMunro" class="munro">
 
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
    props: ['selectedMunro']
    // data (){
    //     return {
    //          selectedMunro: { }
    //     }
    // },
  //   mounted() {
  //   eventBus.$on('selectMunro', (selectedMunro) => {
  //     this.selectedMunro = selectedMunro
  //     })
     
  // }
}
</script>

<style>

</style>