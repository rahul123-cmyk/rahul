<template>
    <section class="px-7 py-3 " >

  <div class="flex">


  <h1 class="px-4">Notice:</h1>
  <marquee behavior="" direction="">
 <div class="flex h-8 gap-2">
  <div v-for="notice in noticeStore.notices" :key="notice.id">
  <div>
  <h1 class="font-semibold"> <v-icon icon="mdi-bullhorn-outline"></v-icon>{{notice.subject}}</h1>
  </div>
  </div></div>
  </marquee>
  
  </div>
  

    </section>
</template>
<script setup>

import { useNoticeStore } from "~/store/notice";
const noticeStore=useNoticeStore();

</script> 
