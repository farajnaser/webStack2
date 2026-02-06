<template>
  <section id="services" ref="target" class="relative bg-white dark:bg-[#050505] py-8 overflow-hidden transition-colors duration-300">
    <!-- Abstract Decorative Shapes -->
    <div class="absolute top-1/4 -left-24 w-96 h-96 bg-[#00ff88]/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-1/4 -right-24 w-80 h-80 bg-[#00cc6a]/10 blur-[90px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-16 relative z-10">
        <!-- Header -->
        <div class="mb-20 max-w-3xl">
            <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-black dark:text-white leading-[1.1]">
                Leverage full <span class="text-[#00ff88]">digital<br>commerce expertise</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                Whether you want to consult an idea, add missing capabilities, quickly expand your team, or hand over a project – we've got you covered.
            </p>
        </div>

        <!-- Horizontal Scroll Wrapper -->
        <div class="overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8">
        <div class="will-change-transform transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" :style="{ transform: `translateX(${translateX}px)` }">
          <div class="flex gap-8 lg:gap-16 w-max pr-32">
              <!-- 01 Strategy -->
              <div class="w-[280px] md:w-[380px] group flex-shrink-0 bg-white dark:bg-white/5 p-10 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
                  <div class="flex items-start justify-between mb-8">
                    <span class="text-[#00ff88] font-bold text-lg font-mono tracking-tighter italic">01</span>
                    <div class="w-12 h-12 bg-[#00ff88]/10 rounded-2xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                  </div>
                  <h3 class="text-3xl font-bold text-black dark:text-white mb-6">Strategy</h3>
                  <ul class="text-gray-500 dark:text-gray-400 text-sm space-y-3 mb-10">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div> Market Research & Audit
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div> Product Technical Roadmap
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div> Business Process Analysis
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div> ROI Projection & KPIs
                    </li>
                  </ul>
                  <div class="h-1 bg-gray-100 dark:bg-white/5 w-full relative overflow-hidden rounded-full">
                    <div class="absolute inset-0 bg-[#00ff88] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
              </div>

              <!-- 02 Design -->
              <div class="w-[280px] md:w-[380px] group flex-shrink-0 bg-white dark:bg-white/5 p-10 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
                  <div class="flex items-start justify-between mb-8">
                    <span class="text-[#00ff88] font-bold text-lg font-mono tracking-tighter italic">02</span>
                    <div class="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    </div>
                  </div>
                  <h3 class="text-3xl font-bold text-black dark:text-white mb-6">Design</h3>
                  <ul class="text-gray-500 dark:text-gray-400 text-sm space-y-3 mb-10">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Immersive UX Research
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Prototyping & Testing
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Atomic Design Systems
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Multi-platform UI Design
                    </li>
                  </ul>
                  <div class="h-1 bg-gray-100 dark:bg-white/5 w-full relative overflow-hidden rounded-full">
                    <div class="absolute inset-0 bg-blue-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
              </div>

              <!-- 03 Engineering -->
              <div class="w-[280px] md:w-[380px] group flex-shrink-0 bg-white dark:bg-white/5 p-10 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
                  <div class="flex items-start justify-between mb-8">
                    <span class="text-[#00ff88] font-bold text-lg font-mono tracking-tighter italic">03</span>
                    <div class="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-4m0 0l4 4m-4-4V4"></path></svg>
                    </div>
                  </div>
                  <h3 class="text-3xl font-bold text-black dark:text-white mb-6">Engineering</h3>
                  <ul class="text-gray-500 dark:text-gray-400 text-sm space-y-3 mb-10">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Scalable Headless Ops
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Cloud AWS/GCP Infrastructure
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> AI & ML Integration
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Zero-Debt Codebase
                    </li>
                  </ul>
                  <div class="h-1 bg-gray-100 dark:bg-white/5 w-full relative overflow-hidden rounded-full">
                    <div class="absolute inset-0 bg-purple-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
              </div>

              <!-- 04 Marketing -->
              <div class="w-[280px] md:w-[380px] group flex-shrink-0 bg-white dark:bg-white/5 p-10 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
                  <div class="flex items-start justify-between mb-8">
                    <span class="text-[#00ff88] font-bold text-lg font-mono tracking-tighter italic">04</span>
                    <div class="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                    </div>
                  </div>
                  <h3 class="text-3xl font-bold text-black dark:text-white mb-6">Marketing</h3>
                  <ul class="text-gray-500 dark:text-gray-400 text-sm space-y-3 mb-10">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> SEO & Performance Growth
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Automated CRM Funnels
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Strategic AD Ops
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Conversion Optimization
                    </li>
                  </ul>
                  <div class="h-1 bg-gray-100 dark:bg-white/5 w-full relative overflow-hidden rounded-full">
                    <div class="absolute inset-0 bg-orange-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
              </div>

              <!-- 05 Support -->
              <div class="w-[280px] md:w-[380px] group flex-shrink-0 bg-white dark:bg-white/5 p-10 rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
                  <div class="flex items-start justify-between mb-8">
                    <span class="text-[#00ff88] font-bold text-lg font-mono tracking-tighter italic">05</span>
                    <div class="w-12 h-12 bg-[#00ff88]/10 rounded-2xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                  </div>
                  <h3 class="text-3xl font-bold text-black dark:text-white mb-6">Support</h3>
                  <ul class="text-gray-500 dark:text-gray-400 text-sm space-y-3 mb-10">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div> 24/7 Crisis Response
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div> Proactive Security Patching
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div> Feature Roadmap Support
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div> Performance Monitoring
                    </li>
                  </ul>
                  <div class="h-1 bg-gray-100 dark:bg-white/5 w-full relative overflow-hidden rounded-full">
                    <div class="absolute inset-0 bg-[#00ff88] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
              </div>
          </div>
        </div>
        </div>

        <!-- Extra CTA -->
        <div class="mt-24 pt-12 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div class="text-center md:text-left">
             <div class="text-4xl md:text-6xl font-black text-black dark:text-white mb-2">17+</div>
             <div class="text-sm text-gray-400 uppercase tracking-[0.2em]">Years on market</div>
           </div>
           <div class="text-center md:text-left">
             <div class="text-4xl md:text-6xl font-black text-black dark:text-white mb-2">400+</div>
             <div class="text-sm text-gray-400 uppercase tracking-[0.2em]">People on board</div>
           </div>
           <a href="#insights" class="px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-all text-lg">
             Explore insights →
           </a>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const target = ref(null);
const translateX = ref(0);
</script>
