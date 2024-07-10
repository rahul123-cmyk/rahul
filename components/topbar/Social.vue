<template>
    <div>

   <div class="flex gap-4 ">
 <a :href="profileStore.school.facebook" target="_blank">
    <v-icon icon="mdi-facebook" variant="flat" color="white"></v-icon>
 </a>
  <a :href="profileStore.school.youtube">
    <v-icon icon="mdi-youtube" variant="flat" color="white"></v-icon>
  </a>
  <a :href="profileStore.school.linkedin">
    <v-icon icon="mdi-linkedin" variant="flat" color="white"></v-icon>
  </a>

   </div>


    </div>
</template>
<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore= useProfileStore();
</script>
