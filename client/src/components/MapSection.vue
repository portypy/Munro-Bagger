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
      <l-marker :lat-lng="markerLatLng" ></l-marker>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  //not sure how to display icon properly and keep it small when unzooming
  iconRetinaUrl: require('../assets/vector-mountains.jpeg'),
  iconUrl: require('../assets/vector-mountains.jpeg'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnVtYnVyYWswMDciLCJhIjoiY2trMDY3ZHdxMGVlMzJvcGMyZW8wMjU3dCJ9.iFV6KAaTxjBXXSh_WWRXCA',
      zoom: 8,
      // not sure why maxBound and maxZoom doesnt work, or I dont understand these props
      // would be good to 'anchor' map so user cant move it away from Scotland
      maxZoom: 9,
      center: [57.270368,-3.969099],
      maxBounds: { "_southWest": { "lat": 55.690514664826, "lng": -3.930124525865027 }, "_northEast": { "lat": 58.78009042880702, "lng": -1.5955297993025268 } },
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

<style>


</style>