import Vue from "vue";
import Axios from "axios";

//global
//Axios.defaults.baseURL = 'https://curso-vue-adbd2-default-rtdb.firebaseio.com/'
// Axios.defaults.headers.common['Authorization'] = 'abc123'
// Axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        //pode ter mais de uma instancia de axios
        Vue.prototype.$http = Axios.create({
            baseURL: 'https://curso-vue-adbd2-default-rtdb.firebaseio.com/',
            headers: {
                'Authorization': 'abc123'
            }
        })

        //interceptando request
        Vue.prototype.$http.interceptors.request.use(config => {
            //console.log(config.method)
            //é possível modificar elementos aqui
            return config
        }, error => Promise.reject(error))

        //interceptando response
        Vue.prototype.$http.interceptors.response.use(res => {
            return res
        }, error => Promise.reject(error))
    }
})