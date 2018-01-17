<template>
  <div id="app">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { appHeader, appFooter, appBanner, appMain } from "@/view/layout";

export default {
  name: "App",
  components: { appHeader, appFooter, appBanner, appMain }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
