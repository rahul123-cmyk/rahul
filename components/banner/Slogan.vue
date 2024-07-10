<template>
    <div>
<h1 class="text-3xl text-blue-400 italic"> {{ profileStore.school.name }}</h1>
<h1 class="text-2xl text-red-500 italic font-serif">{{ profileStore.school.slogan }}</h1>


    </div>
</template>
<script setup>

import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();
</script>
