<template lang="html">
<div v-if="dataFromAPI">
    <h2>Weather Forecast:</h2>
  <div><p> For:{{  dataFromAPI.SiteRep.DV.Location.Period[1].value  }} </p></div>
  <div><p> Temperature:{{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].T }} </p></div>
  <div><p> Feels like temperature:{{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].F }} </p></div>
  <div><p> Precipitation Probability:{{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].Pp }}% </p></div>

</div>
</template>

<script>
import { eventBus } from '../main'

export default {
name: 'weather-section',
data () {
    return {
        dataFromAPI: null,
        dataObject: 'dataFromAPI.SiteRep.DV.Location'
    }
},
mounted() {
    eventBus.$on('selectMunro',munro => {
        this.getWeather(munro);
    })
},
methods: {
    getWeather(munro) {
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${munro.metoffice_loc_id}?gaa`)
        .then( res => res.json())
        .then(data => this.dataFromAPI = data);

    }
}
}
</script>

<style>

</style>