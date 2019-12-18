<template>
  <div class="look">
    <div class="arrow">
      <van-nav-bar left-text="返回" left-arrow @click-left="onLeft" />
    </div>
    <div class="look-box">
      <video width="100%" :src="url" controls></video>
    </div>
    <div class="look-title">
      <span>{{title}}</span>
    </div>
    <div class="count">
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
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("indexModule");

export default {
  name: "look",
  data() {
    return {
      url: this.$route.params.url,
      title: this.$route.params.title,
      list: []
    };
  },
  created() {
    // this.url = this.$route.params.url;
    // this.title = this.$route.params.title;

    //请求数据
    // this.axios({
    //   method: "GET",
    //   url: "http://192.168.53.67:8080/data/news.json"
    // })
    //   .then(result => {
        // console.log("result=>", result);
        this.newsData = this.newDatas;
        this.top = this.newDatas.top[0].abs;
        for (let i = 0; i < this.newsData.news.length; i++) {
          this.list.push(this.newsData.news[i]);
        }
      // })
      // .catch(err => {
        // console.log(err);
      // });
  },
  computed: {
    ...mapState(["newDatas"])
  },
  methods: {
    onLeft() {
      this.$router.push("videos");
    }
  }
};
</script>

<style lang="less" scoped>


.look-title {
  padding: 10px;
  span {
    font-weight: bold;
    font-size: 20px;
  }
}
.count {
  padding: 10px;
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
</style>