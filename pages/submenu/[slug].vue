<template>
    <div>
<v-container>
    <v-row>
        <v-col cols="12">
            <v-img :src="post.image" :lazy-src="post.image"></v-img>
        </v-col>
        <v-col>
            <div v-html="post.content"></div>
        </v-col>
    </v-row>
</v-container>
    </div>
</template>

<script setup>

import { useMenuStore } from "~/store/menu";
const menuStore = useMenuStore();
const route = useRoute();
await menuStore.getmenus();

const posts= menuStore.menus.map((m)=>
m.posts.find((p) => p.slug == route.params.slug));

const post= posts.find((p) => p !=null);

</script>

<style lang="scss" scoped>

</style>