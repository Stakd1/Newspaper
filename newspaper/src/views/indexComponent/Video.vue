<template>
  <div class="videos">
    <van-nav-bar title="视频"></van-nav-bar>

    <div class="video-box" @scroll="lazy($event)">
      <div class="list-box" v-for="(item, index) in videoData" :key="index" ref="lists">
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

      <div :class="last">
        <van-divider :style="{ color: '#666', borderColor: '#666', padding: '0 16px' }">我是有底线的</van-divider>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("indexModule");

export default {
  name: "videos",

  data() {
    return {
      videoData: [],

      //截取数据
      start: 0,
      count: 10,

      isHas: true,
      last: "last",

      collecArr: []
    };
  },
  created() {
    this.getVideo();
  },
  computed: {
    ...mapState(["msgcode"])
  },
  methods: {
    getVideo() {
      let self = this;

      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      let datas = this.msgcode.slice(self.start, self.count);
      self.videoData.push(...datas);
      this.$toast.clear();
    },
    lazy(e) {
      let self = this;
      if (!self.isHas) {
        this.last = "";
        return;
      }
      let boxHeight = document.querySelector(".list-box").clientHeight;
      let lastChild = self.$refs.lists[self.$refs.lists.length - 1];

      if (e.target.scrollTop + boxHeight >= lastChild.offsetTop) {
        let datas = this.msgcode.slice(self.start + 10, self.count + 10);
        self.videoData.push(...datas);
        this.$toast.clear();
        if ((this.msgcode.length = self.videoData.length)) {
          self.isHas = false;
        }
        this.$toast.clear();
      }
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
       let status = localStorage.getItem("status");
      status = JSON.parse(status);
      if (status == null) {
        this.$toast({
          duration: 1000,
          message: "请先登录再收藏视频"
        });
        this.$router.push("longin");
        return;
      }

      // let collecArr = localStorage.getItem("collecArr");
      // collecArr = collecArr ? JSON.parse(collecArr) : [];
      // console.log(index);
      item.isIcon = !item.isIcon;
      // console.log(item.isIcon);
      
      if (item.isIcon == true) {
        this.collecArr.push(item);
        // console.log("关注");
        this.$toast({
          duration: 1000,
          message: "收藏成功!"
        });

        
        // console.log(this.collecArr);
        // localStorage.setItem("collecArr", JSON.stringify(collecArr));

      } else {
        
        
        // for (let i = 0; i < this.collecArr.length; i++) {
        //   if (this.collecArr[i].isIcon == false) {
        //     console.log(i);
        //     this.collecArr.slice(i,1);
        //   }
        // }
        // console.log(this.collecArr);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #e3d1bb;
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
.last {
  display: none;
}
</style>
