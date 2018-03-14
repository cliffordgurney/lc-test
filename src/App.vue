<template>
    <div id="app">
        <navigation/>

        <main class="container">
            <router-view/>
        </main>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
    name: 'App',
    components: {
        Navigation
    }
}
</script>

<style lang="scss">
    // Import all
    @import "~bootstrap/scss/bootstrap";
    
    $primary: #42b983;
    $text: #2c3e50;
    $theme-colors: (
        "primary": $primary,
        "danger": #ff4136,
        "secondary": $primary
    );
    $header-height: 100px;

    #app {
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        font-weight: 400;
        color: $text;
        margin-top: $header-height;
    }
    .content {
        padding: 2rem 0 1rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 200;
    }

    a {
        color: $primary;
    }
</style>
