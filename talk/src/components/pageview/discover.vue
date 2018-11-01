<template>
  <div class="footBar"> 
    <ul>
      <li style="margin-top: 1rem">
        <img src="../../assets/friendcircle.png">
        <span >朋友圈</span>
      </li>
    </ul>
    <ul>
      <li style="border-bottom: 1px solid rgb(234, 232, 236)">
        <img src="../../assets/sao.png">
        <span >扫一扫</span>
      </li>
      <li>
        <img src="../../assets/tiltle.png">
        <span >摇一摇</span>
      </li>
    </ul> 
    <ul>
       <a href="https://wqs.jd.com/data/coss/tolerant/new/3_1.shtml?ptag=17073.1.3">
      <li style="border-bottom: 1px solid rgb(234, 232, 236);">
       
          <img src="../../assets/shop.png">
        <span >购物</span>
        
        
      </li>
      </a>
      <li>
        <img src="../../assets/game.png">
        <span >游戏</span>
      </li>
    </ul> 
  
  </div>
</template>

<script>
  export default {
    components: {

    },
    data(){
          return {}
        },
    methods:{
      

    } 
  }
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
.footBar{
  margin-top: 3.5rem;
}
ul,li{
  list-style: none;
  padding-left: 0;
}
.footBar ul li{
  padding: 0.7rem;
  background: white;
}
.footBar ul li img{
  width: 1.5rem;
  vertical-align: middle;
}
.footBar ul{
  margin-bottom: 1rem;
}
.footBar ul li span{
  font-size: 1rem;
  vertical-align: middle;

}
.footBar{
  background: #f5f5f5;
}
</style>