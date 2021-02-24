<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div id="nav-container" class="container-fluid">
      <div class="col-2">
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
      <div class="col-8" id="brand-container">
        <router-link id="brand" to="/"
          >// PETE WANCA<br />DRUM TRACKING</router-link
        >
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/samples">Samples</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
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
  position: static;
}

#nav-container {
  justify-content: normal;
}

#mobile-nav-items {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  display: flex;
}

#hamburger-menu {
  border: none;
  text-align: left;
}

#hamburger-menu > span {
  padding: 1px 6px;
}

#brand-container {
  text-align: center;
}

#brand {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
}
</style>
