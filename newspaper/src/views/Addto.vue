<template>
  <div class="addto">
    <van-nav-bar title="添 加" left-text="返回" left-arrow @click-left="onLeft" />
    <div class="wrap">
      <ul>
        <li v-for="(item,index) in label" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("indexModule");

export default {
  name: "addto",
  data() {
    return {};
  },
  computed: {
    ...mapState(["label"])
  },
  methods: {
    onLeft() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  ul {
    margin-top: 10px;
    overflow: hidden;
    padding: 0 22px;
    li {
      width: 70px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-size: 16px;
      float: left;
      margin: 10px 5px;
      border: 1px solid #666;
      color: #666;
      border-radius: 10px;
    }
  }
}
</style>