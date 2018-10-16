<template>
  <div class="tianjia">
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button @click="$router.back(-1)" icon="back">添加朋友</mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="phone" cancel-text="取消" placeholder="搜索">
    </mt-search>
    <div :class="phone?'disbo':'disno'">
      <mt-cell @click.native="tianjia" :title="phone">
        <img slot="icon" :src="url" width="24" height="24">
      </mt-cell>
    </div>
    <!-- :to="{path:'/tianjia/'+netname}" -->
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import {MessageBox} from 'mint-ui'

  export default {
    name: 'Tianjia',
    data() {
      return {
        phone: this.phone,
        url: require('../../assets/2.png')
      }
    },
    methods: {
      tianjia() {
        let regMobile = /^1[3,5,6,7,8]\d{9}$/;
        if (!regMobile.test(this.phone)) {
          MessageBox('提示', '手机号格式错误');
          return;
        }
        this.$axios({
          url: "http://localhost:3000/search",
          method: "post",
          data: qs.stringify({
            phone: this.phone
          })
        })
          .then((res) => {
            console.log(res);
            if (res.data.data === false) {
              MessageBox('提示', res.data.msg);
              return;
            }
            if (this.phone === localStorage.getItem("phone")) {
              MessageBox('提示', "您不能添加自己为好友");
              return;
            }
            if (res.data.data === true) {
              window.location.href = "/#/tianjia/" + this.phone
            }

          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  .mint-header {
    height: 53px;
  }

  .disbo {
    display: block;
  }

  .disno {
    display: none;
  }
</style>
