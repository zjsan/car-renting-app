import { defineStore } from 'pinia'

// Example structure
export const useAuthStore = defineStore('auth', {
  state: () => ({ user: JSON.parse(localStorage.getItem('user')) || null }),
  getters: { isAuthenticated: (state) => !!state.user },
  actions: {
    async login(credentials) { /* API call & set user */ },
    logout() { /* Clear user & storage */ },
  },
});
