<template>
  <div class="topbar">
      <div class="mui-input-row mui-search mui-input-search search">
        <input type="search" v-model="shicai" class="mui-input-clear" placeholder="搜索菜谱食材">
        <button class="sousuo" @click="search">搜索</button>
      </div>
      <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"> 
          <router-link to="/" :class="{'active' : view === 'home' }">
            推荐
          </router-link>
        </div>
        <div class="swiper-slide">
        <router-link :to="{name:'Homecook',params:{menu:'家常菜'}}">
             家常菜
          </router-link>
         </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'烘焙'}}">
            烘焙
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'下酒菜'}}">
            下酒菜
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'牛肉'}}">
            牛肉
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'蔬菜'}}">
            蔬菜
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'早餐'}}">
            早餐
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'快手菜'}}">
            快手菜
          </router-link>
        </div>
        <div class="swiper-slide"> 
          <router-link :to="{name:'Homecook',params:{menu:'甜点'}}">
            甜点
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'汤'}}">
            汤
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'主食'}}">
            主食
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'蛋糕'}}">
            蛋糕
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'麻辣'}}">
             麻辣
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link :to="{name:'Homecook',params:{menu:'海鲜'}}" :class="{'active' : view === 'home' }">
            海鲜
          </router-link>
        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>

  </div>
</template>

<script>
import Swiper from "swiper"
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Home',
  data () {
    return {
       menuList:[],
       shicai:""
    }
  },
  methods:{
     search(){
         this.$axios({
      url:"/proxy/cook/query?key=79133cc04acf090390659cab9364a555",
      method:"post",
      data: qs.stringify({
            menu:this.shicai
          })
       })
       .then((res)=>{
             console.log(res.data.result.data);
             this.menuList = res.data.result.data;
             console.log(this.menuList);
             this.$router.push({
                name:"Sancan",
                params:{menu:this.shicai}
             })
          
       })
       .catch((err)=>{
              console.log(err)
       })
     }
  },
  props: ['view'],
  watch: {
    '$route' (to, from) {
        this.$router.go(0);
    }
},
  mounted(){
      var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 2,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
}
</script>
<style scoped>
@import 'swiper/dist/css/swiper.css';

.mui-search.mui-active:before {
    font-size: 20px;
    right: auto;
    left: 5px;
    top: 25px;
    display: block;
    margin-right: 0;
}
.search{
  width: 95%;
  margin-left: 2.5%;
  margin-top: 2.5%;
}
.sousuo{
  position: absolute;
  color: #696464;
  border: none;
  background: #d7d7db;
  right: 20px;
  height:24px;
  line-height: 24px;
  top: 0;
}
.mui-input-clear{
   position: relative;
}
*{touch-action: none;} 
  .topbar{
  background: #efeff4;
  padding-bottom: 12px;
  position: fixed;
  top:0;
  z-index: 15;
  width: 100%;
}
.swiper-slide{
  background: inherit;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item{
  color: #6f6e6e!important;
}
input[type=search]{
  font-size: 18px!important;
 
}
.mui-search .mui-placeholder{
  height: 42px!important;
  line-height: 42px!important;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-active{
  color: black!important;
  border-bottom: 2px solid red!important;
}
.mui-segmented-control .mui-control-item{
  line-height: 36px!important;
}
</style>
