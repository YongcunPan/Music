<template>
  <div id="play-bar" class="play-bar clearfix" v-if="playingList">
    <audio id="music"
           :src='this.playingList[this.currentPlaying].mp3Url'
           @canplay='toPlay()'
           @timeupdate='updateTime()'
           @ended='playingNext(1)'
           autoplay></audio>
    <div class="play-bar-image-container left" >
      <img class="play-bar-image" 
        :src='this.playingList[this.currentPlaying].album.blurPicUrl'
        height="40">
    </div>
    <div class="paly-bar-right">
      <p class="play-bar-text" >{{playingList[currentPlaying].name}}</p>
      <p id="lyric"><span v-for="artist in playingList[currentPlaying].artists">{{artist.name}}</span></p>
      <img class="paly-bar-next" 
        src="../../assets/next.png" 
        alt="" 
        width="40" 
        @click='playingNext(1)'>
      <img class="play-bar-button"
          :src="playing?iconPause:iconPlay"
          @click="tapButton"
          width="40" 
           >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'player',
  data () {
    return {
      iconPlay: require('../../assets/icon-play.png'),
      iconPause: require('../../assets/icon-pause.png'),
      playingList: '',
      currentPlaying: '',
      playing:'',
      isShowiMusic:false,
      lyric: ''
    }
  },
  computed:mapGetters(['songList','currentIndex']),
  mounted: function () {
    
  },
  methods: {
    toPlay: function (){
      document.getElementById('music').play()
      if(isPc()){
        this.playing=true
      }  
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
      this.$store.commit('setcurrentIndex', next)
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
    },
    updateTime: function () {
      let currenttime=parseInt(document.getElementById('music').currentTime)
      if(this.lyric[currenttime]){
        // console.log(this.lyric[currenttime])
        document.getElementById('lyric').innerHTML = this.lyric[currenttime]
      }
    },
    getLrc: function () {
      let id=this.playingList[this.currentPlaying].id
      this.$http.get('/api/song/lyric?os=pc&lv=-1&tv=-1&id='+id).then((response) => {
        if(response.data.lrc){
          // console.log(response.data.lrc.lyric)
          this.lyric= parseLyric(response.data.lrc.lyric)
          // console.log(this.lyric)
        }
      })
    }
  },
  watch: {
    songList: function (val) {
      this.playingList=val
    },
    currentIndex: function (val) {
      this.currentPlaying=val
      this.getLrc()
    }
  }
}

function isPc() {
  //平台、设备和操作系统 
  var system = { 
    win: false, 
    mac: false, 
    xll: false, 
    ipad:false 
  }; 
  //检测平台 
  var p = navigator.platform; 
  system.win = p.indexOf("Win") == 0; 
  system.mac = p.indexOf("Mac") == 0; 
  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
  system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false; 
  //跳转语句，返回真或者假
  if (system.win || system.mac || system.xll||system.ipad) { 
    return true;
  } else { 
    return false;
  }
}

function parseLyric(lrc) {
  var lyrics = lrc.split("\n");
  var lrcObj = {};
  for(var i=0;i<lyrics.length;i++){
    var lyric = decodeURIComponent(lyrics[i]);
    var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
    var timeRegExpArr = lyric.match(timeReg);
    if(!timeRegExpArr)continue;
    var clause = lyric.replace(timeReg,'');

    for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
      var t = timeRegExpArr[k];
      var min = Number(String(t.match(/\[\d*/i)).slice(1)),
          sec = Number(String(t.match(/\:\d*/i)).slice(1));
      var time = min * 60 + sec;
      lrcObj[time] = clause;
    }
  }
  return lrcObj;
}
</script>

<style scoped>
  .play-bar{
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    height: 53px;
    width: 100%;
    background: #ddd;
  }
  .play-bar-image{
    border-radius: 50%;
  }
  .play-bar-image-container{
    padding: 4px;
    float: left;
  }
  .paly-bar-right{
    overflow: hidden;
    position: relative;
    height: 52px;
  }
  .paly-bar-right p{
    padding-left: 10px;
    line-height: 22px;
    font-size: 1.4em;
  }
  .paly-bar-right img{
    position: absolute;
    z-index: 100;
    top:6px;
  }
  .play-bar-button{
    right: 50px;
  }
  .paly-bar-next{
    right: 4px;
  }
</style>
