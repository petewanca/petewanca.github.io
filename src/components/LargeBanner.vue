<template>
    <section
        class="banner-container"
        :style="{ backgroundImage: `url('${image}')` }"
    >
        <div class="contents">
            <h1>{{ title }}</h1>
            <h2>{{ subtitle }}</h2>
            <Button
                v-if="button"
                :text="buttonData.text"
                :link="buttonData.link"
            />
        </div>
    </section>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
    name: "LargeBanner",
    data() {
        return {
            buttonData: { ...this.button }
        };
    },
    props: {
        image: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        button: {
            type: Object,
            default: null
        }
    },
    components: {
        Button
    }
};
</script>

<style>
.banner-container {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 2 0 auto;
    padding: calc(100vh - 70vh) 0;
}

.contents {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 7%;
    border-left: solid 2px rgba(255, 255, 255, 0.5);
    padding-left: 2rem;
}

h1 {
    font-size: 2.5rem;
    letter-spacing: 1px;
    line-height: 3rem;
    font-weight: bold;
    padding-bottom: 1rem;
    margin: 0;
}

h2 {
    font-weight: 300;
    line-height: 1.5em;
    font-size: 1.5rem;
    line-height: 1.5em;
}

@media (max-width: 768px) {
    .contents {
        border-left: none;
        padding-left: 0;
    }
}
</style>
