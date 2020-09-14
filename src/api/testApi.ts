/*
 * @Author: your name
 * @Date: 2020-09-14 16:32:50
 * @LastEditTime: 2020-09-14 16:40:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\api\testApi.ts
 */
import axios from '../util/axios'

// 公共变量
const config = '/';

export function getTestApi(params?: any): Promise<any> {
    console.log(params)
    return axios({
        url: `${config}/test`,
        params
    });
}