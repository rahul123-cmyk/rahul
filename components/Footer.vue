<template>
  <section class="bg-blue-200 ">
    <v-container>
      <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3  " >
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-semibold">Contact us</h1>
         <div>
          <h1>{{ profileStore.school.name }}</h1>
          <h1>
            <v-icon icon="mdi-earth"></v-icon>{{ profileStore.school.street }}
          </h1>
          <h1>
            <v-icon icon="mdi-email"></v-icon>{{ profileStore.school.email }}
          </h1>
          <h1>
            <v-icon icon="mdi-phone"></v-icon
            >{{ profileStore.school.contactOne }}
          </h1>
          <h1 class="font-semibold">office hour</h1>
          <h1>{{ profileStore.school.office_hour }}</h1></div>
        </div>

        <div>
          <h1 class="text-2xl font-semibold">quick links</h1>
          <h1><NuxtLink to="/notices">notice</NuxtLink></h1>
          <h1><NuxtLink to="/gallery">photo gallery</NuxtLink></h1>
        </div>

        <div>
          <h1 class="text-2xl font-semibold">Location</h1>
          <div v-html="profileStore.school.map"></div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script setup>
import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();
</script>
