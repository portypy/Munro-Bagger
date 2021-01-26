<template>
<div>
      <hr>
      <h2>{{ baggedMunro.name }}</h2>
      <h3>Height: {{ baggedMunro.height }}</h3>
      <h4>Meaning: {{ baggedMunro.meaning}}</h4>
  
  <button v-on:click="deleteBagged">Delete Bagged Munro</button>
</div>
</template>

<script>
import { eventBus} from "@/main.js";
export default {
name: 'bagged-munro',
props: ['baggedMunro'],
methods: {
  deleteBagged: function() {
    eventBus.$emit('delete-bagged', this.baggedMunro._id);
  }
}
}
</script>

<style>

</style>