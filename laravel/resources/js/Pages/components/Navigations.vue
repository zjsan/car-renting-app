<template>
    <div>

        <!--Mobile-->
        <div class="px-4 py-2 bg-gray-100 lg:hidden">
            <div>
                <button @click="toggleMenu" class="cursor-pointer">
                     <!--burger icon-->
                    <svg :class="isOpen ? 'hidden' : ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <!--close (x) icon -->
                    <svg :class="isOpen ? '' : 'hidden'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav :class="isOpen ? '' : 'hidden'">
                <a href="#" class="block font-bold text-gray-700">Home</a>
                <a href="#" class="block font-bold text-gray-700">About</a>
                <a href="#" class="block font-bold text-gray-700">Rent Process</a>
                <a href="#" class="block font-bold text-gray-700">Contacts</a>
            </nav>
        </div>

        <!--desktop -->
        
        <div class="hidden lg:block px-4 py-2 bg-gray-100">
            <div class="flex gap-x-4">
                <a href="#" class="block font-bold text-gray-700 hover:text-black">Home</a>
                <a href="#" class="block font-bold text-gray-700 hover:text-black">About</a>
                <a href="#" class="block font-bold text-gray-700 hover:text-black">Rent Process</a>
                <a href="#" class="block font-bold text-gray-700 hover:text-black">Contacts</a>
            </div>
        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue'

const isOpen = ref(false);
const toggleMenu = () => isOpen.value = !isOpen.value;
console.log(isOpen)
</script>