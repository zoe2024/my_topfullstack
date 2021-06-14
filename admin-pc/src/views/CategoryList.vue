<!--
 * @Author: yuan.zhou
 * @Date: 2021-06-14 14:46:12
 * @Descripton: 
 * @LastEditTime: 2021-06-14 17:08:59
-->
<template>
  <div>
    <el-table :data="table.data" v-loading="table.loading" border>
      <el-table-column label="序号" type="index" width="55px"></el-table-column>
      <el-table-column
        v-for="item in table.headList"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/categories/edit/${scope.row._id}`)" type="text">编辑</el-button>
          <el-button @click="delRow(scope.row)" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {
        data: [],
        headList: [
          { label: "Id", prop: "_id" },
          { label: "一级分类", prop: "firstCategory" },
        ],
        loading: false,
      },
    };
  },
  methods: {
    async getTableInfo() {
      this.table.loading = true;
      let res = await this.$http.get("categories");
      this.table.loading = false;
      console.log({ res });
      this.table.data = res.data;
    },
    delRow(row) {
      this.$confirm("是否确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        let res = await this.$http.delete(`categories/${row._id}`);
        if (res.status !== 200) {
          this.$message({ message: "删除失败", type: "info" });
          return;
        }
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.getTableInfo();
      });
    },
  },

  created() {
    this.getTableInfo();
  },
};
</script>