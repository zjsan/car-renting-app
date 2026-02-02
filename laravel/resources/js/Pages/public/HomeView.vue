<template>
    <!-- Hero Section -->
    <LandingPageLayout
        title="Explore Ilocos Norte with Comfort and Confidence"
        message="Affordable, well-maintained vehicles for locals and tourists. Book your ride easily and explore Ilocos Norte your way."
        bgImage="images/car-rental-hero.png"
        bgImageAlt="A blue sedan in Patapat Bridge"
        bgPosition="center"
        sectionClass="min-h-[80vh] md:h-screen flex items-center"
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
            <div class="md:w-1/2 text-justify">
    <p class="max-w-2xl text-slate-700 leading-relaxed text-base md:text-lg lg:text-xl">
        We are a <span class="text-yellow-400 font-bold">trusted car rental service</span> proudly serving <span class="font-bold">Ilocos Norte </span>and nearby areas. Our goal is simple: to
        <span class="text-yellow-400 font-bold">make transportation easy</span>,
        <span class="text-yellow-400 font-bold"> affordable </span>, and
        <span class="text-yellow-400 font-bold"> dependable </span> for every customer.
    </p>

    <p class="mt-7 max-w-2xl text-slate-700 leading-relaxed text-base md:text-lg lg:text-xl">
        Whether you’re a tourist exploring the province, a local needing a temporary vehicle, or a returning balikbayan visiting family, we provide well-maintained cars and friendly <span class="text-yellow-400 font-bold">service you can rely on.</span>
    </p>
        </div>

            <!-- Image -->
            <div class="md:w-1/2 flex justify-center mb-8 md:mb-0 ml-10">
                <img
                    src="/public/images/stylish-elegant-woman-car-salon.jpg"
                    alt="Happy customer renting a car"
                    class="w-full max-w-lg rounded-md shadow-md md: "
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
            <Cards v-for="item in features" :key="item.title" hoverable align="center">
                <template #icon>
                    <!--lucide icons-->
                    <div class="flex items-center justify-center mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-4">
                         <component :is="item.icon" :size="32" stroke-width="2"/>
                    </div> 
                </template>
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
