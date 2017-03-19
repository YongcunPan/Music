<template>
  <div class="inewsa">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'inews',
  data () {
    return {
      msg: '新闻A组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inews h1,.inews h2 {
  color: #ddd;
}
</style>
