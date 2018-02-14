import Vue from 'vue'
import Root from './Root.vue'
import store from './store'
import router from './router'
import filters from './utils/filters'
import httpPlugin from './plugins/http'

Vue.config.productionTip = false

// Register global utility filters
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
})

// Vue HTTP plugin
Vue.use(httpPlugin, { store, router })

new Vue({
	store,
	router,
	render: h => h(Root)
}).$mount('#app')