<template>
    <footer id="contact" class="bg-white dark:bg-[#050505] text-black dark:text-white py-12 md:py-24 transition-colors duration-300">
    <div class="container mx-auto px-6 md:px-16">
      
      <!-- Commerce Footprint Section (Matches Screenshot 4) -->
      <div class="mb-32">
        <h3 class="text-3xl md:text-5xl font-bold mb-16 max-w-2xl leading-tight">
          Benefit from our wide <span class="text-[#00ff88]">commerce footprint</span>
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <!-- Footprint Logos (Reusing SVGs and placeholders) -->
          <div class="flex justify-center"><svg class="h-8" viewBox="0 0 100 40" fill="currentColor"><path d="M0,0 H100 V40 H0 Z" fill="#003399"/><ellipse cx="50" cy="20" rx="45" ry="18" fill="#FFCC00"/></svg></div>
          <div class="flex justify-center text-xl font-bold">VOLKSWAGEN</div>
          <div class="flex justify-center text-xl font-black italic">OLX</div>
          <div class="flex justify-center text-xl font-bold text-[#00ff88]">żabka</div>
          <div class="flex justify-center text-xl font-bold">MERCK</div>
          <div class="flex justify-center text-xl font-bold">Keller Williams</div>
          <div class="flex justify-center text-xl font-bold">SIGNAL IDUNA</div>
          <div class="flex justify-center text-xl font-bold">RIDEER</div>
          <div class="flex justify-center text-xl font-bold">SANA</div>
          <div class="flex justify-center text-xl font-bold">TECHFLOW</div>
          <div class="flex justify-center text-xl font-bold">CREATIVE INC</div>
          <div class="flex justify-center text-xl font-bold">STARTUP</div>
        </div>
      </div>

      <!-- Final CTA Block (Matches Screenshot 6) -->
      <div class="relative bg-[#f9f9f9] dark:bg-[#0a0a0a] rounded-[50px] p-8 md:p-20 overflow-hidden mb-32 border border-gray-100 dark:border-white/5">
        <div class="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
           <h2 class="text-4xl md:text-6xl font-bold max-w-3xl leading-[1.1]">
             Design, build, and scale <span class="text-[#00ff88]">digital commerce</span> solutions
           </h2>
           <div class="flex-shrink-0">
             <a href="#contact" class="inline-block bg-[#00ff88] text-black px-12 py-6 rounded-full font-bold text-xl hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] hover:scale-105 transition-all">
               Estimate project
             </a>
           </div>
        </div>
        <!-- Decorative background element -->
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-[#00ff88]/5 blur-[80px] rounded-full pointer-events-none"></div>
      </div>

      <!-- Bottom Footer Area -->
      <div class="grid md:grid-cols-4 gap-12 mb-20">
        <div class="md:col-span-2">
          <router-link to="/" class="text-3xl font-bold font-sans tracking-tighter mb-8 block">
            Web<span class="text-[#00ff88]">Stack</span>
          </router-link>
          <p class="text-gray-500 max-w-sm text-lg leading-relaxed">
            Helping companies build modern digital products and experiences that drive growth.
          </p>
        </div>
        
        <!-- Contact Form (Simplified or kept) -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-8">Get in touch</h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <input v-model="form.name" type="text" placeholder="Full Name*" required class="bg-transparent border-b border-gray-200 dark:border-white/10 py-3 focus:border-[#00ff88] outline-none transition-colors">
              <input v-model="form.email" type="email" placeholder="Email*" required class="bg-transparent border-b border-gray-200 dark:border-white/10 py-3 focus:border-[#00ff88] outline-none transition-colors">
            </div>
            <textarea v-model="form.message" placeholder="Project Details*" required class="w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-3 focus:border-[#00ff88] outline-none transition-colors h-24"></textarea>
            <button type="submit" class="text-[#00ff88] font-bold text-lg hover:underline underline-offset-8">Send Message →</button>
          </form>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 dark:border-white/5 text-gray-400 text-sm">
        <div>@2026 WebStack. All Rights Reserved.</div>
        <div class="flex gap-8 mt-4 md:mt-0">
          <a href="#" class="hover:text-black dark:hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-black dark:hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeezjzae';

const submitForm = async () => {
  isSubmitting.value = true;
  
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      showSuccess.value = true;
      form.value = { name: '', email: '', phone: '', message: '' };
      setTimeout(() => showSuccess.value = false, 5000);
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again later.');
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
