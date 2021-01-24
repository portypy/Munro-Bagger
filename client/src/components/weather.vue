<template>
<div>
    <h2>Weather:
  <div v-if="dataFromAPI" ><p>{{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].F }} </p></div>
</h2>
</div>
</template>

<script>
import { eventBus } from '../main'

export default {
name: 'weather-section',
data () {
    return {
        dataFromAPI: [],
        dataObject: 'dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0]'
    }
},
mounted() {
    eventBus.$on('selectMunro',munro => {
        this.getWeather(munro);
    })
},
methods: {
    getWeather(munro) {
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${munro.metoffice_loc_id}?res=3hourly&key=



`)
        .then( res => res.json())
        .then(data => this.dataFromAPI = data);

    }
}
}
</script>

<style>

</style>