<template>
  <div class="forget">  
     <mt-header fixed title="微信"></mt-header>
     <div class="info">
       <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
     </div>
    <mt-button size="large" type="primary" @click.native="xiugai">修改密码</mt-button>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import axios from 'axios'
import qs from 'qs'
import { MessageBox } from 'mint-ui'
export default {
  name: 'forget',
  data () {
    return {
        phone:"",
        email:"",
        password:"",
    }
  },
  methods:{
    xiugai(){
       let regMobile=/^1[3,5,6,7,8]\d{9}$/;
       let regPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,16}$/;
        let regemail=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
          
           if(this.phone===''){
                MessageBox('提示', '手机号为空');
                return;
           }
            else if(!regMobile.test(this.phone)){
              MessageBox('提示', '手机号格式错误');
              return;
           }
           if(this.email===''){
                MessageBox('提示', '邮箱号为空');
                return;
           }
            else if(!regemail.test(this.email)){
              MessageBox('提示', '邮箱格式错误');
              return;
           }

           if (!regPassword.test(this.password)){
             MessageBox('提示', '密码由大写字母+小写字母+数字，8-16位组成！');
              return;
           }
          
       this.$axios({
          method:"post",
          url:"http://localhost:3000/xiugai",
          data:qs.stringify({
           phone:this.phone,
           email:this.email,
           password:this.password,
           test:this.$route.query.test
        })
       })
       .then((res)=>{
        console.log(res)
         MessageBox('提示',res.data.msg);
       })
       .catch((err)=>{
        console.log(err)
       })
    }

 }   
}
</script>

<style scoped>
.mint-header{
  padding: 24px 0;
}
.info{
  margin-top:57px;
}
button{
 width: 96%;
 margin-left: 2%;
 margin-top: 15px;
}
</style>
