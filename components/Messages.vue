<template>
  <section class="py-20 ">
<v-container>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
<div v-for="message in messagesStore.messages" :key="message.id" class="flex flex-col gap-4">
<div class="flex flex-col gap-2 items-center">
<div >

<v-img :src="message.photo" :lazy-src="message.photo"  width="400"></v-img>
</div>

<h1 class="text-center text-2xl font-semibold"> {{message.designation}}</h1>
<h1 class="font-semibold capitalize">{{message.name}}</h1>
</div>

<div v-html="message.message">
</div>
<v-btn width="150 " color="blue"  >
<v-icon icon="mdi-book " class="px-3"></v-icon>
<Nuxt-Link :to="`/message/${message.slug}`">Read more</Nuxt-Link>
</v-btn>

</div>


</div>

</v-container>

  </section>
</template>






<!-- <template>
  <section class="py-20">
    <v-container class="flex flex-col gap-12">
      <div v-for="(message, index) in messagesStore.messages" :key="index">
        <div class="flex gap-6" v-if="index % 2 == 0">
          <div><v-img :src="message.photo" alt="image" width="400" ></v-img> </div>
          <div class="flex flex-col gap-4">
            <h1 class="font-bold text-2xl capitalize">{{ message.name }}</h1>
            <div v-html="message.message" class="w-1/2"></div>
          <nuxt-link :to="`/message/${message.slug}`"> 
            <v-btn >read more </v-btn>
             </nuxt-link>

     
          </div>
        </div>

      

      

        <div class="flex flex-row-reverse gap-4 capitalize" v-else>                                         
          <div><img :src="message.photo" alt="" class="flex-grow"/></div>

          <div class="flex flex-col gap-4 ">
            <h1 class="font-bold text-2xl capitalize">{{ message.name }}</h1>
            <div v-html="message.message" class="w-1/2" ></div>
           <nuxt-link :to="`/message/${message.slug}`"> <v-btn variant="flat" color="blue-darken-1">read more</v-btn></nuxt-link>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template> -->

<script setup>
import { useMessagesStore } from "~/store/messages";
const messagesStore = useMessagesStore();
await messagesStore.getmessages();
</script>
