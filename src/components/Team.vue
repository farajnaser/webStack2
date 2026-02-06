<template>
  <section id="team" ref="target" class="bg-white dark:bg-[#050505] py-8 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto px-6 md:px-16">
      
      <!-- Animated Content Wrapper -->
      <div class="overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8">
      <div class="will-change-transform transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" :style="{ transform: `translateX(${translateX}px)` }">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 class="text-4xl md:text-6xl font-black text-black dark:text-white leading-[1.1]">
            Global digital<br>product <span class="text-[#00ff88]">talents</span>
          </h2>
          <div class="flex flex-col gap-4">
            <div class="text-5xl font-black text-black dark:text-white">400+</div>
            <div class="text-gray-500 uppercase tracking-widest text-xs font-bold">People on board</div>
          </div>
        </div>
  
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <!-- Team Member Loop -->
          <div v-for="member in teamMembers" :key="member.name" class="group relative aspect-[3/4] rounded-[30px] overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-[#00ff88]/50 transition-all">
             <img :src="member.image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" :alt="member.name">
             <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div class="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <div class="bg-white/90 dark:bg-black/90 backdrop-blur-md p-3 rounded-xl">
                   <div class="font-bold text-black dark:text-white text-xs">{{ member.name }}</div>
                   <div class="text-[9px] text-[#00ff88] font-bold uppercase tracking-widest">{{ member.role }}</div>
                </div>
             </div>
          </div>
  
          <!-- Hiring Card -->
          <div class="group relative aspect-[3/4] rounded-[30px] overflow-hidden bg-gray-100 dark:bg-white/5 border-2 border-dashed border-[#00ff88]/30 flex items-center justify-center hover:bg-[#00ff88]/5 transition-all">
             <div class="text-center p-6">
                <div class="text-3xl text-[#00ff88] mb-1">+</div>
                <div class="text-xs font-black text-black dark:text-white uppercase tracking-tighter italic">Join Us</div>
                <p class="text-[8px] text-gray-500 mt-1 uppercase tracking-widest">Global Roles</p>
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

const teamMembers = ref([
  {
    name: 'Tamer Mohammed',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=500&fit=crop'
  },
  {
    name: 'Mojtaba Ahmed',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=500&fit=crop'
  },
  {
    name: 'Faraj Rm',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=500&fit=crop'
  },
  {
    name: 'Sofia Berg',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop'
  },
  {
    name: 'Marcus Chen',
    role: 'Engineering Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
  },
  {
    name: 'Elena Rossi',
    role: 'Product Strategy',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'
  },
  {
    name: 'James Wilson',
    role: 'Security Ops',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop'
  },
  {
    name: 'Aria Gupta',
    role: 'R&D Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop'
  },
  {
    name: 'David Kim',
    role: 'Growth Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
  }
]);

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
