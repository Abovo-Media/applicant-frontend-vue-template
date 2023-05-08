<script setup lang="ts">
import { Navbar, NavbarCollapse } from 'flowbite-vue';
</script>

<template>
   <Navbar>
      <template #logo>
         <RouterLink to="/">
            <img id="header-logo" src="https://www.abovomedia.nl/wp-content/themes/abovomedia/images/abovo-media-alt.svg" alt="Abovo Media logo" />
         </RouterLink>
      </template>
      <template #default="{isShowMenu}">
         <NavbarCollapse :isShowMenu="isShowMenu">
            <RouterLink active-class="text-blue" to="/order/1">Order: 1</RouterLink>
         </NavbarCollapse>
         <div class="flex-1"></div>
      </template>
   </Navbar>
</template>

<style scoped>
#header-logo {
    width: 10em;
}
.text-blue {
    color: blue;
}
</style>
