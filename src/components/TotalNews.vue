<template>
    <h5 v-if="total_news !== null">There are total of {{total_news}} news</h5>
    <h5 v-else-if="$store.getters.err_msg !== null"></h5>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore();

const total_news = computed(() => store.getters.total_news);
</script>
<style scoped>
    h5 {
        text-align: center;
        font-weight: 500;
        font-size: 1.3rem;
    }
</style>