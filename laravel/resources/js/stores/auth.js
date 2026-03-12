import { defineStore } from "pinia";
import api from "./api/axios.js";
import { ref } from "vue";

// Example structure
export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null,
        loading: false, //track asynch reques
        error: null, //track errors
        isAuthenticated: false, //track auth status
    }),
    getters: { isAuthenticated: (state) => !!state.user },
    actions: {
        async login(credentials) {
            /* API call & set user */

            try {
                loading = true;

                api.get("/sanctum/csrf-cookie"); //intialize csrf protection
                const response = await api.post("/login", credentials);
                user.value = response.data.user;
                localStorage.setItem("user", JSON.stringify(user.value));
                isAuthenticated.value = true;
            } catch (error) {
                error.value = error;
            } finally {
                loading.value = false;
            }
        },
        logout() {
            /* Clear user & storage */
        },
    },
});
