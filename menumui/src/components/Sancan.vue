<template>
  <div class="tuijian">
  <mt-header :title="canshu">
         <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
         </router-link>
      </mt-header>
     <ul>
       <li v-for="(item,index) in menuList" @click="menu(index)" class="caipu">
        <div class="menuimage">
         <img :src="item.albums[0]">
          <p class="menuName">{{item.title}}</p>
          <p class="menuliao">{{item.ingredients}},{{item.burden}}</p>
          <p class="menutag">{{item.tags}}</p>
        </div>
  
       </li>
     </ul>
  </div>
</template>

<script>
import {Header} from 'mint-ui'
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
.menuimage{
  margin-left: 17px;
}
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
.menutag{
   width:140px;
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.menuliao{
  text-align: center;
  width:140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.menuName{
  color: black;
  font-size: 16px;
  font-weight: 600;
}
ul,li{margin-top: 0;padding: 0}
ul{margin-top: 50px;
   display: flex;
   flex-wrap:wrap;
 }
img{width:125px;height: 125px;}
.caipu{
   margin-bottom: 15px;
   width: 50%;
}
.mint-header{background:#efeff4;}
.step{ margin:12px;}
.caipu{
  display: flex;
 
}

</style>
