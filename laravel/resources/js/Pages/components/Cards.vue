<template>
    <div :class="cardClass">
        <!-- Icon -->
        <div v-if="$slots.icon" class="text-3xl mb-4">
            <slot name="icon" />
        </div>

        <!-- Title -->
        <h3
            v-if="$slots.title"
            class="text-lg md:text-xl font-semibold text-slate-900 mb-2"
        >
            <slot name="title" />
        </h3>

        <!-- Content -->
        <div class="text-slate-600 text-sm md:text-base leading-relaxed">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Variant = "default" | "outlined" | "soft";

const props = defineProps<{
    variant?: Variant;
    hoverable?: boolean;
    padding?: "sm" | "md" | "lg";
}>();

const cardClass = computed(() => {
    const base = "rounded-xl transition-all duration-300";

    const variants = {
        default: "bg-white shadow-md",
        outlined: "border border-slate-200 bg-white",
        soft: "bg-slate-50",
    };

    const paddings = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    const hover =
        props.hoverable !== false ? "hover:-translate-y-1 hover:shadow-lg" : "";

    return [
        base,
        variants[props.variant ?? "default"],
        paddings[props.padding ?? "md"],
        hover,
    ].join(" ");
});
</script>
