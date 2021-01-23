<template lang="html">
<div class="munro">
    <hr>
    <h2>{{ munro.name }}</h2>
    <h3>Height: {{ munro.height }}</h3>
    <h4>Meaning: {{ munro.meaning}}</h4>
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
#munro {
  width: 100%
}
</style>