<template lang="html">
  <div id="MunrosList">
      <munro-list-header/>
      <selected-munro/>
      <weather-section/>
      <bagged-munro v-for="baggedMunro in bagged" :baggedMunro="baggedMunro" />
		<munro v-for="munro, index in munros" :key="index" :munro="munro" />
	</div>
</template>

<script>
import Munro from './Munro';
import MunroListHeader from './MunroListHeader';
import SelectedMunro from './SelectedMunro';
import Weather from './Weather'
import BaggedMunro from './BaggedMunro';
import { eventBus } from '../main.js';

export default {
    name: 'munros-list',
    components: {
        'munro': Munro,
        'munro-list-header': MunroListHeader,
        'selected-munro': SelectedMunro,
        'weather-section': Weather,
        'bagged-munro': BaggedMunro
    },
    props: ['munros',
            'bagged'],
          

    mounted(){

    eventBus.$on('filter-by-height', () => {
      this.munros.sort((munro1, munro2) => munro1.height - munro2.height);
    }),

    eventBus.$on('filter-by-name', () => {
      this.munros.sort( function( a, b ) {
        a = a.name;
        b = b.name;
        return a < b ? -1 : a > b ? 1 : 0;
    });
    })
  
}
}
</script>

<style>
.MunroList {
    width: 100%;
    
}
</style>