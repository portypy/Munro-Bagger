<template lang="html">
  <div id="MunrosList">
      <munro-list-header/>
		<munro v-for="munro, index in munros" :key="index" :munro="munro" />
	</div>
</template>

<script>
import Munro from './Munro';
import MunroListHeader from './MunroListHeader';
import { eventBus } from '../main.js';

export default {
    name: 'munros-list',
    components: {
        'munro': Munro,
        'munro-list-header': MunroListHeader
    },
    props: ['munros'],
    mounted(){
    eventBus.$on('filter-by-height', () => {
      this.munros.sort((a, b) => parseFloat(a.height) - parseFloat(b.height));
    }),
     eventBus.$on('filter-by-name', () => {
      this.munros.sort( function( a, b ) {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();

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