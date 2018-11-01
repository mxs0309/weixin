<template>
  <div class="homepage">
    <ul>
      <li @click="talk(index)" v-for="(item,index) in talkList">
        <img :src="url">
        <div>
          
          <span>{{item.nickname}}</span>
           <p>{{item.talkres}}</p>
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
  export default {
    name: 'homepage',
    data() {
      return {
        msg: '顺其自然',
        url: require("../../assets/1.jpg"),
        talkList:[]
      }
    },
    methods: {
      talk(index) {
        this.$router.push({
          path: '/talkroom',
          home: 'talkroom',
          query: {
            msg: this.talkList[index].nickname,
            weixinnum:this.talkList[index].phone
          }
        })
      }
    },
    mounted(){
       this.$axios({
                    url: "http://localhost:3000/relist",
                    method: "post",
                    data: qs.stringify({
                      phone: localStorage.getItem("phone")
                   })
                 })
               .then((res) => {
                  this.talkList = res.data.xinxi.talkList;
               })
            .catch((err) => {
              console.log(err)
             });
            
            
    }
  }
</script>

<style scoped>
p{
  margin:0;
  padding:0;
}
  .homepage {
    margin-top: 3.5rem;
  }

  li {
    border-bottom: 1px solid #9e9a9a;
    justify-content: flex-start;
    align-items:center;
    display: flex;
    list-style: none;
   
    background: white;
  }

  li img {
    width: 2.5rem;
    height: 2.5rem;
    vertical-align: middle;
    margin: 0.5rem;

  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li div {

    font-size: 1rem;
    vertical-align: middle;
  }
  ul li div p{
    color: #9e9a9a;
  }

</style>
