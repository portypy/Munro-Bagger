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
      <l-control-layers position="topright"></l-control-layers>
      <l-tile-layer
          v-for="tileProvider in tileProviders"
          :key="tileProvider.name"
          :name="tileProvider.name"
          :visible="tileProvider.visible"
          :url="tileProvider.url"
          :attribution="tileProvider.attribution"
          layer-type="base"/>
      <l-marker v-for="(marker, index) in this.bagged"
              :key="marker.id"
              @click="selectMunro(marker)"
              :lat-lng="[marker.latlng_lat, marker.latlng_lng]"
              :icon="baggedIcon">
              <l-tooltip>{{ marker.name }}</l-tooltip>
              <l-popup>{{ marker.name }}</l-popup>
      </l-marker>
      <l-marker 
              v-for="(marker, index) in this.munros"
              :key="marker.id"
              @click="selectMunro(marker)"
              :lat-lng="[marker.latlng_lat, marker.latlng_lng]" >
              <l-tooltip>{{ marker.name }}</l-tooltip>
              <l-popup>{{ marker.name }}</l-popup>
              
      </l-marker>
</l-map>
    </l-map>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

//this one to fix known problem with maps: 
import "leaflet/dist/leaflet.css";

import {LMap, LTileLayer, LMarker, LPopup, LControlLayers, LIcon, LTooltip, LCircleMarker } from 'vue2-leaflet';
import { latLngBounds, } from "leaflet"


export default {  
  components: {
    LMap,
    LTileLayer,
    LMarker,
    latLngBounds,
    LControlLayers,
    LPopup,
    LIcon,
    LTooltip,
    LCircleMarker
  },
  props: ['bagged', 'munros'],
  data () {
    return {
      selectedMunro: {},
      baggedIcon: L.icon({
          iconUrl: require('../assets/map-pin-2.png'), 
          iconSize:     [20, 20], 
          iconAnchor:   [10, 10],
          popupAnchor:  [0, -10],
          tooltipAnchor:  [0, -10]
      }),
      zoom: 8,
      minZoom: 8,
      center: [57.270368,-3.969099],
      bounds: latLngBounds([
        [58.78681243755122, -1.954226318129988],
        [55.69782468189247, -5.997195068129988]
      ]),
      maxBounds: latLngBounds([
        [58.78681243755122, -1.954226318129988],
        [55.69782468189247, -6.997195068129988]
      ]),     
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
          url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=',
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
    },
    selectMunro(item) {
      this.selectedMunro = item
      eventBus.$emit('selectMunro', this.selectedMunro)
    },
    getCoords(munro){
          return [munro.latlng_lat,latlng_lng]
    }
}}
</script>

<style lang="css" >


</style>