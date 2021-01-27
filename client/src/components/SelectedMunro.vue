<template  lang="html">

<div v-if="selectedMunro" class="munro">
 
    <h2>{{ selectedMunro.name }}</h2>
    <h3>Height: {{ selectedMunro.height }}</h3>
    <h4>Meaning: {{ selectedMunro.meaning}}</h4>
    <button v-on:click="handleSubmit">Bag Munro</button>
     <weather-section :selectedMunro="selectedMunro"/>
  </div>

</template>

<script>
import Weather from './Weather'
import { eventBus } from '../main'
export default {
    name: 'selected-munro',
    props: ['selectedMunro'],
    components: {
        'weather-section': Weather,
    },
    methods: {
      handleSubmit() {
        const payload = {
          name: this.selectedMunro.name,
          height: this.selectedMunro.height,
          meaning: this.selectedMunro.meaning,
          latlng_lat: this.selectedMunro.latlng_lat,
          latlng_lng: this.selectedMunro.latlng_lng,
          metoffice_loc_id: this.selectedMunro.metoffice_loc_id,
          region: this.selectedMunro.region
      };

        eventBus.$emit('bag-munro', payload);
    }
}
}
</script>

<style>

</style>