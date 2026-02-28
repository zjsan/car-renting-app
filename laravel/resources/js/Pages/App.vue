<!-- src/App.vue -->
<template>
    <Navigations/>
    <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import Navigations from "./components/Navigations.vue";
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
</style>
