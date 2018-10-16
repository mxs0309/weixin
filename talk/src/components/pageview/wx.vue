<template>
  <div class="homepage">
    <ul>
      <li @click="talk">
        <img :src="url">
        <span>{{msg}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'homepage',
    data() {
      return {
        msg: '顺其自然',
        url: require("../../assets/1.jpg")
      }
    },
    methods: {
      talk() {
        this.$router.push({
          path: '/talkroom',
          home: 'talkroom',
          query: {
            msg: this.msg,
          }
        })
      }
    }
  }
</script>

<style scoped>
  .homepage {
    margin-top: 3.5rem;
  }

  li {
    list-style: none;
    border-bottom: 1px solid #f5f5f5;
    background: white;
  }

  li img {
    width: 3.4rem;
    vertical-align: middle;
    margin: 0.5rem;

  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li span {
    font-size: 1.3rem;
    vertical-align: middle;
  }

</style>
