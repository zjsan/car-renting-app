// resources/js/vite.config.js (The correct version)

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
    ],
    server: {
        // 1. Keep '0.0.0.0' so Vite listens correctly inside the container
        host: '0.0.0.0',
        port: 5173,
        watch: {
            usePolling: true,
        },
        // 2. *** ADD THIS BLOCK ***
        // This tells Vite what URL to put into the HTML script tag
        // so the browser connects back to the host machine.
        hmr: {
            host: 'localhost', // The browser connects to the host machine via 'localhost'
            protocol: 'ws',
        },
    },
});