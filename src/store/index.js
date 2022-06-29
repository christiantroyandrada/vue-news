import axios from 'axios'
import { createStore } from 'vuex'
import { url, news_api_key } from '../env'


const store = createStore({
    state: {
        news: null,
        total_news: null,
        err_msg:null,
    },
    getters: {
        total_news (state){
            return state.total_news
        },
        news (state) {
            return state.news
        },
        err_msg (state){
            return state.err_msg
        },
    },
    mutations: {
        changeNews(state, content){
           state.news = content
        },
        totalNews(state, content){
            state.total_news = content
        },
        displayErr(state, content){
            state.err_msg = content
        }
    },
    actions: {
        fetchNews(context, payload){
                axios.get(url + `q=${payload.keyword}&country=${payload.country}&category=${payload.category}&apiKey=${news_api_key}`)
                    .then((res) => {
                        //console.log(res)
                        context.commit("displayErr", null)
                        context.commit("totalNews", res.data.totalResults)
                        context.commit("changeNews", res.data.articles)                       
                    })
                    .catch((err) => {
                        console.log(context.getters.query)
                        context.commit("displayErr", err)
                    })
        }
    },
})

export default store;