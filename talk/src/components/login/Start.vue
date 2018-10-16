<template>
  <div class="hello">
    <div class="start">
      <img src="../../assets/start.jpg">  
    </div>
    <div class="loginre">
      <router-link to="/login">
      <span class="login">登录</span>
      </router-link>
      <router-link to="/reg">
      <span class="reg">注册</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.start img{
  width: 100%;
  height: 100%;
}
.start{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.hello .loginre{
  position: absolute;
  z-index: 10;
  bottom: 0;
  margin-bottom: 1rem;
  left: 0;
  width: 100%;
}
.hello .loginre span{
  flex: 1;
  width: 41%;
  height: 3.5rem;
  line-height: 3.5rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  text-align: center;
} 
.hello .loginre .login{
  background: #078a07;
  color: white;
  float: left;
  margin-left: 1rem;
}
.hello .loginre .reg{
  background: white;
  color: black;
  float: right;
  margin-right: 1rem;
}

</style>
