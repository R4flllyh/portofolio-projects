<template>
  <header 
    ref="header"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 
      'bg-background/95 backdrop-blur-md shadow-black/20': isScrolled,
      'bg-transparent': !isScrolled
    }"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20 max-w-7xl mx-auto">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="text-lg lg:text-xl font-semibold font-mono">
            Zkysvern
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex items-center space-x-8">
            <li v-for="item in navItems" :key="item.name">
              <a 
                :href="item.href" 
                class="text-paragraph hover:text-button px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg text-paragraph hover:text-button hover:bg-gray-800/50 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <div 
      v-show="isMobileMenuOpen"
      class="md:hidden border-t border-gray-800"
    >
      <div class="px-4 py-4">
        <ul class="space-y-2">
          <li v-for="item in navItems" :key="item.name">
            <a 
              :href="item.href" 
              class="block px-4 py-2 text-paragraph hover:text-button hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      navItems: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
</style>
