<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Albumn_card from "./components/albumn_card.vue";
</script>

<template>
  <albumn_card title="test" image_url="https://lh3.google.com/u/7/d/1eiLdj2E0FwqlNSKnDF96S0_4K3EoB2GA=w1825-h970-iv1" update_date ="2024-5-5" created ="2024-5-4" />
  <HelloWorld msg="Test Gallary" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
