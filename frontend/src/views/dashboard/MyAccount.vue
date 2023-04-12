<template>
    <button @click="logout()" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">logout</button>
    </template>
    
    
    <script>
    import axios from 'axios'

    export default{
        name:'MyAccount',
        methods: {
            async logout () {
                await axios 
                        .post('http://localhost:8000/api/v1/token/logout')
                        .then(response => {
                            console.log('Logged out')
                        })
                        .catch(error => {
                            console.log(JSON.stringify(error))
                        })
                    axios.defaults.headers.common['Authorization'] = ''
                    localStorage.removeItem('token')
                    this.$store.commit('removeToken')
    
                    this.$router.push('/')
            }
        }
    }
    </script>