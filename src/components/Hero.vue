<template>
  <section id="home" ref="target" class="bg-white dark:bg-[#050505] pt-12 pb-6 px-4 fade-in-section transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto relative bg-[#f9f9f9] dark:bg-[#0a0a0a] text-black dark:text-white rounded-[40px] overflow-hidden min-h-[90vh] flex flex-col justify-center p-8 md:p-20 transition-colors duration-300">
        
        <!-- Decorative Elements -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff88]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <!-- Content Wrapper -->
        <div class="overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8">
        <div class="will-change-transform transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <!-- Content Grid -->
          <div class="relative z-10 grid lg:grid-cols-2 gap-16 items-center min-w-max">
              <!-- Left: Heading & Content -->
              <div class="max-w-2xl">
                  <!-- Tagline -->
                  <div class="inline-flex items-center gap-2 bg-[#00ff88]/10 text-[#00ff88] px-4 py-2 rounded-full text-xs font-bold tracking-tighter mb-8 border border-[#00ff88]/20 animate-pulse">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
                    </span>
                    VOTED #1 DIGITAL COMMERCE AGENCY 2025
                  </div>

                  <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
                      Scale your<br>
                      <span class="text-[#00ff88]">vision.</span>
                  </h1>
                  
                  <p class="text-gray-400 text-xl md:text-2xl mb-10 max-w-lg leading-relaxed dark:text-gray-400">
                      We engineer high-performance digital products and immersive e-commerce ecosystems that drive measurable growth for global leaders.
                  </p>
   
                  <!-- Trusted By -->
                  <div class="pt-8 mb-12">
                      <p class="text-sm text-gray-400 mb-6 uppercase tracking-wider font-semibold opacity-50">Strategic Partners & Clients:</p>
                      <div class="flex flex-wrap gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 text-black dark:text-white">
                          <!-- IKEA -->
                          <svg class="h-6 md:h-8" viewBox="0 0 100 40" fill="currentColor">
                              <path d="M0,0 H100 V40 H0 Z" fill="#003399"/><ellipse cx="50" cy="20" rx="45" ry="18" fill="#FFCC00"/>
                              <path d="M15,12 H22 V28 H15 Z M25,12 H32 V20 L40,12 H48 L38,20 L48,28 H40 L32,20 V28 H25 Z M52,12 H68 V15 H59 V18 H66 V21 H59 V25 H68 V28 H52 Z M72,12 H80 L88,28 H80 L79,26 H73 L72,28 H64 Z M74,23 H78 L76,18 Z" fill="#003399"/>
                          </svg>
                          <!-- VW -->
                          <svg class="h-8 md:h-10" viewBox="0 0 100 100" fill="currentColor">
                              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="4"/>
                              <path d="M50,5 L35,45 L45,45 L50,30 L55,45 L65,45 Z M50,95 L30,55 L40,55 L50,75 L60,55 L70,55 Z" />
                          </svg>
                          <div class="text-2xl font-black italic tracking-tighter">OLX</div>
                          <div class="text-3xl font-bold text-[#00ff88] tracking-tighter">żabka</div>
                          <div class="text-2xl font-serif font-bold italic opacity-40">L'OREAL</div>
                      </div>
                      
                      <div class="pt-8 mt-8 border-t border-gray-200 dark:border-white/5 flex flex-wrap gap-12">
                        <div>
                          <div class="text-5xl font-black text-black dark:text-white mb-2 tracking-tighter">95%</div>
                          <div class="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Client retention</div>
                        </div>
                        <div>
                          <div class="text-5xl font-black text-[#00ff88] mb-2 tracking-tighter">24/7</div>
                          <div class="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Mission critical support</div>
                        </div>
                        <div>
                          <div class="text-5xl font-black text-black dark:text-white mb-2 tracking-tighter">12+</div>
                          <div class="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Years of expertise</div>
                        </div>
                      </div>
                  </div>
              </div>

              <!-- Right: Visual Elements -->
              <div class="relative flex justify-center lg:justify-end">
                  <div class="grid grid-cols-2 gap-4 w-full max-w-md relative z-10">
                      <div class="bg-white dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                          <div class="w-14 h-14 bg-[#00ff88]/10 rounded-2xl flex items-center justify-center mb-6">
                              <svg class="w-8 h-8 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                          </div>
                          <div class="text-xl font-bold mb-2">Rapid Scale</div>
                          <div class="text-xs text-gray-500 leading-relaxed">Proprietary frameworks for 10x faster market entry.</div>
                      </div>
                      <div class="bg-white dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5 shadow-2xl transform rotate-3 translate-y-12 hover:rotate-0 transition-transform cursor-pointer">
                          <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                              <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                          </div>
                          <div class="text-xl font-bold mb-2">Zero Trust</div>
                          <div class="text-xs text-gray-500 leading-relaxed">Enterprise-grade security baked into every component.</div>
                      </div>
                      <div class="col-span-2 bg-gradient-to-br from-[#00ff88] to-[#00aa55] p-10 rounded-[50px] text-black shadow-2xl mt-8 hover:scale-105 transition-transform cursor-pointer relative overflow-hidden group">
                          <div class="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform"></div>
                          <div class="flex justify-between items-start mb-10">
                              <div class="text-xs font-bold uppercase tracking-widest opacity-80">Next Gen Platform</div>
                              <div class="bg-black/20 px-4 py-1 rounded-full text-[10px] font-bold backdrop-blur-md italic">DEPLOYING...</div>
                          </div>
                          <div class="text-4xl font-bold leading-none mb-6 tracking-tighter">Your partner for the digital future.</div>
                          <div class="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all">
                              START A CONVERSATION <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                          </div>
                      </div>
                  </div>
                  <!-- Background Elements -->
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#00ff88]/5 rounded-full pointer-events-none"></div>
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#00ff88]/10 rounded-full animate-spin-slow pointer-events-none"></div>
                  <div class="absolute -top-20 -right-20 w-80 h-80 bg-[#00ff88]/10 blur-[100px] rounded-full"></div>
                  <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full"></div>
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
