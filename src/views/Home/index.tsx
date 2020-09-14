import { defineComponent } from 'vue';
import HelloWorld from "@/components/HelloWorld/index";
import logo from '../../assets/logo.png'
interface HomeProps { }
const Home = defineComponent({
    setup(props: HomeProps) {
        return () => (
            <div class="home">
                <img alt="Vue logo" src={logo} />
                <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
            </div>
        )
    }
})

export default Home;