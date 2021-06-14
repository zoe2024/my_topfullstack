<!--
 * @Author: yuan.zhou
 * @Date: 2021-02-12 16:11:04
 * @Descripton: 
 * @LastEditTime: 2021-06-05 22:21:46
-->
<template>
  <div id="courses-list">
    <h1>课程管理-课程列表</h1>
    <el-button type="success" size="small" @click="$router.push('/courses/create')">创建课程</el-button>
    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="(field, name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
        :width="field.width"
      ></el-table-column>
      <el-table-column label="操作" :width="200">
        <template v-slot="{row}">
          <el-button type="success" size="small" @click="$router.push(`/courses/edit/${row._id}`)">编辑</el-button>
          <el-button type="danger" size="small" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component({})
export default class CoursesList extends Vue {
  $http: any;
  data = {};

  fields = {
    _id: { label: "ID" },
    courseName: { label: "课程名称" },
    cover: { label: "课程封面图" }
  }
  async fetch() {
    const res = await this.$http.get('course');
    this.data = res.data
  }

  async remove( row: {_id: string} ) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      return;
    }

    await this.$http.delete(`/course/${ row._id }`)
    this.$message.success('删除成功')
    this.fetch()
  }
  created() {
    // debugger
    this.fetch()
  }
  
}

</script>

<style>

</style>