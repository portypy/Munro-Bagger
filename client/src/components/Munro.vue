<template lang="html">
<div class="munro">
    <hr>
    <h2>{{ munro.name }}</h2>
    <h3>Height: {{ munro.height }}</h3>
    <h4>Meaning: {{ munro.meaning}}</h4>
    <button v-on:click="handleSubmit">Bag Munro</button>
  </div>
</template>

<script>
import { eventBus} from '../main.js';
import MunroService from '@/services/MunroService.js';
export default {
    name: 'munro',
    props: ['munro'],
    data() {
      return {
        name: '',
        height: 0,
        meaning: '',
        latlng_lng: 0,
        latlng_lat: 0,
        metoffice_loc_id: '',
        region: ''
      }
    },
    methods: {
      handleSubmit() {
        const payload = {
          name: this.munro.name,
          height: this.munro.height,
          meaning: this.munro.meaning,
          latlng_lat: this.munro.latlng_lat,
          latlng_lng: this.munro.latlng_lng,
          metoffice_loc_id: this.munro.metoffice_loc_id,
          region: this.munro.region
      };

        eventBus.$emit('bag-munro', payload);
        

    }
}
}
</script>

<style>
#munro {
  width: 100%
}
</style>