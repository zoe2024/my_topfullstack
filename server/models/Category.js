/*
 * @Author: yuan.zhou
 * @Date: 2021-06-14 15:56:21
 * @Descripton: 
 * @LastEditTime: 2021-06-15 21:20:05
 */
const mongoose = require('mongoose')

//创建Schema对象（约束）
const schema = new mongoose.Schema({
  firstCategory: { type: String }, // 一级分类
})

// 将stuSchema映射到一个MongoDB collection并定义这个文档的构成
module.exports = mongoose.model('Category', schema)