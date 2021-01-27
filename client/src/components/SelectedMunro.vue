<template  lang="html">

<div v-if="selectedMunro" class="munro">
 
    <h2>{{ selectedMunro.name }}</h2>
    <h3>Height: {{ selectedMunro.height }}</h3>
    <h4>Meaning: {{ selectedMunro.meaning}}</h4>
    <button>Bag Munro</button>
     <weather-section :selectedMunro="selectedMunro"/>
  </div>

</template>

<script>
import Weather from './Weather'
export default {
    name: 'selected-munro',
    props: ['selectedMunro'],
    components: {
        'weather-section': Weather,
    },
}
</script>

<style>

</style>