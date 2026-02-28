<template>
    <div>

        <!--Mobile-->
        <div class="px-4 py-2 bg-gray-100 md:hidden">
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
                <a href="#" class="block">Home</a>
                <a href="#" class="block">About</a>
                <a href="#" class="block">Rent Process</a>
                <a href="#" class="block">Contacts</a>
            </nav>
        </div>

        <!--desktop -->

        <div class="hidden lg:px-4 py-2 bg-gray-100 block">
            <div class="flex gap-x-4">
                <a href="#" class="block">Home</a>
                <a href="#" class="block">About</a>
                <a href="#" class="block">Rent Process</a>
                <a href="#" class="block">Contacts</a>
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