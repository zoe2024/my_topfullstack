import { baseCrudOptions } from '@/utils/baseCrudOptions'


const usersCrudOptions = (function() {
   const privateOption = {
       column: [
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
   const options = Object.assign({}, baseCrudOptions, privateOption )

   return options
}())

/* const usersCrudMethods = (function() {

    return {
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
    }
}()) */

export {
    usersCrudOptions,
    // usersCrudMethods,
}