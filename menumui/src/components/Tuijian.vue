<template>
  <div class="tuijian">
     <Home></Home>
     <div class="table-img">
        <router-link :to="{name:'Meiwei',params:{menu:'好吃',name:'最受欢迎菜谱'}}">

       <div class="image">
         <img  src="../assets/images/shuijiao.jpg">
         <p>最受欢迎菜谱</p>
       </div>
        </router-link>
         <router-link :to="{name:'Meiwei',params:{menu:'美味',name:'本周流行菜谱'}}">
       <div class="image">
        <img src="../assets/images/muwu.jpg">
         <p>本周流行菜谱</p>
       </div>
      </router-link>

     </div>
      <div class="mintsswiper">
        <mt-swipe :show-indicators="false" :auto="5000">
          <mt-swipe-item>
             <router-link :to="{name:'Sancan',params:{menu:'早餐'}}">
                <img  src="../assets/images/zaocan.jpg">
            </router-link>
          </mt-swipe-item>
          <mt-swipe-item>
             <router-link :to="{name:'Sancan',params:{menu:'午餐'}}">
                <img  src="../assets/images/wucan.jpg">
            </router-link>
          </mt-swipe-item>
          <mt-swipe-item>
             <router-link :to="{name:'Sancan',params:{menu:'晚餐'}}">
                <img  src="../assets/images/wancan.jpg">
            </router-link>
          </mt-swipe-item>
      </mt-swipe>
      </div>
      <div class="clearfix cookfood"> 
          <div class="learning">厨艺学堂</div>
          <div class="seeall">查看全部</div>
      </div>
      <div class="swiper-container2">
      <div class="swiper-wrapper">
        <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'东坡肉'}}">
             <img src="../assets/images/dongporou.jpg">
          </router-link>
        </div>
         <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'红烧肉'}}">
             <img src="../assets/images/hongshaorou.jpg">
          </router-link>
        </div>
         <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'黄焖鸡米饭'}}">
             <img src="../assets/images/huangmenji.jpg">
          </router-link>
        </div>
         <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'美味烤鸡'}}">
             <img src="../assets/images/kaoji.jpg">
          </router-link>
        </div>
         <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'梅菜扣肉'}}">
             <img src="../assets/images/kourou.jpg">
          </router-link>
        </div>
         <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'龙须面'}}">
             <img src="../assets/images/longxumian.jpg">
          </router-link>
        </div>
         <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'牛排'}}">
             <img src="../assets/images/niupai.jpg">
          </router-link>
        </div>
         <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'重庆小面'}}">
             <img src="../assets/images/xiaomian.jpg">
          </router-link>
        </div>
         <div class="swiper-slide"> 
          <router-link :to="{name:'Sancan',params:{menu:'鱼香肉丝'}}">
             <img src="../assets/images/yuxiangrousi.jpg">
          </router-link>
        </div>
        
    </div>
    <div class="swiper-pagination"></div>
  </div>

      
  </div>
</template>

<script>
import Swiper from "swiper"
import { Cell, Swipe, SwipeItem } from 'mint-ui'
import Home from './Home'
export default {
  name: 'Tuijian',
  data () {
    return {
      
    }
  },
  components: { Home },
  mounted(){
      var swiper = new Swiper('.swiper-container2', {
      slidesPerView: 1.4,
      spaceBetween: 20,
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

.image{
  position: relative;
}
.image p{
  color: white;
  position: absolute;

  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
}
.table-img{
  display: flex;
  width: 100%;
  margin-top: 70px;
}
.table-img img{
   width: 100%;
}

.swiper-container2{
   overflow-x: hidden;
}
.clearfix:after {
    content: " ";
    display: block;;
    line-height: 0;
    height: 0;
    visibility: hidden;
    clear: both;
}
.cookfood{
  margin:20px 0;
}
.cookfood .learning{
  float: left;
  color: black;
  font-size: 18px;

}
.cookfood .seeall{
  float: right;
  color: #797777;
  font-size: 18px;

}
.mui-table-view.mui-grid-view .mui-table-view-cell{
  padding: 0 4px 0px 14px!important;
}
/*.mui-table-view.mui-grid-view {
    padding: 0 15px 15px 0!important;
}*/
.mintsswiper{
  height: 190px;
  width: 100%;
}
.mui-media-object{
  position: relative;
}
.mui-media-body{
  position: absolute;
  z-index: 11;
  bottom:0;
  top:0;
  left: 0;
  right: 0;
  color: white!important;
  font-weight: 500;
  font-size: 16px!important;
  margin: auto!important;
}

.mui-table-view{
  background-color: inherit;
}
.mint-swiper-item{
   width: 100%;
}
.mui-table-view.mui-grid-view .mui-table-view-cell{
  margin-right: 0!important;
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;
}
</style>
