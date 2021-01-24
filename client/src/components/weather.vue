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
        key = 'b9805b0f-ca36-48a5-a61c-190441b180ed';
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${locationID}?res=3hourly&key=${key}`)
        .then( res => res.json())
        .then(id => this.dataFromAPI = id);

    }
}
}
</script>

<style>

</style>