<template lang="html">

  <div style="height: 80em; width: 80em" id="mapContainer">
    
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
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [47.413220, -1.219482],
      bounds: null,
      accessToken: 'pk.eyJ1IjoicnVtYnVyYWswMDciLCJhIjoiY2trMDY3ZHdxMGVlMzJvcGMyZW8wMjU3dCJ9.iFV6KAaTxjBXXSh_WWRXCA'
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