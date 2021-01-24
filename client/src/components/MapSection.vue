<template lang="html">

  <div style="height: 100vh; width: 50vw; position: fixed; right: 0px;" id="mapContainer">
    
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
      <!-- <l-tile-layer :url="url"></l-tile-layer> -->
      <l-control-layers position="topright"></l-control-layers>
      <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      :attribution="tileProvider.attribution"
      layer-type="base"/>
      <!-- <l-marker :lat-lng="markerLatLng" ></l-marker> -->
      <l-marker 
              v-for="marker in this.munros"
              :key="marker._id"
              :lat-lng="[marker.latlng_lat, marker.latlng_lng]" 
              ></l-marker>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
//this one to fix known problem with icons:
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/map-pin.png'),
  iconUrl: require('../assets/map-pin.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize:     [20, 18], // size of the icon
  shadowSize:   [10, 10], // size of the shadow
});
//this one to fix known problem with maps: 
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer, LMarker, LControlLayers} from 'vue2-leaflet';
import { latLngBounds } from "leaflet"
//not sure how to display icon properly and keep it small when unzooming
  // how to load markers after tiles??? 
  // feel free to change icon
  // diferent icon/colour for bagged?

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    latLngBounds,
    LControlLayers
  },
  props: ['bagged', 'munros'],
  data () {
    return {
      
      zoom: 8,
      minZoom: 8,
      center: [57.270368,-3.969099],
      bounds: latLngBounds([
        [58.78681243755122, -1.954226318129988],
        [55.69782468189247, -5.997195068129988]
      ]),
      //need some adjustments to the west, check when zoom in
      maxBounds: latLngBounds([
        [58.78681243755122, -1.954226318129988],
        [55.69782468189247, -5.997195068129988]
      ]),
      // markerLatLng: [57.070368, -3.669099],
      tileProviders: [
        {
          name: 'OpenStreetMap',
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
        {
          name: 'OpenTopoMap',
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        },
        {
          name: 'Mapbox Satellite',
          visible: false,
          url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=TOKENhere',
          attribution:
           'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        }

      ],
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


</style>