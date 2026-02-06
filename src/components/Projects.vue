<template>
  <section id="projects" class="relative bg-white dark:bg-[#050505] py-8 overflow-hidden transition-colors duration-300">
    <div class="container mx-auto px-4 md:px-16" ref="target">
        
        <!-- Header -->
        <div class="mb-20">
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold text-black dark:text-white leading-[1.1]">
            Our latest <span class="text-[#00ff88]">impact</span>
          </h2>
        </div>

        <!-- Horizontal Scroll Wrapper -->
        <div class="overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8">
          <div class="will-change-transform transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" :style="{ transform: `translateX(${translateX}px)` }">
          <div class="flex gap-10 w-max pr-32">
              <!-- Project 1 -->
              <div class="w-[240px] md:w-[320px] group cursor-pointer flex-shrink-0">
                <div class="relative aspect-[4/5] rounded-[50px] overflow-hidden mb-8 bg-gray-100 dark:bg-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=800&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Project">
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div class="absolute bottom-8 left-8 right-8">
                     <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">Shopify Plus</span>
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">Next.js</span>
                     </div>
                     <div class="text-2xl font-black text-white italic tracking-tighter leading-none mb-2">Global Retail</div>
                     <div class="text-[10px] text-[#00ff88] font-bold uppercase tracking-widest flex items-center gap-2">
                        <span class="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span>
                        +40% Digital Growth
                     </div>
                  </div>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors pr-4">
                  End-to-end commerce transformation for a Fortune 500 retailer, engineering a high-speed headless storefront.
                </p>
              </div>

              <!-- Project 2 -->
              <div class="w-[280px] md:w-[380px] group cursor-pointer flex-shrink-0">
                <div class="relative aspect-[4/5] rounded-[50px] overflow-hidden mb-8 bg-gray-100 dark:bg-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=800&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Project">
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div class="absolute bottom-8 left-8 right-8">
                     <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">BigCommerce</span>
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">Node.js</span>
                     </div>
                     <div class="text-2xl font-black text-white italic tracking-tighter leading-none mb-2">Heavy Machinery</div>
                     <div class="text-[10px] text-[#00ff88] font-bold uppercase tracking-widest flex items-center gap-2">
                        <span class="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span>
                        15+ Countries Launch
                     </div>
                  </div>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors pr-4">
                  Scaling a complex B2B marketplace across EMEA, managing over 500k active SKUs with sub-second response times.
                </p>
              </div>

              <!-- Project 3 -->
              <div class="w-[280px] md:w-[380px] group cursor-pointer flex-shrink-0">
                <div class="relative aspect-[4/5] rounded-[50px] overflow-hidden mb-8 bg-gray-100 dark:bg-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Project">
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div class="absolute bottom-8 left-8 right-8">
                     <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">React</span>
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">Python</span>
                     </div>
                     <div class="text-2xl font-black text-white italic tracking-tighter leading-none mb-2">Fintech Core</div>
                     <div class="text-[10px] text-[#00ff88] font-bold uppercase tracking-widest flex items-center gap-2">
                        <span class="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span>
                        99.99% Core Uptime
                     </div>
                  </div>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors pr-4">
                  Redesigning a high-security banking ecosystem into a sleek, modular digital experience with real-time settlement.
                </p>
              </div>

              <!-- Project 4 -->
              <div class="w-[280px] md:w-[380px] group cursor-pointer flex-shrink-0">
                <div class="relative aspect-[4/5] rounded-[50px] overflow-hidden mb-8 bg-gray-100 dark:bg-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1576091160550-2173599211d0?w=600&h=800&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Project">
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div class="absolute bottom-8 left-8 right-8">
                     <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">WebRTC</span>
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">AWS</span>
                     </div>
                     <div class="text-2xl font-black text-white italic tracking-tighter leading-none mb-2">Telehealth</div>
                     <div class="text-[10px] text-[#00ff88] font-bold uppercase tracking-widest flex items-center gap-2">
                        <span class="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span>
                        1M+ Consultations
                     </div>
                  </div>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors pr-4">
                  Zero-latency patient management with integrated HIPAA-compliant video consultations and predictive diagnostics.
                </p>
              </div>

              <!-- Project 5 -->
              <div class="w-[280px] md:w-[380px] group cursor-pointer flex-shrink-0">
                <div class="relative aspect-[4/5] rounded-[50px] overflow-hidden mb-8 bg-gray-100 dark:bg-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Project">
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div class="absolute bottom-8 left-8 right-8">
                     <div class="flex gap-2 mb-4">
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">TensorFlow</span>
                        <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold text-white uppercase tracking-widest">Go</span>
                     </div>
                     <div class="text-2xl font-black text-white italic tracking-tighter leading-none mb-2">Supply AI</div>
                     <div class="text-[10px] text-[#00ff88] font-bold uppercase tracking-widest flex items-center gap-2">
                        <span class="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span>
                        -15% Fuel Costs
                     </div>
                  </div>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors pr-4">
                  Optimizing global logistics routes using real-time machine learning, handling 50k+ freight events daily.
                </p>
              </div>
          </div>
          </div>
        </div>

        <!-- View all projects -->
        <div class="mt-20 text-center">
          <a href="#projects" class="inline-flex items-center gap-4 text-[#00ff88] font-bold text-xl hover:gap-6 transition-all">
            Explore all cases <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
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
