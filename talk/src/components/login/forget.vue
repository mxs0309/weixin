<template>
  <div class="forget">
    <mt-header title="微信">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="info">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    </div>
    <mt-button size="large" type="primary" @click.native="test">验证</mt-button>
  </div>
</template>

<script>
  import {Header} from 'mint-ui';
  import axios from 'axios'
  import qs from 'qs'
  import {MessageBox} from 'mint-ui'

  export default {
    name: 'forget',
    data() {
      return {
        phone: "",
        email: ""
      }
    },
    methods: {
      test() {
        let regMobile = /^1[3,5,6,7,8]\d{9}$/;
        let regemail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

        if (this.phone === '') {
          MessageBox('提示', '手机号为空');
          return;
        }
        else if (!regMobile.test(this.phone)) {
          MessageBox('提示', '手机号格式错误');
          return;
        }
        if (this.email === '') {
          MessageBox('提示', '邮箱号为空');
          return;
        }
        else if (!regemail.test(this.email)) {
          MessageBox('提示', '邮箱格式错误');
          return;
        }
        this.$axios({
          url: "http://localhost:3000/youxiangyanzheng",
          method: "post",
          data: qs.stringify({
            phone: this.phone,
            email: this.email
          })
        })
          .then((res) => {
            console.log(res.data.msg)
            MessageBox('提示', res.data.msg);
          })
          .catch((err) => {
            console.log(err)
          })
      }

    }
  }
</script>

<style scoped>
  header {
    padding: 10px 0;
  }

  .mint-button--primary {
    width: 96%;
    margin-left: 2%;
    margin-top: 15px;
  }

  .mint-button--default {
    margin-left: 10px;
  }
</style>
