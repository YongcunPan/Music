<template>
  <header class="header">
    <p>{{msg}}</p>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: '书山有路勤为径，学海无涯苦作舟!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    padding: 40px 0;
    background: url(../../assets/topbg.jpg);
    background-repeat: no-repeat;
    background-position: center 20%;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .header p{
    text-align: center;
    color: #fff;
    font-size: 2em;
  }
</style>
