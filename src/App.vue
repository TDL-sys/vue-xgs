<template>
  <div id="app">

    <keep-alive>
      <transition :name="transitionName">
      <router-view />
      </transition>
    </keep-alive>

    
    <div class="dibu">
      <div @click="Login">首页</div>
      <div @click="home">分类</div>
      <div @click="community">社区</div>
      <div @click="Msetup">我的</div>
    </div>

  </div>
</template>
<script>
import "./assets/style/common.css";
export default {
  data() {
    return {
      transitionName:""
    };
  },
  watch:{
    '$route' (to, from) {
    // console.log(to)

    const toIndex = to.meta
    const fromIndex = from.meta

    this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
  }
  },
  methods: {
    Login() {
      if (this.$route.meta != 1) {
        this.$router.push("/");
      }
    },
    home() {
      if (this.$route.meta != 2) {
        this.$router.push("/Home");
      }
    },
    community() {
      if (this.$route.meta != 3) {
        this.$router.push("/comit");
      }
    },
    Msetup() {
      if(this.$store.state.allperdata.message[0].suser!=""){
        if(this.$route.meta != 4){
          this.$router.push("/mup");
        }
      } else {
        this.$router.push("/Loginx");
      }
    }
  },
  updated(){
    if(this.$route.meta>4){
      document.querySelector(".dibu").classList.add("yinc")
    }else{
      document.querySelector(".dibu").classList.remove("yinc")
    }
  },
  mounted() {
    if(this.$route.meta>4){
      document.querySelector(".dibu").classList.add("yinc")
    }else{
      document.querySelector(".dibu").classList.remove("yinc")
    }
    // console.log(this.$route.meta);
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "微软雅黑";
  /*Microsoft YaHei UI Light SimSun-ExtB*/
  /*Microsoft YaHei UI Light*/
  font-weight: 400;
}
.dibu {
  width: 100vw;
  height: px2rem(80);
  // margin-top: 50px;
  font-size: px2rem(30);
  line-height: px2rem(80);
  display: flex;
  border-radius: px2rem(20) px2rem(20) 0 0;
  box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.3);
  background-color: rgb(247, 247, 247);
  justify-content: space-around;
  z-index: 1;
  position: fixed;
  bottom: -1px;
}
.dibu div{
  box-shadow: 0 0 0 0 ;
}
.yinc{
  display: none;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 400ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
