import { defineComponent } from 'vue';
import { Button } from 'ant-design-vue';
import { getTestApi } from '../../api/testApi'
import store from '../../store/index'
interface ButtonProps {
    type: any
}
const ButtonCom = defineComponent({
    setup(props: ButtonProps, { slots }) {
        const handleClick = () => {
            store.dispatch("onChangeCount", 1)
            getTestApi(1)
        };
        return () => (
            <Button type={props.type} onClick={handleClick}>
                {slots.default && slots.default()}{store.getters.count}
            </Button>
        )
    }
})

export default ButtonCom;