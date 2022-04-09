import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "Index",
      component(resolve) {
        require(["../views/index.vue"], resolve); // 首页
      },
    },
  ],
});
