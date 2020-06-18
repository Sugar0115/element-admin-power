<template>
  <div class="dashboard-container">
    <mallki text="为人民服务" href="http://www.baidu.com/"></mallki>
    <span class="black-btn">为人民服务</span>
    <drop-down :items="articleList" title="系列文章"></drop-down>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import mallki from "@/components/mallki.vue";
import dropDown from "@/components/dropdown.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      articleList: [
        {
          title: "基础篇",
          href: "https://juejin.im/post/59097cd7a22b9d0065fb61d2"
        },
        {
          title: "登录权限篇",
          href: "https://juejin.im/post/591aa14f570c35006961acac"
        },
        {
          title: "实战篇",
          href: "https://juejin.im/post/593121aa0ce4630057f70d35"
        },
        {
          title: "vue-admin-template 篇",
          href: "https://juejin.im/post/595b4d776fb9a06bbe7dba56"
        },
        {
          title: "v4.0 篇",
          href: "https://juejin.im/post/5c92ff94f265da6128275a85"
        },
        {
          title: "优雅的使用 icon",
          href: "https://juejin.im/post/59bb864b5188257e7a427c09"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["name"])
  },
  components: {
    mallki,
    dropDown
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/btn.scss";
.dashboard {
  &-container {
    margin: 30px;
    // background-color: blue;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
