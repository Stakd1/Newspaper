<template>
  <div class="collection">
    <van-nav-bar title="收 藏" left-text="返回" left-arrow @click-left="onLeftClick" />

    <div class="no-coll" v-show="isShow">
      <span>暂无收藏</span>
    </div>

    <div class="video-box">
      <div class="list-box" v-for="(item, index) in dataArr" :key="index" ref="lists">
        <div class="img-box">
          <img @click="viedoUrl(item)" class="auto-img" :src="item.imgUrl" alt />
        </div>
        <div class="btn">
          <van-icon color="#fff" size="60" name="play-circle-o" />
        </div>
        <div class="wrap-box">
          <div class="title fl">
            <span>{{ item.title }}</span>
          </div>
          <div class="icon fr">
            <!-- <van-icon @click="getCollec(item)" size="35" name="share" /> -->
            <van-icon
              @click="getCollec(item,index)"
              size="35"
              :name="item.isIcon ? 'like' : 'like-o'"
              :class="item.isIcon ? 'active' : ''"
            />
          </div>
        </div>

        <div class="source">
          <span>#{{ item.source }}#</span>
          <span>
            <van-icon size="16" color="#F47378" name="fire-o" />1234
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("indexModule");

export default {
  name: "collection",

  data() {
    return {
      dataArr: [],
      isShow: true
    };
  },
  created() {
    // this.dataArr = this.$route.params.item;
    // console.log(this.dataArr);

    // console.log(this.msgcode);
    let status = localStorage.getItem("status");
    // status = JSON.parse(status);
    if (status == null) {
        this.dataArr=[];
        return;
    }
    for (let i = 0; i < this.msgcode.length; i++) {
      // console.log(this.msgcode[i].isIcon);
      if (this.msgcode[i].isIcon == true) {
        // console.log(this.msgcode[i])
        this.dataArr.push(this.msgcode[i]);
      }
    }
    if (this.dataArr.length === 0) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  },
  computed: {
    ...mapState(["msgcode"])
  },

  methods: {
    onLeftClick() {
      this.$router.push({ name: "my" });
    },
    viedoUrl(item) {
      this.$router.push({
        name: "look",
        params: {
          url: item.videos,
          title: item.title,
          item
        }
      });
    },
    getCollec(item, index) {
      // let arr = [];
      // console.log("当前点击=>", index);

      item.isIcon = !item.isIcon;
      // console.log(item.isIcon);

      if (item.isIcon == false) {
        let isArr = this.dataArr.filter(element => {
          if (element.isIcon === true) {
            return true;
          }
        });
        this.dataArr = isArr;
        this.dataArr.length == 0 ? this.isShow = true :this.isShow = false 
       
      }
    }
  }
};
</script>

<style lang="less" scoped>
.collection {
  .no-coll {
    text-align: center;
    line-height: 300px;
    font-size: 20px;
    color: #d1d1d1;
  }
}
.video-box {
  padding-top: 5px;
  height: 15rem;
  overflow-y: auto;
}
.list-box {
  position: relative;
  border-bottom: 5px solid #f3f2f2;
  box-shadow: 0px 0px 5px 0px #666;
  padding-top: 5px;
  .img-box {
    height: 5.6rem;
  }
  .btn {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 75px;
    right: 0;
    left: 0;
    border-radius: 50%;
    opacity: 0.5;
    margin: 0 auto;
  }
  .title {
    width: calc(100% - 80px);
    padding: 5px 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    span {
      font-size: 19px;
      font-weight: bold;
    }
  }
  .icon {
    color: #aaa;
    padding: 20px 15px 0px 0px;
    .active {
      color: #e4393c;
    }
  }
  .source {
    padding: 0 10px 10px;

    span {
      &:first-child {
        font-size: 16px;
        margin-right: 20px;
        color: #e4393c;
      }
      color: #333;
      font-size: 14px;
    }
  }
  .wrap-box {
    overflow: hidden;
  }
}
</style>
