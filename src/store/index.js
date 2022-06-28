import axios from 'axios'
import { createStore } from 'vuex'
import { url } from '../env'


const store = createStore({
    state: {
        news: null,
        total_news: null,
    },
    getters: {
        total_news (state){
            return state.total_news
        },
        news (state) {
            return state.news
        }
    },
    mutations: {
        changeNews(state, content){
           state.news = content
        },
        totalNews(state, content){
            state.total_news = content
        }
    },
    actions: {
        async fetchNews(context){
            return new Promise((resolve, reject) => {
                axios.get(url)
                    .then((res) => {
                        //console.log(res)
                        context.commit("changeNews", res.data.articles)
                        context.commit("totalNews", res.data.totalResults)
                        resolve(res)
                    })
                    .catch((err) => {
                        reject(err) 
                    })
            })
        }
    },
})

export default store;