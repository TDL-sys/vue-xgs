<template>
  <div class="comit-dontai">
    <div class="dontai">
      <div class="dontai-box" v-for="(item,i) in dontai" :key="item.id" @click="jumpz(i)">
        <div class=dontai-s>
          <span>{{item.text}}</span>
          <img :src="item.imgcom" alt="" class="img_info">
        </div>
        <div class="dontai_dibu">
          <img :src="item.img" alt="" class=tx>
          <span>{{item.name}}</span>
          <div class="liuc">
            <div><img src="https://rs.vip.miui.com/vip-resource/prod/mio-pc/v1/static/media/res_.77116916.svg" alt=""><span>60</span></div>
            <div><img src="https://rs.vip.miui.com/vip-resource/prod/mio-pc/v1/static/media/zan.8abff612.svg" alt=""><span>30</span></div>
            <div><img src="../assets/img/commi-dln/zhuanf.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comit_dontai",
    props: {
      dontai: {
        type: Array,
        defalut() {
          return []
        }
      }
    },
    methods:{
      jumpz(i){
        console.log(i)
        this.$router.push("/commitdls")
      }
    }
  }
</script>

<style lang="scss" scoped>
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
      justify-content: space-around;
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
