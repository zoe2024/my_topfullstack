<!--
 * @Author: yuan.zhou
 * @Date: 2021-06-14 13:56:11
 * @Descripton: 新建分类
 * @LastEditTime: 2021-06-14 17:16:24
-->
<template>
  <div>
    <el-form
      ref="submitForm"
      :model="formData"
      :rules="rules"
      label-width="160px"
    >
      <el-form-item prop="firstCategory" label="一级名称">
        <el-input v-model="formData.firstCategory"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      formData: {
        firstCategory: "",
      },
      rules: {
        firstCategory: [
          { required: true, message: "请输入一级分类", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      let res;
      if (this.id) {
        res = await this.$http.put(`categories/${this.id}`, this.formData);
      } else {
        res = await this.$http.post("categories", this.formData);
      }
      console.log({res});
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`categories/${this.id}`);
      this.formData = res.data;
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>