
import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')

//this one to fix known problem with icons: https://github.com/vue-leaflet/Vue2Leaflet/issues/103
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('./assets/map-pin.png'),
  iconUrl: require('./assets/map-pin.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize:     [20, 20], // size of the icon
  shadowSize:   [10, 10], // size of the shadow
  iconAnchor:   [10, 10],
});