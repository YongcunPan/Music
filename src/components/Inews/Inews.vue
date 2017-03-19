<template>
  <div class="inews">
    <h3>新闻菜单：
      <router-link to="/b/A">新闻A</router-link>
      <router-link to="/b/B">新闻B</router-link>
      <router-link to="/b/C">新闻B</router-link>
    </h3>
    <router-view class=""></router-view>
  </div>
</template>

<script>
export default {
  name: 'inews',
  data () {
    return {
      msg: '新闻组件首页'
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
