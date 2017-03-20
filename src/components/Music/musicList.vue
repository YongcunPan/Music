<template>
  <div class="md-bg" v-if='isShow'>
    <div class="musiclist-warp" v-if='musiclist'>
      <div @click="goback()" class="goback"></div>
      <div class="des-warp clearfix">
        <img v-bind:src="musiclist.coverImgUrl" alt="" class="topimg" width="150">
        <div class="des-right">
          <h1>{{ musiclist.name }}</h1>
          <p>标签：<span v-for="tag in musiclist.tags">{{tag}}</span></p>
          <p class="desc">介绍：{{musiclist.description}}</p>
        </div>
      </div>
      <h2 class="">歌曲列表</h2>
      <table class="tracks">
          <tr v-for="(item,index) in musiclist.tracks">
              <td class="music-name" @click='playMusic(musiclist.tracks,index)'>
                {{index+1}}.{{item.name}}
              </td>
              <td class="artists"><span v-for="artist in item.artists">{{artist.name}}</span></td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['musiclist'],
    name: 'musicList',
    data () {
      return {
        isShow:true
      }
    },
    created() {
      // console.log(1)
    },
    methods: {
      goback () {
        this.isShow=false
        this.$emit('isShowList',false)
      }
    }
  }
</script>
<style>
  /*歌曲列表*/
  .md-bg{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #fff;
  }
  .musiclist-warp{
    padding: 10px;
    margin-bottom: 52px;
  }
  .goback{
    position: fixed;
    width: 36px;
    height: 36px;
    top:16px;
    left:16px;
    background: url('../../assets/goback.png') center center no-repeat;
    -webkit-background-size: 50%;
    background-size: 75%;
    border-radius: 75%;
    border: 1px solid #fff;
  }
  .cdlist-warp {
    min-height: 100%;
    

  }
  .des-warp .topimg{
    width: 150px;
    margin: 0px 10px 10px 0;
    float: left;
  }
  .des-right{
    overflow: hidden;
    padding-top: 10px;
  }
  .des-right p{
    line-height: 20px;
    font-size: 1.4em;
  }
  .des-right p span{
    padding-right: 10px;
  }
  .des-right p.desc{
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .tracks{
    width: 100%;
    font-size: 1.4em;
  }
  .music-name{
    line-height: 1.8em;
  }
  .artists{
    text-align: center;
  }
</style>