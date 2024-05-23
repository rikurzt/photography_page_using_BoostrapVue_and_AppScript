<script setup lang="ts">

import PhotoGallary from './PhotoGallary.vue'
defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>
  <PhotoGallary />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
