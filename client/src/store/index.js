import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import Profile from './modules/Profile';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Profile
    },
})

