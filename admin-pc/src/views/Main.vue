<!--
 * @Author: yuan.zhou
 * @Date: 2021-06-14 14:01:46
 * @Descripton: 
 * @LastEditTime: 2021-06-14 14:45:00
-->
<template>
  <el-container class="layout">
    <el-aside class="main-aside">
      <el-menu router :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>内容管理</template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header class="main-header">
        <el-dropdown>
          <i class="el-icon-setting"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>

</template>

<script>
  export default {
    data() {

     return {

     }
    }
  };
</script>

<style scoped>
.layout {
  height: 100vh;
  border: 1px solid #eee
}
.main-aside {
  width: 200px;
  height: 100vh;
  overflow: auto;
  background-color: rgb(238, 241, 246);
}
.main-header {
  text-align: right;
  line-height: 60px;
  background-color: aliceblue;
}
.main-header .el-icon-setting {
  margin-right: 16px;
}
</style>