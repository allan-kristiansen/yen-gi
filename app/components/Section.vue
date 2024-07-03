<script lang="ts" setup>
import type { Post } from '~/types/Post'
import { PortableText } from '@portabletext/vue';

defineProps<{ post: Post }>()
</script>

<template>
  <section class="section">
    <img
      v-if="post.mainImage"
      class="image"
      :src="urlFor(post.mainImage).url()"
      :alt="post.altText"
    />

    <div class="section-info">
      <div v-for="sectionInfo in post.sectionInfo" class="section-info-item">
        <PortableText :value="sectionInfo" />
      </div>
    </div>
    
    <div class="links">
      <div v-for="link in post.links" class="link-item">
        <NuxtLink :href="link.href" target="_blank" rel="noopener noreferrer">
          <img
            v-if="link.outline"
            class="outline"
            :src="urlFor(link.outline).url()"
            alt="Outline illustration">
            {{ link.linkText }}
        </NuxtLink>
      </div>
    </div>

    <div class="contact-info">
      <div v-for="contact in post.contact" class="contact-item-container">
        <div class="contact-item">
          {{ contact.TextLeft }}
        </div>
        <NuxtLink :href="contact.href" target="_blank" rel="noopener noreferrer" class="contact-item">
            {{ contact.TextRight }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

.section {
  width: 100%;
  height: 100svh;
  min-height: 720px;
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

  .image {
    width: 46.0625rem;
    max-width: 90%;
  }

  .section-info {
    font-size: 1.5rem;
    letter-spacing: -0.03em;
    line-height: 100%;
    text-transform: uppercase;

    .section-info-item {
      text-align: center;
    }

  }

  .links {
    width: 30rem;
    max-width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 7.875rem;

    @media only screen and (max-width: 767px) {
      width: 25rem;
    }

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

  .contact-info {

    .contact-item-container {
      display: flex;
      justify-content: space-between;

      .contact-item {
        width: 17.5rem;
        text-align: center;
        line-height: 110%;
      }
    }

  }

  &:first-child {
    display: flex;
    justify-content: center;
    height: 122.5svh;
    font-size: 0.875rem;
    letter-spacing: 0.01em;

    .image {
      width: 5.75rem;

      @media only screen and (max-width: 500px) {
        width: 5.75rem;
      }
    }

    .links {
      justify-content: center;
      flex-direction: column;
      max-width: 14rem;

      .link-item {
        text-align: center;
        margin-bottom: 7rem;
      }
    }
  }

}
</style>