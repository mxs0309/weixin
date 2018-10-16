<template>
  <div class="homepage">  
     <Header></Header>
     <Me></Me>
     <Navbar :view="view"></Navbar>
  </div>
</template>

<script>
import Header from '../common/Header'
import Me from '../pageview/Me'
import Navbar from '../common/Navbar'
export default {
  name: 'Wxview',
  components: { Header,Me,Navbar},
  data () {
    return {
        view:'me'
    }
  }
}
</script>

<style scoped>

</style>
