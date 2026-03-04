import { createMemoryHistory, createRouter } from "vue-router";

import LandingPage from "../Pages/public/LandingPage.vue";
import Login from "../Pages/public/Login.vue";

const routes = [
    { path: "/", name: "Landing", component: LandingPage },
    { path: "/login", name: "Login", component: Login },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
