<!-- src/App.vue -->
<template>
    <!--render landing page number if hideNavigation is set to false only-->
    <Navigations v-if="!$route.meta.hideNavigation" />
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
