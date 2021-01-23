<template lang="html">
  <div id="MunrosList">
		<munro v-for="munro, index in munros" :key="index" :munro="munro" />
	</div>
</template>

<script>
import Munro from './Munro';

export default {
    name: 'munros-list',
    components: {
        'munro': Munro
    },
    props: ['munros']

}

</script>

<style>

</style>