import { defineComponent } from 'vue';
import { Button } from 'ant-design-vue';
import { buttonInject } from '@/context/index'
interface ButtonProps {
    type: any
}
const ButtonCom = defineComponent({
    setup(props: ButtonProps, { slots }) {
        const { changeCount, count, count2 } = buttonInject()
        const handleClick = () => {
            changeCount(1)
        };
        return () => (
            <Button type={props.type} onClick={handleClick}>
                {slots.default && slots.default()}count:{count.value}count2:{count2.value}
            </Button>
        )
    }
})

export default ButtonCom;