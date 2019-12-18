<template>
  <div class="follow">
    <van-nav-bar title="我的关注" />
    <div class="follow-box clearfix">
      <div class="public clearfix" v-for="(item,index) in followData" :key="index">
        <div class="pic fl">
          <img class="auto-img" :src="item.img" alt />
        </div>
        <div class="brief fl">
          <span>{{item.title}}</span>
          <span>{{item.brief}}</span>
        </div>
        <div class="btn fr">
          <van-button round size="small" color="#cf5b5d">查看</van-button>
        </div>
      </div>
      <div class="meau clearfix" @click="getMeau">
        <div class="fl">
          <van-icon color="#e4393c" size="20" name="add-o" />
        </div>
        <span class="fl">添加更多</span>
      </div>
      <div class="like">
        <div class="guess">
          <span>猜你喜欢</span>
          <div class="fr" @click="anoTher">
            <van-icon class="fl" name="exchange" color="#e4393c" size="20" />
            <span class="fl">换一换</span>
          </div>
        </div>

        <div class="account clearfix">
          <div class="item-box fl" v-for="(item,index) in likeData" :key="index">
            <div class="item-img">
              <img class="auto-img" :src="item.img" alt />
            </div>
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("indexModule");
import { log } from "util";
export default {
  name: "follow",
  data() {
    return {
      allData: [],
      followData: '',
      likeData: [],

      isData: true
    };
  },
  created() {
    // console.log(this.follow);
    this.allData = this.follow;
    let data1 = this.allData.slice(0, 3);
    let data2 = this.allData.slice(3, 9);
    // console.log(data1,data2);
    
    this.likeData=data2;
    this.followData=data1;

    let fol = localStorage.getItem("status");
    fol = fol ? JSON.parse(fol) : [];
    // console.log(fol);
    // console.log(this.followData);
    
  },
  computed: {
    ...mapState(["follow"])
  },
  methods: {
    anoTher() {
      // console.log(this.allData);
      
      let arr = [];
      var j = 0;
      for (let i = 0; j < 6; i++) {
        var b = Math.floor(Math.random() * this.allData.length);
        if (arr.indexOf(this.allData[b]) == -1) {
          arr.push(this.allData[b]);
          j++;
        }
        this.likeData = arr;
      }
    },

    getMeau() {
      this.$router.push({ name: "more" });
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #e3d1bb;
}

.follow-box {
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
  padding: 10px;
}
.meau {
  padding: 15px 140px;
  border-bottom: 10px solid #f1f1f1;
  span {
    color: #444;
    font-size: 16px;
    margin-left: 10px;
  }
}
.like {
  padding: 10px;
  .guess {
    font-size: 16px;
    color: #444;
    span:last-child {
      margin-left: 5px;
    }
  }
}
.account {
  overflow: hidden;
  padding-top: 10px;
}
.item-box {
  width: 33.3%;
  border-top: 1px solid #f1f1f1;
  text-align: center;
  padding: 10px 0;
  .item-img {
    img {
      border-radius: 50%;
    }
    margin: 0 auto;
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
  }
  span {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>