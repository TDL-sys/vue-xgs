<!--  -->
<template>
  <div class="Login">
    <swiper></swiper>
    <div class="touchSwiper">
      <div class="dd">

        <content1 :jixuan1="jixuan"></content1>
        <content1 :jixuan1="mianfei"></content1>
        <conxunlei :xunlei1="xunlie"></conxunlei>
      </div>
    </div>
  </div>
</template>
<script>
  // import axios from 'axios'
  import swiper from "../components/swiper";
  import content1 from "../components/content1";
  import conxunlei from "../components/con_xunlei";
  import {request} from "../network/requst"

  export default {
    name: "Login",
    data() {
      return {
        osw: "",
        zsw: "",
        x: "",
        startX: "",
        Time: 0,
        Time2: 0,
        nowX: 0,
        jixuan: [
          {
            id: 1,
            src: "https://dn-simplecloud.shiyanlou.com/1547620906601.png",
            text1: "Java编程基础",
            text2: "7278",
            text3: "免费",
            shulian: 1,
            color: "#888888",
            jinbi: 233,
            gouxuan: true
          },
          {
            id: 2,
            src: "https://dn-simplecloud.shiyanlou.com/1471855450482.png",
            text1: "Python3教程",
            text2: "33152",
            text3: "免费",
            shulian: 1,
            color: "#888888",
            jinbi: 248,
            gouxuan: true
          },
          {
            id: 3,
            src: "https://dn-simplecloud.shiyanlou.com/1517283298684.png",
            text1: "Java实现个人博客",
            text2: "2750",
            text3: "免费",
            shulian: 1,
            color: "#888888",
            jinbi: 358,
            gouxuan: true
          },
          {
            id: 4,
            src:
              "https://dn-simplecloud.shiyanlou.com/course/1531706079197_%E3%80%901127%E3%80%91-%E3%80%90Django%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B%E3%80%91.png",
            text1: "Django基础教程",
            text2: "3450",
            text3: "免费",
            shulian: 1,
            color: "#888888",
            jinbi: 352,
            gouxuan: true
          }
        ],
        mianfei: [
          {
            id: 1,
            src: "https://dn-simplecloud.shiyanlou.com/ncn1.jpg",
            text1: "Linux基础",
            text2: "23502",
            text3: "免费"
          },
          {
            id: 2,
            src:
              "https://dn-simplecloud.shiyanlou.com/course/1542591658684_【2】-【Vim编辑器】.png",
            text1: "Vim编辑器",
            text2: "5214",
            text3: "免费"
          },
          {
            id: 3,
            src:
              "https://dn-simplecloud.shiyanlou.com/course/1550728729236_【1035】-【Git与GitHub入门实践】(1).png",
            text1: "Git与GitHub基础入门",
            text2: "3527",
            text3: "免费"
          },
          {
            id: 4,
            src:
              "https://dn-simplecloud.shiyanlou.com/course/1542592801417_【596】-【Python3简明教程】.png",
            text1: "Pyhon3",
            text2: "3450",
            text3: "免费"
          }
        ],
        xunlie: [
          {
            id: 1,
            src:
              "https://dn-simplecloud.shiyanlou.com/course/1550223331206_%E3%80%901239%E3%80%91-%E3%80%90Go%E8%AF%AD%E8%A8%80%E5%BC%80%E5%8F%91Kubernetes%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7%E3%80%91.png",
            txt1: "GO 语言开发",
            txt2:
              "Kubernetes 是目前最为流行的容器编排系统，也是目前最流行的容器化应用发布平台。在实际的工作中，我们会遇到现有系统和 Kubernetes 进行集成的情况。"
          },
          {
            id: 2,
            src: "https://dn-simplecloud.shiyanlou.com/1553843942795.png",
            txt1: " Netty 开发实战",
            txt2:
              " Netty 作为互联网中间件的基石，是 JAVA 工程师提升必须掌握的能力之一，本课程通过从基础的网络编程概念到 JAVA 原生网络编程再到 Netty 开发。"
          },
          {
            id: 3,
            src: "https://dn-simplecloud.shiyanlou.com/1553846551966.png",
            txt1: " Spring Boot 系统",
            txt2:
              " 本课程分为基础篇、项目篇两部分。基本篇五次课程分别介绍 Spring Boot 快速入门、基础 Web 开发、单元测试、过滤器、拦截器、监听器、整合 Mybatis。"
          }
        ]
      };
    },
    components: {
      swiper,
      content1,
      conxunlei
    },
    methods: {

      // addsp(data, ka) {
      //   console.log(data, ka, "Lo");
      // }
    },
    mounted() {
      // this.osw = document.querySelector(".touchSwiper");
      // this.zsw = document.querySelectorAll(".dd");
      // this.osw.transfrom = {};
      // this.osw.style.width = window.hotcss.px2rem(750 * 2, 750) + "rem";
      //
      // setTimeout(() => {
      //   this.osw.transfrom["translateX"] = -750;
      //   var num = Math.round(
      //     -this.osw.transfrom["translateX"] / this.zsw[0].offsetWidth
      //   );
      //   this.osw.style.transform =
      //     "translateX(" + -num * this.zsw[0].offsetWidth + "px)";
      //   // console.log(1)
      //   // osw.style.transform="translateX("+-100+"vw)"
      //   // console.log(1)
      // }, 16);
      // this.jixuan = JSON.stringify(this.jixuan)
      //获取数据
      // var data = JSON.parse(localStorage.getItem("Python3教程"))
      // console.log(data)
      // axios({
      //   url: "/api/add",   //请求地址
      //   method: "post"   //请求方法,
      //
      // }).then(res => {
      //   console.log(res.data);
      // })
      request({
        url: "/select",
        method: "post"
      })
        .then(res => {
          console.log(res);
        })
    }
  };
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .Login {
    overflow: hidden;
  }

  .touchSwiper {
    display: flex;
    width: 100vw;
    justify-content: center;
    // height: 100vh;
    // background-color: #ffaa00;
    transition: all 0.3s ease;
    /* 				filter: blur(10px); 高斯模糊*/
    // transform: translateX(-100vw);
  }

  .dd {
    width: px2rem(750);
    // height: 100vh;
    // border: solid 10px red;
    font-size: px2rem(50);
    align-self: center;
  }


</style>

