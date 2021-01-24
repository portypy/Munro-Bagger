<template>
  <div id="MunrosListHeader">
      <h5>282 munro's</h5>
		<h1>Scottish Munro's</h1>
       <div id="filters" > 
           <button v-on:click="filterHeight">Height</button>
            <button v-on:click="filterName">Name</button>
            <button>Temp</button>
       </div>
	</div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'munro-list-header',
      methods: {
    filterHeight(){
      eventBus.$emit('filter-by-height')
    },
     filterName(){
      eventBus.$emit('filter-by-name')
    }
}
}
</script>

<style>

</style>