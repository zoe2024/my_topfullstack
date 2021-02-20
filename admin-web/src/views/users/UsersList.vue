<template>
  <div id="user-list">
    <h3>{{option.title}}</h3>
    <avue-crud 
    :data="data" 
    :option="option" 
    v-model="obj"
    @row-save="create"
    @row-update="update"
    @row-del="remove"
    @date-change="dateChange">
      <template  slot="menu">
        <el-button type="text" size="small" @click.native="tip">自定义按钮</el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script>

export default {
   data() {
      return {
        obj:{},
        data: [

        ],
        option:{
          title: '用户管理',
          index:true,
          indexLabel:'序号',
          menuType:'text',
          page:true,
          align:'center',
          dateBtn:true,
          dateDefault:true,
          menuAlign:'center',
          column:[
             {
              label:'姓名',
              prop:'username'
            },
            {
              label:'密码',
              prop:'password'
            }
          ]
        }
      }
    },
    methods: {
      async fetch() {
        const res = await this.$http.get('users')
        this.data = res.data.data
      },
      async create(row,done) {
        await this.$http.post('users', row)
        this.$message.success('新增成功')
        await this.fetch()
        done()
      },
      async update(row,index,done) {
        // console.log(row,index);
        const params = JSON.parse(JSON.stringify(row))
        delete params.$index
        await this.$http.put(`users/${row._id}`, params)
        await this.fetch()
        this.$message.success('更新成功')
        done()
      },
      async remove(row) {
        try {
          await this.$confirm('是否确认删除?')
        } catch (error) {
          return
        }
        await this.$http.delete(`users/${row._id}`)
        this.$message.success('删除成功')
        this.fetch()
      },
      dateChange(date){
        this.$message.success(date);
      },
      tip(){
        this.$message.success('自定义按钮');
      }
    },

    created() {
      this.fetch()
    }
}
</script>

<style>

</style>