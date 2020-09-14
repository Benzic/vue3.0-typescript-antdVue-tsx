import { defineComponent, reactive, onMounted } from 'vue';

const Label = defineComponent({
    props: {
        content: String,
    },
    setup: (props) => {
        return () => (
            <p>{props.content}</p>
        )
    }
})
export default Label