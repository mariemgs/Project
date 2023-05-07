import {createStore} from 'vuex'

export default createStore({
    state: {
        isLoading: false,
        isAuthenticated: false,
        token:''
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token')
                state.isAuthenticated = true 
            } else {
                state.token=''
                state.isAuthenticated = false
            }
        },
        setIsLoading(state,status){
            state.isLoading = status
        },
        setToken(state,token) {
            state.token = token 
            state.isAuthenticated = true
        },
        removeToken(state) {
            state.token = ''
            state.isAuthenticated = false
        },
        resetPassword(state) {
            state.isLoading = true;
            state.resetPasswordSuccess = false;
            state.resetPasswordError = null;
          },
          resetPasswordSuccess(state) {
            state.isLoading = false;
            state.resetPasswordSuccess = true;
          },
          resetPasswordError(state, error) {
            state.isLoading = false;
            state.resetPasswordError = error;
          }


    },
    actions:{

    },
    modules:{

    }

})