<template>
    <section>
        <div class="contact-heading gx-lg-0">
            <h3>CONTACT</h3>
            <hr />
        </div>
        <div class="contact-content gx-lg-0">
            <div class="row">
                <div class="col-lg-6 col-12 align-self-center contact-msg mb-3">
                    <div>
                        Send me an email to discuss your next project, ask a
                        question, or if you just want to touch base. Talk soon!
                    </div>
                    <Button :text="button.text" :link="button.link" />
                </div>
                <div class="col-lg-6 col-12 headshot">
                    <img
                        class="img-fluid"
                        :src="`${publicPath}images/headshot.jpeg`"
                        alt="Headshot of Pete Wanca"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
    name: "ContactBanner",
    data() {
        return {
            button: {
                text: "Send me an Email.",
                link: "mailto:petewancadrums@gmail.com"
            },
            publicPath: process.env.BASE_URL
        };
    },
    components: {
        Button
    }
};
</script>

<style>
.contact-heading,
.contact-content {
    padding: 2rem 7% 0 7%;
}

.contact-heading {
    padding-top: 3rem;
}

.contact-msg {
    padding-right: 1rem;
}

.contact-msg > div {
    color: rgb(164, 164, 164);
    font-weight: 300;
    padding: 1rem 0;
    letter-spacing: 1px;
}

.headshot {
    padding: 1rem;
}
</style>