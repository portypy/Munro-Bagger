<template>
  <div></div>
</template>

<script>
import { eventBus } from '../main'

export default {
name: 'weather-section',
data () {
    return {
        dataFromAPI: [],
    }
},
// props: ['munro'],
mounted() {
    eventBus.$on('selectMunro',munro => {
        this.getWeather(munro);
    })
},
methods: {
    getWeather(munro) {
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${munro.metoffice_loc_id}?res=3hourly&key=b9805b0f-ca36-48a5-a61c-190441b180ed

`)
        .then( res => res.json())
        .then(data => this.dataFromAPI = data);

    }
}
}
</script>

<style>

</style>