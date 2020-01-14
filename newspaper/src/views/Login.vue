<template>
  <div class="login">
    <div class="right">
      <van-icon @click="jumpRout" name="arrow-left" />
    </div>
    <div class="phone-box">
      <div class="phone-title">
        <span>登录后呈现更多精彩</span>
      </div>
      <div class="inp">
        <input
          class="put"
          v-model="phoneNumber"
          @input="validPhone(phoneNumber)"
          type="number"
          placeholder="输入您的手机号"
        />
        <span v-show="phoneError.isShow">{{phoneError.text}}</span>
        <div class="pass">
          <input
            v-model="passWord"
            @input="validPass(passWord)"
            :type="typePass"
            placeholder="输入您的密码"
          />
          <van-icon :name="icon" @click="lookPass()" />
          <span v-show="passError.isShow">{{passError.text}}</span>
        </div>
      </div>
      <div class="btn">
        <!-- 点击后加loading -->
        <van-button
          :loading="isLoading"
          loading-text="登录中..."
          @click="submitData(phoneNumber,passWord)"
          size="large"
        >登录</van-button>
      </div>

      <div class="forget">
        <span>
          <a @click="RetPass">忘记密码?</a>
        </span>
        <div>
          <span>
            没有账号?
            <a @click="toRouter">立即注册</a>
          </span>
        </div>
      </div>

      <div class="party">
        <van-divider :style="{ color: '#666', borderColor: '#5555af', padding: '0 16px' }">第三方登录</van-divider>
      </div>

      <div class="login-box">
        <ul>
          <li>
            <img src="../assets/icon/qq.png" alt />
          </li>
          <li>
            <img src="../assets/icon/weixing.png" alt />
          </li>
          <li>
            <img src="../assets/icon/weibo.png" alt />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      //错误
      phoneError: {
        text: "手机号格式错误",
        isShow: false
      },
      passError: {
        text: "密码错误",
        isShow: false
      },

      //手机号
      phoneNumber: "",
      //密码
      passWord: "",

      //查看密码
      icon: "closed-eye",
      typePass: "password",
      isPass: true,

      //加载中状态
      isLoading: false
    };
  },
  methods: {
    //返回
    jumpRout() {
      this.$router.push("home");
    },
    //获取手机号
    validPhone(n) {
      let reg = /^1[34578]\d{9}$/;
      this.phoneError.isShow = reg.test(n)
        ? (this.phoneError.isShow = false)
        : (this.phoneError.isShow = true);
    },
    //获取密码
    validPass(w) {
      let reg = /^[0-9A-Za-z]{6,}$/;
      this.passError.isShow = reg.test(w)
        ? (this.passError.isShow = false)
        : (this.passError.isShow = true);
    },
    //查看密码
    lookPass() {
      if (this.isPass) {
        this.typePass = "text";
        this.isPass = false;
        this.icon = "eye-o";
        return;
      }
      this.typePass = "password";
      this.icon = "closed-eye";
      this.isPass = true;
    },
    //登录检测数据
    submitData(p, s, c) {
      let self = this;
      //改变按钮状态
      this.isLoading = true;
      if (p === "" && s === "") {
        this.$toast({
          duration: 1000,
          message: "未输入信息!"
        });
        this.isLoading = false;
        return;
      }

      let time = setTimeout(function() {
        let users = localStorage.getItem("users");
        users = users ? JSON.parse(users) : [];
        if (users == "") {
          self.$toast({
            duration: 1000,
            message: "该用户不存在"
          });
          self.isLoading = false;
          clearTimeout(time);
          return;
        }
        for (let i = 0; i < users.length; i++) {
          if (users[i].userPhone === p && users[i].userPassword === s) {
            self.$toast({
              duration: 1000,
              message: "登录成功"
            });
            //记录登录状态
            let status = {
              islogin: true,
              userPhone: p,
              userName: "星空",
              portrait:
                "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1225597740,615370700&fm=111&gp=0.jpg",
            };

            localStorage.setItem("status", JSON.stringify(status));
            self.$router.push("my");
            self.isLoading = false;
            clearTimeout(time);
            return;
          }
        }

        self.$toast({
          duration: 1000,
          message: "密码或账号错误"
        });
        self.isLoading = false;
      }, 1000);
    },
    //跳到注册页面
    toRouter() {
      this.$router.push("register");
    },
    //找回密码
    RetPass() {
      this.$router.push({ name: "retrieve" });
    }
  }
};
</script>

<style lang="less" scoped>
input {
  width: 100%;
  background: transparent;
  border: none;
  padding: 0.2rem 0.1rem;
  border-bottom: 2px solid rgb(175, 175, 238);
  margin: 0.5rem 0;
  font-size: 0.5rem;
}

.login {
  width: 100%;
  height: 17.787rem;
  background-image: url("../assets/images/banner.jpg");
  background-size: cover;
  .right {
    padding: 0.6rem 0.5rem;
    .van-icon {
      font-size: 0.6rem;
      color: #fff;
    }
  }

  .phone-title {
    font-size: 0.856rem;
    padding: 0.6rem 0;
    color: rgb(85, 85, 175);
  }
}
.phone-box {
  padding: 0.3rem 0.5rem;
  .btn {
    margin-top: 1rem;
  }
  .van-button {
    background: rgb(124, 124, 206);
    color: #fff;
  }
  .inp {
    overflow: hidden;
    span {
      color: #ff4641;
      font-size: 0.4rem;
      margin-left: 0.1rem;
      display: inline-block;
    }
  }
  .party {
    margin-top: 40px;
  }

  .forget {
    font-size: 16px;

    // text-align: center;
    margin-top: 20px;
    div {
      float: right;
    }
    a {
      color: #e4393c;
    }
  }
}
.login-box {
  ul {
    width: 100%;
    overflow: hidden;
  }
  li {
    width: 33.3%;
    float: left;
  }
  img {
    display: block;
    margin: 0 auto;
  }
}

.pass {
  position: relative;
  input {
    width: 310px;
    padding-right: 30px;
  }
  .van-icon {
    position: absolute;
    top: 0.8rem;
    right: 0;
    font-size: 20px;
  }
}
</style>