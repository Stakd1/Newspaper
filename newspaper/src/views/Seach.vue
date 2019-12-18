<template>
  <div class="seach">
    <div class="arrow">
      <van-nav-bar left-text="返回" left-arrow @click-left="backRouter" />
    </div>
    <iframe
      src="http://isoyu.com/?a=code&type=search"
      frameborder="0"
      scrolling="no"
      width="100%"
      height="34"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "seach",
  data() {
    return {
      //http://isoyu.com/?q={$q}
      //接口URL中的{$q}代码搜索词
    };
  },
  methods: {
    backRouter() {
      this.$router.push("home");
    }
  }
};
</script>

