<template lang="html">
<div v-if="dataFromAPI">
    <h2>Weather Forecast:</h2>
  <div><p> For: {{  dataFromAPI.SiteRep.DV.Location.Period[1].value  }} </p></div>
  <div>
    <p> {{  dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].$  }} </p>
    <p> Temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].Dm }}  C</p>
    <p> Feels like temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].FDm}} </p>
    <p> Wind speed/gust: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].D}} </p>
    <p> Precipitation Probability: {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].PPd }}% </p>
    <p> Visibility: {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].V) }} </p>
  </div>
  <div>
    <p> {{  dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].$  }} </p>
    <p> Temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].Nm }} </p>
    <p> Feels like temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].FNm}} </p>
    <p> Precipitation Probability: {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].PPn }}% </p>
    <p> Visibility: {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].V) }} </p>

    </p>
  </div>

</div>
</template>

<script>
import { eventBus } from '../main'

export default {
name: 'weather-section',
data () {
    return {
        dataFromAPI: null        
    }
},
mounted() {
    // eventBus.$on('selectMunro',munro => {
    //     this.getWeather(munro);
    // })
},
methods: {
    // getWeather(munro) {
    //     fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${munro.metoffice_loc_id}?res=daily&key=b9805b0f-ca36-48a5-a61c-190441b180ed`)
    //     .then( res => res.json())
    //     .then(data => this.dataFromAPI = data);
    // },
    
    
    getVisibility(code) {
        if ( code == "VP")
        {
            return "Very poor - Less than 1 km"
        }
        else if ( code == "PO") 
        {
            return "Poor - Between 1-4 km"
        }
        else if ( code == "MO")
        {
            return "Moderate - Between 4-10 km"
        }
        else if ( code == "GO")
        {
            return "Good - Between 10-20 km"
        }
        else if ( code == "VG")
        {
            return "Very good - Between 20-40 km"
        }
        else if ( code == "EX")
        {
            return "Excellent - More than 40 km"
        }
        else
            return "Unknown"
    }
}
}
</script>

<style>

</style>