<template>
  <div class="Home">
    <div class="topss">
      <input type="text" placeholder="搜一搜感兴趣的" />
    </div>
    <div class="calif">
      <div class="cabox">
        <div v-for="item in shujv" :key="item.id">{{item}}</div>
      </div>
    </div>
    <div class="centenr">
      <div class="ct_1" v-for="item in kechen" :key="item.id">
        <div class="imgbox">
          <img :src="item.src" alt />
        </div>
        <span>{{item.txt1}}</span>
        <div class="txtbox">
          <span>{{item.txt2}}</span>
          <span>限时免费</span>
        </div>
      </div>
    </div>
    <span class="bomt">
      您还翻呢
    </span>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      shujv: [
        "全部",
        "Python",
        "PHP",
        "Java",
        "Ruby",
        "Laravel",
        "C",
        "C++",
        "NodeJS",
        "Go",
        "Flsk",
        "OpenCV",
        "ThiKphp",
        "爬虫",
        "Django",
        "Sping",
        "SSM",
        "SPingboot",
        "Python"
      ],
      kechen: [
        {
          id: 1,
          src:
            "https://dn-simplecloud.shiyanlou.com/courses/uid8504-20190712-1562930274699",
          txt1: "Python 新手入门",
          txt2: "15533 人学习"
        },
        {
          id: 2,
          src: "https://dn-simplecloud.shiyanlou.com/1500460827398.png",
          txt1: "Python 实现项目",
          txt2: "15533 人学习"
        },
        {
          id: 3,
          src:
            "https://dn-simplecloud.shiyanlou.com/course/1539678114813_[1166]-[C++-实现-STL-库的组件和算法].jpg",
          txt1: "C++算法",
          txt2: "15533 人学习"
        },
        {
          id: 4,
          src: "https://dn-simplecloud.shiyanlou.com/1470631844655.png",
          txt1: "C++Web服务开发",
          txt2: "15533 人学习"
        },
        {
          id: 5,
          src:
            "https://dn-simplecloud.shiyanlou.com/course/1531706079197_【1127】-【Django基础教程】.png",
          txt1: " Django 基础教程",
          txt2: "15533 人学习"
        },
        {
          id: 6,
          src:
            "https://dn-simplecloud.shiyanlou.com/courses/uid18510-20190717-1563357693503",
          txt1: "C++11数据库",
          txt2: "15533 人学习"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.Home{
  padding: px2rem(1);
}
// 顶部搜索
.topss {
  width: 100vw;
  box-sizing: border-box;
  padding: px2rem(10) px2rem(15);
  margin-top: px2rem(10);
  font-size: px2rem(24);
  background-color: white;
}
.topss input {
  width: 100%;
  text-align: center;
  font-size: px2rem(30);
  color: black;
  border: 0;
  height: px2rem(50);
  border-radius: px2rem(10);
  border: 1px solid #c6c6c6;
}
//分类
.calif {
  padding: px2rem(20) px2rem(15) px2rem(20) px2rem(15);
  font-size: px2rem(26);
  margin-top: px2rem(20);
  background-color: white;
}

.cabox {
  margin-top: px2rem(18);
  display: flex;
  flex-wrap: wrap;
}
.cabox div {
  cursor: pointer;
  padding: px2rem(15) px2rem(20);
  color: #c6c6c6;
  border-radius: px2rem(8);
  border: 1px solid #c6c6c6;
  margin-left: px2rem(25);
  margin-top: px2rem(20);
}
.cabox div:hover {
  color: #08bf91;
  border: 1px solid #08bf91;
}
.calif div:nth-child(1) span:nth-child(1) {
  margin-left: px2rem(0);
  color: #08bf91;
  border: 1px solid #08bf91;
}
.calif span:nth-child(1) {
  margin-left: px2rem(0);
}
// 内容
.centenr {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: px2rem(20) px2rem(15) px2rem(20) px2rem(15);
  background-color: white;
}
.ct_1 {
  width: 48%;
  margin-top: px2rem(20);
  border-radius: px2rem(10);
  background-color: #fff;
  box-shadow: 1px 1px 12px 4px #e2e0e0;
}
.ct_1 span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.imgbox {
  width: 100%;
}
.imgbox img {
  width: 100%;
  border-radius: px2rem(10);
}
.ct_1 span {
  display: inline-block;
  padding: px2rem(30) px2rem(10);
  font-size: px2rem(30);
}
.txtbox {
  display: flex;
  align-items: center;
  position: relative;
}
.txtbox span {
  display: inline-block;

  font-size: px2rem(22);
  color: #babdbc;
}
.txtbox span:nth-child(2) {
  position: absolute;
  right: px2rem(15);
  color: white;
  background-color: rgba(255, 166, 0, 0.705);
  padding: px2rem(10) px2rem(20);
  border-radius: px2rem(20);
}
.bomt{
  display: block;
  padding-top: px2rem(20);
  padding-bottom: px2rem(120);
  font-size: px2rem(30);
  text-align: center;
  background-color: white;
  color: #c0cfcc;
}
</style>
