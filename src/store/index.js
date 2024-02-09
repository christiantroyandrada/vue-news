import { createStore } from 'vuex'
import RequestData from 'utils/api-requests'

const store = createStore({
    state: {
        news: null,
        total_news: null,
        news_details: null,
        err_msg:null,
        banner: null,
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
        news_details (state){
            return state.news_details
        }
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
        },
        newsDetails(state, content){
            state.news_details = content
        },
        changeBanner(state, content){
            state.banner = content
        }
    },
    actions: {
        async fetchNews(context, payload){
          try {
            const response = await RequestData.fetchNews(payload)
            context.commit('displayErr', response.display_error)
            context.commit("totalNews", response.total_news);
            context.commit("changeNews", response.change_news);
          } catch (err) {
            context.commit('displayErr', err)
          }
          
        },
        showNewsDetails(context, news){
            context.commit('newsDetails', news)
        },
        async fetchImageAI(context, payload){
          try {
            const response = await RequestData.fetchImageAI(payload)
            context.commit('changeBanner', response.banner_data)
          } catch (err) {
            console.log(err)
          }
        } 
    },
})

export default store;