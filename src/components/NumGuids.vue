<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="num-guids-addon">Number of Guids:</span>
    </div>
    <input
      type="number"
      min="1"
      max="99"
      class="form-control"
      aria-label="NumGuids"
      aria-describedby="num-guids-addon1"
      v-model="numGuids"
      @change="onChange"
    >
  </div>
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
  input {
    margin-right: 2px;
  }
</style>
