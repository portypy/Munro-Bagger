<template lang="html">
<div class="munro">
    <h2>{{ munro.name }}</h2>
    <p>{{ munro.height }}</p>

    <button>Bag Munro</button>
  </div>
</template>

<script>
export default {
    name: 'munro',
    props: ['munro']

}
</script>

<style>

</style>