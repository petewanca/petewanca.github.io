<template>
    <section
        class="fb-container"
        :style="{ backgroundImage: `url('${image}')` }"
    >
        <div class="fb-contents">
            <h1>{{ title }}</h1>
            <h2>{{ subtitle }}</h2>
        </div>
    </section>
</template>

<script>
export default {
    name: "FacebookBanner",
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
        }
    }
};
</script>

<style>
.fb-container {
    background-size: 150%;
    background-position: 70% 57%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 2 0 auto;
}

.fb-contents {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.6);
}
</style>
