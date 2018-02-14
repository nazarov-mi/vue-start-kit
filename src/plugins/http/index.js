
import axios from 'axios'
import interceptors from './interceptors'
import { API_URL, API_ACCESS_TOKEN } from '../../config'

export const http = axios.create({
	baseURL: API_URL,
	headers: {
		'X-Access-Token': API_ACCESS_TOKEN
	}
})

export default function install(Vue, { store, router }) {
	interceptors(http, store, router)

	Object.defineProperty(Vue.prototype, '$http', {
		get() {
			return http
		}
	})
}