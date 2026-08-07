<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Lewati ke konten utama</a>
  <Navbar />
  <RouterView />
  <Footer />
</template>
