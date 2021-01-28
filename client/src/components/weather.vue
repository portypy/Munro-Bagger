<template>
<div v-if="dataFromAPI">
    <hr>
    <h3>Weather Forecast:</h3>
    <!-- today -->
    <div>
        <div><h5> Today: {{  getDayDate(dataFromAPI.SiteRep.DV.Location.Period[0].value)  }} </h5></div>
        <div class="date">
            <div>
                    <h4>{{dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].$  }}:</h4> <br>
                    Temperature: <span> {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].Dm }}  C </span> <br>
                    Feels like temperature:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].FDm}} </span><br>
                    Wind speed:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].D}}</span> <br>
                    Precipitation Probability: <span> {{dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].PPd }}% </span><br>
                    Vis.: <span> {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].V) }} </span>
            </div>
            <div>
                    <h4>{{dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].$  }}</h4>  <br>
                    Temperature:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].Nm }} </span><br>
                    Feels like temperature:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].FNm}}</span> <br>
                    Wind speed: <span> {{ dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].D}}</span> <br>
                    Precipitation Probability: <span> {{dataFromAPI.SiteRep.DV.Location.Period[0].Rep[1].PPn }}% </span><br>
                    Vis.:<span> {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[0].Rep[0].V)}} </span>
            </div>
        </div>
    </div>
    <!-- tomorrow --><hr>
    <div>
        <div><h5> Tomorrow: {{  getDayDate(dataFromAPI.SiteRep.DV.Location.Period[1].value)  }} </h5></div>
        <div class="date">
            <div>
                    <h4> {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].$  }}:</h4>  <br>
                    Temperature: <span>{{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].Dm }}  C </span><br>
                    Feels like temperature: <span>{{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].FDm}}</span> <br>
                    Wind speed: <span>{{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].D}}</span> <br>
                    Precipitation Probability: <span>{{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].PPd }}%</span> <br>
                    Vis:<span> {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].V) }} </span>
            </div>
            <div>
                    <h4> {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].$  }}</h4>  <br>
                    Temperature:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].Nm }} </span><br>
                    Feels like temperature:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].FNm}}</span> <br>
                    Wind speed: <span> {{ dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].D}}</span> <br>
                    Precipitation Probability:<span>  {{dataFromAPI.SiteRep.DV.Location.Period[1].Rep[1].PPn }}% </span><br>
                    Vis:<span>  {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[1].Rep[0].V) }} </span>
            </div>
        </div>
    </div>
    <!-- after tomorrow --><hr>
    <div>
        <div><h5> For : {{  getDayDate(dataFromAPI.SiteRep.DV.Location.Period[2].value)  }} </h5></div>
        <div class="date">
            <div>
                    <h4> {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].$  }}:</h4>  <br>
                    Temperature: <span> {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].Dm }}  C</span> <br>
                    Feels like temperature:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].FDm}} </span><br>
                    Wind speed:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].D}}</span> <br>
                    Precipitation Probability:<span>  {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].PPd }}% </span><br>
                    Vis.: <span> {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].V) }} </span>
            </div>
            <div>
                    <h4> {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].$  }}</h4>  <br>
                    Temperature: <span> {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].Nm }}</span> <br>
                    Feels like temperature:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].FNm}} </span><br>
                    Wind speed:<span>  {{ dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].S}}   {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].D}} </span><br>
                    Precipitation Probability:<span>  {{dataFromAPI.SiteRep.DV.Location.Period[2].Rep[1].PPn }}% </span><br>
                    Vis.:<span>  {{getVisibility(dataFromAPI.SiteRep.DV.Location.Period[2].Rep[0].V) }} </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { eventBus } from '../main'

export default {
name: 'weather-section',
props: ['selectedMunro'],
data () {
    return {
        dataFromAPI: null
    }
},
mounted() {
    eventBus.$on('selectMunro',(selectedMunro) => {
        this.getWeather(selectedMunro);
    })
},

methods: {
    getWeather(selectedMunro) {
         fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${selectedMunro.metoffice_loc_id}?res=daily&key=`)
        .then( res => res.json())
        .then(data => this.dataFromAPI = data);
    },
    
    getDayDate(date){
       if (date) {
           return date.slice(0,-1)
       } 
    },
    getVisibility(code) {
        if ( code == "VP")
        {
            return "V. poor - Less than 1 km"
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
            return "V. good - Between 20-40 km"
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
     justify-content: space-between;
    /* background: cornflowerblue; */
    font-size: small;
    margin-bottom: 1em;
    }
.date > div > h4 {
    padding: 0;
   margin: 0;
}
span {
    font-weight: 550;
}
    
</style>