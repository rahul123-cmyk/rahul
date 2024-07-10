<template>
    <div class=" flex gap-4 ">

<v-icon icon="mdi-map-marker" variant="flat" color="white"> </v-icon><p class="text-white">{{profileStore.school.street}}</p>

  
<v-icon icon="mdi-email"  variant="flat" color="white"> </v-icon><p class="text-white"> {{ profileStore.school.email }}</p>




    </div>
</template>
<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore= useProfileStore();


</script>

