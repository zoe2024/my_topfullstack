/*
 * @Author: yuan.zhou
 * @Date: 2021-06-14 15:53:18
 * @Descripton: 
 * @LastEditTime: 2021-06-14 15:53:45
 */
module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true
  })
}