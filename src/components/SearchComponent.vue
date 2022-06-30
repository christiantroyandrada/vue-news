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
<script>
    import countries from "../store/countries.json"
    export default{
        data: () => ({
            keyword: '',
            selected_country: '',
            selected_category: '',
            categories: ['business', 'entertainment', 'general', 'health',
            'science', 'sports', 'technology'],
            country_list:[]
        }),
        computed:{

        },
        methods:{
            searchNews(){
                this.$store.dispatch('fetchNews', {
                    keyword: this.keyword,
                    country: this.selected_country.toLowerCase(),
                    category: this.selected_category
                })
            }
        },
        mounted (){
            this.country_list = countries
        }
    }
</script>
<style scoped>
    @import "../assets/search.css"
</style>