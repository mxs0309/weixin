<template>
	<div class="menudetail">
	  <mt-header title="菜谱详情">
         <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
         </router-link>
      </mt-header>
		<ul>
			<li v-for="(item,index) in menuList">
				<img class="bigimg" :src="item.albums">
				<div class="step">
					<p class="title">{{item.title}}</p>
				<p class="yongliao">用料：{{item.ingredients}}；{{item.burden}}</p>
				<div v-for="stepp in buzhou">
					<p class="steep">步骤{{stepp.step}}</p>
				<img :src="stepp.img">	
				
			   </div>
				<p class="yongliao">小贴士：{{item.imtro}}</p>
				</div>
				
			</li>
		</ul>
	</div>
</template>	

<script>
import {Header} from 'mint-ui'
import axios from 'axios'
import qs from 'qs'
export default{
	name:"MenuDetail",
	data(){
		return {
          menuList:[],
          buzhou:[]
		}
	},
	methods:{
		
	},
	mounted(){

		 this.$axios({
      url:"/proxy/cook/query?key=79133cc04acf090390659cab9364a555",
      method:"post",
      data: qs.stringify({
            menu:this.$route.params.menuName
          })
       })
       .then((res)=>{
             this.menuList = res.data.result.data;
             console.log(res.data.result.data[0].steps)
             this.buzhou = res.data.result.data[0].steps;
            
          
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
.yongliao{
	margin:20px 0;
	color: black;
}
.steep{
	margin:20px 0;
	color: black;
	font-size: 16px;
}
p{
	text-align: left;
}
.step{
	margin:20px;
}
ul{margin:0;padding: 0}
ul li{margin-top: 0;padding: 0;list-style: none;}
.menudetail ul li .bigimg{
	width: 100%;
	height: 260px;
}
.menudetail ul li  img{
	width: 100%;
	height: 300px;
}
.title{
	font-size: 24px;
	line-height: 39px;
	color: black;
	text-align: center;
	font-weight: 600;
}
</style>