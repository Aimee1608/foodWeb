<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   metaInfo: {
    title: '首页',
    titleTemplate: '%s - 美食美荟',
    htmlAttrs: {
        lang: 'zh'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444444;
  min-height: 100vh;
}
</style>
