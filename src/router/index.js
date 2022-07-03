import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Article from "@/views/Article";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/article/:articleId",
    name: "Article",
    component: Article,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
