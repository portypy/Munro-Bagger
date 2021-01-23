<template lang="html">

  <div style="height: 65em; width: 80em" id="mapContainer">
    
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data () {
    return {
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=token here',
      zoom: 8,
      center: [57.270368,-3.969099],
      bounds: null,
      props: ['munros', 'bagged']
    };
    
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
}
</script>

<style>


</style>