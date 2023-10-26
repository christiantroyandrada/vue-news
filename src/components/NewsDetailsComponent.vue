<template>
    <Transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <header class="modal-header">
                    News Details
                </header>

                <section class="modal-body">
                    <div class="modal-item-top">
                        <h3><b>{{news_details.title}}</b></h3> <!--news.title-->
                        <h4>{{news_details.source.name}}</h4> <!--news.source.name-->
                        <h5>{{news_details.author}}</h5> <!--news.author-->
                    </div>
                    <img class="modal-item-img" :src="news_details.urlToImage" alt="Avatar" style="width:100%">
                    <div class="modal-item-content">
                        <p>{{news_details.content}}</p>
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
    </Transition>    
  
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore();
const emit = defineEmits(['close']);

const news_details = computed(() => store.state.news_details);
function close () {
    store.commit('newsDetails', null)
    emit('close');
}

</script>
<style scoped>
    @import "../assets/news_details.css"
</style>