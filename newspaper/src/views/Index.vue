<template>
  <div class="index">
    <div class="top">
      <form action="/">
        <van-search placeholder="请输入搜索关键词" />
      </form>
    </div>

    <div>
      <van-tabs :border="false" sticky v-model="activeName">
        <van-tab title="热门" name="a">
          <div class="count-box">
            <div class="count-title">
              <h1>{{top}}</h1>
            </div>

            <van-swipe class="img-box" :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="(item,index) in chart" :key="index">
                <img class="auto-img" :src="item" alt />
              </van-swipe-item>
            </van-swipe>

            <div class="count-list">
              <div class="list" v-for="(item,index) in newData" :key="index">
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
            </div>
          </div>
        </van-tab>
        <van-tab title="推荐" name="b">内容 2</van-tab>
        <van-tab title="日报" name="c">内容 3</van-tab>
        <van-tab title="搞笑" name="d">内容 4</van-tab>
      </van-tabs>
    </div>

    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="column">新闻</van-tabbar-item>
        <van-tabbar-item name="search" icon="video">视频</van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends-o">关注</van-tabbar-item>
        <van-tabbar-item name="setting" icon="contact">我</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      top: "",
      chart: "",
      newData: "",

      active: "home",
      activeName: "a"
    };
  },

  created() {
    //请求数据
    this.axios({
      method: "GET",
      url: "http://192.168.53.67:8080/data/news.json"
    })
      .then(result => {
        // console.log("result=>", result);
        this.newData = result.data.news;
        this.top = result.data.top[0].abs;
        this.chart = result.data.chart;
        // console.log();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.count-box {
  .img-box {
    height: 5.3rem;
  }
}

.list {
  height: 2.1rem;
  // background: #ddd;
  padding: 0.4rem;
  border-bottom: 1px solid #d4d4d4;
  .list-box {
    overflow: hidden;
    float: left;
    margin-right: 0.5rem;
    // background: #666;
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
    // height: 100%;
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
.top {
  position: sticky;
}
</style>