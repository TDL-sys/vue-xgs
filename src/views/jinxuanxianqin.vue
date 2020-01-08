<!--  -->
<template>
  <div class="jinxuanxianqin">
    <topheading title="精选好课"></topheading>
    <div v-for="item in conten" :key="item.id">
      <div class="top">
        <div class="topimg">
          <img :src="item.src"/>
        </div>
      </div>
      <div class="top2">
        <div class="topimg2">课题详情</div>
      </div>
      <div class="cent">
        <div class="cent_txtbox">
          <span class="txt_one">会员</span>
          <span class="txt_tow">{{item.text1}}</span>
        </div>
      </div>
      <div class="cent cent2">
        <div class="cent_txtbox">
          <span class="txt_one2">{{item.text2}}人学过</span>
        </div>
      </div>
      <div class="cent cent2">
        <div
          class="cent_txtbox cent_txtbox2"
        >Kubernetes 是目前最为流行的容器编排系统，也是目前最流行的容器化应用发布平台。在实际的工作中，我们会遇到现有系统和 Kubernetes 进行集成的情况。
        </div>
      </div>

      <div class="bom">
        <div class="left">
          <div class="leimgbox" @click="shouchan">
            <img :src="sctu"/>
          </div>
        </div>
        <div class="ri" @click="jiaru">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Indicator} from "mint-ui";
  import topheading from "../components/Topheading"
  export default {
    name: "jinxuanxianqin",
    data() {
      return {
        conten: [],
        jihe: [],
        sctu: require("../assets/img/scf.png"),
        sctuq: true,
        panduan: true,
        isgwc: false
      };
    },
    components:{
      topheading
    },
    methods: {
      shouchan() {
        if (this.sctuq) {
          Indicator.open("正在加载...");
          setTimeout(() => {
            Indicator.close();
            (this.sctu = require("../assets/img/sc.png")),
              (this.sctuq = !this.sctuq);
          }, 500);
        } else {
          Indicator.open("正在加载...");
          setTimeout(() => {
            Indicator.close();
            (this.sctu = require("../assets/img/scf.png")),
              (this.sctuq = !this.sctuq);
          }, 500);
        }
      },
      jiaru() {
        var arrAyqc = JSON.parse(localStorage.getItem("arrAy"));
        for (let i in arrAyqc) {
          if (arrAyqc[i][0].text1 == this.conten[0].text1) {
            console.log("你已经添加过了。。");
            Indicator.close();
            return;
          }
        }
        if (this.panduan) {
          Indicator.open("正在加载...");
          setTimeout(() => {
            Indicator.close();
            document.querySelector(".ri").classList.add("huihshe");
            this.jihe.push(this.conten);
            console.log(this.jihe, "jihe");
            localStorage.setItem("arrAy", JSON.stringify(this.jihe));
          }, 500);
        } else {
          Indicator.open("正在加载...");
          setTimeout(() => {
            Indicator.close();
            document.querySelector(".ri").classList.remove("huihshe");
            this.panduan = !this.panduan;
          }, 500);
        }
      },



    },
    mounted() {
      setTimeout(() => {
        if (JSON.parse(localStorage.getItem("arrAy")).length != 0) {
          let arrAyqc = JSON.parse(localStorage.getItem("arrAy"));
          for (let i in arrAyqc) {
            if (arrAyqc[i][0].text1 == this.conten[0].text1) {
              if (
                JSON.parse(localStorage.getItem("arrAy"))[0][0].color == "#888888"
              ) {
                // alert('123')
                document.querySelector(".ri").style.background = "#888888";
              }
            }
          }

        }
      }, 100);

      // if(JSON.parse(localStorage.getItem("arrAy")))
      // console.log(JSON.parse(localStorage.getItem("arrAy"))[0].color)
      // if (JSON.parse(localStorage.getItem("arrAy")).length != 0) {
      //   if (JSON.parse(localStorage.getItem("arrAy"))[0][0].color == "#888888") {

      //   }
      // }

      // console.log(JSON.parse(localStorage.getItem("arrAy"))[0][0].color,"huohuo")
      this.conten.push(JSON.parse(localStorage.getItem("haoke")));
      if (JSON.parse(localStorage.getItem("arrAy")) != null) {
        this.jihe = JSON.parse(localStorage.getItem("arrAy"));

        // console.log(JSON.parse(localStorage.getItem("arrAy")), "arrAy");
        // console.log(this.conten, "conten");
      }
    },
    beforeDestroy() {
      localStorage.setItem("arrAy", JSON.stringify(this.jihe));
    }
  };
</script>
<style lang='scss' scoped>
  .jinxuanxianqin{
    height: 100vh;
    background-color: white;
  }
  body {
    background: white;
  }
  /*顶部标题*/


  .top {
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-top: px2rem(20);
  }

  .topimg {
    width: 80%;
    border-radius: px2rem(15);
  }

  .topimg img {
    width: 100%;
    border-radius: px2rem(15);
  }

  .top2 {
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-bottom: px2rem(30);
    border-bottom: 1px solid rgb(196, 193, 193);
    margin-top: px2rem(30);
  }

  .topimg2 {
    width: 80%;
    font-size: px2rem(30);
    color: #3cc5a3;
  }

  .cent {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: px2rem(20);

    .cent_txtbox {
      display: flex;
      width: 80%;
      align-items: center;
    }

    .cent_txtbox span {
      display: inline-block;
    }

    .txt_one {
      padding: px2rem(5) px2rem(20);
      color: white;
      background-color: #3cc5a3;
      border-radius: px2rem(20);
      font-size: px2rem(20);
    }

    .txt_tow {
      font-size: px2rem(23);
      margin-left: px2rem(10);
    }

    .txt_one2 {
      font-size: px2rem(19);
      color: rgb(182, 180, 180);
    }
  }

  .cent2 {
    margin-top: px2rem(5);
  }

  .cent_txtbox2 {
    font-size: px2rem(25);
    line-height: px2rem(30);
  }

  .bom {
    width: 100vw;
    height: px2rem(80);
    background-color: rgb(136, 136, 136);
    position: fixed;
    bottom: 0;
    display: flex;
  }

  .left {
    width: 15%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leimgbox {
    width: 40%;
  }

  .leimgbox img {
    display: block;
    width: 100%;
  }

  .ri {
    width: 84.9%;
    height: 100%;
    background-color: #3cc5a3;
    text-align: center;
    line-height: px2rem(80);
    font-size: px2rem(30);
    color: white;
  }

  .huihshe {
    background-color: rgb(136, 136, 136);
  }

</style>