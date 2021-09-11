import Vue from "vue";
import Axios from 'axios'
import axios from "axios";

Vue.use({
    install(vue) {
        vue.prototype.$http = axios.create({
            baseURL: 'https://stock-trade-2e84f-default-rtdb.firebaseio.com/'
        })
    }
})