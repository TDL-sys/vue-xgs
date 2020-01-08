<template>
  <div class="commit_dls">
    <topheading title="帖子详情"></topheading>
    <div class="head_img">
      <div class="imgbox">
        <img src="http://static2.ivwen.com/users/3068153/77ae11b86d9742789d5cfcb8e9c6d957.jpg" alt="">
      </div>
      <div class="head_rig">
        <span>无畏境界</span>
        <span>12-04 · 来自PC端</span>
      </div>
    </div>

    <div content_max>
      <span class=content_max_txt>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</span>

      <div class=conten_max_imgbox>
        <img src="https://pic4.zhimg.com/80/v2-fc81f81d17a203590c945c177e119bd2_hd.jpg" alt="" class=content_max_img>
      </div>

      <div class="content_max_bom">
        <div>阅读 5300</div>
        <div class=cmbom_fab>发表于 10小时前</div>
      </div>

      <div class="bottom_comt">
        <div class="bc_top">全部评论</div>
        <div class="comt_con" v-for="(item,i) in commtens" :key="i">
          <div class=comtcon_onebox>
            <div class="comtcon_one" @click="addcomtz(item)">
              <div class=comten_ongimgbox><img
                :src="item.sheadimg" alt=""></div>
              <div class="comtconone_xinxi">
                <div class=cconxinxi_ming>{{item.suser}}</div>
                <div class=cconxinxi_rq>{{item.comtime}}</div>
              </div>
              <div class=comtconone_dianz>
                <span>{{dianzhan}}</span>
                <div><img src="https://rs.vip.miui.com/vip-resource/prod/mio-pc/v1/static/media/zan.8abff612.svg">
                </div>
              </div>
            </div>
          </div>
          <div class="zuipingbox">
              <span class=comt_neoron>
              {{item.comtxt}}
              </span>
            <div v-for="(item2,index2) in commten" :key="index2" class=pingbox>
              <div v-if="item2.append_id==item.comm_id">
                <div class="comtcon_one comtcon_one2">
                  <div class=comten_ongimgbox><img
                    :src="item2.sheadimg" alt=""></div>
                  <div class="comtconone_xinxi">
                    <div class=cconxinxi_ming>{{item2.suser}}</div>
                    <div class=cconxinxi_rq>{{item2.comtime}}</div>
                  </div>
                  <div class=comtconone_dianz>
                    <span>{{dianzhan}}</span>
                    <div><img src="https://rs.vip.miui.com/vip-resource/prod/mio-pc/v1/static/media/zan.8abff612.svg"
                              alt=""></div>
                  </div>
                </div>
                <span class="comt_neoron comt_neoron_tow">
                       {{item2.comtxt}}
                    </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fayan">
      <div class=inpbox>
        <input type=text @keydown.enter="huice" class="pinglunneiron" v-model="huifuren"/>
      </div>
      <div class="fayan_pinglun">
        <img src="https://rs.vip.miui.com/vip-resource/prod/mio-pc/v1/static/media/res_.77116916.svg" alt="">
        <span class="fayan_dz2">58</span>
      </div>
      <div class="fayan_pinglun fayan_dianz">
        <img src="https://rs.vip.miui.com/vip-resource/prod/mio-pc/v1/static/media/zan.8abff612.svg" alt="">
        <span class="fayan_dz">69</span>
      </div>
    </div>


  </div>
</template>

<script>
  import topheading from './Topheading'
  import axios from 'axios'
  import {MessageBox} from "mint-ui";
  export default {

    // pinglun11:this.$store.state.pinglun.review,
    name: "commit_dls",
    data() {
      return {
        pinglun11: this.$store.state.pinglun,
        dianzhan: 0,
        time1: "",
        huifuren: "",
        append_id: -1,
        huifuindex: 0,
        shuji: [
          {
            name: "格栅 ",
            src: "http://img4.imgtn.bdimg.com/it/u=1929097292,3584130750&fm=26&gp=0.jpg",
            time: ""
          },
          {
            name: "赐我白日梦 ",
            src: "http://img5.imgtn.bdimg.com/it/u=94491575,2898353016&fm=15&gp=0.jpg",
            time: ""
          },
          {
            name: "kingsonCai",
            src: "http://img3.imgtn.bdimg.com/it/u=3148755696,3586831297&fm=26&gp=0.jpg",
            time: ""
          },
          {
            name: "陈芳志 ",
            src: "http://img1.imgtn.bdimg.com/it/u=189505504,1154136465&fm=26&gp=0.jpg",
            time: ""
          }
        ],
        commten: []

      }
    },
    components: {
      topheading
    },

    computed: {
      commtens: function () {
        return this.commten.filter(function (item) {
          return item.append_id == -1
        })
      }
    },

    methods: {
      huice() {
        this.time1 = this.getdata()
        var tt = /^@/
        if(this.$store.state.allperdata.message[0].suser==""){
          MessageBox({
            title: '提示',
            message: '你还没有登录是否登录',
            showCancelButton: true
          }).then(res=>{
            console.log(res);
            if(res=="confirm"){
              // console.log("tiao");
              this.$router.push('/Loginx')
            }
          })
          return
        }
        if (tt.test(this.huifuren) && this.huifuren.length > 2) {
          axios({
            url: "/api/Addcmt",   //请求地址
            method: "post", //请求方法,
            data: [this.append_id, 1, this.$store.state.allperdata.message[0].id, this.huifuren, this.time1]
          }).then((res)=>{
            if(res.data.status==1){
              console.log("评论成功")
            }
          })
          this.setData(this.append_id)
          this.append_id = -1
        } else {
          axios({
            url: "/api/Addcmt",   //请求地址
            method: "post", //请求方法,
            data: [this.append_id, 1, this.$store.state.allperdata.message[0].id, this.huifuren, this.time1]
          }).then((res)=>{
            if(res.data.status==1){
              console.log("评论成功")
            }
          })
          this.setData(-1)
          console.log(this.commten, "push后")
        }
        console.log("评论时间:" + this.time1, "追评主频:" + this.append_id, "主题id:" + 1, "评论人id:" + this.$store.state.allperdata.message[0].id, "评论内容:" + this.huifuren)
        this.huifuren = ""
      },
      setData(value){
        this.commten.push(
          {
            addtime: null,
            append_id: value,
            comm_id: null,
            comtime: this.time1,
            comtxt: this.huifuren,
            id: null,
            sex: null,
            sheadimg: this.$store.state.allperdata.message[0].sheadimg,
            spwd: null,
            suser: this.$store.state.allperdata.message[0].suser,
            ther_id: null,
            user_id: null,
          }
        );
      },
      getdata() {
        let y1 = new Date().getFullYear() + "年"
        let y2 = new Date().getMonth() + 1 + "月"
        let y3 = new Date().getDate() + "日"
        // this.time1 =
        return y1 + y2 + y3;
      },
      addcomtz(item) {
        this.huifuren = "@" + item.suser + "："
        // this.huifuindex = i
        this.append_id = item.comm_id
        console.log(item.comm_id);
      }
    },
    mounted() {
      axios({
        url: "/api/comment",   //请求地址
        method: "get"   //请求方法,
      }).then(res => {
        // console.log(res.data.message)
        this.commten = res.data.message
        console.log(this.commten, "请求评论内容");
      })
      // var shijian = new Date()
      // console.log(this.$store.state.allperdata.message[0].suser);
    }

  }
</script>

<style lang=scss scoped>
  .commit_dls {
    background-color: white;
    /*padding: px2rem(1) px2rem(0);*/
  }

  .head_rig {
    font-size: px2rem(20);
    align-self: center;
    line-height: px2rem(30);
    margin-left: px2rem(30);
  }

  .head_img {
    display: flex;
    margin-top: px2rem(20);
    height: 100%;
  }

  .conten_max_imgbox {
    padding: px2rem(0) px2rem(10);
  }

  .imgbox img {
    width: px2rem(70);
    border-radius: 50%;
  }

  .head_rig span {
    display: block;
  }

  .content_max {

  }

  .content_max_txt {
    display: block;
    margin-top: px2rem(24);
    text-indent: px2rem(29);
    letter-spacing: px2rem(3);
    font-size: px2rem(25);
    line-height: px2rem(45);
    padding: px2rem(0) px2rem(10);
  }

  .content_max_img {
    /*padding: px2rem(0) px2rem(10);*/
    margin-top: px2rem(20);
    width: 100%;
  }

  .content_max_bom {
    width: 97vw;
    position: absolute;
    margin-top: px2rem(10);
    color: #c5c5c5;
    font-size: px2rem(20);
    display: flex;
    letter-spacing: px2rem(2);
  }

  .cmbom_fab {
    position: absolute;
    right: 0;
  }

  .bottom_comt {
    margin-top: px2rem(80);
    margin-bottom: px2rem(80);

    .bc_top {
      color: #a1a1a1;
      font-size: px2rem(30);
    }

    .comt_con {
      margin-top: px2rem(20);
      padding-top: px2rem(30);
      padding-left: px2rem(15);
      /*margin-bottom: px2rem(20);*/
      border-bottom: 1px solid #f5f5f5;
    }

    .comtcon_onebox {
      height: px2rem(78);
    }

    .comtcon_one {
      width: 94vw;
      display: flex;
      /*position: absolute;*/
    }

    .comtcon_one2 {
      width: 80vw;
    }

    .comten_ongimgbox {
      width: px2rem(50);
      border-radius: 50%;
      align-self: center;
    }

    .comten_ongimgbox img {
      width: 100%;
      border-radius: 50%;
    }

    .comtconone_xinxi {
      margin-left: px2rem(20);
      align-self: center;
      line-height: px2rem(40);
    }

    .cconxinxi_ming {
      font-size: px2rem(25);
      color: #ffb285;
    }

    .cconxinxi_rq {
      color: #bebebe;
      font-size: px2rem(18);
    }

    .comtconone_dianz {
      display: flex;
      align-self: center;
      align-items: center;
      position: absolute;
      right: px2rem(30);
      font-size: px2rem(20);
      color: #e0e0e0;
    }

    .comtconone_dianz span {
      display: block;
      align-self: center;
      margin-right: px2rem(5);
      margin-top: px2rem(3);
    }

    .comtconone_dianz div {
      align-self: center;
      width: px2rem(30);
    }

    .comtconone_dianz div > img {
      align-self: center;
      width: 100%;
    }
  }

  .zuipingbox {
    margin-bottom: px2rem(32);
  }

  .comt_neoron {
    font-size: px2rem(25);
    color: #929292;
    display: block;
    padding-top: px2rem(30);

    letter-spacing: px2rem(2);

  }

  .fayan {
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding: 0 !important;
    height: px2rem(80);
    background-color: white;
    display: flex;
    /*border-top: 1px solid #f8f8f8;*/
    /*box-shadow: 4px 0px 8px 0 rgba(28,31,33,.1);*/

  }

  .inpbox {
    width: 70%;
    height: 80%;
    border-radius: px2rem(30);
    background-color: #f6f6f6;
    align-self: center;
    margin-left: px2rem(10);
    overflow: hidden;
  }

  .fayan input {
    /*background-color: red;*/
    width: 100%;
    height: 100%;
    border: 0;
    padding-left: px2rem(30);
    color: #929292;
    background-color: #f6f6f6;
    font-family: 微软雅黑;
    font-weight: 500;
    font-size: px2rem(25);

  }

  .fayan_pinglun {
    /*background-color: red;*/
    width: px2rem(35);
    text-align: center;
    padding-top: px2rem(10);
    box-sizing: border-box;
    margin-left: px2rem(40);
    font-size: px2rem(20);
    /*<!--padding-top: px2rem(-20);-->*/
  }

  .fayan_pinglun img {
    width: 100%;
  }

  .fayan_dz {
    display: block;
    margin-top: px2rem(15);
  }

  .fayan_dz2 {
    display: block;
    margin-top: px2rem(13);
  }

  .fayan_dianz img {
    margin-top: px2rem(-4);
    /*margin-bottom: px2rem(2);*/
  }


  .huif {
    display: flex;
  }

  .zuipingbox {
    padding-left: px2rem(70);
  }

  .huif_zhui {
    margin: px2rem(30) 0px;
  }

  .comt_zneiron {
    margin-left: px2rem(70);
    margin-top: px2rem(-50);
  }

  .pingbox {
    margin-top: px2rem(20);
  }

  .comt_neoron_tow {
    /*<!--margin-top: px2rem(-10);-->*/
    margin-left: px2rem(72);
  }
</style>