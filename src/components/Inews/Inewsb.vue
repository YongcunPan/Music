<template>
  <div class="inewsb">
    <h1>{{ msg }}</h1>
    <h2>news!</h2>

    <router-view class=""></router-view>
  </div>
</template>

<script>
export default {
  name: 'inewsb',
  data () {
    return {
      msg: '新闻B组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inewsb h1,.inewsb h2 {
  color: #ddd;
}
</style>
