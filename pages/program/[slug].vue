<template>
    <div>

<section class="py-20">
<v-container>

<div  class="flex flex-col gap-4">
<h1 class="text-4xl font-semibold  text-center">{{program.title}}</h1>
<div v-html="program.content"></div>
<v-img :src="program.image" :lazy-src="program.image"></v-img>

</div>

</v-container>
</section>
    </div>
</template>


<script setup>

import { useProgramsStore } from "~/store/program";
const programsStore = useProgramsStore();


const route= useRoute();
const program = programsStore.programs.find((p) => p.slug == route.params.slug);


</script>

<style lang="scss" scoped>

</style>