
<template>
  <header>
      <nav>
        <h5 class="logo">Vue news</h5>
        <div class="links">
          <!-- <router-link to="/">Home</router-link> -->
        </div>
      </nav>
      <search-component />
  </header>
  <total-news/>
  <router-view />
  <footer>

  </footer>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import TotalNews from  './components/TotalNews.vue'
import SearchComponent from './components/SearchComponent.vue'
export default{
  name: 'App',
  components: {
    TotalNews,
    SearchComponent,
  }
}
</script>
<style>
 @import './assets/styles.css'
</style>
