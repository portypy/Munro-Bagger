<template lang="html">

<div class="munro">
  <template v-if="selectedMunro" >
    <h2>{{ selectedMunro.name }}</h2>
    <h3>Height: {{ selectedMunro.height }}</h3>
    <h4>Meaning: {{ selectedMunro.meaning}}</h4>
    <button v-on:click="handleSubmit">Bag Munro</button>
     </template> 
  </div>

</template>

<script>
import { eventBus } from '../main.js';
export default {
    name: 'selected-munro',
    data (){
        return {
             selectedMunro: {
                    name: "Ben Nevis",
                    height: 1344,
                    latlng_lat: 56.796849,
                    latlng_lng: -5.003525,
                    metoffice_loc_id: "350377",
                    region: "Loch Linnhe to Loch Ericht",
                    meaning: "Possibly from an old Gaelic word meaning venomous"
             },
        }
    },
    mounted() {
    eventBus.$on('selectMunro', (selectedMunro) => {
      this.selectedMunro = selectedMunro
      })
     
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