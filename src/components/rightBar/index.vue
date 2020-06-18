<template>
  <div class="index">
    <i
      :style="{'background-color':theme}"
      :class="{'el-icon-setting':icon=='el-icon-setting','el-icon-close':icon=='el-icon-close','hide':classname=='hide'}"
      @click="changeToggle"
    ></i>
    <el-drawer
      size="20%"
      :before-close="close"
      modal-append-to-body
      title="系统配置布局"
      :visible.sync="drawer"
    >
      <theme @change="change"></theme>
    </el-drawer>
  </div>
</template>
<script>
import theme from "@/layout/components/Settings";
export default {
  name: "index",
  data() {
    return {
      drawer: false,
      flag: true,
      classname: "",
      name: "",
      icon: "el-icon-setting"
    };
  },
  computed: {
    theme() {
      return this.$store.state.settings.theme;
    }
  },
  components: {
    theme
  },
  methods: {
    change(val) {
      this.$emit("change", val);
    },
    // 打开抽屉
    changeToggle() {
      if (this.flag) {
        this.drawer = true;
        this.icon = "el-icon-close";
        this.flag = false;
        this.classname = "hide";
      } else {
        this.drawer = false;
        this.icon = "el-icon-setting";
        this.classname = "";
        this.flag = true;
      }
    },
    close() {
      this.drawer = false;
      this.icon = "el-icon-setting";
      this.classname = "";
      this.flag = true;
    }
  }
};
</script>
<style lang='scss' scoped>
.el-icon-setting {
  position: fixed;
  top: 20%;
  right: 0;
  font-size: 30px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  background-color: #409eff;
  z-index: 99999999;
  transition: all 0.25s ease-out;
  &:hover {
    cursor: pointer;
  }
  &.hide {
    right: 20%;
  }
}
.el-icon-close {
  position: fixed;
  top: 20%;
  right: 0;
  font-size: 30px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  background-color: #409eff;
  z-index: 99999999;
  transition: all 0.25s ease-out;
  &:hover {
    cursor: pointer;
  }
  &.hide {
    right: 20%;
  }
}
.go {
  right: 20% !important;
}
</style>
