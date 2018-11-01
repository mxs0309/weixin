<template>
  <div id="app">

    <router-view/>
    <div style="color: black;margin: 15px 0;font-weight: 600;">————&nbsp;我是有底线的&nbsp;————</div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  body{ margin: 0;padding: 0;font-family: "微软雅黑";overflow: hidden;}
  ul,li{margin:0;padding:0;}
ul li{margin-top: 0;padding: 0;list-style: none;}
body,html{-webkit-text-size-adjust: none;width: 100%;height: 100%;}
*{text-decoration: none;list-style: none;}
img{border: 0px;}
*{touch-action: none;} 
ul,li,dl,dd,dt,p,ol,h1,h2,h3,h4,h5{font-size: 12px;font-weight: 100;padding: 0;margin: 0;}
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
