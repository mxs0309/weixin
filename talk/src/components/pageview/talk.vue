<template>
  <div class="talk"> 
    
    <mt-index-list>
      <div>
      <ul class="tiltle">
        <li @click="newfriend">
          <img src="../../assets/newfriend.png">
          <span>新的朋友</span>
        </li>
        <li>
          <img src="../../assets/grouptalk.png">
          <span>群聊</span>
        </li>
        <li>
          <img src="../../assets/tiltle.png">
          <span>标签</span>
        </li>
        <li>
          <img src="../../assets/gongzhonghao.png">
          <span>公众号</span>
        </li>
      </ul>
     
    </div>
      <mt-index-section index="S">
        <mt-cell :title="msg" :to="{path:'/tianjia/'+msg}">
           <img slot="icon" :src="url" width="40" height="40">
        </mt-cell>
      </mt-index-section>
     
    </mt-index-list> 
  </div>
</template>

<script>

export default {
  name: 'Talk',
  data () {
    return {
       msg:'顺其自然',
       url:require("../../assets/1.jpg")
    }
  },
  methods:{
    newfriend(){
      this.$router.push({
            path:'/newfriend',
            home:'Newfriend'
          })
    }

  }
}
</script>

<style scoped>
.talk{
  margin-top: 3.5rem;
}
.mint-cell-wrapper{
  padding: 12px 10px!important;
}
ul li{
  list-style: none;
}
ul{
  padding: 0;
  margin:0;
}
.tiltle{
  margin-left:0.5rem;
}
.tiltle li{
  border-bottom: 1px solid #ddd;
  background: white;
}
ul li span{
  vertical-align: middle;
}
ul li img{
  vertical-align: middle;
  margin:0.5rem 0;
  width: 2.5rem;
  height: 2.5rem;
}

</style>
