<template>
  <div class="seting">
    <div>
      <van-nav-bar title="设 置">
        <van-icon @click="jumpRout" size="20" name="arrow-left" slot="left" />
      </van-nav-bar>
    </div>

    <div class="set-box">
      <van-cell
        title="用户名"
        value-class="ret"
        :value="userName"
        size="large"
      />
      <van-cell
        title-style="color:#e4393c"
        title="城市"
        value-class="ret"
        icon="location-o"
        value="切换"
        size="large"
      />
    </div>

    <div class="btn" :class="active">
      <van-button
        @click="userReturn"
        color="#e4393c"
        type="primary"
        size="large"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "seting",
  data() {
    return {
      active: "",
      userName: ""
    };
  },
  created() {
    // this.axios({
    //   methods:'GET',
    //   url:'https://www.tianqiapi.com/api?&appid=94537594&appsecret=5f7VEYgM',
    // }).then(result=>{
    //   console.log(result);

    // }).catch(err=>{
    //   console.log(err);

    // })

    let useData = localStorage.getItem("status");
    useData = JSON.parse(useData);
    // console.log(useData);
    if (useData == null) {
      // console.log("未登录");
      this.active = "active";
      return;
    }
    this.userName = useData.userName;
  },
  methods: {
    jumpRout() {
      this.$router.push("my");
    },
    userReturn() {

      localStorage.setItem("length", JSON.stringify(0));
      localStorage.removeItem("status");
      this.$router.push("my");
    }
  }
};
</script>

<style lang="less" scoped>
.set-box {
  border-top: 3px solid #f1f1f1;
  border-bottom: 10px solid #f1f1f1;
}
.ret {
  color: #e4393c;
  font-size: 16px;
}
.van-nav-bar {
  background: #e3d1bb;
}
.btn {
  padding: 10px;
}
.active {
  display: none;
}
</style>
