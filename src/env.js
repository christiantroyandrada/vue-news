const news_api_key = `d4c82138251c4b0fa87a511905bc7800`;
const url = 'https://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2022-06-28&' +
            'sortBy=popularity&' +
            `apiKey=${news_api_key}`;
export {
    news_api_key as news_api_key,
    url as url
};