<template>

  <div class="iapp clearfix">
    <div class="mian-content">
      <header class="main-header">
        <p>书山有路勤为径，学海无涯苦作舟!</p>
      </header>
      <ul class="nav clearfix">
        <li><a href="javascript:;">排行榜</a></li>
        <li><a href="javascript:;">歌单</a></li>
      </ul>
      <div class="clearfix iframe">
        <musiccat v-on:playingList='listenToplayingList' 
          v-on:currentPlaying='listenTocurrentPlaying'></musiccat>
        <div id="play-bar" class="play-bar" v-if="playingList">
          <audio id="music"
                 :src='this.playingList[this.currentPlaying].mp3Url'
                 @canplay='toPlay()'
                 @ended='playingNext(1)'
                 autoplay></audio>
          <div class="play-bar-image-container" >
            <img class="play-bar-image" 
              :src='this.playingList[this.currentPlaying].album.blurPicUrl'
              height="60">
          </div>
          <p class="play-bar-text" >{{playingList[currentPlaying].name}}</p>
          <img class="play-bar-button"
              :src="playing?iconPause:iconPlay"
              @click="tapButton"
              width="42" 
               >
        </div>
      </div>
    </div>
    <itemplate></itemplate>
  </div>
</template>

<script>
import itemplate from "./components/itemplate.vue";
import musiccat from "./components/Music/Musiccat.vue";

export default {
  name: 'app',
  data () {
    return {
      iconPlay: require('./assets/icon-play.png'),
      iconPause: require('./assets/icon-pause.png'),
      playingList: '',
      currentPlaying: '',
      currentTime:'',
      playing:''
    }
  },
  components:{ itemplate, musiccat },
  methods: {
    listenToplayingList: function (res) {
      this.playingList=res
    },
    listenTocurrentPlaying: function (res){
      this.currentPlaying=res
      document.getElementById('music').play()
    },
    toPlay: function (){
      document.getElementById('music').play()
      // console.log("开始播放")
      this.playing=true
    },
    playingNext: function (i) {
      var next = this.currentPlaying+i
      if(next<0){
        next=this.playingList.length-1
      }
      if (next>=this.playingList.length) {
        next=0
      }
      this.currentPlaying=next
    },
    tapButton: function(event) {
      event.preventDefault()
      if(this.playing){
        document.getElementById('music').pause()
        this.playing=!this.playing
      }else{
        document.getElementById('music').play()
        this.playing=!this.playing
      }
    }
  },
  watch: {

  }
}
</script>

<style>
  .iapp{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .mian-content{
    min-height: 100%;
  }
  .main-header{
    padding: 40px 0;
    background: url(assets/topbg.jpg);
    background-repeat: no-repeat;
    background-position: center 20%;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .main-header p{
    text-align: center;
    color: #fff;
    font-size: 2em;
  }
  .nav{
    margin: 10px 0;
    text-align: center;
    padding-bottom: 10px;
  }
  .nav li{
    display: inline-block;
    padding: 0 10px;
  }
  .nav li a{
    font-size: 1.4em;
    padding: 6px 0;
    border-bottom: 2px solid #f4645f;
  }
  .iframe{
    padding-bottom: 52px;
    margin: 0 10px;
  }
  .play-bar{
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    height: 160px;
    width: 100%;
    background: #ddd;
  }
  .play-bar-image{
    border-radius: 50%;
  }
</style>
