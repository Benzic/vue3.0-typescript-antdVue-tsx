import { defineComponent } from 'vue';
interface AboutProps {}
const About = defineComponent({
    setup(props: AboutProps) {
        return () => (
            <h1>This is an about page</h1>
        )
    }
})

export default About;