<template>
  <div class="footBar"> 
     <router-link :to="{name:'Updata',params:{phone:this.phone,nickname:this.nickname}}">
    <div class="top">
     
      <div class="touphoto"><img src="../../assets/1.jpg"></div>
      <div class="info">
        <p>昵称：{{nickname}}</p>
        <p>账号：{{phone}}</p>
      </div>
      <div class="erweima"><img src="../../assets/erweima.png"></div>
    </div>
      </router-link> 

    <ul>
      <li style="margin-top: 1rem">
        <img src="../../assets/wallet.png">
        <span >钱包</span>
      </li>
    </ul>
    <ul>
      <li style="border-bottom: 1px solid rgb(234, 232, 236)">
        <img src="../../assets/shoucang.png">
        <span >收藏</span>
      </li>
      <li style="border-bottom: 1px solid rgb(234, 232, 236)">
        <img src="../../assets/photo.png">
        <span >相册</span>
      </li>
      <li>
        <img src="../../assets/cal.png">
        <span >卡包</span>
      </li> 
       <li style="border-bottom: 1px solid rgb(234, 232, 236);">
        <img src="../../assets/boqing.png">
        <span >表情</span>
      </li>
    </ul> 
     
    <ul>
     <li style="border-bottom: 1px solid rgb(234, 232, 236)">
        <img src="../../assets/set.png">
        <span >设置</span>
      </li>
    </ul> 
  
  </div>
</template>

<script>
  export default {
    components: {

    },
    data(){
          return {
             phone:localStorage.getItem("phone"),
             nickname:""
          }
        },
    methods:{
      

    },
    mounted(){
      this.$axios.get('http://localhost:3000/gerenxinxi',{
        params:{
          phone:this.phone
        }
     })
     .then((res)=>{
      console.log(res)
      this.nickname = res.data.xinxi.nickname
     })
     .catch((error)=>{
      console.log(error)
     })
    }
  }
</script>

<style scoped>

ul,li{
  list-style: none;
  padding-left: 0;
}
.erweima img{
  width: 2rem;
  margin-right:1rem;
}
.top{
  background: white;
  display: flex;
  align-items:center;
  margin-top: 3.5rem;
}
.top p{
  margin:0;
  color: black;
  text-decoration: none;
}
a{
  text-decoration: none;
}
.touphoto img{
  width: 4rem;
  margin:0.5rem;
}
.info{
  flex: 1;
}
.footBar{
  margin-top: 1rem;
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