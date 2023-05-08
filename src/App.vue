<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavHeader from './components/NavHeader.vue';
</script>

<template>
   <NavHeader/>

   <main>
      <RouterView/>
   </main>
</template>

<style scoped>
main {
   padding: 1rem;
}
</style>
