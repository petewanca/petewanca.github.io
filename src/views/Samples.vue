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
    height: 88px;
}

@media (max-width: 992px) and (min-width: 442px) {
    .bumper {
        height: 72px;
    }
}

@media (max-width: 442px) {
    .bumper {
        height: 100px;
    }
}

@media (max-width: 402px) {
    .bumper {
        height: 128px;
    }
}
</style>