<template>
  <div class="article">
      <h2><router-link :to="{name:'article',params:{id:data.id||test.id}}">{{data.title||test.title}}</router-link></h2>
      <span>{{data.tags||test.tags}}</span>
      <p>{{data.abstract||test.abstract}}</p>
      <!-- <button @click="plus">plus</button> -->
      <!-- <slot name="foot"></slot> -->
  </div>
</template>

<script>
var bus = require("./bus.js");

export default {
  props: {
    test: Object,
    str: Array,
    data: Object
  },
  methods: {
    plus(a) {
      this.str.push(a);
      console.log(this.str);
    }
  },
  created() {
    // console.log(this);
    bus.$on("fromP", function() {
      console.log("fromP");
    });
    /* function xiaoyang(xiaoyang) {
      // const env = process.env.NODE_ENV;
      const env = 'development';
      // const env = 'production';
      switch (env) {
        case "development":
          console.log(xiaoyang);
          break;

        default:
          return;
          break;
      }
    } */
    // xiaoyang('xiaoyang')
    /* this.$on("test2", function() {
      console.log("test1方法触发");
      // this.str = 1;
    });
    window.xiaoyang=function(){
      console.log('拉粑粑')
    }
    xiaoyang() */
  }
};
</script>

<style lang="less" scoped>
.article {
  text-align: center;
  padding: 1em 7%;
  h2 {
    a {
      color: rgb(68, 68, 68);
      text-decoration: none;
      transition: all 0.2s ease;
      &:hover {
        padding-left: 1em;
      }
      &:visited {
        color: rgb(68, 68, 68);
      }
    }
  }
  span {
    color: #929292;
    display: inline-block;
    width: 90%;
  }
  p {
    color: rgb(68, 68, 68);
    padding: 0.5em 1em;
  }
}
</style>

