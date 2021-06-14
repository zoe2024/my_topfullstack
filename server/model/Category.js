/*
 * @Author: yuan.zhou
 * @Date: 2021-06-14 15:56:21
 * @Descripton: 
 * @LastEditTime: 2021-06-14 16:29:51
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  firstCategory: { type: String }, // 一级分类
})

module.exports = mongoose.model('Category', schema)