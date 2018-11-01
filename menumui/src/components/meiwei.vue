<template>
  <div>
     <mt-header :title="name">
         <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
         </router-link>
      </mt-header>
  <div class="tuijian">

     <ul>
       <li v-for="(item,index) in menuList" @click="menu(index)">
        <div class="menuimage">
         <img :src="item.albums[0]">
        </div>
        <div class="step">
          <p class="menuName">{{item.title}}</p>
        </div>
       </li>
     </ul>
  </div>
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
      canshu:this.$route.params.menu,
      name:this.$route.params.name
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
    console.log(this.$route);
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
.mint-header{
    position: fixed;
    width: 100%;
    top: -1px;
    background: #efeff4;
    color: #3a3838;
    padding: 25px 0;
    font-size: 16px;
}
.menuliao{
  color: #000;
}
.menutag{
   color: #777474;
}
.step p{

  word-break:keep-all;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; 
  text-align: left;
}
.menuName{
  color: black;
  font-size: 20px;
  text-align: left;

}
ul,li{margin-top: 0;padding: 0}
img{width:100%;}
.caipu{
   margin-bottom: 15px;
}
.tuijian{
  margin:45px 6px 0 6px;
}
.step{ margin:12px;}
.caipu{
  display: flex;
 
}

</style>
