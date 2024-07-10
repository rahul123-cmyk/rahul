<template>
    <section>
    <v-container>


<div v-for="message in messagesStore.messages" :key="message.id">
<v-img :src="message.photo" :lazy-src="message.photo"></v-img>
<h1 v-html="message.message"></h1>


</div>



    </v-container>

    </section>
</template>

<script setup>
import { useMessagesStore } from "~/store/messages";
const messagesStore = useMessagesStore();
await messagesStore.getmessages();
</script>

<style lang="scss" scoped>

</style>