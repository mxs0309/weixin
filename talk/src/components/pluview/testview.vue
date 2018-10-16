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
         }},
         
          beforeMount(){
             this.$socket.on('to'+this.from,(data) => {
                this.mess = data.msg;
                // console.log(this.mess);
                this.fastman = data.from;
                this.quest = {mess:this.mess,fastman:this.fastman}

                console.log(this.quest);
                //当前前台拿到的对象是 quest
               //  //当前后台拿到的数组是 newsz
               //  var arr = [];
               //  var peoples =this.newsz;
               // //把后台拿回来的发送者手机号遍历一遍放到arr里
               // for(let val of peoples){
               //    arr.push(val.fastman)
               //  }
               // var newArr2 = [];
               // if(arr.indexOf(this.quest.fastman) == -1){
               //    arr.push(this.quest.fastman);
               //    newArr2.push(this.quest);
               //    this.newsz = newArr2;
               //  }else{
               //    alert("您已经发送过，请不要连续发送")
               //  }
               },
            //   this.$axios({
            //   url: "http://localhost:3000/relist",
            //   method: "post",
            //   data: qs.stringify({
            //     phone: localStorage.getItem("phone"),
            //     quest:this.quest
            //    })
            //  })
            // .then((res) => {
            //   this.newsz = res.data.list
            //   console.log(res.data.list)
            // })
            // .catch((err) => {
            //   console.log(err)
            //  })
          );
             //做ajax把新数组更新存起来   
        },
        mounted(){
            //  this.$axios({
            //   url: "http://localhost:3000/updatareqlist",
            //   method: "post",
            //   data: qs.stringify({
            //     phone: localStorage.getItem("phone"),
                
            //    })
            //  })
            // .then((res) => {
            //   console.log(res)
            // })
            // .catch((err) => {
            //   console.log(err)
            //  })
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
