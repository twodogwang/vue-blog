<template>
  <div class="articleList">
      <template v-for="(article,index) in articleList">
          <list ref="articleList" :str="str" :test="article.test" :key="index" :data="article">
              <!-- <h5 slot="foot">{{article.test.foot}}</h5> -->
          </list>
      </template>
      <div class="page">
      <el-pagination
      :background="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size='pageSize'
      layout="total, prev, pager, next"
      :total='total'>
    </el-pagination>

      </div>
      <!-- <button @click="test1">test</button> -->
  </div>
</template>

<script>
import list from "./articlelist";
import { getArticleList } from "@/api";
var bus = require("./bus");

export default {
  data() {
    return {
      articleList: [
        /* {
          test: {
            a: "https://www.baidu.com",
            h2: "ThinkJS",
            span:
              "本质上和express框架、koa框架差不多。MVC框架：用户通过对应uri接口可以访问router，通过为对应uri定义的controller对请求进行操作，返回Json数据或者直接渲染模板引擎，如ejs、nunjucks等。",
            p: "基本结构如下",
            foot: "foot",
            id: 1
          }
        },
        {
          test: {
            a: "https://www.bilibili.com",
            h2: "vue-router和router-view标签的关系",
            span: "children层数对应router-view的层级关系",
            p:
              "如果需要渲染出/father/son层级对应的组件，需要有同样嵌套层级的，在第一层中渲染father组件，在下一层中渲染出son组件。所以需要嵌套的标签来渲染出对应嵌套的route对象。",
            foot: "footer",
            id: 2
          }
        } */
      ],
      str: [1],
      currentPage: 1,
      pageSize: 5,
      total: 5
    };
  },
  components: { list },
  methods: {
    test1() {
      // this.$refs.articleList[0].plus(456);
      bus.$emit("fromP");
    },
    handleSizeChange(size) {
      getArticleList({
        pageNum: 1,
        pageSize: size
      }).then(res => {
        this.articleList = res.result.data;
        this.currentPage = res.result.currentPage;
        this.pageSize = res.result.pageSize;
        this.total = res.result.count;
      });
    },
    handleCurrentChange(page) {
      getArticleList({
        pageNum: page,
        pageSize: 10
      }).then(res => {
        this.articleList = res.result.data;
        this.currentPage = res.result.currentPage;
        this.pageSize = res.result.pageSize;
        this.total = res.result.count;
      });
    }
  },
  beforeCreate() {
    getArticleList().then(res => {
      this.articleList = res.result.data;
      this.currentPage = res.result.currentPage;
      this.pageSize = res.result.pageSize;
      this.total = res.result.count;
    });
  }
};
</script>

<style>
.page {
  text-align: center;
}
.btn-prev,
.btn-next,
.number {
  background-color: rgb(255, 245, 225) !important;
}
.active {
  color: #009a61 !important;
}
</style>

