<template>
    <div class="container mx-auto">
        <h1 class="text-2xl font-bold" :class="titleClass">
            {{ title }}
        </h1>
        <h2 class="text-xl font-bold" :class="titleClass">
            {{ header2 }}
        </h2>
        <p class="text-gray-600 leading-relaxed">{{ message }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    title: { type: String, required: true },
    header2: { type: String, required: true },
    message: { type: String, required: true },
    titleClass: { type: String, default: "text-black" }, // allows color override
});
</script>
