<template>
<div>
      <hr>
      <div class="munro-wrapper">
      <div class="text-wrapper">
      <h2>{{ baggedMunro.name }}</h2>
      <h3>Height: {{ baggedMunro.height }}</h3>
      <h4>Meaning: {{ baggedMunro.meaning}}</h4>
      </div>
  <button v-on:click="deleteBagged">–</button>
   </div>
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
.munro-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>