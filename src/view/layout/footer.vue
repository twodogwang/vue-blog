<template>
  <div class="blog-footer">
      <div class="icons">
        <template v-for="(item,index) in icons">
            <a target="_blank" :key="index" :href="item.url"><img  :src="item.picUrl" :title="item.alt" :alt="item.alt"></a>
        </template>
      </div>
      <div class="intro">这里是一句撞壁的话</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {// eslint-disable-next-line
          picUrl: require("../../assets/GitHub.svg"),
          url: "https://github.com/twodogwang",
          alt: "GayHub"
        },
        {// eslint-disable-next-line
          picUrl: require("../../assets/weibo.svg"),
          url: "",
          alt: "Weibo"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.blog-footer {
  background-color: #009a61;
  border-radius: 5px;
  padding-bottom: 2em;
  .icons {
    display: flex;
    justify-content: center;
    padding-top: 2em;
    padding-bottom: 2em;
    img {
      margin-left: 1em;
      margin-right: 1em;
      cursor: pointer;
    }
  }
  .intro {
    text-align: center;
    color: #fff;
    font-size: 12px;
    cursor: default;
  }
}
</style>

