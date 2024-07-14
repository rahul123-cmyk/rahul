<template>
  <section>
    <v-container>
    <h1 class="text-center text-3xl capitalize mb-5"> program</h1>
      <v-row>
        <v-col v-for="program in programsStore.programs" :key="program.id">
        <nuxt-link :to="`/program/${program.slug}`">
          <v-btn>{{ program.title }}</v-btn></nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup>
import { useProgramsStore } from "~/store/program";
const programsStore = useProgramsStore();


</script>
