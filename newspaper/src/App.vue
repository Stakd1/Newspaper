<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  height: 100%;
}
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
.fl {
  float: left;
}
.fr {
  float: right;
}
.van-nav-bar__title {
  color: #666;
  font-weight: bold;
  font-size: 20px;
}

</style>
