<template>
    <main class="page">
        <div class="bumper"></div>
        <FacebookBanner image="./images/mic.jpeg" />
    </main>
</template>

<script>
import SocialMedia from "@/components/SocialMedia.vue";
import FacebookBanner from "@/components/FacebookBanner.vue";

export default {
    name: "Testimonials",
    data() {
        return {};
    },
    components: {
        FacebookBanner
    }
};
</script>

<style>
</style>