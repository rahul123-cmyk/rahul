<template>
    <div>
<img :src="profileStore.school.logo" alt="" class="w-36">
    </div>
</template>

<script setup>

import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();
</script>

