export default {
    state: {
        contacts: {},
    },
    mutations: {
        setContacts(state, data) {
            state.contacts = data
        },
    },
    actions: {
        setContacts({commit}, data) {
            commit('setContacts', data)
        },
    },
    getters: {
        contacts: state => state.contacts,
    }
}