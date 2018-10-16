<template>
  <div class="infodetail"> 
    <mt-header>
      <router-link to="/" slot="left">
       <mt-button  @click="$router.back(-1)" icon="back">详细资料</mt-button>
      </router-link>
    </mt-header>
    <div class="info">
       <div ><img src="../../assets/1.jpg" width="65px">
       </div>
    
       <div class="xinxi"> 
            <p><span>{{msg}}</span>
              <i v-if="sex==='男'" class="iconfont icon-nanyisheng-mian  ft"></i>
               <i v-else="sex==='女'" class="iconfont icon-nv ft2"></i>
               </p>
            <p class="num">微信号：{{weixinnum}}</p> 
        </div>
    </div>
    <div>
      <p class="mark">设置备注和标签</p>
    </div>
    
    <div class="detail">
      <div class="infoo">
         <span class="diqu">地区</span>
         <span >{{province}}</span>
         <span>{{city}}</span>
      </div>
      <div class="infoo infoq">
        <span  class="diqu">个人相册</span>
      </div>
      <div class="infoo">
        <span  class="diqu">个性签名</span>
        <span>{{sign}}</span>
      </div>
    </div>

    <div class="anniu">
      <mt-button @click.native="talk" type="primary" size="large">添加到通讯录</mt-button>
    </div>
    <!-- <div class="anniu">
      <mt-button @click.native="talkroom" type="primary" size="large">发消息</mt-button>
    </div> -->
    
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { MessageBox } from 'mint-ui'
export default {
  name: 'Infodetail',
  data () {
    return {
       msg:"",
       weixinnum:this.$route.params.netname,
       province:"山西",
       city:"太原",
       sex:'',
       sign:''
    }
  },
  methods:{
       talk(){
          this.$router.push({
            path:'/testview',
            home:'Testview',
            query:{
                weixinnum:this.weixinnum,
            }
          })
       },
       talkroom(){
         this.$router.push({
            path:'/talkroom',
            home:'talkroom',
            query:{
                msg:this.msg,
                city:this.city
            }
          })
       } 
  },
  mounted(){
     this.$axios.get('http://localhost:3000/infolist',{
        params:{
          weixinnum:this.weixinnum
        }
     })
     .then((res)=>{
      console.log(res)
      this.msg= res.data.xinxi.nickname,
      this.province = res.data.xinxi.prov,
      this.city = res.data.xinxi.city,
      this.sex = res.data.xinxi.sex,
      this.sign = res.data.xinxi.signature
     })
     .catch((error)=>{
      console.log(error)
     })
  }
}
</script>

<style scoped>

.anniu{
  margin:0.5rem;
  margin-top: 1rem;
 
}
.mint-header{
  height: 53px;
}
.info{
 display: flex;
 background: white;
 margin-top: 10px;
}
.info .ft{
  color: #26a2ff;
  margin-left: 0.3rem;
  font-size: 1.3rem;
}
.info .ft2{
  margin-left: 0.3rem;
  font-size: 1.3rem;
  color: #ea0598;
}
.info p{
  margin:0;
}
.info img{
  margin:10px;
}
.info span{
  font-size: 1.2rem;
  font-weight: 600;
}
.xinxi{
  margin: 10px 0;
}
.num{
  color:#8e8d8d;
  margin-top: 0.3rem!important;
}
.mark{
  font-weight: 600;
  padding:10px;
  font-size: 1.2rem;
  background: white;
}
.detail{
  background: white;
}
.detail .infoo{
  margin:0 10px;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 0;
}
.diqu{
  width:6rem;
  display: inline-block;
  font-weight: 600;
}
.infoq{
  line-height: 60px;
  height: 60px;
}

</style>
