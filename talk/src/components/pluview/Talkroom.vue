<template>
  <div class="talkroom"> 
    <mt-header>
   <router-link to="/" slot="left">
    <mt-button  @click="$router.back(-1)" icon="back">与{{msg}}进行聊天</mt-button>
  </router-link>
</mt-header>
  <div class="top">
     <div v-for="talkresult in array" class="talkjilu" :class="talkresult?'block':'none'">
  <div class="talkjilu1">
     <img :src="url">
   <div class="send">
   <div class="arrow" ></div>
      <span>{{talkresult}}</span>
   </div>
  </div>
  
 </div>
  </div>



 <div class="talkjilu" :class="talkresult?'block':'none'">
  <div class="talkjilu2">
    <img :src="url">
    
   <div class="send">
   <div class="arrow2" ></div>
      <span>{{talkresult}}</span>
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

export default {
  name: 'Talkroom',
  data () {
    return {
        msg:this.$route.query.msg,
        talkres:"",
        talkresult:"",
        talkresult2:"",
        url:require("../../assets/1.jpg"),
        url2:"",
        array:[]
    }
  },
  methods:{
    send(){
        this.array.push(this.talkres);
        this.talkres=""
        console.log(this.array)
    }
      
  },
  mounted(){
      

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
  background: #f8c301;
  border-radius:5px;
  margin:5px 15px;

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
  border-color:#f5f5f5 #e8c301 #f5f5f5 #f5f5f5;
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
