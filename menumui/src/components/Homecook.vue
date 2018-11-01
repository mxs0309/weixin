<template>
  <div class="tuijian">
     <Home></Home>

     <ul>
       <li v-for="(item,index) in menuList" @click="menu(index)" class="caipu">
        <div class="menuimage">
         <img :src="item.albums[0]">
        </div>
        <div class="step">
          <p class="menuName">{{item.title}}</p>
          <p class="menuliao">{{item.ingredients}},{{item.burden}}</p>
          <p class="menutag">{{item.tags}}</p>
        </div>
       </li>
     </ul>
  </div>
</template>

<script>
import Home from './Home'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Tuijian',
  data () {
    return {
      menuList:[],
      canshu:this.$route.params.menu
    }
  },

  methods:{
    menu(index){
      console.log(this.menuList[index].title);
       this.$router.push({
        name:"MenuDetail",
        params:{
          menuName:this.menuList[index].title
        }
      })

    }
  },
  components: { Home },
  mounted(){
    console.log(this.$route.path);
    this.$axios({
      url:"/proxy/cook/query?key=79133cc04acf090390659cab9364a555",
      method:"post",
      data: qs.stringify({
            menu:this.$route.params.menu
          })
       })
       .then((res)=>{
             console.log(res.data.result.data);
             this.menuList = res.data.result.data;
             console.log(this.menuList)
          
       })
       .catch((err)=>{
              console.log(err)
       })
  }
}
</script>
<style scoped>
.menuliao{
  color: #000;
}
.menutag{
   color: #777474;
}
.step p{
  width:200px;
  word-break:keep-all;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; 
  text-align: left;
}
.menuName{
  color: black;
  font-size: 16px;
  text-align: left;
  font-weight: 600;
}
ul,li{margin-top: 0;padding: 0}
ul{margin-top: 85px}
img{width:125px;height: 125px;}
.caipu{
   margin-bottom: 15px;
}

.step{ margin:12px;}
.caipu{
  display: flex;
 
}

</style>
