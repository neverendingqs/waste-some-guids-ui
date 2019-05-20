<template>
  <div id="app" class="container">
    <h1>Waste Some GUIDs</h1>
    <div class="form-inline">
      <NumGuids @change="generateMoreGuids" />
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
import NumGuids from './components/NumGuids.vue';

function generateGuids(numGuids = 10) {
  return [...Array(numGuids)].map(() => uuid())
}

export default {
  name: 'app',
  components: {
    Guid,
    NumGuids
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
    generateMoreGuids(numGuids) {
      const numGuidsBounded = Math.max(1, Math.min(999, numGuids));
      this.guids = generateGuids(numGuidsBounded);
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
