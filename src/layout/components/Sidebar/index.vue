<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        unique-opened
        router
      >
        <template v-for="(item,index) in menuInfo">
          <el-submenu :index="item.path" v-if="item.child" :key="index">
            <template slot="title">
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(item, subIndex) in item.child" :index="item.path" :key="subIndex">
              <template slot="title">{{item.name}}</template>
            </el-menu-item>
          </el-submenu>

          <el-menu-item v-else :index="item.path" :key="index">
            <template slot="title">{{ item.name }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  data() {
    return {
      menuInfo: [
        {
          name: "Dashboard",
          path: "/dashboard"
        },
        {
          name: "Example",
          path: "/example/table",
          child: [
            {
              path: "/example/table",
              name: "Table"
            },
            {
              path: "/example/tree",
              name: "Tree"
            }
          ]
        },
        {
          name: "form",
          path: "/form/index"
        },
        {
          name: "Nested",
          path: "/nested/menu1",
          child: [
            {
              path: "/nested/menu1",
              name: "Menu1"
            },
            {
              path: "/nested/menu2",
              name: "Menu2"
            }
          ]
        }
      ]
    };
  },
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
