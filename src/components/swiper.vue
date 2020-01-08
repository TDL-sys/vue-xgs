<!--  -->
<template>
  <div class="swiper">
    <div class="divzd" ref="divzd">
      <!-- 打印class -->
      <div v-for="(i,index) in 5" :key="index" :class="'d'+(index+1)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {};
  },
  methods: {
    show() {
      try {
        //在这里运行代码
        var div1 = document.querySelectorAll(".divzd div");
        var x = 0;
        var i = 0;
        var stime = setInterval(() => {
          div1[i].classList.add("tranrse");
          x -= 100;
          div1[i].style.transform = "translateX(" + x + "%)";
          x = 0;
          i++;
          if (i == 5) {
            i = 0;
            for (let i of Array.from(div1)) {
              i.style.transform = "translateX(0px)";
            }
            for (let i = 0; i < div1.length; i++) {
              div1[i].classList.remove("tranrse");
            }
          }
        }, 2000);
        stime();
      } catch (err) {
        //在这里处理错误
        // console.log(err);
      }
    }
  },
  mounted() {
    this.show();
  }
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
.swiper{
  width: 100vw;
  height: px2rem(300);
}
.divzd {
  width: 100vw;
  height: px2rem(300);
  overflow: hidden;
  position: relative;
}

.divzd div {
  width: 100%;
  height: px2rem(300);
  position: absolute;
  left: 0;
  top: 0;
  border: 0px;
}

.d1 {
  z-index: 4;
  background-color: red;
  background: url("https://dn-simplecloud.shiyanlou.com/course/1557394987689_Python(3).png");
  background-size: cover;
}

.d2 {
  z-index: 3;
  background-color: blue;
  background: url("https://dn-simplecloud.shiyanlou.com/course/1557394894766_%E8%BF%90%E7%BB%B40509(1).png");
  background-size: cover;
}

.d3 {
  z-index: 2;
  background-color: black;
  background: url("https://dn-simplecloud.shiyanlou.com/course/1557395019424_%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0(3).png");
  background-size: cover;
}

.d4 {
  z-index: 1;
  background-color: rgb(20, 248, 50);
  background-size: cover;
  background: url("https://dn-simplecloud.shiyanlou.com/course/1557394894766_%E8%BF%90%E7%BB%B40509(1).png");
  background-size: cover;
  /* transform: translateX() */
  /* transition:  */
}
.d5 {
  z-index: 0;
  background-color: red;
  background-size: cover;
  background: url("https://dn-simplecloud.shiyanlou.com/course/1557394987689_Python(3).png");
  background-size: cover;
}
.tranrse {
  transition: 1s all;
}
</style>