/*
 * @Author: yuan.zhou
 * @Date: 2021-06-14 11:49:31
 * @Descripton: 
 * @LastEditTime: 2021-06-14 16:04:59
 */
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8000/admin/api'
})

export default http