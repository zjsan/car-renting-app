import { defineStore } from 'pinia'
import api from "./api/axios.js"
import {ref} from 'vue';

// Example structure
export const useAuthStore = defineStore('auth', {
  state: () => ({
     user: JSON.parse(localStorage.getItem('user')) || null,
     loading: false, //track asynch reques
     error: null, //track errors
    
    }),
  getters: { isAuthenticated: (state) => !!state.user },
  actions: {
    async login(credentials) {
         /* API call & set user */

         try {
            loading = true

            
         } catch (error) {
            
         }
     },
    logout() { /* Clear user & storage */ },
  },
});
