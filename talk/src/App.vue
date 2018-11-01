<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

 
<script>
export default {
  name: 'App',

  sockets: {
    //不能改,j建立连接自动调用connect
    connect: function() {
      //与socket.io连接后回调
      console.log("socket connected");
      // location.reload();
    },
    //后台返回一个对象，存着所有在线人员的socket.id
    user: (data) => {
       this.user = data;
       console.log(this.user);
    }
  },
  data(){
    return {
      phone: localStorage.getItem("phone"),
      selected: "",
      user: ""
    }
  },
   mounted(){

          // 向后台发送localstorage里存的自己的手机号码
          this.$socket.emit('setName', this.phone);
          // this.$socket.on('user', (data)=> {
          // this.user = data;
          // console.log(this.user);
          //    });
          }
}
</script>

<style>
@import './assets/font/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin:0;
  background: #f5f5f5;
  padding-bottom: 40px;
}
.mint-button-text{
  vertical-align: middle;
 }
 .mintui-search{
  vertical-align: middle;
 }
 .mint-searchbar-inner .mintui-search{
  font-size: 18px;
  background-position: 1px 0;
 }
 .mint-search{
  height: 100%;
 }
.mint-header label{
  font-size: 1.2rem;
   vertical-align: middle;
}
.mint-header span{
  font-size: 1.2rem;
  vertical-align: middle;
}
ul,li{
  list-style:none;
  padding:0;
  margin:0;
}
</style>
