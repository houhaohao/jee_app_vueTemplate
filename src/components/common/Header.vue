<template>
  <div
    class="header"
    :isFlexd="isFlexd"
    :leftArrow="leftArrow"
    :titleAlign="titleAlign"
    :barColor="barColor"
    :style="'background:' + bgColor + ';' + paddingTop + ';' + flexdBg"
    @click="headerClick"
  >
    <div class="inner minBorderWidth" :style="style">
      <!-- <van-nav-bar :style="'background:' + bgColor"> -->
      <div class="left">
        <div class="prev" @click.stop="onClickLeft">
          <!-- 空白huo 文字 -->
          <span v-if="leftArrow == 0">{{ leftText }}</span>
          <img v-if="leftArrow == 1" src="@/assets/back.svg" />
          <!-- <img v-if="leftArrow == 2" src="@/assets/set-up.svg"  class="set-up-img"/> -->
          <!-- <img v-if="leftArrow == 3" src="@/assets/back-white.svg" /> -->
        </div>
      </div>
      <div class="title">
        <div :style="'color:' + titleColor" v-if="titleAlign == 1">
          {{ title }}
        </div>
        <div
          :style="'color:' + titleColor"
          v-if="titleAlign == 2"
          class="type-two"
        >
          {{ title }}
        </div>
      </div>
      <!-- </van-nav-bar> -->
    </div>
    <!--<div class="place" :style="placeStyle"></div> -->
  </div>
</template>
<script>
import Vue from "vue";
// import { Toast } from 'vant';
import JeeWeb from "@/public/js/sdk";
export default {
  props: {
    leftArrow: {
      type: [String, Number],
      default: "1",
    },
    titleAlign: {
      type: [String, Number],
      default: "1",
    },
    title: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "#fff",
    },
    titleColor: {
      type: String,
      default: "#000",
    },
    leftText: {
      type: String,
      default: "",
    },
    barColor: {
      type: [String],
      default: "black",
    },
    rightBtnBorder: {
      type: [String],
      default: "light",
    },
    isFlexd: {
      type: Boolean,
      default: false,
    },
    isTransparentBg: {
      type: Boolean,
      default: false,
    },
    backRouter: null,
  },
  data() {
    return {
      toJSON: "",
      style: "",
      myStyle: "",
      allheight: "",
      placeStyle: "",

      topHeight: "",

      paddingTop: "",

      positionFixed: "",

      flexdBg: "",

      transparentBg: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$emit("onClickLeft");
    },
    onClickRight() {},
    headerClick() {
      this.$emit("headerClick");
    },
    backNative() {
      if (this.backRouter) {
        if (this.backRouter == "/" || this.backRouter == "/index") {
          // window.location.reload()
          //DM暂时不添加退出app，可能会导致风格转换完成后没有来得及上报文件传输
        } else {
          this.$router.push({
            path: this.backRouter,
          });
        }
      }
    },
  },
  created() {
    // JeeWeb.navHeight
    //    console.log('JeeWeb.deviceInfo.navHeight',JeeWeb.deviceInfo.navHeight)
    this.paddingTop =
      "padding-top:" + JeeWeb.deviceInfo.statusBarHeight + "px;";
    if (this.titleAlign == 2) {
      this.style = "border-bottom: 1px solid #ededed;";
    }
  },
  destroyed() {
    window.removeEventListener("popstate", this.backNative, false); //false阻止默认事件
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.minBorderWidth {
  border-bottom: 0.01rem solid #ededed;
}
.header {
  // background: #fff;
  width: 100%;
  // box-shadow: 0rem 0.06rem 0.08rem 0rem
  //     rgba(203, 203, 203, 0.3);
  // position: fixed;
  left: 0;
  right: 0;
  z-index: 15;
  top: 0;
  // height: auto;
  .inner {
    height: 0.92rem;
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid #ededed;
    .left {
      position: absolute;
      padding-left: 0.42rem;
      img {
        width: 0.16rem;
        height: 0.29rem;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      div {
        font-size: 0.36rem;
      }
    }
  }
}
</style>
