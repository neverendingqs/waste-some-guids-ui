<template>
  <div class="form-inline justify-content-center">
    <input
      type="text"
      readonly=""
      class="form-control"
      v-model="guid"
    >
    <button
      class="btn btn-info"
      v-clipboard:copy="guid"
    >Copy</button
  ></div>
</template>

<script>
  export default {
    name: 'Guid',
    props: {
      guid: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 350px !important;  /* TODO: fix */
}
</style>
