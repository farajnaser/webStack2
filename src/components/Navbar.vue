<template>
  <nav class="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md py-6 border-b border-gray-200 dark:border-[#1a1a1a] transition-colors duration-300">
    <div class="container mx-auto px-6 flex justify-between items-center text-black dark:text-white">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <router-link to="/" class="text-2xl font-bold font-sans tracking-tighter">
          Web<span class="text-[#00ff88]">Stack</span>
        </router-link>
      </div>
      
      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center space-x-8 font-medium text-sm">
        <a href="#home" @click.prevent="scrollToSection('home')" :class="[activeSection === 'home' ? 'border-b-2 border-[#00ff88] pb-1 text-[#00ff88]' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white']" class="transition-all duration-300">Home</a>
        <a href="#about" @click.prevent="scrollToSection('about')" :class="[activeSection === 'about' ? 'border-b-2 border-[#00ff88] pb-1 text-[#00ff88]' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white']" class="transition-all duration-300">About</a>
        <a href="#services" @click.prevent="scrollToSection('services')" :class="[activeSection === 'services' ? 'border-b-2 border-[#00ff88] pb-1 text-[#00ff88]' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white']" class="transition-all duration-300">Services</a>
        <a href="#projects" @click.prevent="scrollToSection('projects')" :class="[activeSection === 'projects' ? 'border-b-2 border-[#00ff88] pb-1 text-[#00ff88]' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white']" class="transition-all duration-300">Work</a>
        <a href="#pricing" @click.prevent="scrollToSection('pricing')" :class="[activeSection === 'pricing' ? 'border-b-2 border-[#00ff88] pb-1 text-[#00ff88]' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white']" class="transition-all duration-300">Pricing</a>
        <a href="#faq" @click.prevent="scrollToSection('faq')" :class="[activeSection === 'faq' ? 'border-b-2 border-[#00ff88] pb-1 text-[#00ff88]' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white']" class="transition-all duration-300">Questions</a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-6">
        <!-- Dark Mode Toggle -->
        <button @click="toggleDark" class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white" aria-label="Toggle dark mode">
          <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        </button>

        <!-- Desktop Button -->
        <router-link to="/contact" class="hidden md:block bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black px-8 py-3 rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 text-sm">
          Get in touch
        </router-link>

        <!-- Mobile Menu Button -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden z-50 relative text-black dark:text-white">
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white dark:bg-[#0a0a0a] z-[60] flex flex-col md:hidden h-screen w-screen overflow-y-auto transition-colors duration-300">
          <!-- Header -->
          <div class="flex justify-between items-center p-6 border-b border-gray-100 dark:border-[#1a1a1a]">
            <span class="text-2xl font-bold font-sans tracking-tighter text-black dark:text-white">Web<span class="text-[#00ff88]">Stack</span></span>
            <div class="flex items-center gap-4">
              <button @click="toggleDark" class="p-2 text-gray-500 dark:text-gray-400">
                <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              </button>
              <button @click="isMobileMenuOpen = false" class="text-black dark:text-white hover:text-[#00ff88] transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Main Menu Level -->
          <div v-if="!activeSubmenu" class="flex-1 px-6 py-4">
            <div 
              v-for="item in menuItems" 
              :key="item.id"
              class="border-b border-gray-100 dark:border-[#1a1a1a]"
            >
              <button 
                v-if="item.submenu"
                @click="openSubmenu(item.id)"
                class="w-full flex items-center justify-between py-5 text-black dark:text-white hover:text-[#00ff88] transition-colors"
              >
                <span class="text-lg font-medium">{{ item.label }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <a 
                v-else-if="item.href"
                :href="item.href" 
                @click="scrollToSection(item.id); closeMenu()"
                class="block py-5 text-lg font-medium text-black dark:text-white hover:text-[#00ff88] transition-colors"
              >
                {{ item.label }}
              </a>
              <router-link 
                v-else-if="item.to"
                :to="item.to" 
                @click="closeMenu"
                class="block py-5 text-lg font-medium text-black dark:text-white hover:text-[#00ff88] transition-colors"
              >
                {{ item.label }}
              </router-link>
            </div>
          </div>

          <!-- Submenu Level -->
          <div v-else class="flex-1 px-6 py-4">
            <!-- Back Button -->
            <button 
              @click="closeSubmenu"
              class="flex items-center gap-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-6 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>Main menu</span>
            </button>

            <!-- Services Submenu -->
            <div v-if="activeSubmenu === 'services'" class="space-y-8">
              <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">DESIGN</h3>
                <div class="space-y-3">
                  <a href="#services" @click="scrollToSection('services'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">UI Design</a>
                  <a href="#services" @click="scrollToSection('services'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">UX Design</a>
                  <a href="#services" @click="scrollToSection('services'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Design Systems</a>
                </div>
              </div>
              <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">DEVELOPMENT</h3>
                <div class="space-y-3">
                  <a href="#services" @click="scrollToSection('services'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Web Development</a>
                  <a href="#services" @click="scrollToSection('services'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Mobile Development</a>
                  <a href="#services" @click="scrollToSection('services'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Frontend Development</a>
                </div>
              </div>
            </div>

            <!-- Work Submenu -->
            <div v-if="activeSubmenu === 'work'" class="space-y-8">
              <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">CASE STUDIES</h3>
                <div class="space-y-3">
                  <a href="#projects" @click="scrollToSection('projects'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">BookHaven</a>
                  <a href="#projects" @click="scrollToSection('projects'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">TemposWork</a>
                  <a href="#projects" @click="scrollToSection('projects'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Rahlaty</a>
                </div>
              </div>
              <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">INDUSTRIES</h3>
                <div class="space-y-3">
                  <a href="#projects" @click="scrollToSection('projects'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">E-commerce</a>
                  <a href="#projects" @click="scrollToSection('projects'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Education</a>
                  <a href="#projects" @click="scrollToSection('projects'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Technology</a>
                </div>
              </div>
            </div>

            <!-- About Submenu -->
            <div v-if="activeSubmenu === 'about'" class="space-y-8">
              <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">LEARN MORE</h3>
                <div class="space-y-3">
                  <a href="#about" @click="scrollToSection('about'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">About WebStack</a>
                  <a href="#team" @click="scrollToSection('team'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Our Team</a>
                  <a href="#testimonials" @click="scrollToSection('testimonials'); closeMenu()" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Client Reviews</a>
                </div>
              </div>
              <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">RESOURCES</h3>
                <div class="space-y-3">
                  <router-link to="/newsletter" @click="closeMenu" class="block text-black dark:text-white hover:text-[#00ff88] transition-colors">Newsletter</router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="p-6 border-t border-gray-100 dark:border-[#1a1a1a]">
            <router-link 
              to="/contact" 
              @click="closeMenu"
              class="block w-full text-center bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black px-8 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all"
            >
              Get in touch →
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const activeSection = ref('home');
const isMobileMenuOpen = ref(false);
const activeSubmenu = ref(null);
const isDark = ref(true);

const menuItems = [
  { id: 'services', label: 'Services', submenu: true },
  { id: 'work', label: 'Work', submenu: true },
  { id: 'about', label: 'About us', submenu: true },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'faq', label: 'Questions', href: '#faq' },
  { id: 'contact', label: 'Contact', to: '/contact' }
];

const toggleDark = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
};

const scrollToSection = (id) => {
  if (id === 'home' && route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  
  if (route.path !== '/') {
    router.push({ path: '/', hash: '#' + id });
  } else {
    // If already on home page, push with hash to trigger scrollBehavior OR scroll manually
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      // Update hash in URL without reloading if possible
      router.push({ hash: '#' + id });
    } else {
      router.push({ path: '/', hash: '#' + id });
    }
  }
};

const openSubmenu = (id) => {
  activeSubmenu.value = id;
};

const closeSubmenu = () => {
  activeSubmenu.value = null;
};

const closeMenu = () => {
  isMobileMenuOpen.value = false;
  activeSubmenu.value = null;
};

const handleScroll = () => {
  const sections = ['home', 'about', 'services', 'projects', 'pricing', 'faq'];
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= -200 && rect.top <= 300) {
        activeSection.value = section;
        break; 
      }
    }
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = true;
  }
  updateTheme();

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
