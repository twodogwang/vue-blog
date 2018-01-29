<template>
  <div class="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.app-main {
  padding-bottom: 1.5em;
}
</style>

