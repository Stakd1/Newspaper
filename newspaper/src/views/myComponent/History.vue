<template>
  <div class="history">
    <van-nav-bar title="历 史" left-text="返回" left-arrow @click-left="onLeftClick" />
  </div>
</template>

<script>
export default {
  name: "history",
  data() {
    return {
      historyArr:[]
    };
  },
  created() {
    this.historyArr = this.$route.params.item;
    // console.log('this.historyArr=>',this.historyArr);
    
  },
  methods: {
    onLeftClick() {
      this.$router.push({ name: "my" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>