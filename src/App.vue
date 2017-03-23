<template>
  <div class="iapp clearfix">
    <vheader></vheader>
    <div class="mian-content">
      <ul class="nav clearfix">
        <li><router-link to='/'>排行榜</router-link></li>
        <li><router-link to='/music'>我的歌单</router-link></li>
      </ul>
      <div class="clearfix iframe">
        <router-view></router-view>
        <player></player>
      </div>
    </div>
    <itemplate></itemplate>
  </div>
</template>

<script>
import vheader from "./components/Imain/header.vue" 
import itemplate from "./components/itemplate.vue";
import musiccat from "./components/Music/Musiccat.vue";
import imusic from "./components/Music/iMusic.vue";
import player from "./components/Music/player.vue";

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{ vheader,itemplate, musiccat ,imusic,player},
  methods: {

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
  }
</style>
