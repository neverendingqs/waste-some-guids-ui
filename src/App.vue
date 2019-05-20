<template>
  <div id="app" class="container">
    <h1>Waste Some GUIDs</h1>
    <div class="form-inline">
      <input
        type="number"
        min="1"
        max="99"
        class="form-control"
        v-model="numGuids"
        @change="generateMoreGuids"
      >
      <button
        class="btn btn-info"
        v-clipboard:copy="allGuids"
      >Copy All</button>
    </div>
    <Guid v-for="guid in guids" :key="guid" :guid="guid" />
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import Guid from './components/Guid.vue';

function generateGuids(numGuids = 10) {
  return [...Array(numGuids)].map(() => uuid())
}

export default {
  name: 'app',
  components: {
    Guid
  },
  data: function() {
    return {
      guids: generateGuids(),
      numGuids: 10
    };
  },
  computed: {
    allGuids: function() {
      return this.guids.join('\n');
    }
  },
  methods: {
    generateMoreGuids() {
      const numGuids = Math.max(1, Math.min(99, this.numGuids));
      this.guids = generateGuids(numGuids);
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
input {
  margin: 2px;
}
</style>
