<template>
  <div :style="{height:bannerImgHeight}" class="blog-banner">
      <div class="intro">
          <div class="avatar"></div>
      </div>
      <!-- <div class="banner-img">
          <img ref="img" src="http://ww1.sinaimg.cn/large/6cea169fjw1edgyzma1xcj21kw16ohba.jpg" alt="这是background">
      </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImgTop: window.screen.availHeight + "px",
      bannerImgHeight: window.screen.availHeight - 40 + "px",
      test: 123
    };
  },
  computed: {
    /* bannerImgTop() {
      if (window.screen.availHeight)
      return window.screen.availHeight+'px'
    } */
  },
  /* watch: {
      test:function(){
          console.log('++++++++++')
          this.bannerImgHeight = 100+'px';
      }
  }, */
  mounted() {
    /* console.log(this.bannerImgTop);
    const imgH = this.$refs.img.offsetHeight,
      imgW = this.$refs.img.offsetWidth,
      divH = this.$refs.img.parentElement.offsetHeight,
      divW = this.$refs.img.parentElement.offsetWidth,
      imgRatio = imgH/imgW,
      divRatio = divH/divW; */
    this.bannerImgHeight = document.documentElement.clientHeight - 40 + "px";
    window.onresize = () => {
      this.bannerImgHeight = document.documentElement.clientHeight - 40 + "px";
      // console.log(window.screen.availHeight)
      //   console.log(this.$refs.img.parentElement);
      /* while (
        this.$refs.img.offsetHeight < this.$refs.img.parentElement.offsetHeight
      ) {
        this.$refs.img.style.height =
          this.$refs.img.parentElement.offsetHeight + "px";
        this.$refs.img.style.left =
          this.$refs.img.parentElement.offsetWidth - this.$refs.img.offsetWidth;
      }
      while (
        this.$refs.img.offsetWidth < this.$refs.img.parentElement.offsetWidth
      ) {
        this.$refs.img.style.width =
          this.$refs.img.parentElement.offsetWidth + "px";
      } */
    };
    /* setInterval(() => {
      console.log(document.body.clientHeight);
    }, 1000); */
  }
};
</script>

<style lang="less" scoped>
.blog-banner {
  position: relative;
  background-image: url(http://ww1.sinaimg.cn/large/6cea169fjw1edgyzma1xcj21kw16ohba.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .intro {
    width: 100%;
    .avatar {
      //   position: absolute;
      width: 150px;
      height: 150px;
      background-image: url(../../assets/logo.png);
      background-color: #fff;
      background-size: cover;
      margin: 50px auto;
      //   transform: translateX(50%);
      border: 1px solid #fff;
      border-radius: 75px;
      box-shadow: #000;
    }
  }
  .banner-img {
    background-image: url(http://ww1.sinaimg.cn/large/6cea169fjw1edgyzma1xcj21kw16ohba.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>

