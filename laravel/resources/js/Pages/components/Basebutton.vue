<script setup lang="ts">
import { computed } from "vue";

interface Props {
    variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

// Define defaults using withDefaults
const props = withDefaults(defineProps<Props>(), {
    variant: "primary",
    size: "md",
    type: "button",
    disabled: false,
});

// 1. Base styles that every button will have
const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

// 2. Variant-specific styles
const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
        "bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-400",
    outline:
        "border border-slate-300 bg-transparent hover:bg-slate-100 text-slate-700",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600",
};

// 3. Size-specific styles
const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
};

// Combine classes dynamically
const buttonClass = computed(() => {
    return [baseStyles, variants[props.variant], sizes[props.size]].join(" ");
});
</script>

<template>
    <button :type="type" :class="buttonClass" :disabled="disabled">
        <slot />
    </button>
</template>
