<template>
  <div id="app" class="container">
    <h1>Waste Some GUIDs</h1>
    <Guid v-for="guid in guids" :key="guid" :guid="guid"/>
    <!-- TODO: fix css -->
    <pre>{{ guids.join('\n') }}</pre>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import Guid from './components/Guid.vue';

export default {
  name: 'app',
  components: {
    Guid
  },
  computed: {
    guids: function() {
      return [...Array(10)].map(() => uuid());
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
