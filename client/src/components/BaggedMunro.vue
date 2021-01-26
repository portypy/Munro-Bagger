<template>
<div>
  <li>
      <h1>{{ baggedMunro.name }}</h1>
  </li>
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