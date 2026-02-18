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
        <div
            class="mt-5 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center"
        >
            <BaseButton variant="secondary" size="lg" class="w-44"
                >Rent a Car</BaseButton
            >
            <BaseButton variant="primary" size="lg"
                >Discover our fleet</BaseButton
            >
        </div>
    </LandingPageLayout>

    <!-- About Us Section -->

    <!-- Who We Are -->
    <LandingPageLayout sectionClass="min-h-0 py-20 px-6">
        <template #subheading>
            Who <span class="text-blue-600">We Are</span>
        </template>

        <div
            class="mt-12 flex flex-col-reverse md:flex-row items-center gap-5 p-5"
        >
            <!-- Text -->
            <div class="md:w-1/2 text-justify">
                <p
                    class="max-w-2xl text-slate-700 leading-relaxed text-base md:text-lg lg:text-xl"
                >
                    We are a
                    <span class="text-yellow-400 font-bold"
                        >trusted car rental service</span
                    >
                    proudly serving
                    <span class="font-bold">Ilocos Norte </span>and nearby
                    areas. Our goal is simple: to
                    <span class="text-yellow-400 font-bold"
                        >make transportation easy</span
                    >,
                    <span class="text-yellow-400 font-bold"> affordable </span>,
                    and
                    <span class="text-yellow-400 font-bold"> dependable </span>
                    for every customer.
                </p>

                <p
                    class="mt-7 max-w-2xl text-slate-700 leading-relaxed text-base md:text-lg lg:text-xl"
                >
                    Whether you’re a tourist exploring the province, a local
                    needing a temporary vehicle, or a returning balikbayan
                    visiting family, we provide well-maintained cars and
                    friendly
                    <span class="text-yellow-400 font-bold"
                        >service you can rely on.</span
                    >
                </p>
            </div>

            <!-- Image -->
            <div
                class="w-full md:w-1/2 flex justify-center md: justify-end md:pl-10"
            >
                <img
                    src="/public/images/stylish-elegant-woman-car-salon.jpg"
                    alt="Happy customer renting a car"
                    class="w-full max-w-lg rounded-md shadow-md md:"
                />
            </div>
        </div>
    </LandingPageLayout>

    <!-- What Makes Us Different -->
    <LandingPageLayout
        bgClass="bg-blue-100"
        sectionClass="min-h-screen py-20 px-6 flex items-center"
    >
        <template #subheading>
            What Makes Us <span class="text-blue-600">Different</span>
        </template>
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Cards
                v-for="item in features"
                :key="item.title"
                hoverable
                align="center"
            >
                <template #icon>
                    <!--lucide icons-->
                    <div
                        class="flex items-center justify-center mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-4"
                    >
                        <component
                            :is="item.icon"
                            :size="32"
                            stroke-width="2"
                        />
                    </div>
                </template>
                <template #title>{{ item.title }}</template>
                <p>
                    {{ item.text }}
                </p>
            </Cards>
        </div>
    </LandingPageLayout>

    <!-- featured vehicles -->
    <LandingPageLayout>
        <template #subheading>
            Featured <span class="text-blue-600">Vehicles</span>
        </template>
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Vehicle cards would go here -->
            <Cards hoverable align="center">
                <template #title>Toyota Vios 2020</template>
                <p>
                    Comfortable sedan, perfect for city drives and long trips.
                </p>
            </Cards>

            <Cards hoverable align="center">
                <template #title>Montero 2016</template>
                <p>
                    Comfortable sedan, perfect for city drives and long trips.
                </p>
            </Cards>

            <Cards hoverable align="center">
                <template #title>Mirage 2024</template>
                <p>
                    Comfortable sedan, perfect for city drives and long trips.
                </p>
            </Cards>
        </div>
    </LandingPageLayout>

    <!-- How it works  -->
    <LandingPageLayout>
        <template #subheading>
            How It <span class="text-blue-600">Works</span>
        </template>
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Cards
                v-for="item in process"
                :key="item.title"
                hoverable
                align="center"
            >
                <template #icon>
                    <!--lucide icons-->
                    <div
                        class="flex items-center justify-center mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-4"
                    >
                        <component
                            :is="item.icon"
                            :size="32"
                            stroke-width="2"
                        />
                    </div>
                </template>
                <template #title>{{ item.title }}</template>
                <p>
                    {{ item.text }}
                </p>
            </Cards>
        </div>
    </LandingPageLayout>

    <!-- ]Contact Us -->
    <LandingPageLayout>
        <template #subheading>
            Contact <span class="text-blue-600">Us</span>
        </template>
        <div
            class="flex flex-col p-8 px-4 bg-blue border-8 border-black justify-center items-center w-full"
        >
            <div class="border-4 border-red mb-5 w-full md:w-1/2 lg:w-2/5">
                <iframe
                    class="w-full h-96"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1331.0042714156223!2d120.58792495857945!3d18.19677862431592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1771326094870!5m2!1sen!2sph"
                    width="600"
                    height="450"
                    style="border: 0"
                    **allowfullscreen**
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
            <div class="border-4 border-red">2</div>
        </div>
    </LandingPageLayout>
</template>

<script setup>
import LandingPageLayout from "../layout/LandingPageLayout.vue";
import BaseButton from "../components/Basebutton.vue";
import Cards from "../components/Cards.vue";
import features from "./features";
import process from "./process";
</script>
