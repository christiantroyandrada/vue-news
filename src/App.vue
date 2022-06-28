
<template>
  <header class="wrapper">
      <nav>
        <h5 class="logo">Vue news</h5>
        <div class="links">
          <router-link to="/">Home</router-link>
        </div>
        
      </nav>
  </header>
  <router-view />
  <total-news />
  <footer>

  </footer>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import TotalNews from  './components/TotalNews.vue'
export default{
  name: 'App',
  components: {
    TotalNews
  }
}
</script>
<style>
 @import './assets/styles.css'
</style>
