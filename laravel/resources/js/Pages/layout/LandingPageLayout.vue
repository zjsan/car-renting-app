<template>
    <section :class="['py-16 px-4', bgClass]">
        <div class="container mx-auto">
            <div class="mb-10 text-center">
                <h1
                    :class="['text-3xl md:text-4xl font-bold mb-4', titleClass]"
                >
                    {{ title }}
                </h1>
                <h2
                    :class="['text-2xl md:text-3xl font-bold mb-4', titleClass]"
                >
                    {{ subheading }}
                </h2>
                <p v-if="message" class="text-gray-600 max-w-2xl mx-auto">
                    {{ message }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: { type: String },
    subheading: { type: String },
    message: { type: String },
    bgClass: { type: String, default: "bg-white" },
    titleClass: { type: String, default: "text-slate-900" },
});
</script>
