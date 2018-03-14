<template>
    <div class="home">
        <div class="row">
            <swiper :options="swiperOptions">
                <swiper-slide 
                    v-for="(slide, i) in slides" 
                    :key="i">
                    <img 
                        :src="slide.src" 
                        :alt="slide.alt" 
                        class="img-fluid">
                </swiper-slide>
                <div 
                    slot="button-prev"
                    class="swiper-button-prev" 
                ><ChevronLeft class="swiper-icon" /></div>
                <div 
                    slot="button-next"
                    class="swiper-button-next" 
                ><ChevronRight class="swiper-icon" /></div>
            </swiper>
        </div>

        <section class="content">
            <h1>{{ title }}</h1>
        </section>

        <p>End of page</p>
    </div>
</template>

<script>
import ChevronRight from '../assets/chevron-right.svg';
import ChevronLeft from '../assets/chevron-left.svg';

export default {
    name: 'Home',
    components: {
        ChevronRight,
        ChevronLeft
    },
    data () {
        return {
            title: 'Home',
            swiperOptions: {
                slidesPerView: 3,
                loop: true,
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 2
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            slides: [
                {
                    src: 'static/unsplash-1.jpg',
                    alt: 'SEO image 1'
                },
                {
                    src: 'static/unsplash-2.jpg',
                    alt: 'SEO image 2'
                },
                {
                    src: 'static/unsplash-3.jpg',
                    alt: 'SEO image 3'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .swiper-slide {
        img {
            width: 100%;
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        background: none;
    }
    .swiper-icon {
        fill: #42b983;
    }
    .home {
        padding-top: 0;
    }
    .content {
        height: 2000px;
    }
</style>
