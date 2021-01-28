<template  lang="html">

<div v-if="selectedMunro" class="munro">
    <hr>
        <div class="munro-text-wrapper">
          <div class="munro-text">
            <h2>{{ selectedMunro.name }}</h2>
            <h3>Height: {{ selectedMunro.height }}</h3>
            <h4>Meaning: {{ selectedMunro.meaning}}</h4>
          </div>
            <div id="add-button">
               <button v-on:click="handleSubmit">+</button>
            </div>
     
        </div>
     
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

<style >

.munro-text-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  background-color: white; 
  padding: 5px 11px;
  text-align: center;
  text-decoration: none;
  font-size: 1.3em;
  margin-right: 1em;
  border: none;
  float: right;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.044), 0 3px 20px 0 rgba(0, 0, 0, 0.064);
  cursor: pointer;
  border-radius: 50%;
}
hr {
  border-top: 0.5px solid rgb(247, 247, 247);
}
#munro {
  display: flex;
}
</style>