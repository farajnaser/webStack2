<template>
  <div class="antialiased min-h-screen transition-colors duration-300 bg-white text-black dark:bg-[#050505] dark:text-white selection:bg-primary selection:text-black">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

onMounted(() => {
  // Fade-in animation for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });
});
</script>

<style>
.fade-in-section {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
