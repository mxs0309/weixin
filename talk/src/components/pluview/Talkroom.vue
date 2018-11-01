<template>
  <div class="talkroom"> 
    <mt-header>
   <router-link to="/" slot="left">
    <mt-button  @click="$router.back(-1)" icon="back">与{{msg}}进行聊天</mt-button>
  </router-link>
</mt-header>
  <div class="top">
     <div v-for="talkresult in array" class="talkjilu" :class="talkresult?'block':'none'">
     <div :class="talkresult.emit?'talkjilu1':'talkjilu2'">
     <img :src="url">
   <div class="send" :class="talkresult.emit?'send1':'send2'">
   <div :class="talkresult.emit?'arrow':'arrow2'"></div>
      <span>{{talkresult.talkres}}</span>
   </div>
  </div>
  
     </div>
  </div>
<div class="yanzheng">
    <div class="testbox">
      <input type="text" name="talkres" v-model="talkres">
      <mt-button type="primary" size="normal" @click.native="send">发送</mt-button>
    </div>
    
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Talkroom',
  data () {
    return {
        msg:this.$route.query.msg,
        from:localStorage.getItem("phone"),
        to:this.$route.query.weixinnum,
        nickname:"",
        talkres:"",
        talkresult:"",
        talkresult2:"",
        url:require("../../assets/1.jpg"),
        url2:"",
        array:[],
        friendtalk:{},
        talkarray:[],
        friendhetalk:{},
        talkhearray:[]
    }
  },
  methods:{
     send(){ 
          this.$socket.emit('other',this.from,this.to,this.talkres);
          this.array.push({talkres:this.talkres,emit:true});
           this.$axios({
                    url: "http://localhost:3000/relist",
                    method: "post",
                    data: qs.stringify({
                      phone: localStorage.getItem("phone")
                   })
                 })
               .then((res) => {
                  this.talkarray = res.data.xinxi.talkList;
                  console.log(this.talkarray);                
               })
            .catch((err) => {
              console.log(err)
             });
            
              this.friendtalk = {nickname:this.$route.query.msg,talkres:this.talkres,phone:this.$route.query.weixinnum};
                   if (!this.talkarray.length){
                     this.talkarray.push(this.friendtalk);
                     console.log(this.talkarray)
                   }
                    for (let i = 0;i<this.talkarray.length; i++) {
                  if(this.talkarray[i].nickname === this.friendtalk.nickname) {
                            this.talkarray[i] = this.friendtalk;
                            console.log(this.talkarray);
                          }
                          else{
                            this.talkarray.push(this.friendtalk);
                             console.log(this.talkarray)
                          }
                }

          //更新聊天列表
          this.$axios({
                    url: "http://localhost:3000/talkList",
                    method: "post",
                    data: qs.stringify({
                      phone: localStorage.getItem("phone"),
                      talkarray: JSON.stringify(this.talkarray)
                   })
                 })
               .then((res) => {
                  console.log(res)               
               })
            .catch((err) => {
              console.log(err)
             });



          this.$axios({
                    url: "http://localhost:3000/talkhistory",
                    method: "post",
                    data: qs.stringify({
                       phone: localStorage.getItem("phone"),
                       array: JSON.stringify(this.array)   //点击添加后存手机号码到当前用户的好友列表数据库
                   })
                    
                    }) 
                    .then((res)=>{
                      console.log(this.array);
                      console.log(res)
                    })
                    .catch((err)=>{
                      console.log(err)
                    });
                    this.talkres=""
         },
         back(){
        this.$router.push({
          path: '/wxview',
          home: 'wxview'
        })

         }
      
  },
  beforeMount(){
    this.$axios({
                 url: "http://localhost:3000/relist",
                    method: "post",
                    data: qs.stringify({
                      phone: localStorage.getItem("phone")
                   })
                 })
               .then((res) => {
                 console.log(res.data.xinxi.history);
                 this.array = res.data.xinxi.history;
               })
               .catch((err) => {
                 console.log(err)
               });  
  },
  mounted(){
        this.$socket.on('to'+this.from,(data) => {
                this.talkres = data.talkres;
                console.log(this.talkres); 
                this.array.push({talkres:this.talkres,emit:false});
                this.$axios({
                    url: "http://localhost:3000/talkhistory",
                    method: "post",
                    data: qs.stringify({
                       phone: localStorage.getItem("phone"),
                       array: JSON.stringify(this.array)   
                   })
                  }) 
                    .then((res)=>{
                      console.log(this.array);
                      console.log(res)
                    })
                    .catch((err)=>{
                      console.log(err)
                    });


                   this.$axios({
                    url: "http://localhost:3000/relist",
                    method: "post",
                    data: qs.stringify({
                      phone: localStorage.getItem("phone")
                   })
                 })
               .then((res) => {
                  this.talkarray = res.data.xinxi.talkList;
          
               })
            .catch((err) => {
              console.log(err)
             });
            this.friendhetalk = {nickname:this.$route.query.msg,talkres:this.talkres,phone:this.$route.query.weixinnum};
              console.log(this.friendhetalk);                 

               if (!this.talkarray.length){
                     this.talkarray.push(this.friendhetalk);
                     console.log(this.talkarray)
                   }
                    for (let i = 0;i<this.talkarray.length; i++) {
                  if(this.talkarray[i].nickname === this.friendhetalk.nickname) {
                            this.talkarray[i] = this.friendhetalk;
                            console.log(this.talkarray);
                          }
                          else{
                            this.talkarray.push(this.friendhetalk);
                             console.log(this.talkarray)
                          }
                }
                //更新聊天列表
          this.$axios({
                    url: "http://localhost:3000/talkList",
                    method: "post",
                    data: qs.stringify({
                      phone: localStorage.getItem("phone"),
                      talkarray: JSON.stringify(this.talkarray)
                   })
                 })
               .then((res) => {
                  console.log(res)               
               })
            .catch((err) => {
              console.log(err)
             });
                   this.talkres = ''
              });             
  }
}
</script>

<style scoped>
.talkjilu {
  margin-top: 1rem;
}
.block{
  display: block;
}
.none{
  display:none;
}
.send{
  position: relative;
  
  border-radius:5px;
  margin:5px 15px;

}
.send1{
  background: #26a2ff;
}
.send2{
  background: #e8c301;
}
.send span{
  max-width: 16rem;
  display: inline-block;
  color: white;
  padding: 0.5rem;
}
.send .arrow{
  position: absolute;
  top: 5px;
  left: -15px;
  width: 0;
  height: 0;
  font-size: 0;
  border:8px solid;
  border-color:#f5f5f5 #26a2ff #f5f5f5 #f5f5f5;
}
.send .arrow2{
  position: absolute;
  top: 5px;
  right: -15px;
  width: 0;
  height: 0;
  font-size: 0;
  border:8px solid;
  border-color:#f5f5f5 #f5f5f5 #f5f5f5 #e8c301;
}
.talkjilu img{
  width: 3rem;
  height: 3rem;
}
.talkjilu1{
  display: flex;

}
.top{
    margin-top: 2.5rem;
    display: block;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    padding: 0.3rem;
}
.talkjilu2{
  display: flex;
  flex-direction: row-reverse;
}

.mint-header{
  height: 53px;
  position: fixed;
  z-index: 10;

}
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
  border-bottom: 1px solid #26a2ff;
}
.yanzheng{
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #d4d4d4;
  background-color: white;
}
.mint-header{
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
