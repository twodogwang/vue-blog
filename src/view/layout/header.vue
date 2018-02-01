<template>
  <div class="blog-header">
      <div class="header">
          <a href="./" class="link"><span class="headerLink">主页</span></a>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@font: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
@linkcolor :rgb(29, 83, 52);

.blog-header {
  .header {
    height: 40px;
    line-height: 40px;
    font-family: @font;
    font-weight: 100;
    color: @linkcolor;
    padding-left: 20%;
    a {
      text-decoration: none;
    transition: all 0.3s ease;
      // color: #000;
      &:visited {
        color: @linkcolor;
      }
      &:hover {
          font-size: 1.12em;
          color: rgb(221, 6, 6);
      }
    }
  }
}
</style>
