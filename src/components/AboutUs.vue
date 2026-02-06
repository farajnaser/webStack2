<template>
  <section id="about" class="bg-white dark:bg-[#050505] py-4 px-4 fade-in-section transition-colors duration-300">
    <div class="container mx-auto relative bg-[#f9f9f9] dark:bg-[#0a0a0a] text-black dark:text-white rounded-[40px] overflow-hidden min-h-[70vh] flex flex-col justify-between p-8 md:p-16 transition-colors duration-300">
      <!-- About Us Header -->
      <div class="flex items-center gap-3 mb-8">
        <div class="w-3 h-3 bg-[#00ff88] rounded-full"></div>
        <h2 class="text-base font-semibold text-gray-400">About Us</h2>
      </div>

      <!-- About Us Content Section -->
      <div class="grid lg:grid-cols-2 gap-16 mb-32 items-center">
        <div>
          <h3 class="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white leading-tight tracking-tighter">
            We are <span class="text-[#00ff88]">digital natives</span> engineering the future.
          </h3>
          <p class="text-gray-400 text-xl leading-relaxed mb-8">
            Founded in 2018 in a small coworking space, WebStack has evolved into a global force of 400+ specialists. We don't just build websites; we create digital ecosystems that empower market leaders to dominate their industries through innovation and scale.
          </p>
          <div class="grid grid-cols-2 gap-8">
            <div class="p-6 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5">
              <div class="text-[#00ff88] font-bold text-xl mb-2 italic">01 Mission</div>
              <p class="text-xs text-gray-500 leading-relaxed uppercase tracking-widest font-bold">Empower businesses through radical technology and human-centric systems.</p>
            </div>
            <div class="p-6 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5">
              <div class="text-[#00ff88] font-bold text-xl mb-2 italic">02 Vision</div>
              <p class="text-xs text-gray-500 leading-relaxed uppercase tracking-widest font-bold">To be the global benchmark for high-performance digital commerce transformation.</p>
            </div>
          </div>
        </div>
        <div class="relative rounded-[50px] overflow-hidden aspect-square bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 group shadow-2xl">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=1200&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Team collaborating">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8 text-white">
            <div class="text-sm font-bold uppercase tracking-[0.3em] mb-2 opacity-60">HQ / GLOBAL</div>
            <div class="text-3xl font-black italic tracking-tighter">Innovation Labs</div>
          </div>
        </div>
      </div>

      <!-- How We Work (Methodology) -->
      <div class="mb-32">
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.5em] mb-12 text-center">Our Methodology</h4>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white dark:bg-[#0a0a0a] p-10 rounded-[40px] border border-gray-100 dark:border-white/5 relative overflow-hidden group hover:border-[#00ff88]/50 transition-all">
            <div class="text-6xl font-black text-[#00ff88]/10 absolute -top-4 -right-4 italic group-hover:scale-110 transition-transform">01</div>
            <div class="relative z-10">
              <div class="text-xl font-bold mb-4">Discovery</div>
              <p class="text-sm text-gray-500 leading-relaxed">Deep dive into your business model and user personas to define the technical roadmap.</p>
            </div>
          </div>
          <div class="bg-white dark:bg-[#0a0a0a] p-10 rounded-[40px] border border-gray-100 dark:border-white/5 relative overflow-hidden group hover:border-[#00ff88]/50 transition-all">
            <div class="text-6xl font-black text-[#00ff88]/10 absolute -top-4 -right-4 italic group-hover:scale-110 transition-transform">02</div>
            <div class="relative z-10">
              <div class="text-xl font-bold mb-4">Design</div>
              <p class="text-sm text-gray-500 leading-relaxed">High-fidelity prototypes and immersive UX research to ensure perfect product-market fit.</p>
            </div>
          </div>
          <div class="bg-white dark:bg-[#0a0a0a] p-10 rounded-[40px] border border-gray-100 dark:border-white/5 relative overflow-hidden group hover:border-[#00ff88]/50 transition-all">
            <div class="text-6xl font-black text-[#00ff88]/10 absolute -top-4 -right-4 italic group-hover:scale-110 transition-transform">03</div>
            <div class="relative z-10">
              <div class="text-xl font-bold mb-4">Build</div>
              <p class="text-sm text-gray-500 leading-relaxed">Agile development cycles with continuous integration and automated testing for zero-debt code.</p>
            </div>
          </div>
          <div class="bg-white dark:bg-[#0a0a0a] p-10 rounded-[40px] border border-gray-100 dark:border-white/5 relative overflow-hidden group hover:border-[#00ff88]/50 transition-all">
            <div class="text-6xl font-black text-[#00ff88]/10 absolute -top-4 -right-4 italic group-hover:scale-110 transition-transform">04</div>
            <div class="relative z-10">
              <div class="text-xl font-bold mb-4">Scale</div>
              <p class="text-sm text-gray-500 leading-relaxed">Post-launch optimization, cloud scaling, and 24/7 support to maintain your competitive edge.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Values Section -->
      <div class="mb-32">
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.5em] mb-12 text-center">Core DNA</h4>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center p-8 bg-white dark:bg-white/5 rounded-[40px] border border-gray-100 dark:border-white/5 hover:bg-[#00ff88]/5 transition-all">
            <div class="text-4xl mb-6">💡</div>
            <div class="font-bold mb-2 text-lg">Innovation</div>
            <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">Push the boundaries.</p>
          </div>
          <div class="text-center p-8 bg-white dark:bg-white/5 rounded-[40px] border border-gray-100 dark:border-white/5 hover:bg-[#00ff88]/5 transition-all">
            <div class="text-4xl mb-6">🤝</div>
            <div class="font-bold mb-2 text-lg">Partnership</div>
            <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">Grow together.</p>
          </div>
          <div class="text-center p-8 bg-white dark:bg-white/5 rounded-[40px] border border-gray-100 dark:border-white/5 hover:bg-[#00ff88]/5 transition-all">
            <div class="text-4xl mb-6">⚡</div>
            <div class="font-bold mb-2 text-lg">Agility</div>
            <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">Iterate fast.</p>
          </div>
          <div class="text-center p-8 bg-white dark:bg-white/5 rounded-[40px] border border-gray-100 dark:border-white/5 hover:bg-[#00ff88]/5 transition-all">
            <div class="text-4xl mb-6">💎</div>
            <div class="font-bold mb-2 text-lg">Quality</div>
            <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">Zero Debt.</p>
          </div>
        </div>
      </div>

      <!-- Horizontal Scrolling Stats Cards -->
      <div class="horizontal-scroll-container overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-4" ref="scrollContainer">
        <div class="horizontal-scroll-content flex gap-6">
          <!-- Stat Card 1 -->
          <div class="flex-shrink-0 w-[240px] md:w-[300px] bg-white dark:bg-[#111] border border-gray-100 dark:border-[#1a1a1a] p-8 rounded-3xl hover:border-[#00ff88]/50 shadow-sm dark:shadow-none transition-all">
            <div class="text-5xl md:text-6xl font-bold text-[#00ff88] mb-4">40%</div>
            <div class="text-gray-500">Efficiency Boost</div>
            <p class="text-sm text-gray-400 mt-4 leading-relaxed">Average productivity increase for our enterprise clients after digital transformation.</p>
          </div>

          <!-- Stat Card 2 -->
          <div class="flex-shrink-0 w-[280px] md:w-[350px] bg-white dark:bg-[#111] border border-gray-100 dark:border-[#1a1a1a] p-8 rounded-3xl hover:border-[#00ff88]/50 shadow-sm dark:shadow-none transition-all">
            <div class="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">5.0</div>
            <div class="text-gray-500">Client Rating</div>
            <div class="flex gap-1 mt-4">
              <span v-for="i in 5" :key="i" class="text-[#00ff88]">★</span>
            </div>
          </div>

          <!-- Stat Card 3 -->
          <div class="flex-shrink-0 w-[280px] md:w-[350px] bg-white dark:bg-[#111] border border-gray-100 dark:border-[#1a1a1a] p-8 rounded-3xl hover:border-[#00ff88]/50 shadow-sm dark:shadow-none transition-all">
            <div class="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">800+</div>
            <div class="text-gray-400">Project Prototypes</div>
            <p class="text-sm text-gray-500 mt-4 leading-relaxed">Iterative designs crafted within our UX research labs last year.</p>
          </div>

          <!-- Stat Card 4 -->
          <div class="flex-shrink-0 w-[280px] md:w-[350px] bg-white dark:bg-[#111] border border-gray-100 dark:border-[#1a1a1a] p-8 rounded-3xl hover:border-[#00ff88]/50 shadow-sm dark:shadow-none transition-all">
            <div class="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">500+</div>
            <div class="text-gray-400">Live Projects</div>
            <p class="text-sm text-gray-500 mt-4 leading-relaxed">Stable, high-traffic platforms currently maintained by our DevOps team.</p>
          </div>

          <!-- Stat Card 5 -->
          <div class="flex-shrink-0 w-[280px] md:w-[350px] bg-gradient-to-br from-[#00ff88] to-[#00aa55] p-8 rounded-3xl shadow-lg">
            <div class="text-5xl md:text-6xl font-bold text-black mb-4">10K</div>
            <div class="text-black/70">Users Impacted</div>
            <p class="text-sm text-black/60 mt-4">Daily active users interacting with WebStack-built platforms.</p>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="flex justify-center gap-2 mt-8">
        <div v-for="i in 5" :key="i" 
             :class="['w-2 h-2 rounded-full transition-all', activeCard === i - 1 ? 'bg-[#00ff88] w-6' : 'bg-gray-600']">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollContainer = ref(null);
const scrollOffset = ref(0);
const activeCard = ref(0);

const handleScroll = () => {
  if (!scrollContainer.value) return;
  
  // Disable or subtle scroll on small screens
  const isMobile = window.innerWidth < 768;
  const intensity = isMobile ? 0.3 : 1;

  const rect = scrollContainer.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Calculate scroll progress through section
  const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  // Reverse direction and increase speed
  const maxOffset = -((5 - 1) * 310);
  scrollOffset.value = (0.5 - clampedProgress) * 2000 * intensity; // Extreme speed multiplier: 2000
  
  // Update active card indicator
  activeCard.value = Math.min(4, Math.floor(clampedProgress * 5));
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.horizontal-scroll-container {
  position: relative;
}
</style>
