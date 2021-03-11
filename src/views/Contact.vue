<template>
    <main class="page">
        <div class="bumper"></div>
        <ContactBanner />
    </main>
</template>

<script>
import ContactBanner from "@/components/ContactBanner.vue";

export default {
    name: "Contact",
    data() {
        return {
            button: {
                text: "Send me an Email.",
                link: "mailto:petewancadrums@gmail.com"
            }
        };
    },
    components: {
        ContactBanner
    }
};
</script>

<style>
</style>