<template>
    <div class="container">
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
</template>

<script>
    export default{
        data: () => ({
            news_list: [],
        }),
        methods: {
            
        },
        mounted () {
            this.$store.dispatch('fetchNews').then(() => {
                this.news_list = this.$store.getters.news
                console.log(this.news_list)
            }); 
        }
    }
    

</script>