<template>
  <NuxtLoadingIndicator/>
  <div>
    <header>
      <Topbar />

      <!-- facebook board -->
      <Facebook />
    
      <Banner/>



    </header>
          <Navbar />
    <main>
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script setup>
import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();

await profileStore.getSchoolProfile();

// menus

import { useMenuStore } from "~/store/menu";
const MenuStore = useMenuStore();
await MenuStore.getmenus();

// notice
import { useNoticeStore } from "~/store/notice";
const noticeStore = useNoticeStore();
await noticeStore.getnotices();

await noticeStore.getlatestnotice();

// program
import {useProgramsStore} from '`/store/program`';
const programsStore=useProgramsStore();
await programsStore.getprograms();

// flowbite

import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';
// import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})

</script>
