<template>
  <div class="homepage">  
     <Header></Header>
     <Talk></Talk>
     <Navbar :view='view'></Navbar>
  </div>
</template>

<script>
import Header from '../common/Header'
import Talk from '../pageview/Talk'
import Navbar from '../common/Navbar'
export default {
  name: 'Wxview',
  components: { Header,Talk,Navbar},
  data () {
    return {
       view:'talk'
    }
  }
}
</script>

<style scoped>

</style>
