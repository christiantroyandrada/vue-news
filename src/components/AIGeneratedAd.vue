<template>
    <div class="img-container">
        <img class="ai-img" v-for="pics in image" :key="pics" :src="pics.url" alt=""/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            image: state => state.banner,
            news: state => state.news,
        })
    },
    async mounted() { 
        await this.$store.dispatch('fetchImageAI', {
            prompt: 'Random advertisement',
            n: 5,
            size: "256x256"
        })
    },
}
</script>
<style scoped>

    .ai-img{
        margin: 0 auto; 
        width: 100px;
    }
    .img-container{
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 10px
    }
</style>


