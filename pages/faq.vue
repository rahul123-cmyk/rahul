<template>
    <section>
      <v-container>
        <div> {{ faq.data.title}}</div>
        <div v-html="faq.data.description"></div>
      </v-container>

    </section>
</template>

<script setup>
const {data: faq} = await useFetch("https://dmcdharan.com/api/faq");
</script>

<style lang="scss" scoped>

</style>