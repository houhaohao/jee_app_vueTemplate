<template>
  <div class="">
    <Header :leftArrow="1" :title="'首页'" id="topHead"></Header>
    <p>1</p>
    <p>1</p>
    <p>1</p>

    <p>1</p>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import { command } from "../public/js/command";

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    this.toDevive();
    this.toService();
  },
  mounted() {},
  methods: {
    toDevive() {
      let parms = {
        event: "aaaa",
        desc: [
          [
            {
              id: 1,
              type: "int",
              value: 1,
            },
          ],
        ],
      };
      command(parms)
        .then((res) => {
          if (res.success) {
            //所有取值都在result下
            console.log(res.result);
          }
        })
        .catch((e) => {
          console.log(e);
          // Toast(
          //   e.message ? e.message : e.errMsg ? e.errMsg : "网络异常，请稍后重试"
          // );
        });
    },
    toService() {
      let parms = {
        event: "bbbb",
        type: 1,
        descType: 1,
        desc: [{}],
      };
      command(parms)
        .then((res) => {
          if (res.success) {
            //所有取值都在result下
            console.log(res.result);
          }
        })
        .catch((e) => {
          console.log(e);
          // Toast(
          //   e.message ? e.message : e.errMsg ? e.errMsg : "网络异常，请稍后重试"
          // );
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
