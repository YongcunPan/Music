<template>
  <div id="cateListBox">
    <div v-if='catlist.length' v-show='!isShowCdList'>
      <ul class="list">
        <li v-for='(item,index) in catlist' @click='showCdList(index)'>
          <div class="img"><img :src='item.coverImgUrl' alt="" ></div>
          <h2 class="name">
            {{item.name}}
          </h2>
          <h3 class="author">
            <a>{{item.creator.nickname}}</a>
          </h3>
        </li>
      </ul>
    </div>
    <div class="md-bg" v-if='isShowCdList'>
      <div class="cdlist-warp">
        <div @click="isShowCdList=!isShowCdList" class="goback"></div>
        <div class="des-warp clearfix">
          <img v-bind:src="cdList.coverImgUrl" alt="" class="topimg">
          <div class="des-right">
            <h1>{{ cdList.name }}</h1>
            <p>标签：<span v-for="tag in cdList.tags">{{tag}}</span></p>
            <p>介绍：{{cdList.description}}</p>
          </div>
        </div>
        <h2 class="">歌曲列表</h2>
        <table class="tracks">
            <tr v-for="(item,index) in cdList.tracks">
                <td class="music-name" @click='playMusic(cdList.tracks,index)'>
                  {{index+1}}.{{item.name}}
                </td>
                <td class="artists"><span v-for="artist in item.artists">{{artist.name}}</span></td>
            </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cateListBox',
    data () {
      return {
        msg:'123',
        title: '网易云音乐',
        catlist: [],
        cdList: [],
        isShowCdList: false,
        currentPlaying:'',
        topList: ['2884035','71384707','19723756','3778678','10520166','112504','64016','3779629']
      }
    },
    created() {
      this.getData2()
    },
    methods: {
      getData: function () {
        let i=1
        while (i<=1000){
          this.iAjax(this.getNum())
          i++
        }
      },
      getNum: function (){
        let  id=Math.floor(Math.random()*600000000)
        return id
      },
      getData2:function (){
        for (let i = 0; i < this.topList.length; i++) {
          let id = this.topList[i]
          this.iAjax(id)
        }
      },
      iAjax:function (id){
        let _this=this
        this.$http.get('/api/playlist/detail?id='+id).then((response) => {
          response = response.body
          if(response.code==200 && response.result.playCount> 100){
            _this.catlist.push(response.result)
          }
        })
      },
      showCdList: function(index) {
        this.isShowCdList=true
        this.cdList=this.catlist[index]
      },
      playMusic: function(item,index) {
        this.$store.commit('setSongList', item)
        this.$store.commit('setcurrentIndex', index)

      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list li{
  display: inline-block;
  width: 31%;
  padding:0 1% 20px;
}
.list img{
  border: 1px solid #ddd;
  width: 100%;
  padding: 2px;
  border-radius: 2px;
}
.name{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 2em;
  color: #333;
}
.author a{
  color: #ddd;
}

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
  padding: 10px 10px 0px;
  min-height: 100%;
  margin-bottom: 52px;

}
.cdlist-warp .topimg{
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
.des-warp{
  
}
</style>
