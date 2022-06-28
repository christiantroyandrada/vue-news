<template>
    <h5 v-if="total_news !== null">There are a total of {{total_news}} news</h5>
</template>
<script>
    export default{
        data: () => ({
            total_news:null,
        }),
        mounted(){
            alert('total_news is mounted')
            setTimeout(() => {
                this.total_news = this.$store.getters.total_news
            }, 340);
            
        }
    }
</script>
<style scoped>
    h5 {
        text-align: center;
        margin-top: 5%;
    }
</style>