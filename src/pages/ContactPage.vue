<template>
  <div class="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-300">
    <!-- Header -->
    <div class="container mx-auto px-6 py-8">
      <!-- Back Link -->
      <a href="/" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white mb-8 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        <span>Back to home</span>
      </a>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Left Column -->
        <div>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
            You need a<br>partner. <span class="text-[#00ff88]">We're<br>here to help.</span>
          </h1>
          
          <p class="text-gray-600 dark:text-gray-400 mb-8">
            We would like to understand your needs. Fill in the form, send us an email or give us a call and we'll be happy to assist.
          </p>

          <a href="mailto:hello@webstack.dev" class="text-[#00ff88] hover:underline">hello@webstack.dev</a>

          <!-- Client Logos -->
          <div class="flex flex-wrap gap-8 mt-12 opacity-50 grayscale">
            <div class="w-20 h-8 bg-black/10 dark:bg-white/10 rounded flex items-center justify-center text-xs font-bold text-black dark:text-white">CLIENT</div>
            <div class="w-20 h-8 bg-black/10 dark:bg-white/10 rounded flex items-center justify-center text-xs font-bold text-black dark:text-white">CLIENT</div>
            <div class="w-20 h-8 bg-black/10 dark:bg-white/10 rounded flex items-center justify-center text-xs font-bold text-black dark:text-white">CLIENT</div>
            <div class="w-20 h-8 bg-black/10 dark:bg-white/10 rounded flex items-center justify-center text-xs font-bold text-black dark:text-white">CLIENT</div>
          </div>
        </div>

        <!-- Right Column - Form -->
        <div class="bg-gray-50 dark:bg-[#0a0a0a] rounded-3xl p-8 border border-gray-100 dark:border-[#1a1a1a] transition-colors duration-300">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Row -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm text-gray-600 dark:text-gray-400 mb-2">First Name*</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full bg-transparent border-b border-gray-300 dark:border-[#1a1a1a] py-3 text-black dark:text-white focus:border-[#00ff88] focus:outline-none transition-colors"
                >
              </div>
              <div>
                <label class="block text-sm text-gray-600 dark:text-gray-400 mb-2">Last Name*</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full bg-transparent border-b border-gray-300 dark:border-[#1a1a1a] py-3 text-black dark:text-white focus:border-[#00ff88] focus:outline-none transition-colors"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-400 mb-2">Email*</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full bg-transparent border-b border-gray-300 dark:border-[#1a1a1a] py-3 text-black dark:text-white focus:border-[#00ff88] focus:outline-none transition-colors"
              >
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-400 mb-2">Phone Number</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full bg-transparent border-b border-gray-300 dark:border-[#1a1a1a] py-3 text-black dark:text-white focus:border-[#00ff88] focus:outline-none transition-colors"
              >
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-400 mb-2">Company name</label>
              <input 
                v-model="form.company"
                type="text" 
                class="w-full bg-transparent border-b border-gray-300 dark:border-[#1a1a1a] py-3 text-black dark:text-white focus:border-[#00ff88] focus:outline-none transition-colors"
              >
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-400 mb-2">How did you hear about us?</label>
              <select 
                v-model="form.source"
                class="w-full bg-transparent border-b border-gray-300 dark:border-[#1a1a1a] py-3 text-black dark:text-white focus:border-[#00ff88] focus:outline-none transition-colors"
              >
                <option value="" class="bg-white dark:bg-[#0a0a0a]">Select an option</option>
                <option value="google" class="bg-white dark:bg-[#0a0a0a]">Google Search</option>
                <option value="social" class="bg-white dark:bg-[#0a0a0a]">Social Media</option>
                <option value="referral" class="bg-white dark:bg-[#0a0a0a]">Referral</option>
                <option value="other" class="bg-white dark:bg-[#0a0a0a]">Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-400 mb-2">Tell us more about your project*</label>
              <textarea 
                v-model="form.message"
                rows="4"
                required
                class="w-full bg-transparent border border-gray-300 dark:border-[#1a1a1a] rounded-lg p-3 text-black dark:text-white focus:border-[#00ff88] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <!-- NDA Checkbox -->
            <div class="flex items-start gap-3">
              <span class="text-sm text-gray-600 dark:text-gray-400">Do you need an NDA first?</span>
              <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="form.needNda" value="yes" class="accent-[#00ff88]">
                  <span class="text-sm text-gray-800 dark:text-gray-200">Yes</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="form.needNda" value="no" class="accent-[#00ff88]">
                  <span class="text-sm text-gray-800 dark:text-gray-200">No</span>
                </label>
              </div>
            </div>

            <!-- Privacy Checkbox -->
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" v-model="form.privacy" required class="mt-1 accent-[#00ff88]">
              <span class="text-sm text-gray-600 dark:text-gray-400">
                I agree to the processing of my personal data in accordance with the 
                <a href="#" class="text-[#00ff88] hover:underline">Privacy Policy</a>
              </span>
            </label>

            <!-- Submit Button -->
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all disabled:opacity-50"
            >
              {{ isSubmitting ? 'Sending...' : 'Request Service' }}
            </button>

            <p v-if="showSuccess" class="text-[#00ff88] text-center">Message sent successfully!</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  source: '',
  message: '',
  needNda: 'no',
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
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      showSuccess.value = true;
      form.value = {
        firstName: '', lastName: '', email: '', phone: '',
        company: '', source: '', message: '', needNda: 'no', privacy: false
      };
      setTimeout(() => showSuccess.value = false, 5000);
    }
  } catch (error) {
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
