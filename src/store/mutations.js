
export const setFetching = (state, status) => {
	state.isFetching = status
}

export const addMessage = (state, { messages, type }) => {
	state.messages.push({
		messages,
		type
	})
}

export const resetMessages = state => {
	state.messages = []
}