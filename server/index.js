/*
 * @Author: yuan.zhou
 * @Date: 2021-06-14 15:51:39
 * @Descripton: 
 * @LastEditTime: 2021-06-14 15:59:36
 */
const express = require("express")

const app = express()

app.use(require('cors')())  // 解决跨域问题
app.use(express.json())  // json格式化

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(8000, () => {
  console.log('http://localhost:8000');
});