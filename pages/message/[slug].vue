<template>
    <section class="py-20">
    <v-container>
  <div class="flex flex-col gap-5">
  <h1 class="text-4xl text-center capitalize ">{{message.name}}</h1>
<div class="flex flex-col justify-center items-center">
<v-img :src="message.photo" width="300"></v-img>
<h1 class="font-semibold capitalize">{{message.designation}}</h1></div>
<div v-html="message.message"></div>

  </div>
    </v-container>

    </section>
</template>

<script setup>
import { useMessagesStore } from "~/store/messages";
const messagesStore = useMessagesStore();
await messagesStore.getmessages();
 const route=useRoute();

 const message = messagesStore.messages.find((m) => m.slug == route.params.slug);
</script>

<style lang="scss" scoped>

</style>