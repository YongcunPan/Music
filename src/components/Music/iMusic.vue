<template>
  <div class="imain clearfix" v-if='musiclist'>
    <musiclist 
      v-bind:datas='musiclist' ></musiclist>
  </div>
</template>

<script>
import musiclist from './musiclist.vue'
export default {
  name: 'music',
  data () {
    return {
      musiclist:[],
      id:'629404383',
    }
  },
  components:{
    musiclist
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      let id=this.$route.query.id || this.id
      let _this=this
      this.$http.get('/api/playlist/detail?id='+id).then((response) => {
        response = response.body
        _this.musiclist=response.result
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imain{
  padding-bottom: 52px;
}
.tracks tr:nth-child(2n+3){background: #dedede;}
.tracks tr td{padding: 4px;}
.artists span{padding-left: 10px;}
</style>
