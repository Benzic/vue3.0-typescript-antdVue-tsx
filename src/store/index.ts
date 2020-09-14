/*
 * @Author: your name
 * @Date: 2020-09-14 15:41:04
 * @LastEditTime: 2020-09-14 15:45:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\store\mutations.ts
 */
import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
const store: any = new Vuex.Store({
  modules: {
    index
  }
})

export default store
