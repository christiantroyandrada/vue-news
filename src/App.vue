
<template>
  <header>
      <nav>
        <h5 class="logo">Vue news</h5>
      </nav>
      <Banner/>
      <search-component />
  </header>
  <total-news/>
  <router-view />
  <footer>
    <FooterComp/>
  </footer>
</template>


<script>
import TotalNews from  'components/TotalNews.vue'
import SearchComponent from 'components/SearchComponent.vue'
import Banner from 'components/AIGeneratedAd.vue'
import FooterComp from 'components/Footer.vue'
export default{
  name: 'App',
  components: {
    TotalNews,
    SearchComponent,
    Banner,
    FooterComp,
  }
}
</script>
<style>
 @import './assets/styles.css'
</style>
