import Vue from 'vue'
import Vuex from 'vuex'
import basket from './modules/basket'
import contacts from './modules/contacts'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        basket,
        contacts
    }
})

