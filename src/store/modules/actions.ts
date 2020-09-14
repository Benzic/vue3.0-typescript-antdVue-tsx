/*
 * @Author: your name
 * @Date: 2020-09-14 15:40:28
 * @LastEditTime: 2020-09-14 15:45:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\store\modules\actions.ts
 */
import MT from './actionsTypes'
const actions: any = {
    onChangeCount: ({ commit, state }: any, params: any): any => {
        commit(MT.SET_CHANGECOUNT, params)
    },
}
export default actions
