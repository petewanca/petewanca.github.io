import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Samples from "../views/Samples";
import Testimonials from "../views/Testimonials";
import Contact from "../views/Contact";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/samples",
    name: "Samples",
    component: Samples
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
