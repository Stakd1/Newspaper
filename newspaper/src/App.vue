<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
.auto-img {
  width: 100%;
  height: 100%;
  display: block;
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
</style>
