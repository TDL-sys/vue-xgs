import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:"哈哈",
    pinglun:[
      {
        id:1,
        src:"http://img1.imgtn.bdimg.com/it/u=1098561349,1713299664&fm=11&gp=0.jpg",
        name:"溪LL",
        time:"10小时前",
        conten:"呵呵",
        review:[
          {
            id:1,
            src:"http://img5.imgtn.bdimg.com/it/u=3883232871,2428548702&fm=15&gp=0.jpg",
            conten:"哈哈",
            name:"树驾"
          },

        ]
      },
      {
        id:2,
        src:"http://img3.imgtn.bdimg.com/it/u=339749406,4064080795&fm=15&gp=0.jpg",
        name:"Booo",
        time:"10小时前",
        conten:"。。。",
        review:[
          {
            id:2,
            src:"http://img0.imgtn.bdimg.com/it/u=2600862994,2565094368&fm=15&gp=0.jpg",
            conten:"。。。",
            name:"清风醉酒痴"
          }
        ]
      },
      {
        id:3,
        src:"http://img1.imgtn.bdimg.com/it/u=1751475856,2552656879&fm=26&gp=0.jpg",
        name:"浪人",
        time:"10小时前",
        conten:"哈哈哈哈哈",
        review:[
          {
            id:3,
            src:"http://img1.imgtn.bdimg.com/it/u=3161173044,2244678317&fm=26&gp=0.jpg",
            conten:"哈哈",
            name:"扑哧就是一笑"
          }
        ]
      },
    ],
    allperdata:{
      message:[{
        suser:"",
        sheadimg:""
      }]
    }
  },
  mutations: {
    huice(state,index){
      state.pinglun.push(index)
    },
    // huice2(state,index,i){
    //   state.pinglun[i].push(index)
    // }
    // huicetow(state,index){
    //
    // }
  },
  actions: {},
  modules: {}
});
