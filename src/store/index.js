import { createStore } from 'vuex'


const store = createStore({
    state () {
        return{
            news: 'news from vuex'
        }
    },
    getters: {
        fetchNews (state) {
            return state.news
        }
    }
})

export default store;