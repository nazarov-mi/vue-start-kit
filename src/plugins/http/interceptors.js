
export default (http, store, router) => {

	http.interceptors.response.use(
		response => response,
		error => {
			const { response } = error

			if (response && response.data && response.data.message) {
				const message = response.data.message

				store.dispatch('addMessage', {
					type: 'error',
					message
				})
			}

			return Promise.reject(error)
		}
	)
}