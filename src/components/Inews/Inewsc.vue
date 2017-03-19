<template>
  <div class="inewsc">
    <h1>{{ msg }}</h1>
    <h2>news!</h2>

    <router-view class=""></router-view>
  </div>
</template>

<script>
export default {
  name: 'inewsc',
  data () {
    return {
      msg: '新闻c组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inewsc h1,.inewsc h2 {
  color: #ddd;
}
</style>
