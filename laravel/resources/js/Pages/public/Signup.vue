<template>
    <!-- hero section -->
    <section
        class="min-h-full py-20 px-6 flex flex items-center justify-center items-start bg-slate-800"
    >
        <div class="mt-2 max-w-2xl">
            <h1 class="text-4xl font-bold text-white mb-6">
                Start your Ilocos Adventure Today!
            </h1>
            <p class="text-lg text-gray-300 mb-8">
                Experience the freedom of the open road with our wide selection
                of vehicles. Whether you're looking for a sleek sedans or a
                spacious SUV, we have the perfect ride for you.
            </p>
            <div
                class="flex flex-col justify-center min-h-full space-y-4 bg-white py-15 px-20 rounded-lg shadow-md"
            >
                <form action="">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        class="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-gray-700"
                        required
                    />
                    <input
                        type="text"
                        id="fname"
                        placeholder="First Name"
                        class="mt-3 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-gray-700"
                        required
                    />
                    <input
                        type="text"
                        id="lname"
                        placeholder="Last Name"
                        class="mt-3 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-gray-700"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        class="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white mt-4 border border-gray-700"
                        required
                    />
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        class="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white mt-4 border border-gray-700"
                        required
                    />
                    <button
                        type="submit"
                        class="mt-8 px-20 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>

                    <p class="text-sm text-gray-500 mt-4">
                        Already have an account?
                        <a
                            href="/register"
                            class="text-blue-500 hover:underline"
                        >
                            Click here to sign in
                        </a>
                    </p>
                </form>
            </div>
        </div>
    </section>

    <Footer />
</template>
<script setup>
import Footer from "../components/Footer.vue";
</script>
