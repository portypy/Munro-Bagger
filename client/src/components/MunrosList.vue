<template lang="html">
  <div id="MunrosList">
      <munro-list-header/>
		<munro v-for="munro, index in munros" :key="index" :munro="munro" />
	</div>
</template>

<script>
import Munro from './Munro';
import MunroListHeader from './MunroListHeader';

export default {
    name: 'munros-list',
    components: {
        'munro': Munro,
        'munro-list-header': MunroListHeader
    },
    props: ['munros']

}

</script>

<style>
.MunroList {
    width: 100%;
    
}
</style>