import axios from 'axios'


const news_api_key = import.meta.env.VITE_NEWS_API_KEY
const dall_api_key = import.meta.env.VITE_DALL_API_KEY
const url = import.meta.env.VITE_URL;

const ai = axios.create({
    headers: {
        Authorization: `Bearer ${dall_api_key}`,
        'Content-Type': 'application/json'
    },
})
export {
    news_api_key,
    url ,
    ai
};