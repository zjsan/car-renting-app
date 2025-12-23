import { createMemoryHistory, createRouter } from "vue-router";

import LandingPage from "../Pages/public/LandingPage.vue";

const routes = [
    { path: "/", component: LandingPage },
    { path: "/about", component: AboutView },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
