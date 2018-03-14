<template>
    <div class="content">
        <h1>{{ title }}</h1>
        <router-link :to="{ name: 'Home' }">Go home, you're drunk!</router-link>
    </div>
</template>

<script>
export default {
    name: '404',
    data () {
        return {
            title: '404 Not found!'
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
