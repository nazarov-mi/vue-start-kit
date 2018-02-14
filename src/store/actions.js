
export const setFetching = ({ commit }, status) => {
	commit(TYPES.MAIN_SET_FETCHING, status)
}

export const addMessage = ({ commit }, payload) => {
	commit(TYPES.MAIN_ADD_MESSAGE, payload)
}

export const resetMessages = ({ commit }) => {
	commit(TYPES.MAIN_RESET_MESSAGES)
}