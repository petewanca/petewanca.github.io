<template>
    <main class="home">
        <LargeBanner
            title="BRING YOUR MUSIC TO LIFE"
            subtitle="I provide remote
    drum tracking services to artists around the world."
            image="./images/drum-kit.jpeg"
            :button="button"
        />
        <SmallBanner
            title="Finding the right parts for your music"
            subtitle="From live drums, to overdubbed percussion, to swelling cymbals, programmed beats and more, I can find the right part for your music. My goal is to give you everything you need to push your art to the next level."
        />
        <SocialMedia title="Instagram" />
    </main>
</template>

<script>
import LargeBanner from "@/components/LargeBanner.vue";
import SmallBanner from "@/components/SmallBanner.vue";
import SocialMedia from "@/components/SocialMedia.vue";

export default {
    name: "Home",
    data() {
        return {
            button: {
                text: "Send me a message.",
                link: "/contact"
            }
        };
    },
    components: {
        LargeBanner,
        SmallBanner,
        SocialMedia
    }
};
</script>

<style>
.home {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
}
</style>
