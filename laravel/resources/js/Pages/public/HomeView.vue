<template>
    <!-- Hero Section -->
    <LandingPageLayout
        title="Explore Ilocos Norte with Comfort and Confidence"
        message="Affordable, well-maintained vehicles for locals and tourists. Book your ride easily and explore Ilocos Norte your way."
        bgImage="images/4de153d9-a527-4f2e-b175-6942a70b3607.png"
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
    <LandingPageLayout subheading="hello">
        <BaseButton variant="primary">Save Changes</BaseButton>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            accusantium. Veritatis, reprehenderit non. Culpa tempore ad officia
            blanditiis? Molestias inventore aliquid, unde velit vel reiciendis
            dolor recusandae numquam. Veritatis, excepturi?
        </p>
    </LandingPageLayout>
</template>

<script setup>
import LandingPageLayout from "../layout/LandingPageLayout.vue";
import BaseButton from "../components/Basebutton.vue";
</script>
