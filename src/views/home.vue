<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">List of news</div>

                    <div class="card-body">
                        {{news}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data: () => ({
            news: 'content of news',
        }),
        methods: {},
        mounted () {
            this.news = this.$store.getters.fetchNews
        }
    }
    

</script>