<template>
  <div></div>
</template>

<script>
export default {
name: 'weather-section',
data () {
    return {
        dataFromAPI: []
    }
},
props: ['locationId'],
methods: {
    getWeather() {
        key = '';
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/350373?res=3hourly&key=`)
        .then( res => res.json())
        .then(data => this.dataFromAPI = data);

    }
}
}
</script>

<style>

</style>