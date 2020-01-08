<!--  -->
<template>
  <div class="content1">
    <div class="jinxuan" @click="tiaozhuan">
      <div class="jin_text">
        精选好课
        <span>更多</span>
      </div>
      <div class="jin_box" >
        <div class="jin_box_1" @click="addsp(key)" v-for="(item,key) in jixuan1" :key="item.id">
          <img :src="item.src" />
          <span class="jin_box_1jic">{{item.text1}}</span>
          <div class="jin_box_1_box">
            <span>{{item.text2}}</span>
            <span>{{item.text3}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "content1",
  data() {
    return {

    };
  },
  methods: {
    addsp(key) {
      localStorage.setItem("haoke",JSON.stringify(this.jixuan1[key]))
      // console.log(this.jixuan1[key].text1)
      this.$emit("addsp",this.jixuan1,this.jixuan1[key].text1)
    },
    tiaozhuan(){
      this.$router.push("/jinxuanxianqin");
    }
  },
  props: ["jixuan1"],
  computed: {},
  mounted() {
    // this.jixuan = JSON.parse(this.jixuan1)
  }
};
</script>
<style lang='scss' scoped>
.jinxuan {
  padding-left: px2rem(10);
  padding-right: px2rem(10);
  padding-top: px2rem(5);
  margin-top: px2rem(20);
  font-size: px2rem(24);
  margin-bottom: px2rem(84);
  background-color: white;
  .jin_text {
    display: flex;
    position: relative;
    padding-top: px2rem(20);
  }
  .jin_text span {
    position: absolute;
    right: 0;
  }
  .jin_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: px2rem(20);
    .jin_box_1 {
      width: 48%;
      // height: px2rem(150);
      background-color: #fff;
      margin-top: px2rem(10);
      margin-bottom: px2rem(10);
      .jin_box_1jic {
        display: block;
        padding-top: px2rem(20);
        padding-left: px2rem(10);
        padding-bottom: px2rem(20);
      }
      .jin_box_1_box {
        display: flex;
        position: relative;
        // padding-bottom: px2rem(10);
        align-items: center;
        padding: px2rem(10) px2rem(10);
      }
      .jin_box_1_box span:nth-child(1) {
        color: #b0b0b0;
      }
      .jin_box_1_box span:nth-child(2) {
        background-color: #5acf4a;
        color: #fff;
        font-size: px2rem(20);
        border-radius: px2rem(24);
        padding: px2rem(5) px2rem(20);
        position: absolute;
        right: px2rem(10);
      }
    }
    .jin_box_1 img {
      width: 100%;
    }
  }
}
</style>