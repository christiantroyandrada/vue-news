<template>
    <h1>{{text}}</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const text = ref('This is a test');

onMounted(() => {
    alert('This is a mounted component')
})

</script>