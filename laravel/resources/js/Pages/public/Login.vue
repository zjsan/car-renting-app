<template>
    <!-- hero section -->
    <LandingPageLayout
        bgClass="bg-slate-800"
        sectionClass="min-h-screen py-20 px-6 flex items-center"
    >
        <template #subheading>
            Welcome to <span class="text-blue-600">CarRent</span>
        </template>
        <div class="mt-16 max-w-2xl">
            <h1 class="text-4xl font-bold text-white mb-6">
                Rent Your Dream Car Today!
            </h1>
            <p class="text-lg text-gray-300 mb-8">
                Experience the freedom of the open road with our wide selection
                of vehicles. Whether you're looking for a sleek sports car or a
                spacious SUV, we have the perfect ride for you.
            </p>
            <div class="flex space-x-4">
                <Button variant="primary" size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
            </div>
        </div>
    </LandingPageLayout>
</template>
<script setup>
import LandingPageLayout from "../components/LandingPageLayout.vue";
</script>
