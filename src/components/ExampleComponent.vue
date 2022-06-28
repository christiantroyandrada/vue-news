<template>
    <h1>{{text}}</h1>
</template>
<script>
    export default{
        data: () => ({
            text:'This is a test'
        }),
        mounted(){
            alert('This is a mounted component')
        }
    }
</script>