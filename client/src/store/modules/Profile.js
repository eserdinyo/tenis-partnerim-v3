const state = {
    userName : "Home",
}

// getters
const getters = {
    Profile: state => ({
        username: state.userName,
    })
}

// mutations
const mutations = {

}

// actios 
const actions = {

}

export default {
    state,
    getters,
    actions,
    mutations
};