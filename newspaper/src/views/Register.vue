<template>
  <div class="register">
    <div class="right">
      <van-icon @click="jumpRout" name="arrow-left" />
    </div>

    <div class="phone-box">
      <div class="phone-title">
        <span>手机号快速注册</span>
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
            placeholder="设置6位以上字母，数字密码"
          />
          <van-icon :name="icon" @click="lookPass()" />
          <span v-show="passError.isShow">{{passError.text}}</span>
        </div>
      </div>
      <div class="reg">
        <input v-model="codeReg" type="number" placeholder="输入验证码" />
        <div class="ver-code">
          <button
            :class="codeBtn.isActive"
            :disabled="codeBtn.isDisa"
            @click="sendCode(phoneNumber)"
          >{{codeBtn.text}}</button>
        </div>
        <span v-show="verErrow.isShow">{{verErrow.text}}</span>
      </div>

      <div class="btn">
        <!-- 点击后加loading -->
        <van-button
          :loading="isLoading"
          loading-text="注册中..."
          @click="submitData(phoneNumber,passWord,codeReg)"
          size="large"
        >注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { type } from "os";
export default {
  name: "register",

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
      verErrow: {
        text: "验证码错误",
        isShow: false
      },

      //手机号
      phoneNumber: "",
      //密码
      passWord: "",
      //验证码
      codeReg: "",

      //查看密码
      icon: "closed-eye",
      typePass: "password",
      isPass: true,

      //验证码按钮
      codeBtn: {
        text: "获取验证码",
        isActive: "",
        isDisa: false
      },

      //随机验证码
      code: null,

      //加载中状态
      isLoading: false
    };
  },

  methods: {
    //返回
    jumpRout() {
      this.$router.push("login");
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

    //获取手机号发送验证码
    sendCode(num) {
      let self = this;
      //获取手机号
      // console.log(num);
      this.codeBtn.isActive = "active";
      let number = 60;
      this.codeBtn.isDisa = true;
      let time = setInterval(function() {
        number--;
        self.codeBtn.text = number;
        if (self.isLoading == true) {
          clearInterval(time);
        }
        if (number === 0) {
          self.codeBtn.isActive = "";
          self.codeBtn.text = "获取验证码";
          self.codeBtn.isDisa = false;
          clearInterval(time);
        }
      }, 1000);

      //生成随机验证码
      let arr = [];
      for (let i = 0; i < 6; i++) {
        let random = parseInt(Math.random() * 10);
        arr.push(random);
      }
      let str = arr.toString();
      let reg = str.replace(/,/g, "");
      this.code = reg;
      // console.log("验证码=>", this.code);
       this.code = reg;
        this.$toast({
          duration: 4000,
          message: '测试验证码:' + this.code
        });
    },

    //获取用户注册数据,验证码
    submitData(p, s, c) {
      let self = this;
      //改变按钮状态
      this.isLoading = true;
      if (p === "" && s === "" && c === "") {
        this.$toast({
          duration: 1000,
          message: "未输入信息!"
        });
        this.isLoading = false;
        return;
      }
      if (c != this.code) {
        this.$toast({
          duration: 1000,
          message: "验证码错误!"
        });
        this.isLoading = false;
        return;
      }
      let userData = {
        userPhone: this.phoneNumber,
        userPassword: this.passWord,
      
      };
      let users = localStorage.getItem("users");
      users = users ? JSON.parse(users) : [];
      let time = setTimeout(function() {
        for (let i = 0; i < users.length; i++) {
          let index = i;
          if (users[index].userPhone === userData.userPhone) {
            // console.log("存在");
            self.$toast({
              duration: 1000,
              message: "该用户已存在"
            });
            self.codeBtn.isActive = "";
            self.codeBtn.text = "获取验证码";
            self.codeBtn.isDisa = false;
            self.isLoading = false;
            clearTimeout(time);
            return;
          }
        }
        self.$toast({
          duration: 1000,
          message: "注册成功"
        });

        users.push(userData);
        // console.log(users);
        localStorage.setItem("users", JSON.stringify(users));
        self.$router.push("login");
        self.isLoading = false;
      }, 1000);
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
.register {
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
  .phone-box {
    padding: 0.3rem 0.5rem;
    .btn {
      margin-top: 1rem;
    }
    .van-button {
      background: rgb(124, 124, 206);
      color: #fff;
    }
  }
  .phone-title {
    font-size: 0.856rem;
    padding: 0.6rem 0;
    color: rgb(85, 85, 175);
  }
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
.reg {
  position: relative;
  span {
    color: #ff4641;
    font-size: 0.4rem;
  }
  > input {
    width: calc(100% - 2.3rem);
    padding-right: 2.4rem;
  }
  .group {
    background: transparent;
  }
}
.ver-code {
  position: absolute;
  right: 0;
  top: 0.5rem;

  > button {
    width: 2.1rem;
    height: 1rem;
    background: #ff4641;
    border: none;
    color: #fff;
    border-radius: 0.2rem;
    &.active {
      background: #e4aeac;
    }
  }
}
</style>