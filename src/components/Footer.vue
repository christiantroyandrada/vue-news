<template>
    <div class="footer-div">
        <p>Copyright &copy; {{currentDate}} <strong>Vue News</strong></p>
        <p>All images above the news search are generated by <strong>DALL-E 2</strong></p>
    </div>   
</template>
<script>
    export default {
        data: () => ({
            currentDate: null,
        }),
        mounted() {
            this.currentDate = new Date().getFullYear();
        },
    }
</script>

<style scoped>
    .footer-div {
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        color: #000;
        line-height: 2px;
        text-align: center;
    }
</style>