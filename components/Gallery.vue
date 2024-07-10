<template>
  <section class="py-20">
    <v-container>

      <v-row>
        <v-col cols="4" v-for="gallery in galleriesStore.galleries"  :key="gallery.id">
          <div>
        <a :href="gallery.url">
          <v-img :src="gallery.featuredImage"></v-img>
        </a>
          </div>
      <div>

      </div>

        </v-col>
      </v-row>
    </v-container>

  </section>
</template>



<script setup>
import { useGalleriesStore } from "~/store/gallery";
const galleriesStore= useGalleriesStore();
await galleriesStore.getgalleries()
 
</script>


