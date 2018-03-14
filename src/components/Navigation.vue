<template>
    <nav class="fixed-top d-flex align-items-center">
        <div class="container">
            <ul class="nav justify-content-sm-end justify-content-center">
                <li 
                    v-for="(item, i) in nav" 
                    :key="i" 
                    class="nav-item">
                    <router-link 
                        :to="item.route" 
                        class="nav-link"
                        v-html="item.text" 
                    />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            nav: [
                {
                    text: 'Home',
                    route: { name: 'Home' }
                },
                {
                    text: 'About Us',
                    route: { name: 'AboutUs' }
                },
                {
                    text: 'Contact Us',
                    route: { name: 'ContactUs' }
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    $header-height: 100px;

    nav {
        background: #fafafa;
        height: $header-height;

        .nav-link {
            position: relative;
            color: #42b983;
            &:after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                transition: width .25s ease;
                display: block;
                width: 0;
                border-bottom: 2px solid #42b983;
            }
            &.active:after,
            &:hover:after {
                width: 100%;
            }
        }
    }
</style>
