<script setup lang="ts">
import { type Post } from '~/types/Post'

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(orderRank)`
const { data: posts } = await useSanityQuery<Post[]>(query)
</script>

<template>
  <section>
    <Section v-for="post in posts || []" :key="post._id" :post="post" />
  </section>
</template>
