<template>
  <section id="testimonials" class="relative bg-white dark:bg-[#050505] py-24 overflow-hidden transition-colors duration-300">
    <div class="container mx-auto px-4 md:px-16" ref="target">
        
        <!-- Animated Content Wrapper -->
        <div class="overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8">
        <div class="will-change-transform transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" :style="{ transform: `translateX(${translateX}px)` }">
          <!-- Header -->
          <div class="mb-20 max-w-3xl">
            <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-black dark:text-white leading-[1.1]">
              Check our <span class="text-[#00ff88]">clients' words</span>
            </h2>
          </div>
  
          <!-- Testimonial Cards -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              <!-- Testimonial 1 -->
              <div class="bg-[#f9f9f9] dark:bg-[#0a0a0a] rounded-[40px] p-10 border border-gray-100 dark:border-white/5 transition-all hover:bg-white dark:hover:bg-white/5">
                 <div class="flex items-center gap-6 mb-8">
                   <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop" class="w-14 h-14 rounded-full object-cover grayscale" alt="Client">
                   <div>
                     <div class="text-lg font-bold text-black dark:text-white leading-tight">Sarah Greiner</div>
                     <div class="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Innovation, MERCK</div>
                   </div>
                 </div>
                 <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed italic">
                   "WebStack delivered excellence and speed. Their expertise in headless digital commerce is second to none."
                 </p>
              </div>
  
              <!-- Testimonial 2 -->
              <div class="bg-[#f9f9f9] dark:bg-[#0a0a0a] rounded-[40px] p-10 border border-gray-100 dark:border-white/5 transition-all hover:bg-white dark:hover:bg-white/5">
                 <div class="flex items-center gap-6 mb-8">
                   <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" class="w-14 h-14 rounded-full object-cover grayscale" alt="Client">
                   <div>
                     <div class="text-lg font-bold text-black dark:text-white leading-tight">Mark Greiner</div>
                     <div class="text-[10px] text-gray-500 uppercase tracking-widest font-bold">CTO, Keller Williams</div>
                   </div>
                 </div>
                 <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed italic">
                   "Crucial partner for our global expansion. Their team integrated seamlessly and provided tech leadership."
                 </p>
              </div>

              <!-- Testimonial 3 -->
              <div class="bg-[#f9f9f9] dark:bg-[#0a0a0a] rounded-[40px] p-10 border border-gray-100 dark:border-white/5 transition-all hover:bg-white dark:hover:bg-white/5">
                 <div class="flex items-center gap-6 mb-8">
                   <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" class="w-14 h-14 rounded-full object-cover grayscale" alt="Client">
                   <div>
                     <div class="text-lg font-bold text-black dark:text-white leading-tight">Daniel Klein</div>
                     <div class="text-[10px] text-gray-500 uppercase tracking-widest font-bold">CTO, LogisticsAI</div>
                   </div>
                 </div>
                 <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed italic">
                   "Their AI implementation saved us thousands in operational costs and reduced latency by 60%."
                 </p>
              </div>

              <!-- Testimonial 4 (Highlight) -->
              <div class="p-10 bg-[#00ff88] rounded-[50px] border border-gray-100 dark:border-white/5 lg:col-span-3 flex flex-col md:flex-row items-center gap-10">
                 <div class="text-4xl font-black text-black italic tracking-tighter max-w-xl">"WebStack didn't just meet our expectations; they defined the new industry standard for high-performance commerce."</div>
                 <div class="flex items-center gap-4 shrink-0">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" class="w-20 h-20 rounded-[30px] object-cover grayscale brightness-50 contrast-150" alt="Client">
                    <div>
                        <div class="font-black text-black text-xl italic tracking-tighter">Igor Vucinic</div>
                        <div class="text-[10px] font-bold text-black opacity-60 uppercase tracking-widest">VP Engineering, IKEA</div>
                    </div>
                 </div>
              </div>
          </div>
  
          <!-- Why WebStack Section -->
          <div class="relative bg-black dark:bg-[#111] rounded-[50px] overflow-hidden p-8 md:p-20 text-white min-h-[60vh] flex flex-col justify-center">
              <!-- Background Image Blur -->
              <div class="absolute inset-0 opacity-30">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&fit=crop" class="w-full h-full object-cover blur-sm" alt="Tech Background">
              </div>
              
              <div class="relative z-10 max-w-3xl">
                <h3 class="text-4xl md:text-6xl font-bold mb-12 leading-tight">
                  Why <span class="text-[#00ff88]">WebStack?</span><br>
                  Why <span class="text-[#00ff88]">WebStack?</span>
                </h3>
                
                <p class="text-gray-300 text-xl md:text-2xl mb-16 leading-relaxed">
                  With a worldwide footprint, record-high NPS, and end-to-end services, we are your one-stop shop for digital product talent.
                </p>
  
                <div class="flex flex-wrap gap-12 md:gap-24">
                  <div>
                    <div class="text-5xl md:text-7xl font-bold mb-2">17+</div>
                    <div class="text-gray-400 uppercase tracking-widest text-sm">Years on market</div>
                  </div>
                  <div>
                    <div class="text-5xl md:text-7xl font-bold mb-2">400+</div>
                    <div class="text-gray-400 uppercase tracking-widest text-sm">People on board</div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const target = ref(null);
const translateX = ref(0);
</script>
