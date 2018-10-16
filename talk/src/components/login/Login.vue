<template>
  <div class="login">
    <router-link to="/">
      <p class="iconfont icon-guanbi stop"></p>
    </router-link>

    <p class="phone">手机号登录</p>
    <div class="device">
      <span>手机号</span>
      <input type="text" name="" v-model="phone">
    </div>
    <div class="device but">
      <span>密码</span>
      <input type="password" name="" v-model="password">
    </div>
    <mt-button class="button" type="primary" size="large" @click.native="login">登录</mt-button>
    <router-link class="pass" to="/forget">忘记密码</router-link>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import {MessageBox} from 'mint-ui'

  export default {
    name: 'Login',
    data() {
      return {
        phone: "",
        password: ""
      }
    },
    methods: {
      login() {
        let regMobile = /^1[3,5,6,7,8]\d{9}$/;
        let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,16}$/;
        if (this.phone === '') {
          MessageBox('提示', '手机号为空');
          return;
        }
        else if (!regMobile.test(this.phone)) {
          MessageBox('提示', '手机号格式错误');
          return;
        }
        if (!regPassword.test(this.password)) {
          MessageBox('提示', '密码由大写字母+小写字母+数字，8-16位组成！');
          return;
        }
        this.$axios({
          url: "http://localhost:3000/login",
          method: "post",
          data: qs.stringify({
            phone: this.phone,
            password: this.password
          })
        })
          .then((res) => {
            console.log(res);
            localStorage.setItem("phone", this.phone)
            localStorage.setItem("nickname", res.data.nickname)
            if (res.data.data === true) {
              window.location.href = "/#/wxview"
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  input {
    background: #f5f5f5;
  }

  a {
    text-decoration: none;
  }

  .login {
    margin: 1rem;
  }

  .stop {
    text-align: left;
  }

  .phone {
    text-align: left;
    font-size: 2rem;
  }

  .device {
    float: left;
    width: 100%;
    border-bottom: 1px solid #e6e5e5;
    padding: 0.7rem 0;
  }

  .device span {
    float: left;
    font-size: 1.4rem;
  }

  .device input {
    font-size: 1.4rem;
    border: none;
    outline: none;
    float: right;
    width: 75%;
  }

  .but {
    margin-bottom: 1rem;
  }

  .button {
    padding: 0.1rem 0;
  }

  .pass {
    font-size: 1.3rem;
    color: black;
    margin-top: 1.2rem;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    display: block;
  }
</style>

