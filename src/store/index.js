import Vue from 'vue'
import Vuex from 'vuex'
import global from './_global'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({ 
    ...global,
    modules 
})
