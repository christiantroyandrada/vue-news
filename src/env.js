import axios from 'axios'

const news_api_key = `d4c82138251c4b0fa87a511905bc7800`;
const dall_api_key = `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`
const url = 'https://newsapi.org/v2/top-headlines?' 

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