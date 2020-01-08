<!--  -->
<template>
  <div class="con_xunlei">
    <div class="tcr">
      <div class="tcr_txt">
        <span>训练营强化</span>
        <span>更多</span>
      </div>
      <div class="tcr_box" v-for="item2 in xunlei1" :key="item2.id">
        <div class="tcr_box_left">
          <img :src="item2.src" />
        </div>
        <div class="tcr_box_ri">
          <span>{{item2.txt1}}</span>
          <span>{{item2.txt2}}</span>
          <span>会员五折</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "con_xunlei",
  data() {
    return {};
  },
  props: ["xunlei1"],
  mounted() {
    // console.log(this.xunlei1)
  }
};
</script>
<style lang='scss' scoped>
.tcr {
  padding-left: px2rem(10);
  padding-right: px2rem(10);
  padding-top: px2rem(5);
  margin-top: px2rem(20);
  font-size: px2rem(24);
  margin-bottom: px2rem(94);
  background-color: white;
  .tcr_txt {
    display: flex;
    position: relative;
    padding-top: px2rem(20);
    padding-bottom: px2rem(20);
  }
  .tcr_txt span:nth-child(2) {
    position: absolute;
    right: px2rem(10);
  }
  .tcr_box {
    display: flex;
    margin-top: px2rem(10);
    background: white;
    font-size: px2rem(26);
    padding-bottom: px2rem(20);
  }
  .tcr_box_left {
    width: 48%;
  }
  .tcr_box_left img {
    width: 100%;
  }
  .tcr_box_ri {
    width: 40%;
  }
  .tcr_box_ri span {
    display: block;
    padding-left: px2rem(10);
    padding-top: px2rem(20);
  }
  .tcr_box_ri span:nth-child(2) {
    width: 100%;
    height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .tcr_box_ri span:nth-child(3) {
    margin-left: px2rem(10);
    margin-top: px2rem(15);
    padding: px2rem(10);
    color: #dfaaad;
    box-sizing: border-box;
    display: inline-block;
    border-radius: px2rem(10);
    border: 1px solid #dfaaad;
  }
}
</style>