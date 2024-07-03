<template>
  <a
    v-if="previewEnabled && !inFrame"
    :href="`/preview/disable?redirect=${route.fullPath}`"
    class="preview-toggle"
  >
    <span>Preview Enabled</span>
    <span>Disable Preview</span>
  </a>

  <div class="container">
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState()

useHead({
  title: 'YEN-GI',
  meta: [
    { name: 'description', content: '' }
  ]
})

</script>

<style>
:root {
  --font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  --white: #fff;
  --black: #000;
  --burgundy-dark: #4F2525;
  --burgundy-light: #692F30;

  --fs-sm: 10px;
  --fs-md: 1.613vw;
  --fs-lg: 1.111vw;
  --fs-xl: 0.926vw;

  @media only screen and (max-width: 500px) {
    font-size: var(--fs-sm);
  }

  @media only screen and (min-width: 500px) {
    font-size: var(--fs-md);
  }

  @media only screen and (min-width: 768px) {
    font-size: var(--fs-lg);
  }

  @media only screen and (min-width: 1440px) {
    font-size: var(--fs-xl);
  }
}

html {
  background-color: var(--white);
  font-family: var(--font-family);
  font-weight: 500;
  color: var(--burgundy-light);
  text-size-adjust: 100%;
}

body {
  margin: 0;
  font-size: 1.72281rem;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

a {
  color: var(--burgundy-light);
  text-decoration: none;
  text-transform: uppercase;
}

img {
  pointer-events: none;
}

</style>

<style scoped>

main {
  display: flex;
  justify-content: center;
}


</style>
