<!--
 * @Author: your name
 * @Date: 2020-09-14 10:44:37
 * @LastEditTime: 2020-09-14 18:22:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\App.vue
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import { useProvider } from './context/index'
export default {
   name: 'App',
  setup () {
    useProvider()
    return {
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
