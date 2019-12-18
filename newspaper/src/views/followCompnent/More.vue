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

      arr: []
    };
  },
  created() {
    // this.axios({
    //   method: "GET",
    //   url: "http://192.168.53.67:8080/data/follow.json"
    // }).then(result => {
      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      let data = this.follow;
      for (let i = 0; i < data.length; i++) {
        data[i]["btnColor"] = "#e4393c";
        data[i]["name"] = "关注";
      }
      this.followData.push(...data);
      this.$toast.clear();
    // });
  },
   computed: {
    ...mapState(["follow"])
  },
  updated() {
    // let status = localStorage.getItem("status");
    // status = JSON.parse(status);
    // console.log(this.followData);
    // let nameArr = [];
    // for (let j = 0; j < status.followArray.length; j++) {
    //   nameArr.push(status.followArray[j].title);
    // }
    // for (let k = 0; k < this.followData.length; k++) {
    //   let num = 0;
    //   num++
    //   if (
    //     this.followData[k].name === "取消关注" &&
    //     this.followData[k].title === nameArr[num]
    //   ) {
    //   }
    // }
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
        this.$router.push('longin');
        return;
      }
      status.followArray = this.arr;
      if (item.name === "关注") {
        item.name = "取消关注";
        item.btnColor = "#666";
        this.arr.push(item);
        localStorage.setItem("status", JSON.stringify(status));
        return;
      } else {
        for (let i = 0; i < status.followArray.length; i++) {
          if (i == index ) {
            status.followArray.splice(index);
          }
        }
        item.name = "关注";
        item.btnColor = "#e4393c";
        localStorage.setItem("status", JSON.stringify(status));
        //从用户的信息移除
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