<template>
  <div class="homepage">  
     <Header></Header>
     <Discover></Discover>
     <Navbar :view="view"></Navbar>
  </div>
</template>

<script>
import Header from '../common/Header'
import Discover from '../pageview/discover'
import Navbar from '../common/Navbar'
export default {
  name: 'Wxview',
  components: { Header,Discover,Navbar},
  data () {
    return {
        view:"find"
    }
  }
}
</script>

<style scoped>

</style>
