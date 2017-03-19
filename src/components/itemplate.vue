<template>
  <div id="itcomponent" class="fixed-bottom">
    <div class="container">
      <p>宝剑锋从磨砺出，梅花香自苦寒来。</p>
      <p> written by {{ author }} </p>
    </div>
  </div>
</template>
 
<script type="text/javascript">
export default {
  name: "itcomponent",
  data () {
    return {
      author: "YongcunPan"
    }
  }
}
</script>
<style scoped>
  .fixed-bottom{
    position: relative;
    margin-top: -52px;
    background: #111;
    padding: 10px 0;
    line-height: 1.4;
    font-size: 1.2em;
    color: #fff;
  }
 .fixed-bottom p{text-align: center;}
</style>