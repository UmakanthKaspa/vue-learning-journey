<template>
  {{ posts }}
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
export default {
props:['posts'],
setup(props){
    console.log(props.posts)
    onMounted(()=> console.log('onMounted'))
    onUnmounted(()=> console.log('onUnmounted'))
    onUpdated(()=> console.log('onUpdated'))
}
}
</script>

<style>

</style>