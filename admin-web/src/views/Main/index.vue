<template>
  <div id="main" style="height:100vh;">
    <el-container>
      <el-header height="100px" style="text-align: center; background-color: #092712;">
            <h1 style="line-height: 100px; margin: 0; color: #fff">全栈之巅topfullstack</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
            <el-menu mode="vertical" :default-active="$route.path" router>
                <el-submenu
                v-for="(item, index) in menu.items"
                :index="`menu-item-${index}`"
                :key="`menu-item-${index}}`"
                >
                <template slot="title">{{item.title}}</template>
                <el-menu-item
                    v-for="(subItem, subIndex) in item.items"
                    :key="`menu-item-${index}-${subIndex}`"
                    :index="subItem.path"
                >{{subItem.title}}</el-menu-item>
                </el-submenu>
            </el-menu>  
        </el-aside>
        <el-main>
            <router-view :key="$route.path"/>
        </el-main>  
      </el-container>
    </el-container>    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          { title: "首页", path: "/" },
          { title: "课程管理", path: "/courses/list" },
          { title: "课时管理12", path: "/episodes/list" }
        ]
      },
      {
        title: "运营管理",
        items: [{ title: "用户管理-AvueCrud", path: "/users/list" }]
      }
    ]
  };
}
</script>


<style>

</style>