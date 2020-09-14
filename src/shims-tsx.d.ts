/*
 * @Author: your name
 * @Date: 2020-09-14 14:03:16
 * @LastEditTime: 2020-09-14 14:03:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\shims-tsx.d.ts
 */
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
