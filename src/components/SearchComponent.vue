<template>
    <div class="search-component">
        <span>
            <select name="countries" v-model="selected_country" class="search-term">
                <option value="" disabled selected>Country</option>
                <option v-for="country in country_list" :key="country.Code" :value="country.Code">
                {{country.Name}}
                </option>
            </select>
            <select name="catagory" v-model="selected_category" class="search-term">
                <option value="" disabled selected>Category</option>
                <option v-for="category in categories" :key="category" :value="category">
                {{category}}
                </option>
            </select>
            <input type="text" v-model="keyword" class="search-term" placeholder="Keywords (optional)">
        </span>
        <button  @click="searchNews" class="search-button">
                <span>Search</span>
        </button>
    </div>
    
</template>
<script setup>
    import { ref, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import countries from "../store/countries.json"
    const store = useStore();

    const keyword = ref('');
    const selected_category = ref('');
    const selected_country = ref('');
    const categories = ref([
        'business', 'entertainment', 'general', 'health',
        'science', 'sports', 'technology',
    ]);
    const country_list = ref([]);

    function searchNews() {
        store.dispatch('fetchNews', {
            keyword: keyword.value,
            country: selected_country.value.toLowerCase(),
            category: selected_category.value
        });
    }
    onMounted(() => {
        country_list.value = countries
    })
</script>
<style scoped>
    @import "../assets/search.css"
</style>