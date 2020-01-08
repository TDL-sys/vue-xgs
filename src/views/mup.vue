<!--  -->
<template>
  <div class="mup">
    <div class="top_hp">
      <div class="por" @click="goLx">
        <img :src="this.$store.state.allperdata.message[0].sheadimg" alt="">
      </div>
      <div class="por2">
        <span>{{this.$store.state.allperdata.message[0].suser}}</span>
        <span class="geren">个人设置</span>
      </div>
    </div>
    <div class="info">
      <div class="left">
        <div class="left_box">
          <span>{{chuanzuo}}</span>
          <span>我的创作</span>
        </div>
      </div>
      <div class="xian"></div>
      <div class="left">
        <div class="left_box">
          <span>{{guanzhu}}</span>
          <span>我的关注</span>
        </div>
      </div>
      <div class="xian"></div>
      <div class="left">
        <div class="left_box">
          <span>{{shouchan}}</span>
          <span>我的收藏</span>
        </div>
      </div>
    </div>

    <div class="huiyuan">
      <div class="huiyuan_img">
        <img src="../assets/img/wd_hy.png" alt />
      </div>
      <span>开通会员</span>
    </div>

    <div class="jiru">
      <div class="j" @click="jump(i)" v-for="(item,i) in one" :key="item.id">
        <div class="jrbox" :style="item.color"
        >
          <img :src="item.src" alt />
        </div>
        <span>{{item.txt}}</span>
      </div>
    </div>

    <div class="jiru">
      <div class="j" v-for="item in toow" :key="item.id">
        <div class="jrbox" :style="item.color">
          <img :src="item.src" alt />
        </div>
        <span>{{item.txt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mup",
  data() {
    return {
      chuanzuo: 0,
      guanzhu: 0,
      shouchan: 0,
      namebox:{},
      one: [
        {
          id: 1,
          src: require("../assets/img/xx.png"),
          txt: "学习记录",
          color: "background:#0192fb"
        },
        {
          id: 2,
          src: require("../assets/img/yg.png"),
          txt: "已购",
          color: "background:#09c8f1"
        },
        {
          id: 3,
          src: require("../assets/img/ye.png"),
          txt: "余额",
          color: "background:#0192fb"
        },
        {
          id: 4,
          src: require("../assets/img/gwc.png"),
          txt: "购物车",
          color: "background:#01d374"
        }
      ],
      toow: [
        {
          id: 1,
          src: require("../assets/img/yhj.png"),
          txt: "优惠劵",
          color: "background:#18a9fb"
        },
        {
          id: 2,
          src: require("../assets/img/hd.png"),
          txt: "活动广场",
          color: "background:#25b1fd"
        },
        {
          id: 3,
          src: require("../assets/img/fw.png"),
          txt: "服务中心",
          color: "background:#fcb559"
        },
        {
          id: 4,
          src: require("../assets/img/sj.png"),
          txt: "我的书架",
          color: "background:#01d17c"
        }
      ]
    };
  },
  methods:{
    jump(em){
      if(em==3){
        this.$router.push("/shpin");
      }
    },
    goLx(){
      this.$router.push("/Loginx");
    },
  },
  mounted() {
    console.log(this.$store.state.allperdata.message[0],"mup");
    if(this.$store.state.allperdata.message[0].suser==""){
      this.$router.push("/Loginx");
    }
  }
};
</script>
<style lang='scss' scoped>
.top_hp {
  display: flex;
  width: 100vw;
  align-items: center;
  height: px2rem(300);
  background: linear-gradient(to right, #b8beb8, #c9a65a, #b8beb8);
}
.por {
  width: px2rem(120);
  height: px2rem(120);
  border-radius: 50%;
  background-color: white;
  margin-left: px2rem(50);
  overflow: hidden;
}
.por img{
  width: 100%;
  height: 100%;
}
.por2 {
  color: white;
  font-size: px2rem(30);
  margin-left: px2rem(20);
  line-height: px2rem(45);
}
.por2 span {
  display: block;
}
.geren {
  text-align: center;
  padding: 0 px2rem(20);
  font-size: px2rem(25);
  background-color: #987a3d;
  opacity: 0.6;
  border-radius: px2rem(25);
}
.info {
  width: 100vw;
  height: px2rem(180);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .left {
    display: flex;
    width: px2rem(200);
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .left_box {
    display: flex;
    flex-flow: column;
    line-height: px2rem(50);
  }
  .left_box span {
    font-size: px2rem(32);
    text-align: center;
    display: block;
  }
  .xian {
    width: px2rem(2);
    height: px2rem(30);
    background-color: #c9c9c9;
    margin-left: px2rem(30);
  }
}
.huiyuan {
  width: 100vw;
  height: px2rem(70);
  background-color: white;
  margin: px2rem(15) 0;
  display: flex;
  align-items: center;
}
.huiyuan_img {
  width: 8%;
  margin-left: px2rem(50);
}
.huiyuan_img img {
  width: 100%;
}
.huiyuan span {
  font-size: px2rem(30);
  color: #dcbe95;
  margin-left: px2rem(20);
}
.jiru {
  width: 100vw;
  height: px2rem(150);
  background-color: white;
  margin: px2rem(10) px2ren(10);
  padding: px2rem(20) 0;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-around;
}
.j {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: px2rem(120);
}

.jrbox {
  width: px2rem(75);
  height: px2rem(75);
  border-radius: 100%;
  background-color: rgb(55, 134, 180);
  display: flex;
  align-items: center;
  justify-content: center;
}
.jrbox img {
  display: block;
  width: 80%;
}
.jiru span {
  font-size: px2rem(20);
}
</style>