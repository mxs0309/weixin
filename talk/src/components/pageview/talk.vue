<template>
  <div class="talk"> 
    
    <mt-index-list>
      <div>
      <ul class="tiltle">
        <li @click="newfriend">
          <img src="../../assets/newfriend.png">
          <span>新的朋友</span>
        </li>
        <li>
          <img src="../../assets/grouptalk.png">
          <span>群聊</span>
        </li>
        <li>
          <img src="../../assets/tiltle.png">
          <span>标签</span>
        </li>
        <li>
          <img src="../../assets/gongzhonghao.png">
          <span>公众号</span>
        </li>
      </ul>
     
    </div>
    <div class="friendlist">
      <div  v-for="item in myfriendList">
        <router-link :to="{path:'/tianjia/'+item.phone}">
          <div class="flex" >
          <img :src="url">
          <p>{{item.nickname}}</p>
        </div>
        </router-link> 
        
      </div>
      
    </div>
    </mt-index-list> 
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Talk',
  data () {
    return {
       url: require("../../assets/1.jpg"),
       myfriendList:[]
    }
  },
  methods:{
    newfriend(){
      this.$router.push({
            path:'/newfriend',
            home:'Newfriend'
          })
    },
    nick(){
      
    }
  },
  created(){
     this.$axios({
                    url: "http://localhost:3000/relist",
                    method: "post",
                    data: qs.stringify({
                      phone: localStorage.getItem("phone")
                   })
                 })
               .then((res) => {
                   console.log(res.data.xinxi.friendList)
                  this.myfriendList = res.data.xinxi.friendList;
               })
            .catch((err) => {
              console.log(err)
             });
  }
}
</script>

<style scoped>
.flex{
  justify-content: flex-start;
    align-items:center;
    display: flex;
    color: black;
}
a{
  text-decoration: none;
}
.flex img{
  margin: 0.5rem
}
.friendlist{
  margin-top: 15px;
  width: 100%;
  background-color: white;
}
.friendlist img{
  width: 2.5rem;
  height: 2.5rem;
}
.talk{
  margin-top: 3.5rem;
}
.mint-cell-wrapper{
  padding: 12px 10px!important;
}
ul li{
  list-style: none;
}
ul{
  padding: 0;
  margin:0;
}
/*.tiltle{
  padding-left:0.5rem;
}*/
.tiltle li{
  border-bottom: 1px solid #ddd;
  background: white;
}
ul li span{
  vertical-align: middle;
}
ul li img{
  vertical-align: middle;
  margin:0.5rem;
  width: 2.5rem;
  height: 2.5rem;
}

</style>
