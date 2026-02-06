<template>
  <section id="pricing" ref="target" class="py-6 px-4 text-black dark:text-white fade-in-section bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto relative bg-[#f9f9f9] dark:bg-[#0a0a0a] text-black dark:text-white rounded-[40px] overflow-hidden min-h-[85vh] flex flex-col justify-between p-8 md:p-16 transition-colors duration-300">
      
      <div class="w-full">
        
        <div class="flex flex-col lg:flex-row justify-between items-end mb-16 gap-12">
          <div class="max-w-2xl">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-3 h-3 bg-[#00ff88] rounded-full"></div>
              <h2 class="text-base font-semibold text-gray-400">Our Pricing</h2>
            </div>
            <h2 class="text-4xl md:text-6xl font-black text-black dark:text-white leading-[1.1] mb-8">
              Choose the right <span class="text-[#00ff88]">speed</span> for growth
            </h2>
          </div>
          <div class="flex bg-gray-100 dark:bg-white/5 p-1 rounded-2xl border border-gray-200 dark:border-white/10">
            <button @click="isYearly = false" :class="['px-8 py-3 rounded-xl font-bold transition-all', !isYearly ? 'bg-white dark:bg-white/10 text-black dark:text-white shadow-sm' : 'text-gray-400 hover:text-black dark:hover:text-white']">Monthly</button>
            <button @click="isYearly = true" :class="['px-8 py-3 rounded-xl font-bold transition-all', isYearly ? 'bg-white dark:bg-white/10 text-black dark:text-white shadow-sm' : 'text-gray-400 hover:text-black dark:hover:text-white']">Yearly</button>
          </div>
        </div>
   
        <div class="overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8">
        <div class="will-change-transform transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] min-w-max" :style="{ transform: `translateX(${translateX}px)` }">
        <div class="flex gap-8">
          <!-- Base Plan -->
          <div class="p-12 bg-white dark:bg-[#0a0a0a] rounded-[50px] border border-gray-100 dark:border-white/5 flex flex-col items-start gap-10 hover:border-[#00ff88]/50 shadow-sm dark:shadow-none transition-all group relative overflow-hidden">
             <div class="absolute top-0 right-0 w-24 h-24 bg-gray-50 dark:bg-white/5 -translate-y-12 translate-x-12 rounded-full"></div>
             <div class="relative z-10 w-full">
               <div class="text-[10px] font-bold text-[#00ff88] uppercase tracking-[0.3em] mb-4">Phase 01 / Starter</div>
               <div class="text-6xl font-black text-black dark:text-white mb-2 tracking-tighter">${{ isYearly ? '1,900' : '2,400' }}<span class="text-sm font-normal text-gray-500 tracking-normal">/Month</span></div>
               <p class="text-gray-500 text-sm leading-relaxed mb-8">Perfect for MVP development and early-stage validation.</p>
               
               <ul class="flex flex-col gap-5 w-full border-t border-gray-100 dark:border-white/5 pt-10">
                 <li class="flex items-center gap-3 text-sm text-black dark:text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88]/10 rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   1 Senior Product Developer
                 </li>
                 <li class="flex items-center gap-3 text-sm text-black dark:text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88]/10 rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   Weekly Strategic Syncs
                 </li>
                 <li class="flex items-center gap-3 text-sm text-black dark:text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88]/10 rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   Slack Support (4h Response)
                 </li>
                 <li class="flex items-center gap-3 text-sm text-gray-400">
                    <svg class="w-5 h-5 text-gray-200 dark:text-white/5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    Dedicated UI/UX Design
                 </li>
               </ul>
             </div>
             <a href="#contact" class="w-full py-6 text-center bg-black dark:bg-white text-white dark:text-black rounded-full font-bold group-hover:bg-[#00ff88] group-hover:text-black transition-all text-xs tracking-widest">START BUILDING</a>
          </div>
   
          <!-- Growth Plan (Featured) -->
          <div class="p-12 bg-black dark:bg-[#111] rounded-[60px] border-4 border-[#00ff88] flex flex-col items-start gap-10 relative overflow-hidden group shadow-2xl scale-105 z-20">
             <div class="absolute top-8 right-8 bg-[#00ff88] text-black text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">HIGH GROWTH</div>
             <div class="relative z-10 w-full">
               <div class="text-[10px] font-bold text-[#00ff88] uppercase tracking-[0.3em] mb-4">Phase 02 / Professional</div>
               <div class="text-6xl font-black text-white mb-2 tracking-tighter">${{ isYearly ? '4,600' : '5,800' }}<span class="text-sm font-normal text-gray-400 tracking-normal">/Month</span></div>
               <p class="text-gray-400 text-sm leading-relaxed mb-8">Scale your product with a full-stack dedicated team.</p>
               
               <ul class="flex flex-col gap-5 w-full border-t border-white/10 pt-10">
                 <li class="flex items-center gap-3 text-sm text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88] rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   2 Senior Product Developers
                 </li>
                 <li class="flex items-center gap-3 text-sm text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88] rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   1 Dedicated UI/UX Lead
                 </li>
                 <li class="flex items-center gap-3 text-sm text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88] rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   Daily Agile Standups
                 </li>
                 <li class="flex items-center gap-3 text-sm text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88] rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   Priority Slack (1h Response)
                 </li>
               </ul>
             </div>
             <a href="#contact" class="w-full py-6 text-center bg-[#00ff88] text-black rounded-full font-black hover:scale-[1.02] transition-all text-xs tracking-widest shadow-xl shadow-[#00ff88]/20">ACCELERATE NOW</a>
          </div>
   
          <!-- Scale Plan -->
          <div class="p-12 bg-white dark:bg-[#0a0a0a] rounded-[50px] border border-gray-100 dark:border-white/5 flex flex-col items-start gap-10 hover:border-[#00ff88]/50 shadow-sm dark:shadow-none transition-all group relative overflow-hidden">
             <div class="absolute top-0 right-0 w-24 h-24 bg-gray-50 dark:bg-white/5 -translate-y-12 translate-x-12 rounded-full"></div>
             <div class="relative z-10 w-full">
               <div class="text-[10px] font-bold text-[#00ff88] uppercase tracking-[0.3em] mb-4">Phase 03 / Enterprise</div>
               <div class="text-6xl font-black text-black dark:text-white mb-2 tracking-tighter">${{ isYearly ? '9,600' : '12k' }}<span class="text-sm font-normal text-gray-500 tracking-normal">/Month</span></div>
               <p class="text-gray-500 text-sm leading-relaxed mb-8">Maximum performance with an integrated full-service squad.</p>
               
               <ul class="flex flex-col gap-5 w-full border-t border-gray-100 dark:border-white/5 pt-10">
                 <li class="flex items-center gap-3 text-sm text-black dark:text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88]/10 rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   Full Product Squad (4+ Seats)
                 </li>
                 <li class="flex items-center gap-3 text-sm text-black dark:text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88]/10 rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   Fractional CTO Advisory
                 </li>
                 <li class="flex items-center gap-3 text-sm text-black dark:text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88]/10 rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   DevOps & Security Audit
                 </li>
                 <li class="flex items-center gap-3 text-sm text-black dark:text-white font-medium">
                   <div class="w-5 h-5 bg-[#00ff88]/10 rounded-full flex items-center justify-center shrink-0">
                     <svg class="w-3 h-3 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   24/7 Priority Hotline
                 </li>
               </ul>
             </div>
             <a href="#contact" class="w-full py-6 text-center bg-black dark:bg-white text-white dark:text-black rounded-full font-bold group-hover:bg-[#00ff88] group-hover:text-black transition-all text-xs tracking-widest">DOMINATE MARKET</a>
          </div>
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
const isYearly = ref(false);

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
