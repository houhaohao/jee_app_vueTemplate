import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from './store'
// 全局常用 css
import "./public/css/common.scss";
// import 'vant/lib/index.css';
// 公众js 挂载
import Vconsole from "vconsole";
let env = process.env.NODE_ENV;
console.log("env", env);
if (env !== "production") {
  new Vconsole();
}
// 阻止“橡皮筋效果” https://www.zhihu.com/question/22256539
document.body.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  },
  { passive: false }
); //passive 参数不能省略，用来兼容ios和android
Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
