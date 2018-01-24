<template>
  <div class="article">
      <h2 class="title">
        {{article.title}}
      </h2>
      <p class="tags">
        {{article.tags}}
      </p>
      <p class="date">
        {{article.date}}
      </p>
      <p v-html="article.content" class="content">

      </p>
      <el-button type="success">上一篇</el-button>
  </div>
</template>

<script>
import { getArticleDetail } from "../../api/index";

export default {
  created() {
    // this.xiaoyang(this.$route.name);
    getArticleDetail().then(res => {
      // this.xiaoyang(res);
      // Object.assign(this.article, res.article);
      this.article = res.article;
    });
  },
  data() {
    return {
      article: {
        title: "",
        tags: "",
        date: "",
        content: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
.article {
  padding-left: 1.5em;
  .title {
    font-size: 20px;
  }
  .tags {
    font-size: 12px;
    margin-bottom: 0.5em;
    color: #b3b3b3;
  }
  .date{
    font-size: 12px;
    margin-top: 0.5em;
    color: #969696;
  }
  .content{
    font-size: 14px;
    text-indent: 2em;
    word-wrap: break-word;
    padding-right: 1em;
  }
}
</style>

