<template>
  <div class="more">
    <div class="fix">
      <van-nav-bar @click-left="onClickLeft" left-arrow title="更多关注" />
    </div>

    <div class="more-box">
      <div class="public clearfix" v-for="(item,index) in followData" :key="index">
        <div class="pic fl">
          <img class="auto-img" :src="item.img" alt />
        </div>
        <div class="brief fl">
          <span>{{item.title}}</span>
          <span>{{item.brief}}</span>
        </div>
        <div class="btn fr">
          <van-button
            @click="addTo(item,index)"
            round
            :color="item.btnColor"
            size="small"
          >{{item.name}}</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("indexModule");

export default {
  name: "more",
  data() {
    return {
      followData: [],

      arr: [],

      res: []
    };
  },
  created() {
    this.followData = this.follow;
  },
  computed: {
    ...mapState(["follow"])
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "follow" });
    },
    addTo(item, index) {
      let status = localStorage.getItem("status");
      status = JSON.parse(status);
      if (status == null) {
        this.$toast({
          duration: 1000,
          message: "请先登录再关注用户"
        });
        this.$router.push("longin");
        return;
      }
      status.followArray = this.arr;
      if (item.name === "关注") {
        item.name = "取消关注";
        item.btnColor = "#666";

        localStorage.setItem("length", JSON.stringify((length += 1)));
        return;
      } else {
        item.name = "关注";
        item.btnColor = "#e4393c";
        localStorage.setItem("length", JSON.stringify((length -= 1)));
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #e3d1bb;
}
.fix {
  position: sticky;
  top: 0;
  left: 0;
}
.more-box {
  height: 575px;
  overflow: hidden;
  overflow-y: auto;
}

.public {
  padding: 20px 10px;
  border-bottom: 1px solid #f1f1f1;
}
.pic {
  width: 50px;
  height: 50px;
  img {
    border-radius: 50%;
  }
}
.brief {
  padding: 0 10px;
  width: 200px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:first-child {
      font-weight: bold;
      font-size: 18px;
    }
    &:last-child {
      font-size: 16px;
      color: #666;
      margin-top: 5px;
    }
    display: block;
  }
}
.btn {
  padding: 10px 0;
}
</style>