
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import { IN_PROD } from '../config'

Vue.use(Vuex)

const state = {
	isFetching: false,
	messages: []
}

export default new Vuex.Store({
	strict: !IN_PROD,
	mutations,
	actions,
	getters,
	modules,
	state
})
