/*
 * @Author: your name
 * @Date: 2020-09-14 16:33:44
 * @LastEditTime: 2020-09-14 16:38:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\util\axios.ts
 */
import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
const service = axios.create({
    baseURL: '',
    // 超时
    timeout: 30000
})
// request拦截器
service.interceptors.request.use(
    config => {
        const autelToken = localStorage.getItem('token')
        if (autelToken) {
            config.headers['autel-token'] = autelToken
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        return error
    }
)

export default service