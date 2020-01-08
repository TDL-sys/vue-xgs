import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import comit from "../views/comit.vue";
import mup from "../views/mup.vue";
import jinxuanxianqin from "../views/jinxuanxianqin.vue";
import shpin from "../views/shpin.vue";
import  commitdls from "../components/commit_dls";
import Loginx from  "../views/Loginx"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    meta:1,
    component: Login
  },
  {
    path: "/Home",
    name: "Home",
    meta:2,
    component: Home
  },
  {
    path: "/comit",
    name: "comit",
    meta:3,
    component: comit
  },
  {
    path: "/mup",
    name: "mup",
    meta:4,
    component: mup
  },
  {
    path: "/jinxuanxianqin",
    name: "jinxuanxianqin",
    meta:5,
    component: jinxuanxianqin
  },
  {
    path: "/shpin",
    name: "shpin",
    meta:6,
    component: shpin
  },
  {
    path: "/commitdls",
    name: "commitdls",
    meta:7,
    component: commitdls
  },
  {
    path: "/Loginx",
    name: "Loginx",
    meta:8,
    component: Loginx
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
