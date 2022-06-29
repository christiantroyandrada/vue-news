<template>
    <h5 v-if="total_news !== null">There are total of {{total_news}} news</h5>
    <h5 v-else-if="$store.getters.err_msg !== null"></h5>
</template>
<script>
    export default{
        data: () => ({
        }),
        computed:{
            total_news(){
               return this.$store.getters.total_news
            }
        },
    }
</script>
<style scoped>
    h5 {
        text-align: center;
        font-weight: 500;
        font-size: 1.3rem;
    }
</style>