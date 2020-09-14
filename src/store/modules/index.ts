/*
 * @Author: your name
 * @Date: 2020-09-14 15:29:51
 * @LastEditTime: 2020-09-14 15:45:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\store\modules\index.ts
 */
import Mutations from './mutations'
import Getters from './getters'
import Actions from './actions'
import State from './state'
export default {
  state: State,
  mutations: Mutations,
  actions: Actions,
  getters: Getters
}
