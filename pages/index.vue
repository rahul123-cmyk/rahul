<template>
  <div>

<v-dialog v-model="noticeStore.dialog" width="450">
<v-card > 
<div class="text-right">
<v-btn icon="mdi-close"  variant="flat" color="blue" @click="noticeStore.click"> </v-btn></div>
<v-img   :src="noticeStore.notice.file"> </v-img>


</v-card>
</v-dialog>

<!-- latest notice -->
<latestnotice />


    <Slide/>

    <!-- messages -->
     <Messages />

     <!-- notice -->
      <Notice />

      <!-- programs -->
       <Program />

       <!-- galleries -->
        <Gallery />
      
        <!-- news -->
        <News />

        <!-- teacher detail -->
         <Teacher />

 
  </div>
</template>
<script setup>

 

import {useNoticeStore} from '~/store/notice';
const noticeStore=useNoticeStore();






</script>