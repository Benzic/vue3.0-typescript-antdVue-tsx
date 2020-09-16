import { defineComponent } from 'vue';
import { useProvider } from '@/context/index'
import '@/assets/stylus/index.scss'
export const App = defineComponent({
  name: 'App',
  props: {
    content: String,
  },
  setup: (props) => {
    useProvider()
    return () => (
      <div>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </div>
    )
  }
})

