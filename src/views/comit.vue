<!--  -->
<template>
  <div class="comit">
    <swiper/>
    <div class="top">
      <div v-for="item in topimg" :key="item.id">
        <div><img :src="item.img" alt=""></div>
        <span>{{item.text}}</span>
      </div>
    </div>

    <div class="top-tow">
      <div class="neice">
        <span>内测板块</span>
        <span class=xiaozi>参与最新内测</span>
      </div>
      <div class="huati">
        <span>话题互动</span>
        <span class=xiaozi>围观最新动态</span>
      </div>
      <div class="fuli">
        <span>福利中心</span>
        <span class=xiaozi>福利领不停</span>
      </div>
    </div>
    <!--    <comitDontai></comitDontai>-->
    <comit-dontai :dontai="dontai"/>
    <!--    <div class="dontai">-->
    <!--      <div class="dontai-box" v-for="item in dontai" :key="item.id">-->
    <!--        <div class=dontai-s>-->
    <!--          <span>{{item.text}}</span>-->
    <!--          <img src="https://pic4.zhimg.com/80/v2-fc81f81d17a203590c945c177e119bd2_hd.jpg" alt="" class="img_info">-->
    <!--        </div>-->
    <!--        <div class="dontai_dibu">-->
    <!--          <img :src="item.img" alt="" class=tx>-->
    <!--          <span>无畏境界</span>-->
    <!--          <div class="liuc">-->
    <!--            <div><img src="../assets/img/dt_dz.png" alt=""><span>60</span></div>-->
    <!--            <div><img src="../assets/img/dt_dz.png" alt=""><span>30</span></div>-->
    <!--            <div><img src="../assets/img/dt_dz.png" alt=""></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

  </div>
</template>

<script>
  import comitDontai from "../components/comit_dontai"
  import swiper from  "../components/swiper"
  export default {
    name: "comit",
    data() {
      return {
        topimg: [
          {id: 1, img: require("../assets/img/sheqv/chouj.png"), text: "抽奖"},
          {id: 2, img: require("../assets/img/sheqv/huod.png"), text: "活动"},
          {id: 3, img: require("../assets/img/sheqv/quany.png"), text: "权益"},
          {id: 4, img: require("../assets/img/sheqv/jianl.png"), text: "奖励"},
        ],
        dontai: [
          {id: 1,name:"无畏境界",imgcom: "https://pic4.zhimg.com/80/v2-fc81f81d17a203590c945c177e119bd2_hd.jpg",img:"http://static2.ivwen.com/users/3068153/77ae11b86d9742789d5cfcb8e9c6d957.jpg", text: "发布会准备中"},
          {id: 2,name:"别山拒水",imgcom:"https://pic4.zhimg.com/80/v2-fc81f81d17a203590c945c177e119bd2_hd.jpg", img: "http://static2.ivwen.com/users/17526771/800c70b47aab431bb2ad6548d2c45c04.jpg", text: "发布会准备中2"},
          {id: 3,name:"余风",imgcom:"https://pic4.zhimg.com/80/v2-fc81f81d17a203590c945c177e119bd2_hd.jpg", img: "https://ss2.meipian.me/users/5241221/a1f793d25445fb122a03753ac15e6c02", text: "发布会准备中3"},
          {id: 4,name:"无畏境界",imgcom:"https://pic4.zhimg.com/80/v2-fc81f81d17a203590c945c177e119bd2_hd.jpg", img: require("../assets/img/dt_dz.png"), text: "发布会准备中4"},
          {id: 5,name:"无畏境界",imgcom:"https://pic4.zhimg.com/80/v2-fc81f81d17a203590c945c177e119bd2_hd.jpg", img: require("../assets/img/dt_dz.png"), text: "发布会准备中5"}
        ]
      };
    },
    components: {
      comitDontai,
      swiper
    }
  }
</script>
<style lang='scss' scoped>
  .comit {
    width: 100vw;
    background-color: #ffffff;
  }

  .top {
    display: flex;
    justify-content: space-around;
    padding-top: px2rem(50);
    text-align: center;
  }

  .top div {
    font-size: px2rem(25);
  }

  .top img {
    width: px2rem(55);
  }

  .top span {
    display: block;
    margin-top: px2rem(10);
  }

  .top-tow {
    margin-top: px2rem(30);
    display: flex;
    justify-content: space-around;
  }

  .top-tow > div {
    width: 20%;
    height: px2rem(50);
    font-size: px2rem(27);
    /*background-color: red;*/
    padding: px2rem(30);
    color: white;
    border-radius: px2rem(10);
  }

  .top-tow span {
    display: block;
  }

  .xiaozi {
    letter-spacing: px2rem(3);
    margin-top: px2rem(20);
    font-size: px2rem(18);
  }

  .neice {
    background-color: #bfbe1c;
  }

  .huati {
    background-color: #ff6806;
  }

  .fuli {
    background-color: #7080ff;
  }

  .dontai {
    /*width: 100vw;*/
    margin-top: px2rem(20);
    margin-bottom: px2rem(80);
    padding: px2rem(10) px2rem(10);

    .dontai-box {
      margin-top: px2rem(20);
      box-sizing: border-box;
      padding-left: px2rem(30);
      padding-top: px2rem(30);
      font-size: px2rem(30);
      /*background-color: red;*/
      border-radius: px2rem(10);
      box-shadow: 0px 0px 8px 8px #f2f2f2;
      position: relative;
    }

    .img_info {
      display: block;
      width: 40vw;
      border-radius: px2rem(10);
    }

    .dontai-s {
      display: flex;
    }

    .dontai-s span {
      width: 53%;
    }

    .dontai_dibu {
      display: flex;
      /*justify-content: center;*/
      align-items: center;
      margin-top: px2rem(10);
      padding-bottom: px2rem(20);

    }

    .tx {
      width: px2rem(50);
      border-radius: 50%;
    }

    .dontai_dibu > span {
      font-size: px2rem(25);
      margin-left: px2rem(5);
    }

    .liuc {
      display: flex;
      align-items: center;
      font-size: px2rem(20);
      position: absolute;
      right: px2rem(25);
    }

    .liuc img {
      width: px2rem(40);
    }

    .liuc div {
      margin-left: px2rem(60);
      display: flex;
      align-items: center;
    }

    .liuc span {
      margin-left: px2rem(10);
    }
  }
</style>