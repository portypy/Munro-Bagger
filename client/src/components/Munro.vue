<template lang="html">
<div class="munro">
    <hr>
    <div class="munro-wrapper">
    <div class="text-wrapper">
    <h3>{{ munro.name }}</h3>
    <h5>Height: {{ munro.height }}</h5>
    </div>
    <!-- <h5>Meaning: {{ munro.meaning}}</h5> -->
    <button v-on:click="handleSubmit">+</button>
    </div>
  </div>
</template>

<script>
import { eventBus} from '../main.js';
export default {
    name: 'munro',
    props: ['munro'],
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
.munro-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>