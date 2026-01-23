<template>
    <!-- Hero Section -->
    <LandingPageLayout
        title="Explore Ilocos Norte with Comfort and Confidence"
        message="Affordable, well-maintained vehicles for locals and tourists. Book your ride easily and explore Ilocos Norte your way."
        bgImage="images/car-rental-hero.png"
        sectionClass="min-h-screen"
    >
        <div class="mt-5 flex flex-row items-center space-x-4 justify-center">
            <BaseButton variant="secondary" size="xl">Rent a Car</BaseButton>
            <BaseButton variant="primary" size="xl"
                >Discover our fleet</BaseButton
            >
        </div>
    </LandingPageLayout>

    <!-- About Us Section -->
    <LandingPageLayout>
        <template #subheading>
            Who <span class="text-blue-600">We Are</span>
        </template>
        <div>
            <p
                class="max-w-3xl mx-auto text-center text-slate-700 text-lg md:text-xl leading-relaxed"
            >
                We are a trusted car rental service proudly serving Ilocos Norte
                and nearby areas. Our goal is simple: to make transportation
                easy, affordable, and dependable for every customer.
            </p>

            <p
                class="mt-7 max-w-3xl mx-auto text-center text-slate-700 text-lg md:text-xl leading-relaxed"
            >
                Whether you’re a tourist exploring the province, a local needing
                a temporary vehicle, or a returning balikbayan visiting family,
                we provide well-maintained cars and friendly service you can
                rely on.
            </p>
        </div>
    </LandingPageLayout>
</template>

<script setup>
import LandingPageLayout from "../layout/LandingPageLayout.vue";
import BaseButton from "../components/Basebutton.vue";
</script>
