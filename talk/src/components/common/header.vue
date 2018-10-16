<template>
  <div>
   <mt-header>
  <router-link to="/wxview" slot="left">
    <mt-button >微信</mt-button>
  </router-link>
  
  <mt-button  class="iconfont icon-sousuo" slot="right"></mt-button>

  <mt-button @click.native="tianjia" class="iconfont icon-jiahao jia" slot="right"></mt-button>
  </mt-header>
  </div>

</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
     
    }
  },
  methods:{
    tianjia:function(){
      this.$router.push('/tianjia');
    }
  }
}
</script>

<style scoped>
.mint-header{
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.mint-button{
  font-size: 1.2rem;
  margin-left:1rem;
}
.jia{
  margin-right: 1rem;
}
</style>
