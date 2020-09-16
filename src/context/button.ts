/*
 * @Author: your name
 * @Date: 2020-09-14 17:53:37
 * @LastEditTime: 2020-09-16 10:17:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\context\button.ts
 */
import { provide, ref, Ref, inject, computed } from 'vue'
import { getTestApi } from '@/api/testApi'
interface ListContext {
    count: Ref<number>,
    count2: Ref<number>,
    changeCount: (data: number) => void
}
// provide名称，推荐用Symbol
const listymbol = Symbol()
// 提供provide的函数
export const buttonProvide = () => {
    const count = ref<number>(0);

    // 当前查看的事件
    const count2 = computed(() => {
        return count.value * 2
    })

    const changeCount = async function (data: number) {
        // try {
        //     let res: any = await getTestApi("async")
        // } catch (error) {
        //     console.log(error)
            count.value = count.value + data
            console.log(count.value)
        // }
    }

    provide(listymbol, {
        count,
        count2,
        changeCount
    })
}

export const buttonInject = () => {
    const listContext = inject<ListContext>(listymbol);
    console.log(listContext)
    if (!listContext) {
        throw new Error(`buttonInject must be used after buttonProvide`);
    }
    return listContext
};

