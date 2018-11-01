<template>
  <div class="tianjia">
  <mt-header>
   <router-link to="/" slot="left">
    <mt-button  @click="$router.back(-1)" icon="back">验证申请</mt-button>
  </router-link>
</mt-header>
  <div class="yanzheng">
    <p>您需要发送验证信息，等待对方通过</p>
    <div class="testbox">
      <input type="text" name="" v-model="msg">
      <mt-button type="primary" size="normal" @click.native="send">发送</mt-button>
    </div>

  </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { MessageBox } from 'mint-ui'
export default {

  name: 'Tianjia',

  data () {
    return {
     msg:"",
     from:localStorage.getItem("phone"),
     to:this.$route.query.weixinnum,
     mess:"",
     fastman:"",
     quests:[],
     quest:{},
     requests:{},
     newsz:[]
     }
  },
  methods:{
      send(){ 
          this.$socket.emit('private',this.from,this.to,this.msg);
          this.msg = "";
         }
       }
}
</script>

<style scoped>
p{margin:0;}
.yanzheng p{
  padding: 10px 0;
  color:#757779;
}
input{
  border: none;
  outline: none;
}
.testbox{
  display: flex;
}
.testbox input{
  flex: 1;
  font-size: 1.3rem;
  padding-left: 0.5rem;
}
.mint-header{
    height: 53px;
}
.yanzheng{
  margin:0 10px;
}
</style>
