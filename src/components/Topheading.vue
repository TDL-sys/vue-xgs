<template>
  <div class=Topheading>
    <div class=tophf @click="flashback"><img src="../assets/img/fanhui.png" alt=""></div>
    <div class=tophz>{{title}}</div>
    <div class=tophzkai><img src="../assets/img/zhangkaio.png" alt=""></div>
  </div>
</template>

<script>
  export default {
    name: "Topheading",
    props:["title"],
    methods:{
      flashback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang=scss scoped>
  .Topheading{
    height: px2rem(80);
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    display: flex;
    justify-content: space-between;
    padding: px2rem(0) px2rem(20);
    align-items: center;
  }
  .tophf{
    width: px2rem(40);
  }
  .tophf img{
    width: 100%;
  }
  .tophz{
    text-align: center;
    line-height: 100%;
    width: px2rem(300);
    font-size: px2rem(30);
  }
  .tophzkai{
    width: px2rem(40);
  }
  .tophzkai img{
    width: 100%;
  }
</style>