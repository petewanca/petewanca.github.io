<template>
    <nav
        id="nav"
        class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark py-lg-3"
    >
        <div id="nav-container" class="container-fluid">
            <div class="col-2 d-lg-none">
                <button
                    id="hamburger-menu"
                    class="navbar-toggler"
                    type="button"
                    aria-controls="mobile-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    @click="openNav"
                >
                    <span class="navbar-toggler-icon" />
                </button>
            </div>
            <router-link id="brand" class="col-8 col-lg-6 text-lg-start" to="/">
                // PETE WANCA<br />DRUM TRACKING
            </router-link>
            <div class="d-lg-show d-none navbar-collapse">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link active-class="active" to="/">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" to="/samples">
                            Samples
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" to="/testimonials">
                            Testimonials
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" to="/contact">
                            Contact
                        </router-link>
                    </li>
                </ul>
            </div>

            <div id="mobile-navbar" class="d-lg-none mobile-nav">
                <span
                    id="close-mobile-menu"
                    class="navbar-toggler"
                    type="button"
                    aria-controls="mobile-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    @click="closeNav"
                    ><i class="bi bi-x"
                /></span>

                <ul class="navbar-nav px-3 mb-2 mb-lg-0">
                    <li class="mobile-nav-item">
                        <router-link to="/" @click="closeOnLink">
                            HOME
                        </router-link>
                    </li>
                    <li class="mobile-nav-item">
                        <router-link to="/samples" @click="closeOnLink">
                            SAMPLES
                        </router-link>
                    </li>
                    <li class="mobile-nav-item">
                        <router-link to="/testimonials" @click="closeOnLink">
                            TESTIMONIALS
                        </router-link>
                    </li>
                    <li class="mobile-nav-item">
                        <router-link to="/contact" @click="closeOnLink">
                            CONTACT
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<script>
export default {
    name: "Header",
    methods: {
        openNav() {
            console.log("hit");
            document.getElementById("mobile-navbar").style.width = "100%";
        },
        closeNav() {
            document.getElementById("mobile-navbar").style.width = "0%";
        },
        closeOnLink() {
            document.getElementById("mobile-navbar").style.transition = "none";
        }
    }
};
</script>

<style>
#nav {
    background-color: rgba(0, 0, 0, 0.25) !important;
}

#nav-container {
    justify-content: normal;
    padding: 1rem 7%;
}

#hamburger-menu {
    border: none;
    text-align: left;
}

#hamburger-menu:focus {
    box-shadow: none;
}

#hamburger-menu > span {
    padding: 1px 6px;
}

#brand {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    letter-spacing: 3px;
    text-align: center;
    font-weight: bold;
    line-height: normal;
}

.navbar-nav {
    width: 100%;
    justify-content: space-around;
}

.active {
    padding-bottom: 3px;
    border-bottom: 1px solid;
}

.mobile-nav {
    width: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
    transition: 0.5s;
}

#close-mobile-menu {
    align-self: flex-end;
    margin: 1rem 1rem 0 0;
    border: none;
    padding: 0;
}

.bi.bi-x {
    margin: initial;
    font-size: 3rem;
    color: white;
}

.mobile-nav-item {
    font-size: 1.5rem;
    padding: 1rem;
    border-bottom: solid 1px rgba(76, 76, 76, 0.5);
}

.collapsing.show {
    height: 100% !important;
}
</style>
