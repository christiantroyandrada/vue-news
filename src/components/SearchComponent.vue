<template>
    <div class="search-component">
        <span>
            <select name="countries" v-model="selected_country">
                <option v-for="country in country_list" :key="country.Code" :value="country.Code">
                {{country.Name}}
                </option>
            </select>
            <select name="catagory" v-model="selected_category">
                <option v-for="category in categories" :key="category" :value="category">
                {{category}}
                </option>
            </select>
            <input type="text" v-model="keyword" class="searchTerm" placeholder="Keywords (optional)">
            <button type="submit" @click="searchNews" class="searchButton">
                <h5>search</h5>
            </button>

        </span>
        
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
            console.log(this.country_list)
        }
    }
</script>
<style scoped>
    .search-component{
        display: block;
        text-align: center;
    }
</style>