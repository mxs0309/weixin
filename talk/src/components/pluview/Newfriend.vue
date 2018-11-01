<template>
  <div class="tianjia"> 
  <mt-header>
   <router-link to="/" slot="left">
    <mt-button  @click="$router.back(-1)" icon="back">新的朋友</mt-button>
  </router-link>
</mt-header>
<ul>
  <li  v-for="(item,index) in newsz">
      <div class="top">
     
      <div class="touphoto"><img src="../../assets/1.jpg"></div>
      <div class="info">
        <p>{{item.fastman}}</p>
        <p>{{item.mess}}</p>
      </div>
      <div class="erweima"><span @click="accept(index)">接受</span></div>
    </div>
  </li>
</ul>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Tianjia',
  data () {
    return {
      phone: localStorage.getItem("phone"),
      mess:"",
      fastman:"",
      fastNick:"",  //这是发送验证信息人的昵称
      myNick:"",    //登陆者的昵称
      quest:{},
      newsz:[],
      myList:[],
      heList:[]
    }
  },
  watch:{
      myList(){
           this.$axios({
                    url: "http://localhost:3000/updatafriendList",
                    method: "post",
                    data: qs.stringify({
                       phone: localStorage.getItem("phone"),
                       myList: JSON.stringify(this.myList)   //点击添加后存手机号码到当前用户的好友列表数据库
                   })
                    
                    }) 
                    .then((res)=>{
                      console.log(this.myList);
                      console.log(res)
                    })
                    .catch((err)=>{
                      console.log(err)
                    });
      }
  },
  methods:{
     accept(index){

        this.$axios({
                    url: "http://localhost:3000/relist",
                    method: "post",
                    data: qs.stringify({
                      phone: this.newsz[index].fastman
                   })
                 })
               .then((res) => {
                  this.heList = res.data.xinxi.friendList;
                  this.fastNick = res.data.xinxi.nickname;
                  this.myList.push({phone:res.data.xinxi.phone,
                    nickname:this.fastNick}); 
                  console.log(this.myList);

               })
            .catch((err) => {
              console.log(err)
             });   
                 
           
             
             this.$axios({
                    url: "http://localhost:3000/updatafriendList",
                    method: "post",
                    data: qs.stringify({
                       phone: this.newsz[index].fastman,
                       myList: JSON.stringify(this.heList)   //点击添加后存手机号码到发送验证者用户的好友列表数据库
                   })
                    
                    }) 
                    .then((res)=>{
                      console.log(res)
                    })
                    .catch((err)=>{
                      console.log(err)
                    });
                    this.newsz.splice(index,1);
                    console.log(this.newsz);
                this.$axios({
                    url: "http://localhost:3000/updataReqfriend",
                    method: "post",
                    data: qs.stringify({
                       phone: localStorage.getItem("phone"),
                       newsz: JSON.stringify(this.newsz)
                   })
                    
                    }) 
                    .then((res)=>{
                      console.log(res)
                    })
                    .catch((err)=>{
                      console.log(err)
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
                  this.newsz = res.data.xinxi.requests; //这是查询到当前用户的好友请求信息
                  this.myList = res.data.xinxi.friendList;
                  this.myNick = res.data.xinxi.nickname;
                  this.heList.push({phone:this.phone,nickname:this.myNick});
                    console.log(this.heList);
                  console.log(this.myNick);
               })
            .catch((err) => {
              console.log(err)
             });
            
       
            
  },
  mounted(){   
           this.$socket.on('to'+this.phone,(data) => {
                this.mess = data.msg;
                this.fastman = data.from;
                this.quest = {mess:this.mess,fastman:this.fastman};
                console.log(this.quest);
                if (!this.newsz.length){
                     this.newsz.push(this.quest)
                }
                for (let i = 0;i<this.newsz.length; i++) {
                  if(this.newsz[i].fastman === this.quest.fastman) {
                            this.newsz[i] = this.quest;
                          }
                          else{
                            this.newsz.push(this.quest)
                          }
                }
                // this.newsz.push(this.quest);
                console.log(this.newsz);
                console.log(JSON.stringify(this.newsz));
                this.$axios({
                    url: "http://localhost:3000/updataReqfriend",
                    method: "post",
                    data: qs.stringify({
                       phone: localStorage.getItem("phone"),
                       newsz: JSON.stringify(this.newsz)
                   })
                    
                    }) 
                    .then((res)=>{
                      console.log(res)
                    })
                    .catch((err)=>{
                      console.log(err)
                    })       
            },
          )
        }
}
</script>

<style scoped>
.erweima span{
 background:#26a2ff;
 color: white;
 margin-right: 1rem;
 padding: 0.5rem;
}
.top{
  background: white;
  display: flex;
  align-items:center;
}
.top p{
  margin:0;
  color: black;
  text-decoration: none;
}
.touphoto img{
  width: 4rem;
  margin:0.5rem;
}
.info{
  flex: 1;
}
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

