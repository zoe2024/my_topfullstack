/*
 * @Author: yuan.zhou
 * @Date: 2021-06-14 15:54:50
 * @Descripton: 
 * @LastEditTime: 2021-06-15 21:57:30
 */
module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })

  /* 中间件封装 */
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }, router)

  /* 创建 */
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  /* findByIdAndUpdate通过id更新某一项 */
  router.post('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  /* findByIdAndDelete根据id删除某一项 */
  router.post('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })
  /* 列表查询 */
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
  /*  */
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  /* 文件上传 */
  const multer = require('multer')
  console.log({__dirname, __filename})
  const upload = multer({ dest: __dirname + '/../uploads' })
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
}