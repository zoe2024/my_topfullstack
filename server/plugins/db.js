/*
 * @Author: yuan.zhou
 * @Date: 2021-06-14 15:53:18
 * @Descripton: 数据库
 * @LastEditTime: 2021-06-15 21:19:24
 */
module.exports = app => {
  const mongoose = require("mongoose")
  /*
    连接MongoDB数据库
    mongoose.connect(‘mongodb://数据库ip地址 : 端口号( 默认端口27017可以省略 )/数据库名’) 
  */
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-zoeBlog', {
    useNewUrlParser: true
  })

  //监听数据库连接状态
  mongoose.connection.once('open',()=>{
    console.log('数据库连接成功……')
  })
  mongoose.connection.once('close',()=>{
    console.log('数据库断开……')
  })


}