<template>
    <main class="page">
        <div class="bumper"></div>
        <SocialMedia
            type="soundCloud"
            title="SAMPLES"
            subtitle="Listen to my Work"
            description="Some tracks I've recorded from my home studio in Nashville, TN, USA."
            :followLink="false"
        />
        <SocialMedia
            type="instagram"
            title="Instagram: @petewanca"
            followLink="true"
        />
    </main>
</template>

<script>
import SocialMedia from "@/components/SocialMedia.vue";

export default {
    name: "Samples",
    data() {
        return {};
    },
    components: {
        SocialMedia
    }
};
</script>

<style>
.bumper {
    height: 7rem;
}

.page {
    background: black;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
}
</style>