<template>
    <div class="container" v-if="err_msg === null && news_list !== null">
        <div class="card" v-for="news in news_list" :key="news.id">
            <img class="card-item-img" :src="news.urlToImage" alt="Avatar" style="width:100%"> <!--news.urlToImage-->
            <div class="card-item-top">
                <h3><b>{{news.title}}</b></h3> <!--news.title-->
                <h4>{{news.source.name}}</h4> <!--news.source.name-->
                <h5>{{news.author}}</h5> <!--news.author-->
            </div>
            <div class="card-item-bot">
                <p v-html="news.description"></p> <!--news.description-->
            </div>
        </div>
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
    export default{
        data: () => ({
            
        }),
        computed:{
            news_list(){
                return this.$store.getters.news
            },
            err_msg(){
                return this.$store.getters.err_msg
            }
        },

        mounted () {
        }
    }
    

</script>