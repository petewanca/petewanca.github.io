<template>
    <section class="social-container">
        <h3 class="mb-3">{{ title }}</h3>
        <hr />

        <div class="pt-3" v-if="type === 'soundCloud'">
            <div class="row">
                <div v-if="subtitle" class="col-12 col-md-6 sub-content">
                    <h4 class="subtitle text-md-start" v-show="subtitle">
                        {{ subtitle }}
                    </h4>
                    <p class="description text-md-start" v-show="description">
                        {{ description }}
                    </p>
                </div>

                <div class="col-12 col-md-6">
                    <iframe
                        width="100%"
                        height="300"
                        scrolling="no"
                        frameborder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1195562290&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>
                    <div
                        style="
                            font-size: 10px;
                            color: #cccccc;
                            line-break: anywhere;
                            word-break: normal;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            font-family: Interstate, Lucida Grande,
                                Lucida Sans Unicode, Lucida Sans, Garuda,
                                Verdana, Tahoma, sans-serif;
                            font-weight: 100;
                        "
                    >
                        <a
                            href="https://soundcloud.com/peter-wanca"
                            title="Pete Wanca"
                            target="_blank"
                            style="color: #cccccc; text-decoration: none"
                            >Pete Wanca</a
                        >
                        ·
                        <a
                            href="https://soundcloud.com/peter-wanca/sets/pete-wanca-drum-reel"
                            title="Pete Wanca Drum Reel"
                            target="_blank"
                            style="color: #cccccc; text-decoration: none"
                            >Pete Wanca Drum Reel</a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-3" v-if="type === 'instagram'">
            <div class="row g-3">
                <img
                    v-for="item in apiResult"
                    :key="item.id"
                    class="col-6 col-md-3"
                    :src="item"
                />
            </div>
        </div>
        <div v-show="followLink" class="social-link">
            <a>Follow me on {{ title }} ></a>
        </div>
    </section>
</template>

<script>
import getInstagramFeed from "../utils/getInstagramFeed";

export default {
    name: "Social Media",
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        followLink: {
            type: Boolean,
            required: false
        },
        type: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            apiResult: []
        };
    },
    created() {
        this.apiResult = getInstagramFeed();
    }
};
</script>

<style>
.social-container {
    background-color: black;
    padding: 2rem 7% 0 7%;
}

.social-container > hr {
    border-bottom: solid 1px rgb(119, 119, 119);
    opacity: 1;
}

.social-link {
    margin: 3rem 0 1rem 0;
    text-align: center;
    color: rgb(222, 216, 174);
}

hr {
    margin: 1.5rem 0;
}

h4 {
    color: rgb(222, 216, 174);
    font-size: 1.75rem;
    font-weight: 300;
}

.sub-content {
    align-self: center;
}

.subtitle,
.description {
    text-align: center;
    padding-bottom: 2rem;
    margin: 0;
}

.description {
    color: rgb(145, 145, 145);
}
</style>
