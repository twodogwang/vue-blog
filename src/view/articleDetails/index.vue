<template>
  <div class="article">
      <p class="title">
        {{article.title}}
      </p>
      <p class="tags">
        {{article.tags}}
      </p>
      <p class="date">
        {{article.date}}
      </p>
      <p v-html="article.content" class="content">

      </p>
  </div>
</template>

<script>
import { getArticleDetail } from "../../api/index";

export default {
  created() {
    // this.xiaoyang(this.$route.name);
    getArticleDetail().then(res => {
      // this.xiaoyang(res);
      Object.assign(this.article, res.article);
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

<style>

</style>
