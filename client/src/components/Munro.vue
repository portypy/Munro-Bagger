<template lang="html">
<div class="munro">
    <hr>
    <h3>{{ munro.name }}</h3>
    <h5>Height: {{ munro.height }}</h5>
    <h5>Meaning: {{ munro.meaning}}</h5>
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

</style>