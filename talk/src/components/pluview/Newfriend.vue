<template>
  <div class="tianjia"> 
  <mt-header>
   <router-link to="/" slot="left">
    <mt-button  @click="$router.back(-1)" icon="back">新的朋友</mt-button>
  </router-link>
</mt-header>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'


export default {
  name: 'Tianjia',
  data () {
    return {
      phone: localStorage.getItem("phone")
    }
  },
    created(){
          // 向后台发送localstorage里存的自己的手机号码
          this.$socket.emit('setName', this.phone);
          //后台返回一个对象，存着所有在线人员的socket.id
          this.$socket.on('user', function (data) {
          this.user = data;
          console.log(this.user);
             });
          },
    mounted(){
           this.$socket.on('to'+this.phone,(data) => {
                this.mess = data.msg;
                this.fastman = data.from;
                this.quest = {mess:this.mess,fastman:this.fastman}
                console.log(222);
               },
          )
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

