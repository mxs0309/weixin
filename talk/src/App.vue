<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
