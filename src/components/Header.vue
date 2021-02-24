<template>
  <nav
    id="nav"
    class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-lg-3"
  >
    <div id="nav-container" class="container-fluid gx-lg-5">
      <div class="col-2 d-lg-none">
        <button
          id="hamburger-menu"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <router-link
        class="col-8 col-lg-6 text-lg-start px-lg-5"
        id="brand"
        to="/"
        >// PETE WANCA<br />DRUM TRACKING</router-link
      >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link active-class="active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" to="/samples"
              >Samples</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" to="/testimonials"
              >Testimonials</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" to="/contact"
              >Contact</router-link
            >
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
};
</script>

<style>
#nav {
  background-color: rgba(0, 0, 0, 0.25) !important;
}

#nav-container {
  justify-content: normal;
}

#hamburger-menu {
  border: none;
  text-align: left;
}

#hamburger-menu > span {
  padding: 1px 6px;
}

#brand {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-align: center;
}

.navbar-nav {
  width: 100%;
  justify-content: space-around;
}

.active {
  padding-bottom: 3px;
  border-bottom: 1px solid;
}
</style>
