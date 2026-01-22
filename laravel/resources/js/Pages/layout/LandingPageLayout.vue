<template>
    <section
        :class="[
            'relative overflow-hidden transition-all duration-300',
            bgClass,
            sectionClass,
        ]"
        :style="sectionStyle"
    >
        <div v-if="bgImage" class="absolute inset-0 bg-gradient-to-b z-0"></div>

        <div :class="['relative z-10 container mx-auto', containerClass]">
            <div
                v-if="title || subheading || message"
                class="mb-10 text-center"
            >
                <h1
                    v-if="title"
                    :class="[
                        'text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white',
                        titleClass,
                    ]"
                >
                    {{ title }}
                </h1>
                <h2
                    v-if="subheading"
                    :class="[
                        'text-2xl md:text-3xl font-semibold mb-4',
                        titleClass,
                    ]"
                >
                    {{ subheading }}
                </h2>
                <p
                    v-if="message"
                    class="text-lg md:text-xl text-white max-w-2xl font-extrabold mx-auto leading-relaxed opacity-90"
                >
                    {{ message }}
                </p>
            </div>

            <slot />
        </div>
    </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    title: { type: String },
    subheading: { type: String },
    message: { type: String },
    bgClass: { type: String, default: "py-16 px-4 bg-white" },
    titleClass: { type: String, default: "text-slate-900" },

    // --- New Advanced Props ---
    bgImage: { type: String, default: null },
    sectionClass: { type: String, default: "" }, // For h-screen or custom padding
    containerClass: { type: String, default: "" }, // For alignment (text-left vs text-center)
});

// Computed style to handle the background image safely
const sectionStyle = computed(() => {
    return props.bgImage
        ? {
              backgroundImage: `url(${props.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
          }
        : {};
});
</script>
