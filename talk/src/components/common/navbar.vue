<template>
  <div>
    <p>{{user.phone}}</p>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="wx">
        <router-link to="/wxview" :class="{'active' : view === 'home' }">
          <p class="iconfont icon-weixin1"></p>
          微信

        </router-link>

      </mt-tab-item>
      <mt-tab-item id="talk">
        <router-link to="/talkview" :class="{'active' : view === 'talk' }">
          <p class="iconfont icon-tongxunlu1"></p>
          通讯录
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="discover">
        <router-link to="/discoverview" :class="{'active' : view === 'find' }">
          <p class="iconfont icon-faxian1"></p>
          发现
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="me">
        <router-link to="/meview" :class="{'active' : view === 'me' }">
          <p class="iconfont icon-wo2"></p>
          我
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>

<script>

  export default {
    name: 'Navbar',
    data() {
      return {
        phone: localStorage.getItem("phone"),
        selected: "",
        user: ""
      }
    },
    props: ['view']
  }
</script>

<style scoped>
  p {
    margin: 0;
    margin-bottom: 0.3rem;
    font-size: 1.5rem;
  }

  .mint-tabbar > .mint-tab-item.is-selected {
    background: #fafafa;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
  }

  .active {
    color: #26a2ff;
  }

  .mint-tabbar {
    position: fixed;
    bottom: 0;
  }
</style>
