<template>
<div v-if="dataFromAPI">
    <h2>Weather Forecast:</h2>
    <!-- today -->
    <div>
        <div><p> For today: {{  dataFromAPI.SiteRep.DV.Location.Period[0].value  }} </p></div>
        <div class="date">
            <div>
                    {{dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].$  }}: <br>
                    Temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].Dm }}  C <br>
                    Feels like temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].FDm}} <br>
                    Wind speed: {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].D}} <br>
                    Precipitation Probability: {{dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].PPd }}% <br>
                    Visibility: {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].V) }} 
            </div>
            <div>
                    {{dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].$  }} <br>
                    Temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].Nm }} <br>
                    Feels like temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].FNm}} <br>
                    Wind speed: {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].D}} <br>
                    Precipitation Probability: {{dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].PPn }}% <br>
                    Visibility: {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].V) }} 
            </div>
        </div>
    </div>
    <!-- tomorrow -->
    <div>
        <div><p> For tomorrow: {{  dataFromAPI.SiteRep.DV.Location.Period[1].value  }} </p></div>
        <div class="date">
            <div>
                    {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].$  }}: <br>
                    Temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].Dm }}  C <br>
                    Feels like temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].FDm}} <br>
                    Wind speed: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].D}} <br>
                    Precipitation Probability: {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].PPd }}% <br>
                    Visibility: {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].V) }} 
            </div>
            <div>
                    {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].$  }} <br>
                    Temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].Nm }} <br>
                    Feels like temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].FNm}} <br>
                    Wind speed: {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].D}} <br>
                    Precipitation Probability: {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].PPn }}% <br>
                    Visibility: {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].V) }} 
            </div>
        </div>
    </div>
    <!-- after tomorrow -->
    <div>
        <div><p> For : {{  dataFromAPI.SiteRep.DV.Location.Period[2].value  }} </p></div>
        <div class="date">
            <div>
                    {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].$  }}: <br>
                    Temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].Dm }}  C <br>
                    Feels like temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].FDm}} <br>
                    Wind speed: {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].D}} <br>
                    Precipitation Probability: {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].PPd }}% <br>
                    Visibility: {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].V) }} 
            </div>
            <div>
                    {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].$  }} <br>
                    Temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].Nm }} <br>
                    Feels like temperature: {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].FNm}} <br>
                    Wind speed: {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].D}} <br>
                    Precipitation Probability: {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].PPn }}% <br>
                    Visibility: {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].V) }} 
            </div>
        </div>
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
    eventBus.$on('selectMunro',munro => {
        this.getWeather(munro);
    })
},
methods: {
    getWeather(munro) {
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${munro.metoffice_loc_id}?res=daily&key=`)
        .then( res => res.json())
        .then(data => this.dataFromAPI = data);

    },
    
    
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

<style lang="css">
.date {
     display:flex;
    background: cornflowerblue;
    font-size: small;
    }
</style>