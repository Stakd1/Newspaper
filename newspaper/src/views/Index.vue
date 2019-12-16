<template>
  <div class="index">
    <router-view></router-view>

    <van-tabbar v-model="tabActive">
      <van-tabbar-item
        v-for="(item,index) in tabData"
        :key="index"
        :name="item.name"
        :icon="item.icon"
        @click="togPage({name:item.name})"
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { nextTick } from "q";

const { mapState } = createNamespacedHelpers("indexModule");

export default {
  name: "index",
  data() {
    return {
      tabActive: "home"
    };
  },
  computed: {
    ...mapState(["tabData"])
  },
  mounted() {
    if (this.$router.history.current.name == "more") {
      this.tabActive = "follow";
      return
    }
    this.tabActive = this.$router.history.current.name;
  },

  methods: {
    togPage(name) {
      this.$router.push(name);
    }
  }
};
</script>

<style lang="less" scoped>
</style>