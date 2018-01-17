<template>
  <div class="article">
      <h2><a :href="test.a">{{test.h2}}</a></h2>
      <span>{{test.span}}</span>
      <p>{{test.p}}</p>
      <!-- <slot name="foot"></slot> -->
  </div>
</template>

<script>
export default {
  props: {
    test: Object
  }
};
</script>

<style lang="less" scoped>
.article {
  text-align: center;
  padding: 1em 10%;
  h2 {
    a {
      color: rgb(68, 68, 68);
      text-decoration: none;
      transition: all 0.2s ease;
      &:hover {
        padding-left: 2em;
      }
      &:visited {
        color: rgb(68, 68, 68);
      }
    }
  }
  span {
    color: #929292;
  }
  p {
    color: rgb(68, 68, 68);
  }
}
</style>

