<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <header class="modal-header">
                    News Details
                </header>

                <section class="modal-body">
                    <div class="modal-item-top">
                        <h3><b>{{$store.getters.news_details.title}}</b></h3> <!--news.title-->
                        <h4>{{$store.getters.news_details.source.name}}</h4> <!--news.source.name-->
                        <h5>{{$store.getters.news_details.author}}</h5> <!--news.author-->
                    </div>
                    <img class="modal-item-img" :src="$store.getters.news_details.urlToImage" alt="Avatar" style="width:100%">
                    <div class="modal-item-content">
                        <p>{{$store.getters.news_details.content}}</p>
                    </div>
                </section>

                <footer class="modal-footer">
                    <button
                    type="button"
                    class="btn-blue"
                    @click="close"
                    >
                    Close Modal
                    </button>
                </footer>
            </div>
        </div>
    </transition>    
  
</template>
<script>
  export default {
    name: 'NewsDetails',
    methods: {
      close() {
        this.$store.commit('newsDetails', null)
        this.$emit('close');
      },
    },
  };
</script>
<style scoped>
    @import "../assets/news_details.css"
</style>