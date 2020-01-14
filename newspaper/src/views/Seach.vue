<template>
  <div class="seach">
    <div class="arrow">
      <van-nav-bar left-text="返回" left-arrow @click-left="backRouter" />
    </div>
    <div class="seach-inp">
      <form action="/">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch(value)" />
        <!-- <div slot="action">搜索</div> -->
      </form>

      <div class="hold">
        <div class="hold-box">
          <van-icon class="icon" name="fire-o" />
          <span>热门搜索</span>
        </div>

        <div class="ranking clearfix">
          <div>
            <i>1</i>林更新活跃像粉头
          </div>
          <div>
            <i>2</i>武磊登上电影频道
          </div>
          <div>
            <i>3</i>昆明至攀枝花动车
          </div>
          <div>
            <i>4</i>明道哥哥尸检结果
          </div>
          <div>
            <i>5</i>湖人单场20记盖帽
          </div>
          <div>
            <i>6</i>印尼6.3级地震
          </div>
        </div>

        <div class="history">历史搜索记录</div>
        <div class="record">
          <div>
            记录一
            <van-icon class="fr" name="cross" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Qs from "qs";
export default {
  name: "seach",
  data() {
    return {
      value: "",

      params: {
        keyword: "",
        appkey: "d33404179b9f0d8f"
      }
      //http://isoyu.com/?q={$q}
      //接口URL中的{$q}代码搜索词
      //appkey:d33404179b9f0d8f
      //PQgj6XJiU4ZEWOzwv5u4suk9r4RpBSH2
      //示例=>https://api.binstd.com/news/search?keyword=姚明&appkey=yourappkey
      // https://api.binstd.com/news/search
    };
  },

  methods: {
    backRouter() {
      this.$router.push("home");
    },
    onSearch(v) {
      // console.log(v);
      this.params.keyword = v;
   
      this.axios({
        method: "GET",
        url: "/search",
        params: this.params
      })
        .then(result => {
          // alert("result=>", result);
        })
        .catch(err => {
          // alert(err);
        });
    }
  }
};
</script>


<style lang="less" scoped>
.hold {
  height: 200px;
  // background: #eee;
}
.hold-box {
  color: #e4393c;
  font-size: 16px;
  padding: 10px;

  span {
    color: #666;
    margin-left: 5px;
  }
}
.ranking {
  margin: 0 10px;
  padding: 10px;
  font-size: 16px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  div {
    margin: 2px 0;
    overflow: hidden;
    empty-cells: hide;
    color: #454545;
    float: left;
  }
  i {
    padding: 5px;
    margin: 0 5px 0 10px;
    background: #d1d1d1;
    text-align: center;
    font-style: normal;
  }
}
.history {
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 10px;
  margin: 10px;
  border-bottom: 1px solid #666;
}
.record {
  // text-align: center;
  font-size: 16px;
  color: #666;
  div {
    padding: 10px;
    margin: 10px;
    border-bottom: 1px solid #eee;
  }
}
</style>

