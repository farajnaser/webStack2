<template>
  <section id="insights" ref="target" class="bg-white dark:bg-[#050505] py-8 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto px-6 md:px-16">
      
      <!-- Animated Content Wrapper -->
      <!-- Animated Content Wrapper -->
      <div class="w-full">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold text-black dark:text-white leading-[1.1]">
            Explore <span class="text-[#00ff88]">insights</span>
          </h2>
          <a href="#insights" class="text-[#00ff88] font-bold text-lg hover:underline underline-offset-8">View all insights →</a>
        </div>
  
        <div class="overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8">
        <div class="will-change-transform transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] min-w-max" :style="{ transform: `translateX(${translateX}px)` }">
        <div class="flex gap-8">
          <!-- Insight Card 1 -->
          <article class="w-[300px] md:w-[400px] flex-shrink-0 group cursor-pointer bg-white dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
            <div class="relative aspect-[16/10] rounded-[30px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Insight">
              <div class="absolute top-4 left-4 bg-[#00ff88] px-3 py-1 rounded-full text-[8px] font-black text-black uppercase tracking-widest">AI & Commerce</div>
            </div>
            <h3 class="text-xl font-black text-black dark:text-white group-hover:text-[#00ff88] transition-colors mb-4 leading-tight italic tracking-tighter">
              AI Personalization in Modern Retail
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
              How the top 1% of retailers are utilizing predictive LLMs to double checkout conversion rates.
            </p>
          </article>
  
          <!-- Insight Card 2 -->
          <article class="w-[300px] md:w-[400px] flex-shrink-0 group cursor-pointer bg-white dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
            <div class="relative aspect-[16/10] rounded-[30px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Insight">
              <div class="absolute top-4 left-4 bg-[#00ff88] px-3 py-1 rounded-full text-[8px] font-black text-black uppercase tracking-widest">Strategy</div>
            </div>
            <h3 class="text-xl font-black text-black dark:text-white group-hover:text-[#00ff88] transition-colors mb-4 leading-tight italic tracking-tighter">
              B2B Marketplace Scaling Guide
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
              From infrastructure bottlenecks to global liquidity, a step-by-step roadmap to $1B GMV.
            </p>
          </article>
  
          <!-- Insight Card 3 -->
          <article class="w-[300px] md:w-[400px] flex-shrink-0 group cursor-pointer bg-white dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
            <div class="relative aspect-[16/10] rounded-[30px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Insight">
              <div class="absolute top-4 left-4 bg-[#00ff88] px-3 py-1 rounded-full text-[8px] font-black text-black uppercase tracking-widest">Engineering</div>
            </div>
            <h3 class="text-xl font-black text-black dark:text-white group-hover:text-[#00ff88] transition-colors mb-4 leading-tight italic tracking-tighter">
              The Headless Architecture Shift
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
              Why decoupling your stack is no longer an option, but a survival necessity in 2026.
            </p>
          </article>

          <!-- Insight Card 4 -->
          <article class="w-[300px] md:w-[400px] flex-shrink-0 group cursor-pointer bg-white dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
            <div class="relative aspect-[16/10] rounded-[30px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Insight">
              <div class="absolute top-4 left-4 bg-[#00ff88] px-3 py-1 rounded-full text-[8px] font-black text-black uppercase tracking-widest">UX/UI</div>
            </div>
            <h3 class="text-xl font-black text-black dark:text-white group-hover:text-[#00ff88] transition-colors mb-4 leading-tight italic tracking-tighter">
              Emotional Design in App Dev
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
              Utilizing micro-interactions and psychological triggers to build sticky user habits.
            </p>
          </article>

          <!-- Insight Card 5 -->
          <article class="w-[300px] md:w-[400px] flex-shrink-0 group cursor-pointer bg-white dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
            <div class="relative aspect-[16/10] rounded-[30px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Insight">
              <div class="absolute top-4 left-4 bg-[#00ff88] px-3 py-1 rounded-full text-[8px] font-black text-black uppercase tracking-widest">Cloud</div>
            </div>
            <h3 class="text-xl font-black text-black dark:text-white group-hover:text-[#00ff88] transition-colors mb-4 leading-tight italic tracking-tighter">
              Edge Computing for Commerce
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
              Reducing global latency to sub-20ms with distributed edge workers and static generation.
            </p>
          </article>

          <!-- Insight Card 6 -->
          <article class="w-[300px] md:w-[400px] flex-shrink-0 group cursor-pointer bg-white dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
            <div class="relative aspect-[16/10] rounded-[30px] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Insight">
              <div class="absolute top-4 left-4 bg-[#00ff88] px-3 py-1 rounded-full text-[8px] font-black text-black uppercase tracking-widest">Growth</div>
            </div>
            <h3 class="text-xl font-black text-black dark:text-white group-hover:text-[#00ff88] transition-colors mb-4 leading-tight italic tracking-tighter">
              Retention vs Acquisition in 2026
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
              The data-driven shift toward LTV-first marketing strategies in the digital era.
            </p>
          </article>
        </div>
      </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const target = ref(null);
const translateX = ref(0);

const handleScroll = () => {
    if (!target.value) return;

    // Disable or subtle scroll on small screens
    const isMobile = window.innerWidth < 768;
    const intensity = isMobile ? 0.3 : 1;

    const rect = target.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
    const clampedProgress = Math.max(0, Math.min(1, progress));
    
    translateX.value = (0.5 - clampedProgress) * 1500 * intensity;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
