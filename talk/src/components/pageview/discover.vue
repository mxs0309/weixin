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
      <li style="border-bottom: 1px solid rgb(234, 232, 236);">
        <img src="../../assets/shop.png">
        <span >购物</span>
      </li>
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
  width: 2rem;
  vertical-align: middle;
}
.footBar ul{
  margin-bottom: 1rem;
}
.footBar ul li span{
  font-size: 1.3rem;
  vertical-align: middle;

}
.footBar{
  background: #f5f5f5;
}
</style>