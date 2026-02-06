<template>
  <section id="faq" ref="target" class="py-6 px-4 bg-white dark:bg-[#050505] fade-in-section transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto bg-[#f9f9f9] dark:bg-[#0a0a0a] rounded-[40px] p-8 md:p-16 transition-colors duration-300">
      
      <!-- Animated Content Wrapper -->
      <div class="overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing pb-8">
      <div class="w-full will-change-transform transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] min-w-max" :style="{ transform: `translateX(${translateX}px)` }">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h2 class="text-4xl md:text-5xl font-bold text-black dark:text-white">
            <span class="text-[#00ff88]">Questions</span>
          </h2>
          <div class="hidden md:flex items-center gap-2">
            <div class="w-3 h-3 bg-[#00ff88] rounded-full"></div>
            <span class="text-gray-400 text-sm font-medium">FAQ</span>
          </div>
        </div>
  
        <!-- FAQ List -->
        <div class="max-w-4xl mx-auto space-y-0">
          <div 
            v-for="(faq, index) in faqs" 
            :key="faq.id"
            :class="[
              'border-t border-[#1a1a1a] py-8 transition-all',
              index === faqs.length - 1 ? 'border-b' : ''
            ]"
          >
            <!-- Question Header -->
            <div 
              class="flex items-start justify-between cursor-pointer gap-8 group"
              @click="toggleFaq(faq.id)"
            >
              <div class="flex items-start gap-6 grow">
                <span class="text-lg font-medium text-[#00ff88] shrink-0">
                  ({{ String(index + 1).padStart(2, '0') }})
                </span>
                <h3 class="text-xl md:text-2xl font-semibold text-black dark:text-white leading-tight group-hover:text-[#00ff88] transition-colors">
                  {{ faq.question }}
                </h3>
              </div>
              
              <!-- Toggle Icon -->
              <button 
                :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all',
                  expandedFaq === faq.id ? 'bg-[#00ff88] text-black' : 'bg-[#111] border border-[#1a1a1a] text-white hover:border-[#00ff88]'
                ]"
              >
                <span class="text-xl font-bold">{{ expandedFaq === faq.id ? '−' : '+' }}</span>
              </button>
            </div>
  
            <!-- Answer -->
            <transition name="expand">
              <div v-if="expandedFaq === faq.id" class="mt-6 ml-0 md:ml-[72px]">
                <p class="text-gray-400 leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </transition>
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
const expandedFaq = ref(1);

const faqs = [
  {
    id: 1,
    question: 'What is the average timeline for an end-to-end commerce build?',
    answer: 'Our high-velocity squads typically deliver a production-ready MVP in 3-5 weeks. For complex enterprise migrations, timelines range from 8-12 weeks, inclusive of full data portability and QA.'
  },
  {
    id: 2,
    question: 'How do you handle high-traffic scalability and peak loads?',
    answer: 'We utilize edge-optimized architectures (AWS/Cloudflare) and serverless backends to ensure 99.99% uptime. Our systems are load-tested to handle 10x projected peak traffic with zero latency spikes.'
  },
  {
    id: 3,
    question: 'Can you integrate with existing legacy ERP or CRM systems?',
    answer: 'Absolutely. We specialize in building secure API bridges for legacy stacks. Whether it is SAP, Salesforce, or custom internal databases, we ensure seamless data synchronization.'
  },
  {
    id: 4,
    question: 'Do you provide dedicated technical leadership (Fractional CTO)?',
    answer: 'Our Enterprise plan includes fractional CTO advisory. We help you define your long-term tech roadmap, select vendor stacks, and ensure your infrastructure is built for future scale.'
  },
  {
    id: 5,
    question: 'What is your post-launch support and security protocol?',
    answer: 'Post-launch, we provide 24/7 monitoring and proactive security patching. Our team performs monthly performance audits and logic optimizations to keep your platform at the cutting edge.'
  },
  {
    id: 6,
    question: 'Is the intellectual property (IP) fully owned by the client?',
    answer: 'Yes. Upon completion, full ownership of the source code, design assets, and intellectual property is transferred to you. No vendor lock-in, ever.'
  }
];

const toggleFaq = (faqId) => {
  expandedFaq.value = expandedFaq.value === faqId ? null : faqId;
};

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

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
