<template>
    <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide
            ><div><img src="/images/gb.png" alt="" /></div
        ></swiper-slide>
        <swiper-slide
            ><p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                ipsa architecto officiis dolore deserunt. Eius veritatis error
                nobis porro recusandae ratione iusto dicta adipisci laudantium
                nam quod itaque illo deserunt maiores at, animi sapiente eveniet
                deleniti? Sed ducimus cupiditate harum illum impedit voluptatem
                corporis cum aperiam, minima quidem sint dolorem natus
                necessitatibus nisi consectetur qui dolorum eveniet molestiae ea
                libero quo exercitationem animi blanditiis? Reiciendis explicabo
                dicta magni quo molestias. Voluptatem, praesentium odit amet
                asperiores, corporis nam tempora quisquam architecto deleniti
                aspernatur ipsum id magni dolorem excepturi. Itaque laborum esse
                consequuntur in explicabo, animi, suscipit velit autem aut qui
                magnam voluptas harum? Fugiat ex totam, esse sapiente aut et quo
                neque iure dolorum reprehenderit perferendis aperiam alias fugit
                vero explicabo ipsum enim tenetur, consectetur autem iste
                doloremque doloribus! Fugit quia possimus et quisquam excepturi,
                qui, nesciunt at laudantium nostrum modi saepe vel aut
                consectetur, minus facilis voluptate adipisci laboriosam!
                Mollitia iure sequi ipsam debitis possimus pariatur autem ea
                odio aliquid excepturi nisi, eum tempora iusto ullam minima
                aspernatur voluptas, expedita itaque nostrum unde aliquam quo
                beatae alias? Distinctio aperiam rem ut ullam doloribus nihil at
                eius minus sequi cumque qui earum maiores, nemo quam rerum,
                minima, placeat sint modi obcaecati!
            </p></swiper-slide
        >
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 33</swiper-slide>
        <swiper-slide>Slide 44</swiper-slide>
        <swiper-slide>Slide 55</swiper-slide>
        ...
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>

<style></style>
