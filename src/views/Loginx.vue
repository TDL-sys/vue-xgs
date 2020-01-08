<template>
  <div class="Loginx">

    <div class="txt">
      <div><img src="../assets/img/logo.png" alt=""></div>
      <div>SchoolPal</div>
    </div>

    <div class="lobx">
      <div class="login">
        <div class="use" @focusin="xuanzhpn">
          <img src="../assets/img/LoginX/user.png" alt="">
          <input type="text" placeholder="User" class="user" v-model=suser>
        </div>
        <div class="pas" @focusin="xuanzhpn2">
          <img src="../assets/img/LoginX/pas.png" alt="">
          <input type="Password" placeholder="Password" class="pwd" v-model=spwd>
        </div>
      </div>
      <div class="ent" @click="gomub">
        Login
      </div>

      <div class="ent up" @click="register">
        Sign Up
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {Toast, Indicator} from "mint-ui";

  export default {
    name: "Loginx",
    data() {
      return {
        isX: true,
        Logindata: null,
        suser: "",
        spwd: ""
      }
    },
    methods: {
      xuanzhpn() {
        document.querySelector(".login").classList.remove("xuanzhon2")
        // document.querySelector(".use").classList.add("xuanzhon")
        document.querySelector(".pas").classList.add("xuanzhon")
      },
      xuanzhpn2() {
        document.querySelector(".login").classList.add("xuanzhon2")
        document.querySelector(".pas").classList.remove("xuanzhon")
        // document.querySelector(".use").classList.remove("xuanzhon")
      },
      gomub() {
        if (this.suser != "", this.suser != "") {
          axios({
            url: "/api/add",   //请求地址
            method: "post", //请求方法,
            data: [this.suser, this.spwd]
          }).then(res => {
            console.log(res.data);
            this.Logindata = res.data
            if (this.Logindata.message.length > 0) {
              if (this.Logindata.message[0].suser == this.suser && this.Logindata.message[0].spwd == this.spwd) {
                // console.log("登录成功")
                Indicator.open("登录中...");
                setTimeout(() => {
                  this.$store.state.allperdata = res.data
                  sessionStorage.setItem("isLogin",JSON.stringify(res.data))
                  console.log(this.$store.state.allperdata.message, "成功后vuex的值")
                  this.$router.push('/mup')
                  Indicator.close();
                }, 2000)
              } else {
                console.log("错误");
              }
            } else {
              Toast({
                message: '请注册',
                position: 'center',
                duration: 2000
              });
            }
          })
        } else {
          Toast({
            message: '用户名密码不能为空',
            position: 'center',
            duration: 2000
          });
        }

      },
      register() {
        if (this.suser != "", this.suser != "") {
          axios({
            url: "/api/zhuce",   //请求地址
            method: "post", //请求方法,
            data: [this.suser, this.spwd]
          }).then(res => {
            if (res.data.status != 1) {
              Toast({
                message: '该用户已经被注册',
                position: 'center',
                duration: 2000
              });
            } else if (res.data.status == 1) {
              Toast({
                message: '注册成功',
                position: 'center',
                duration: 2000
              });
            }
          })
        } else {
          Toast({
            message: '用户名密码不能为空',
            position: 'center',
            duration: 2000
          });
        }

      }
    },
    mounted() {

    }

  }
</script>

<style lang=scss scoped>
  .Loginx {
    padding: 1px;
    height: 100vh;
    /*background-color: #2a3c52;*/
    background-color: #373447;
  }

  .txt {
    margin-top: px2rem(50);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: px2rem(400);
    color: #FFF;
    text-align: center;
    font-size: px2rem(40);
    /*line-height: px2rem(300);*/
    font-family: 张海山锐线体简;
  }

  .lobx {
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;

  }

  .login {
    margin-top: px2rem(140);
    width: px2rem(490);
    border-bottom: 5px solid #504d60;
  }

  .Loginx img {
    width: px2rem(300);
  }

  .use {
    /*margin-top: 11px;*/
    /*box-sizing: border-box;*/
    /*border-top: 5px solid #44566c;*/
    padding: px2rem(35) px2rem(0) px2rem(35) px2rem(45);
    color: #FFF;
    font-size: px2rem(30);
    text-align: center;
    position: relative;
    /*transition: all 0.5s ease;*/
  }

  .use input {
    font-family: 微软雅黑;
    margin-right: px2rem(35);
    border: 0px;
    background-color: #373447;
    text-align: center;
    color: #716e81;
    font-size: px2rem(30);
  }

  .use img {
    /*background-color: red;*/
    width: px2rem(50);
    position: absolute;
    left: px2rem(0);
  }

  .pas {
    position: relative;
    /*box-sizing: border-box;*/
    /*margin-top: 11px;*/
    /*margin-bottom: 1px;*/
    border-top: 5px solid #504d60;
    padding: px2rem(35) px2rem(0) px2rem(35) px2rem(45);
    text-align: center;
    color: #716e81;
    font-size: px2rem(30);
    /*transition: all 0.5s ease;*/
  }

  input::placeholder {
    color: #716e81;
  }

  .pas input {
    font-family: 微软雅黑;
    margin-right: px2rem(35);
    border: 0px;
    background-color: #373447;
    text-align: center;
    color: #716e81;
    font-size: px2rem(30);
  }

  .pas img {
    width: px2rem(50);
    position: absolute;
    left: px2rem(0);
  }

  .ent {
    margin-top: px2rem(50);
    color: #fff;
    text-align: center;
    width: px2rem(490);
    line-height: px2rem(90);
    background-color: #009a9a;
    font-size: px2rem(30);
    transition: all 0.1s ease-in;

  }

  .up {
    background-color: #312e3f;
  }

  .ent:active {
    transform: scale(0.7);
  }

  .xuanzhon {
    /*box-sizing: border-box;*/
    border-top: 5px solid #009a9a;
  }

  .xuanzhon2 {
    border-bottom: 5px solid #009a9a;
  }
</style>