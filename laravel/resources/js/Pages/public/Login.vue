<template>
    <!-- hero section -->
    <section
        class="min-h-screen py-20 px-6 flex flex items-center justify-center items-start bg-slate-800"
    >
        >
        <div class="mt-2 max-w-2xl">
            <h1 class="text-4xl font-bold text-white mb-6">
                Rent Your Dream Car Today!
            </h1>
            <p class="text-lg text-gray-300 mb-8">
                Experience the freedom of the open road with our wide selection
                of vehicles. Whether you're looking for a sleek sports car or a
                spacious SUV, we have the perfect ride for you.
            </p>
            <div
                class="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md"
            >
                <form action="">
                    <input
                        type="text"
                        id="email"
                        placeholder="Email/Username"
                        class="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        class="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white mt-4"
                    />
                    <button
                        type="submit"
                        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup></script>
