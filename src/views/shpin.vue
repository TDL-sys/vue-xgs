<!--  -->
<template>
  <div class="shpin">
    <div class="toptxt">
      <span>返回</span>
      <span>购物车</span>
      <span class="bj">编辑</span>
    </div>
    <div class="spbox" v-for="(item,i) in array[0]" :key="item.id">
      <div class="spxq">
        <div class="ip">
          <div class="ip_one" @click="bianji(i)"></div>
        </div>
        <div class="boximg">
          <img :src="item[0].src"/>
        </div>
        <div class="right">
          <span>{{item[0].text1}}</span>
          <span class="changwenzi">
            介绍介绍介绍介绍介绍介绍介绍介绍
            介绍介绍介绍介绍介绍介绍介绍介绍
            介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
          </span>
          <span class="jiagege">价格：{{item[0].jinbi}}</span>
          <div class="jiajian">
            <div class="ja" @click="jian(i)">-</div>
            <div class="shulian">{{item[0].shulian}}</div>
            <div class="jian" @click="jia(i)">+</div>
          </div>
        </div>
      </div>
    </div>

    <div class="dibucnt">
      <div class="quanxuanbox" @click="quanxuanbox">
        <div class="quanxuan"></div>
        <span class="qqq">全选</span>
      </div>
      <span class="jiage">价格：</span>
      <span class="qian">{{jiage}}</span>
      <div class="jiesuan">结算</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shpin",
    data() {
      return {
        array: [],
        shulian: 1,
        bianjiif: true,
        quanxuanboxif: true,
        qita: "",
        bdqx: 0,
        jiage: 0,
        jgpd: 0
      };
    },
    methods: {
      jian(i) {
        this.array[0][i][0].shulian--;
      },
      jia(i) {
        this.array[0][i][0].shulian++;
      },
      bianji(i) {
        this.jiage = 0
        // console.log(123)
        if (this.array[0][i][0].gouxuan) {
          //
          document.querySelectorAll(".ip_one")[i].classList.add("xuanzhon");
          this.array[0][i][0].gouxuan = !this.array[0][i][0].gouxuan;
          for (let i in Array.from(document.querySelectorAll(".ip_one"))) {
            if (this.array[0][i][0].gouxuan == false) {
              this.bdqx++;
              // this.jiage+=this.array[0][i][0].jinbi
            } else {
              this.bdqx--;
            }
            // console.log(this.bdqx,"123132")
          }
          console.log(document.querySelectorAll(".ip_one").length, this.bdqx);
          if (this.bdqx == document.querySelectorAll(".ip_one").length) {
            // console.log("全选了")
            document.querySelector(".quanxuan").style.backgroundColor = "red";
            this.qita = document.querySelectorAll(".ip_one");
            this.quanxuanboxif = !this.quanxuanboxif;
            this.bdqx = 0
          }
          this.jgpd = this.jiage
        } else {
          this.jiage = this.jgpd
          // console.log(this.jiage,this.jgpd,"价格")
          // console.log(this.array[0][i][0].gouxuan);
          document.querySelectorAll(".ip_one")[i].classList.remove("xuanzhon");
          this.array[0][i][0].gouxuan = !this.array[0][i][0].gouxuan;
          document.querySelector(".quanxuan").style.backgroundColor = "white";
          this.quanxuanboxif = !this.quanxuanboxif;
          // for (let i in Array.from(document.querySelectorAll(".ip_one"))){
          //   if (this.array[0][i][0].gouxuan == true) {
          //     // this.jgpd++
          //     this.jiage=this.jiage-this.array[0][i][0].jinbi
          //     // console.log(this.array[0][i][0].jinbi)
          //   }
          // }
          // this.jiage = this.array[0][i][0].jinbi

        }
        ;
        for (let i in Array.from(document.querySelectorAll(".ip_one"))) {
          if (this.array[0][i][0].gouxuan == false) {
            console.log(this.array[0][i][0].gouxuan)
            this.jiage += this.array[0][i][0].jinbi
          }
        }
      },
      quanxuanbox() {
        if (this.quanxuanboxif) {
          console.log(this.quanxuanboxif);
          document.querySelector(".quanxuan").style.backgroundColor = "red";
          this.qita = document.querySelectorAll(".ip_one");
          for (let i in Array.from(this.qita)) {
            document.querySelectorAll(".ip_one")[i].classList.add("xuanzhon");
            this.array[0][i][0].gouxuan = false;
          }
          this.quanxuanboxif = !this.quanxuanboxif;
          return;
        } else {
          document.querySelector(".quanxuan").style.backgroundColor = "white";
          this.quanxuanboxif = !this.quanxuanboxif;
          for (let i in Array.from(this.qita)) {
            document.querySelectorAll(".ip_one")[i].classList.remove("xuanzhon");
            this.array[0][i][0].gouxuan = true;
          }
          return;
        }
      }
    },
    mounted() {
      this.array.push(JSON.parse(localStorage.getItem("arrAy")));
    },
    updated() {
      // console.log("改变了");
      // document.querySelector(".quanxuan").style.backgroundColor = "white";
      // this.quanxuanboxif = !this.quanxuanboxif;
      // for (let i in Array.from(this.qita)) {
      //   document.querySelectorAll(".ip_one")[i].classList.remove("xuanzhon");
      //   this.array[0][i][0].gouxuan = true;
      // }
    }
  };
</script>
<style lang='scss' scoped>
  .shpin{
    height: 100vh;
  }
  .toptxt {
    width: 100vw;
    height: px2rem(100);
    background-color: rgb(52, 240, 67);
    display: flex;
    justify-content: space-around;
    line-height: px2rem(100);
    color: white;
    position: relative;
  }

  .toptxt span {
    display: block;
    font-size: px2rem(30);
  }

  .toptxt span:nth-child(1) {
    opacity: 0;
  }

  .spbox {
    width: 100vw;

    .spxq {
      width: 100%;
      height: px2rem(200);
      background-color: white;
      display: flex;
      box-sizing: border-box;
      padding-top: px2rem(15);
      padding-left: px2rem(15);
    }

    .ip {
      width: 10%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      //
      //
    }

    .yinc {
      display: none;
    }

    .xuanzhon {
      background-color: red;
    }

    .ip_one {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid #b8acac;
      // background-color: red;
    }

    .boximg {
      width: 50%;
    }

    .boximg img {
      width: 100%;
      border-radius: px2rem(8);
    }

    .right {
      width: 53%;
      height: 100%;
      // background-color: aqua;
      box-sizing: border-box;
    }

    .right span {
      font-weight: 500;
      display: block;
      font-size: px2rem(25);
      padding-left: px2rem(10);
      padding-top: px2rem(15);
    }

    .changwenzi {
      height: px2rem(20);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .jiagege {
      color: rgb(196, 21, 21);
    }

    .jiajian {
      display: flex;
      height: px2rem(40);
      // background-color: goldenrod;
      margin-left: px2rem(10);
      margin-top: px2rem(15);
    }

    .jiajian div {
      font-size: px2rem(20);
      cursor: pointer;
      font-weight: 500;
      width: px2rem(50);
      height: px2rem(40);
      background-color: rgb(211, 211, 211);
      color: black;
      text-align: center;
      line-height: px2rem(40);
    }
  }

  .dibucnt {
    width: 100vw;
    height: px2rem(80);
    background-color: white;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    position: fixed;
    bottom: 0;
    display: flex;
    padding-left: px2rem(20);
    align-items: center;
  }

  .quanxuanbox {
    display: flex;
    align-items: center;
  }

  .quanxuan {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #b8acac;
  }

  .qqq {
    font-weight: 500;
    font-size: px2rem(30);
    margin-left: px2rem(8);
  }

  .jiage {
    font-weight: 500;
    font-size: px2rem(30);
    margin-left: px2rem(8);
    color: rgb(233, 60, 60);
    margin-left: px2rem(50);
  }

  .qian {
    font-weight: 500;
    font-size: px2rem(30);
    margin-left: px2rem(8);
    color: rgb(233, 60, 60);
  }

  .jiesuan {
    width: px2rem(180);
    background-color: red;
    height: 100%;
    position: absolute;
    text-align: center;
    line-height: px2rem(80);
    right: px2rem(21);
    font-size: px2rem(30);
    font-weight: 500;
    color: white;
  }
</style>