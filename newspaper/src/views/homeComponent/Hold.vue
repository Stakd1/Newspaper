<template>
  <div class="hold">
    <div>
      <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onlick" />
    </div>
    <iframe class="box" height="100%" width="100%" :src="url" frameborder="0" scrolling="no"></iframe>
  </div>
</template>
<script>
export default {
  name: "hold",
  data() {
    return {
      url: "",
      title: ""
    };
  },
  created() {
    this.url = this.$route.params.url;
    this.title = this.$route.params.title;
  },
  methods: {
    onlick() {
      this.$router.push("home");
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  height: 620px;
}
iframe {
  body,
  html {
    width: 100%;
    overflow: hidden;
    height: 100%;
  }
}
</style>