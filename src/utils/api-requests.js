import axios from 'axios'
import { url, news_api_key, ai } from '../env'

const fetchNews = async (payload) => {
  try {
    const res = await axios.get(url + `q=${payload.keyword ? `${payload.keyword}` : 'news'}&country=${payload.country ? `${payload.country}` : 'us'}&category=${payload.category ? `${payload.category}` : 'general'}&apiKey=${news_api_key}`)
    console.log(res)
    return {
      display_error: null,
      total_news: res.data.totalResults,
      change_news: res.data.articles
    }
  } catch (err) {
    return err
  }
}


const fetchImageAI = async (payload) =>{
    ai.post(`https://api.openai.com/v1/images/generations`,payload).then(response => {
      return {
        banner_data: response.data.data
      }
    }).catch(err => console.log(err))
 }

export default {
 fetchNews,
 fetchImageAI
}