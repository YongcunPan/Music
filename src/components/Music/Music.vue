<template>
  <div class="imain clearfix">
    <img v-bind:src="musiclist.coverImgUrl" alt="" width="80">
    <h1>{{ msg }}</h1>
    <p>标签：<span v-for="tag in musiclist.tags">{{tag}}</span></p>
    <p>介绍：{{musiclist.description}}</p>
    <h2>歌曲列表</h2>
    <table class="tracks">
        <tr>
            <td>歌曲标题</td>
            <td>歌手</td>
            <td>专辑</td>
        </tr>
        <tr v-for="(item,index) in musiclist.tracks">
            <td @click='playMusic(index)'>{{item.name}}</td>
            <td class="artists"><span v-for="artist in item.artists">{{artist.name}}</span></td>
            <td>{{item.name}}</td>
        </tr>
    </table>
    <div class="playon" v-if="play">
      <h3>{{playItem.name}}</h3>
      <audio  autoplay="" :src="playItem.mp3Url" ref="audio"></audio>
      <div @click='playMusic(currentPlay-1)'>上一首</div>
      <div @click='playMusic(currentPlay+1)'>下一首</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'music',
  data () {
    return {
      msg: '网易云音乐',
      musiclist:[],
      fetchError:'',
      id:'3779629',
      play:false,
      playItem:[],
      currentPlay:'',
      end:''
    }
  },
  created() {
    this.fetchData()
  },
  /*mounted: {
    getData: function() {
      this.$nextTick(function () {
        this.fetchData()
      })
    }
  },*/
  methods: {
    fetchData: function () {
      // console.log(this.$route.query.id)
      let id=this.$route.query.id || this.id
      // console.log(id)
      let _this=this
      this.$http.get('/api/playlist/detail?id='+id).then((response) => {
        response = response.body
        _this.musiclist=response.result
        _this.msg=response.result.name
        // console.log(response)
      })
    },
    playMusic: function (index) {
      if(index>=this.musiclist.tracks.length){
        index=0
      }
      if(index<0){
        index=this.musiclist.tracks.length-1
      }
      this.play=true
      this.currentPlay=index
      this.playItem=this.musiclist.tracks[index]
      // this.end=this.$refs.audio.ended
    }
  },
   watch: {
    end: function() {
      // this.end=this.$refs.audio.ended
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
