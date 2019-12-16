<template>
  <div class="my">
    <div class="portrait">
      <div class="img-box" @click="logIn">
        <img class="auto-img" :src="userImg" alt />
      </div>
      <div class="uesr-name">
        <span>{{userName}}</span>
      </div>

      <div class="fans">
        <span>
          <b>0</b>关注
        </span>
        <span>
          <b>0</b>粉丝
        </span>
      </div>
    </div>

    <div class="meau">
      <van-grid>
        <van-grid-item clickable icon="envelop-o" info="99+" text="消息" />
        <van-grid-item clickable icon="star-o" text="收藏" />
        <van-grid-item clickable icon="chat-o" text="评论" />
        <van-grid-item clickable icon="underway-o" text="历史" />
      </van-grid>

      <van-cell-group>
        <van-cell size="large" title="离线下载" is-link />
        <van-cell size="large" title="任务系统" is-link />
        <van-cell size="large" title="绑定邀请码" is-link />
        <van-cell size="large" title="推荐给好友" is-link />
        <van-cell size="large" title="设置" is-link to="seting" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {
      userData: null,
      userImg: require("../../assets/icon/up.png"),
      userName: "点击头像登录"
    };
  },

  mounted() {
    let data = localStorage.getItem("status");
    if (data != null) {
      this.userImg = require("../../assets/icon/uphead.png");
      this.userData = JSON.parse(data);
      this.userName = this.userData.userName;
      this.userImg = this.userData.portrait;
    }
  },
  methods: {
    logIn() {
      if (this.userData === null) {
        this.$router.push("login");
      } else {
      }
    }
  }
};
</script>

<style lang="less" scoped>
.portrait {
  height: 6rem;
  background: url("../../assets/images/head.jpg") no-repeat center center;
  background-size: cover;
  border-bottom: 0.267rem solid #fff;
  position: relative;
  .img-box {
    width: 1.86rem;
    height: 1.86rem;
    border-radius: 50%;
    position: absolute;
    border: 0.267rem solid #fff;
    background-color: #e3d1bb;
    bottom: -1.33rem;
    left: 0.32rem;
    img {
      border-radius: 50%;
    }
  }
  .uesr-name {
    width: 6rem;
    position: absolute;
    bottom: 0;
    left: 3.3rem;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.64rem;
    color: #f1f1f1;
  }
}
.fans {
  position: absolute;
  bottom: -40px;
  left: 100px;
  span {
    color: #666;
    font-size: 14px;
    padding: 0 10px;
    b {
      color: #000;
      margin: 0.1rem;
      font-size: 20px;
      font-weight: normal;
    }
  }
}
.meau {
  padding-top: 1.467rem;
  background-color: #e3d1bb;
}
</style>