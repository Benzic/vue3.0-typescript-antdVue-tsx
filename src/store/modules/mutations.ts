/*
 * @Author: your name
 * @Date: 2020-09-14 15:41:04
 * @LastEditTime: 2020-09-14 16:25:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\store\modules\mutations.ts
 */
import MT from './actionsTypes'
export default {
  [MT.SET_CHANGECOUNT](state: any, data: object): void {
    state.count = state.count + data
    console.log(data);
  },
}
