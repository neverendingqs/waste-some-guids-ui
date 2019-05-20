<template>
  <input
    type="number"
    min="1"
    max="99"
    class="form-control"
    v-model="numGuids"
    @change="onChange"
  >
</template>

<script>
  export default {
    name: 'Guid',
    props: {},
    data: function() {
      return {
        numGuids: 10
      };
    },
    methods: {
      onChange: function() {
        this.$emit('change', this.numGuids);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
