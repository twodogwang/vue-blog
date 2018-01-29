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
      <router-link v-if='prev_id' class="link" :to="{name:'article',params:{id:prev_id}}"><el-button type="success">上一篇</el-button></router-link>
      <router-link v-if="next_id" class="link" :to="{name:'article',params:{id:next_id}}"><el-button type="success">下一篇</el-button></router-link>
      <!-- <el-button v-if='prev_id' @click="viewOther(prev_id)" type="success">上一篇</el-button> -->
      <!-- <el-button v-if="next_id" @click="viewOther(next_id)" type="success">下一篇</el-button> -->
  </div>
</template>

<script>
import { getArticleDetail } from "../../api/index";

export default {
  beforeCreate() {
    this.xiaoyang(this.$route);
    getArticleDetail(this.$route.params).then(res => {
      // this.xiaoyang(res);
      // Object.assign(this.article, res.article);
      this.article = res.article.result;
      this.prev_id = res.article.prev_id;
      this.next_id = res.article.next_id;
    });
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      article: {
        title: "",
        tags: "",
        date: "",
        content: ""
      },
      prev_id: "",
      next_id: ""
    };
  },
  beforeUpdate() {
    // console.log("beforeUpdate");
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  },
  methods: {
    viewOther(id) {
      getArticleDetail({ id }).then(res => {
        // this.xiaoyang(res);
        // Object.assign(this.article, res.article);
        this.article = res.article.result;
        this.prev_id = res.article.prev_id;
        this.next_id = res.article.next_id;
      });
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.xiaoyang(to);
    this.xiaoyang(from);
    getArticleDetail(to.params).then(res => {
      // this.xiaoyang(res);
      // Object.assign(this.article, res.article);
      this.article = res.article.result;
      this.prev_id = res.article.prev_id;
      this.next_id = res.article.next_id;
    });
    next();
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
  .date {
    font-size: 12px;
    margin-top: 0.5em;
    color: #969696;
  }
  .content {
    font-size: 14px;
    text-indent: 2em;
    word-wrap: break-word;
    padding-right: 1em;
  }
  .link {
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease;
    &:hover {
      // padding-left: 1em;
    }
    &:visited {
      color: #fff;
    }
  }
}
</style>
<style>
li {
  list-style: none;
}
</style>

