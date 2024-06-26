<script lang="ts" setup>
import type { Post } from '~/types/Post'

defineProps<{ post: Post }>()
</script>

<template>
  <div class="card">
    <img
      v-if="post.mainImage"
      class="image"
      :src="urlFor(post.mainImage).url()"
      alt="Cover image"
    />
    
    <div class="links">
      <div v-for="link in post.links" class="link-item">
        <NuxtLink :href="link.href">
          <img
            v-if="link.outline"
            class="outline"
            :src="urlFor(link.outline).url()"
          />
          {{ link.linkText }}
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<style scoped>

.card {
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;
  margin-bottom: 10rem;

  @media only screen and (min-width: 768px) {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  &:first-child {
    justify-content: center;
    .image {
      width: 15.40744rem;
    }
  }

  .image {
    width: 46.0625rem;
    max-width: 90%;
  }

  .links {
    width: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    margin-top: 7.875rem;

    .link-item {
      position: relative;

      .outline {
        position: absolute;
        left: 50%;
        top:50%;
        width: 16.831rem;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }

  }

  &:first-child .links {
    display: flex;
    justify-content: space-between;
  }

}
</style>