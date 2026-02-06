<template>
  <div class="min-h-screen bg-[#050505] text-white">
    <!-- Header Section -->
    <div class="bg-[#0a0a0a] py-16">
      <div class="container mx-auto px-6">
        <!-- Back Link -->
        <a href="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>Back to home</span>
        </a>

        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Next in <span class="text-[#00ff88]">Commerce</span>
        </h1>
        
        <p class="text-gray-400 max-w-2xl mb-12">
          Stay up to date with the latest trends, insights, and strategies in digital commerce. 
          Subscribe to our newsletter and get exclusive content delivered to your inbox.
        </p>

        <!-- Newsletter Form -->
        <form @submit.prevent="submitForm" class="max-w-xl space-y-6">
          <div>
            <label class="block text-sm text-gray-400 mb-2">Full Name*</label>
            <input 
              v-model="form.name"
              type="text" 
              required
              class="w-full bg-transparent border-b border-[#1a1a1a] py-3 text-white focus:border-[#00ff88] focus:outline-none transition-colors"
            >
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-2">Last Name</label>
            <input 
              v-model="form.lastName"
              type="text" 
              class="w-full bg-transparent border-b border-[#1a1a1a] py-3 text-white focus:border-[#00ff88] focus:outline-none transition-colors"
            >
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-2">Email*</label>
            <input 
              v-model="form.email"
              type="email" 
              required
              class="w-full bg-transparent border-b border-[#1a1a1a] py-3 text-white focus:border-[#00ff88] focus:outline-none transition-colors"
            >
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-2">Company name*</label>
            <input 
              v-model="form.company"
              type="text" 
              required
              class="w-full bg-transparent border-b border-[#1a1a1a] py-3 text-white focus:border-[#00ff88] focus:outline-none transition-colors"
            >
          </div>

          <div>
            <label class="block text-sm text-gray-400 mb-2">Country</label>
            <select 
              v-model="form.country"
              class="w-full bg-transparent border-b border-[#1a1a1a] py-3 text-white focus:border-[#00ff88] focus:outline-none transition-colors"
            >
              <option value="" class="bg-[#0a0a0a]">Select country</option>
              <option value="ly" class="bg-[#0a0a0a]">Libya</option>
              <option value="us" class="bg-[#0a0a0a]">United States</option>
              <option value="uk" class="bg-[#0a0a0a]">United Kingdom</option>
              <option value="other" class="bg-[#0a0a0a]">Other</option>
            </select>
          </div>

          <!-- Privacy Checkbox -->
          <label class="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" v-model="form.privacy" required class="mt-1 accent-[#00ff88]">
            <span class="text-sm text-gray-400">
              I agree to receive marketing communications and accept the 
              <a href="#" class="text-[#00ff88] hover:underline">Privacy Policy</a>
            </span>
          </label>

          <!-- Submit Button -->
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all disabled:opacity-50"
          >
            {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
          </button>

          <p v-if="showSuccess" class="text-[#00ff88] text-center">Successfully subscribed!</p>
        </form>
      </div>
    </div>

    <!-- Benefits Section -->
    <div class="bg-[#111] py-16">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold mb-2">Actionable insights</h2>
          <p class="text-gray-400">for <span class="text-[#00ff88]">commerce leaders</span></p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Card 1 -->
          <div class="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6">
            <div class="text-xs text-gray-500 uppercase tracking-wider mb-4">EMERGING TRENDS</div>
            <h3 class="text-lg font-semibold mb-2">Discover trends shaping the future of digital commerce</h3>
            <p class="text-sm text-gray-400">Stay ahead with insights on AI, headless commerce, and more.</p>
          </div>

          <!-- Card 2 -->
          <div class="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6">
            <div class="text-xs text-gray-500 uppercase tracking-wider mb-4">LEARN FROM INDUSTRY LEADERS</div>
            <h3 class="text-lg font-semibold mb-2">Expert perspectives on scaling your business</h3>
            <p class="text-sm text-gray-400">Exclusive interviews with top executives and strategists.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Subscribe Section -->
    <div class="py-16">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <!-- Image -->
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-[#00ff88]/20 to-transparent rounded-3xl overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-32 h-32 rounded-full bg-[#00ff88]/20 blur-3xl"></div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div>
            <h2 class="text-3xl font-bold mb-6">
              Why <span class="text-[#00ff88]">subscribe?</span>
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#00ff88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Bi-weekly newsletter with handpicked insights and trend analysis</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#00ff88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Exclusive tips from industry experts on digital transformation</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#00ff88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Early access to webinars, reports, and case studies</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#00ff88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">No spam - unsubscribe anytime with one click</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-[#0a0a0a] py-16 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">
          Stay sharp. <span class="text-[#00ff88]">Stay curious.</span>
        </h2>
        <p class="text-gray-400 mb-8">Join 10,000+ commerce leaders getting our insights</p>
        <a 
          href="#top" 
          class="inline-block bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black px-8 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all"
        >
          Subscribe Now
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  lastName: '',
  email: '',
  company: '',
  country: '',
  privacy: false
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  
  try {
    const response = await fetch('https://formspree.io/f/xeezjzae', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'newsletter',
        ...form.value
      })
    });

    if (response.ok) {
      showSuccess.value = true;
      form.value = { name: '', lastName: '', email: '', company: '', country: '', privacy: false };
      setTimeout(() => showSuccess.value = false, 5000);
    }
  } catch (error) {
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
