<template>
  <div> 
    <Navbar />
    <RouterView/>
  </div>
</template>

<script>
  import Navbar from '@/components/layout/Navbar.vue'
  import axios from 'axios'
  import store from './store'

  export default {
    name: 'App',
    components: {
      Navbar,
    },
    
    setup() {
      
      store.commit('initializeStore')
      if (store.state.token) 
      { axios.defaults.headers.common['Authorization'] = "Token " + store.state.token
      }
      else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    }

  }
</script>

<style scoped> 
</style>