<template>
  <div class="message">
    <van-nav-bar title="消 息" left-text="返回" left-arrow @click-left="onLeftClick" />
    <div class="message-box">
      <van-cell-group>
        <van-cell size="large" title="系统通知" is-link />
        <van-cell size="large" title="私聊" is-link />
      </van-cell-group>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {};
  },
  methods: {
    onLeftClick() {
      this.$router.push({ name: "my" });
    }
  }
};
</script>

<style lang="less" scoped>
.van-cell-group {
  padding: 10px;
}
.van-cell {
  border: 2px solid #eee;
  border-radius: 10px;
  margin-top: 5px;
}
.message-box{
  border-bottom: 2px solid #eee;
}
</style>