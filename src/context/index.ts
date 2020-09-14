import { buttonProvide, buttonInject } from './button'
console.log("buttonInject", buttonInject)

export { buttonInject }
export const useProvider = () => {
    buttonProvide()
}