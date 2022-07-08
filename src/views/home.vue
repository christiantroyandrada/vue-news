<template>
    <div class="container" v-if="err_msg === null && news_list !== null">
        <div class="card" v-for="news in news" :key="news.id">
            <img class="card-item-img" :src="news.urlToImage" alt="Avatar" style="width:100%"> <!--news.urlToImage-->
            <div class="card-item-top">
                <h3><b>{{news.title}}</b></h3> <!--news.title-->
                <h4>{{news.source.name}}</h4> <!--news.source.name-->
                <h5>{{news.author}}</h5> <!--news.author-->
            </div>
            <div class="card-item-bot">
                <p v-html="news.description"></p> <!--news.description-->
                <button  @click="newsDetails(news)">
                    <span>Go to news</span>
                </button>
            </div>
            <div class="card-footer">
                <hr>
                <h5>Published: {{publishDate(news.publishedAt)}}</h5>
            </div>
        </div>
        <news-details v-if="news_modal" @close="closeNews"/>
    </div>
    <div style="text-align: center; font-size: 1rem;" v-else-if="err_msg === null && news_list === null">
        <h1>Use the search boxes to find relevant news.</h1>
    </div>
    <div style="text-align: center; font-size: 1rem;" v-else>
        <h1>Sorry, there must be an issue in retrieving news</h1>
        <h2>{{err_msg}}</h2>
    </div>      
</template>

<script>
import NewsDetails from '../components/NewsDetailsComponent.vue'
import {mapGetters} from 'vuex'
    export default{
        components:{
            NewsDetails
        },
        data: () => ({
            news_modal:false,
        }),
        methods:{
            publishDate(value){
                return value.replace('T', ' ').replace('Z', '').replace(' ', ' at ')
            },
            newsDetails(value){
                this.$store.dispatch('showNewsDetails', value)
                document.body.classList.add("modal-open")
                this.news_modal = true
            },
            closeNews(){
                document.body.classList.remove("modal-open")
                this.news_modal = false
            }
        },
        computed:{
            ...mapGetters(['news', 'err_msg'])
    
        },
        mounted () {
        }
    }
    

</script>