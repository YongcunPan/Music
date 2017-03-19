<template>
  <div id="child">
    <h1>{{msg}}</h1>
    <p>123child</p>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      msg: 'Child vue-router!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child {
  color: #ddd;
}
</style>
