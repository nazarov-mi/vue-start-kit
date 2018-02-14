import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '../app'

Vue.use(Router)

const router = new Router({
	routes,
	linkActiveClass: 'is-active',
	// mode: 'history'
})

export default router