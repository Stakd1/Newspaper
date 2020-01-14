<template>
  <div class="comment">
    <van-nav-bar title="评 论" left-text="返回" left-arrow @click-left="onLeftClick" />

    <div class="no-coll" v-show="isShow">
      <span>暂无评论</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    onLeftClick() {
      this.$router.push({ name: "my" });
    }
  }
};
</script>

<style lang="less" scoped>
.no-coll {
  text-align: center;
  line-height: 300px;
  font-size: 20px;
  color: #d1d1d1;
}
</style>