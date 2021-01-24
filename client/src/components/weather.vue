<template>
  <div></div>
</template>

<script>
export default {
name: 'weather-section',
data () {
    return {
        locationID: '',
        dataFromAPI: null
    }
},
props: ['id'],
methods: {
    getWeather(locationID) {
        key = '';
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${locationID}?res=3hourly&key=${key}`)
        .then( res => res.json())
        .then(id => this.dataFromAPI = id);

    }
}
}
</script>

<style>

</style>