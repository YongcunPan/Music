<template>
  <div class="imain clearfix">
    <h1>{{ msg }}</h1>


  </div>
</template>

<script>
export default {
  name: 'imain',
  data () {
    return {
      msg: '测试一下'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
      fetchData: function () {
            // console.log(this.$route.query.id)
            // let id=this.$route.query.id || this.id
            // console.log(id)
            // let _this=this
            // this.$http.get('/api/playlist/detail/?id=166009').then((response) => {
            this.$http({
                url: '/api/playlist/detail/?id=166009',
                method: 'post',
                body:{'id': '1'}
            }).then((response) => {
              response = response.body
              // _this.musiclist=response.result
              // _this.msg=response.result.name
              console.log(response)
          })
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imain{
}
.imain h1,.imain h2 {
  color: #ddd;
}
</style>
