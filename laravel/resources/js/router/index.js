import { createWebHistory, createRouter } from "vue-router";

import LandingPage from "../Pages/public/LandingPage.vue";
import Login from "../Pages/public/Login.vue";
import Signup from "../Pages/public/Signup.vue";

const routes = [
    { path: "/", name: "Landing", component: LandingPage },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { hideNavigation: true },
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
        meta: { hideNavigation: true },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
