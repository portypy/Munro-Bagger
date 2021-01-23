<template lang="html">

  <div style="height: 65em; width: 80em" id="mapContainer">
    
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      :bounds="bounds"
      :max-bounds="maxBounds"
      :min-zoom="minZoom"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" class="marker" ></l-marker>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
//this one to fix known problem with icons:
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/vector-mountains.jpeg'),
  iconUrl: require('../assets/vector-mountains.jpeg'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
//this one to fix known problem with maps: 
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import { latLngBounds, latLng } from "leaflet"

//not sure how to display icon properly and keep it small when unzooming
  // how to load markers after tiles??? 
  // feel free to change icon
  // diferent icon/colour for bagged?

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    latLngBounds
  },
  data () {
    return {
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnVtYnVyYWswMDciLCJhIjoiY2trMDY3ZHdxMGVlMzJvcGMyZW8wMjU3dCJ9.iFV6KAaTxjBXXSh_WWRXCA',
      zoom: 8,
      minZoom: 8,
      center: [57.270368,-3.969099],
      bounds: latLngBounds([
        [58.78681243755122, -1.954226318129988],
        [55.69782468189247, -5.997195068129988]
      ]),
      maxBounds: latLngBounds([
        [58.78681243755122, -1.954226318129988],
        [55.69782468189247, -5.997195068129988]
      ]),
      markerLatLng: [57.070368, -3.669099],
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

<style lang="css" scoped>

.marker{
  height: 100%;
margin: 0;
padding: 0;
width: 100%;
z-index: 0;
}
</style>