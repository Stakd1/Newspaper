<template>
  <div class="home">
    <div class="top">
      <!-- <form sticky action="/">
        <van-search placeholder="请输入搜索关键词" />
      </form>-->
      <van-nav-bar title="星 闻">
        <van-icon @click="addTo" size="30" name="add-o" slot="right" />
        <van-icon @click="seach" size="30" name="search" slot="left" />
      </van-nav-bar>
    </div>

    <div class="wrap">
      <van-tabs :border="false" sticky v-model="activeName">
        <van-tab title="热门" name="a">
          <div class="count-box">
            <div class="count-title">
              <h1>{{top}}</h1>
            </div>
            <van-swipe class="img-box" :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="(item,index) in picArr" :key="index">
                <img class="auto-img" :src="item" alt />
              </van-swipe-item>
            </van-swipe>
            <div class="count-list">
              <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="list" v-for="(item,index) in list" :key="index" @click="getUrl(item)">
                  <div class="list-box">
                    <div class="list-title">
                      <span>{{item.title}}</span>
                    </div>
                    <div class="tip">
                      <span>{{item.site}}</span>
                    </div>
                  </div>
                  <div class="list-img">
                    <img class="auto-img" :src="item.url_images" alt />
                  </div>
                </div>
              </van-list>
            </div>
          </div>
        </van-tab>
        <van-tab title="推荐" name="b">
          <div class="count-box">
            <div class="count-list">
              <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div
                  class="list"
                  v-for="(item,index) in recommendData"
                  :key="index"
                  @click="getUrl(item)"
                >
                  <div class="list-box">
                    <div class="list-title">
                      <span>{{item.title}}</span>
                    </div>
                    <div class="tip">
                      <span>{{item.source}}</span>
                    </div>
                  </div>
                  <div class="list-img">
                    <img class="auto-img" :src="item.imgsrc" alt />
                  </div>
                </div>
              </van-list>
            </div>
          </div>
        </van-tab>
        <van-tab title="日报" name="c">
          <div class="count-box">
            <div class="count-list">
              <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div
                  class="list"
                  v-for="(item,index) in dailyData"
                  :key="index"
                  @click="getUrl(item)"
                >
                  <div class="list-box">
                    <div class="list-title">
                      <span>{{item.title}}</span>
                    </div>
                    <div class="tip">
                      <span>{{item.source}}</span>
                    </div>
                  </div>
                  <div class="list-img">
                    <img class="auto-img" :src="item.imgsrc" alt />
                  </div>
                </div>
              </van-list>
            </div>
          </div>
        </van-tab>
        <van-tab title="图片" name="d">
          <div class="count-box">
            <div
              class="count-list"
              @click="getUrl(item)"
              v-for="(item,index) in pictureData"
              :key="index"
            >
              <div class="picture-box">
                <img class="auto-img" :src="item.imgsrc" alt />
              </div>
              <div class="picture-title">
                <span>{{item.title}}</span>
                <div class="source">
                  <span>{{item.source}}</span>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
     
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("indexModule");

export default {
  name: "home",
  data() {
    return {
      picArr: [
        require("../../assets/images/02.jpg"),
        require("../../assets/images/03.jpg"),
        require("../../assets/images/04.jpg"),
        require("../../assets/images/05.jpg")
      ],
      //热门
      newsData: {},
      top: "",
      //推荐
      recommendData: "",
      //日报
      dailyData: "",

      //图片
      pictureData: "",

      activeName: "a",
      //加载数据
      list: [],
      loading: false,
      finished: false,

  
    };
  },
  created() {
    this.getNewsData();
    this.recommendData = this.recommend;
    this.dailyData = this.daily;
    this.pictureData = this.picture;
  },
  computed: {
    ...mapState(["newDatas", "recommend", "daily", "picture"])
  },
  methods: {
    getNewsData() {
      this.newsData = this.newDatas;
      // console.log(this.newsData);
      this.top = this.newDatas.top[0].abs;
      for (let i = 0; i < this.newsData.news.length; i++) {
        this.list.push(this.newsData.news[i]);
      }
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.newsData.news[i++]);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },

    getUrl(item) {
      console.log(item);
      

      this.$router.push({
        name: "hold",
        params: {
          url: item.url,
          title:item.tab
        }
      });
    },

    seach() {
      this.$router.push({ name: "seach" });
    },
    addTo() {
      this.$router.push({ name: "addto" });
    }
  }
};
</script>

<style lang="less" scoped>
.count-box {
  .img-box {
    height: 5.5rem;
  }
}
.home {
  height: 100%;
}

.wrap {
  height: 15.5rem;
  overflow: hidden;
  overflow-y: auto;
}
.list {
  height: 2.1rem;
  padding: 0.4rem;
  border-bottom: 1px solid #d4d4d4;
  .list-box {
    float: left;
    margin-right: 0.5rem;
    height: 100%;
  }

  .list-title {
    width: 5rem;
    max-width: 5rem;
    font-size: 0.5rem;
    height: 1.4rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .tip {
    padding-top: 0.3rem;
    color: #666;
  }
  .list-img {
    float: left;
    width: calc(100% - 5.5rem);
    height: 100%;
    background: #333;
  }
}

.count-title {
  // background: #666;
  padding: 0 0.4rem;
  h1 {
    font-size: 0.55rem;
    margin: 0.3rem 0;
  }
}
.van-nav-bar {
  background: #e3d1bb;
}

.picture-box {
  padding: 10px;
  height: 150px;
}
.picture-title {
  padding: 10px;
  font-size: 18px;
  .source {
    float: right;
    font-size: 16px;
    color: #666;
    padding: 10px;
  }
}
</style>