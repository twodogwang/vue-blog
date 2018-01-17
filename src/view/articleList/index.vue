<template>
  <div class="articleList">
      <template v-for="article in articleList">
          <test :test="article.test" :key="article.test.h2">
              <!-- <h5 slot="foot">{{article.test.foot}}</h5> -->
          </test>
      </template>
  </div>
</template>

<script>
import test from "./articlelist";
export default {
  data() {
    return {
      articleList: [
        {
          test: {
            a: "https://www.baidu.com",
            h2: "ThinkJS",
            span:
              "本质上和express框架、koa框架差不多。MVC框架：用户通过对应uri接口可以访问router，通过为对应uri定义的controller对请求进行操作，返回Json数据或者直接渲染模板引擎，如ejs、nunjucks等。",
            p: "基本结构如下",
            foot: "foot"
          }
        },
        {
          test: {
            a: "https://www.bilibili.com",
            h2: "vue-router和router-view标签的关系",
            span: "children层数对应router-view的层级关系",
            p:
              "如果需要渲染出/father/son层级对应的组件，需要有同样嵌套层级的，在第一层中渲染father组件，在下一层中渲染出son组件。所以需要嵌套的标签来渲染出对应嵌套的route对象。",
            foot: "footer"
          }
        }
      ]
    };
  },
  components: { test }
};
</script>

<style lang="less" scoped>

</style>

