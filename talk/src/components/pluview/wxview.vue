<template>
  <div class="homepage">  
     <Header></Header>
     <Wx></Wx>
     <Navbar :view="view"></Navbar>
  </div>
</template>

<script>
import Header from '../common/Header'
import Wx from '../pageview/Wx'
import Navbar from '../common/Navbar'
export default {
  name: 'Wxview',
  components: { Header,Wx,Navbar},
  data () {
    return {
      view:'home'
    }
  }
}
</script>

<style scoped>

</style>
