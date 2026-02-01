<template>
    <!-- Hero Section -->
    <LandingPageLayout
        title="Explore Ilocos Norte with Comfort and Confidence"
        message="Affordable, well-maintained vehicles for locals and tourists. Book your ride easily and explore Ilocos Norte your way."
        bgImage="images/car-rental-hero.png"
        bgImageAlt="A blue sedan in Patapat Bridge"
        sectionClass="min-h-screen md: h-screen"
    >
        <div class="mt-5 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
            <BaseButton variant="secondary" size="lg" class="w-44">Rent a Car</BaseButton>
            <BaseButton variant="primary" size="lg"
                >Discover our fleet</BaseButton
            >
        </div>
    </LandingPageLayout>

    <!-- About Us Section -->

    <!-- Who We Are -->
    <LandingPageLayout>
        <template #subheading>
            Who <span class="text-blue-600">We Are</span>
        </template>

        <div class="mt-12 flex flex-col-reverse p-5 md:flex-row items-center gap-5">
            <!-- Text -->
            <div class="md:w-1/2">
                <p
                    class="max-w-2xl text-center md:text-left text-slate-700 text-lg md:text-xl leading-relaxed"
                >
                    We are a trusted car rental service proudly serving Ilocos
                    Norte and nearby areas. Our goal is simple: to
                    <span class="text-yellow-400 font-bold">
                        make transportation easy </span
                    >,
                    <span class="text-yellow-400 font-bold"> affordable </span>,
                    and
                    <span class="text-yellow-400 font-bold"> dependable </span>
                    for every customer.
                </p>

                <p
                    class="mt-7 max-w-2xl text-center md:text-left text-slate-700 text-lg md:text-xl leading-relaxed"
                >
                    Whether you’re a tourist exploring the province, a local
                    needing a temporary vehicle, or a returning balikbayan
                    visiting family, we provide well-maintained cars and
                    friendly service you can rely on.
                </p>
            </div>

            <!-- Image -->
            <div class="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                    src="/public/images/stylish-elegant-woman-car-salon.jpg"
                    alt="Happy customer renting a car"
                    class="w-full max-w-lg rounded-md shadow-md"
                />
            </div>
        </div>
    </LandingPageLayout>

    <!-- What Makes Us Different -->
    <LandingPageLayout>
        <template #subheading>
            What Makes Us <span class="text-blue-600">Different</span>
        </template>
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Cards v-for="item in features" :key="item.title" hoverable>
                <template #icon>{{ item.icon }}</template>
                <template #title>{{ item.title }}</template>
                <p>
                    {{ item.text }}
                </p>
            </Cards>
        </div>
    </LandingPageLayout>
</template>

<script setup>
import LandingPageLayout from "../layout/LandingPageLayout.vue";
import BaseButton from "../components/Basebutton.vue";
import Cards from "../components/Cards.vue";
import features from "./features";
</script>
