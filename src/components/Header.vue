<template>
  <header 
    ref="header"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-x-hidden"
    :class="{ 
      'bg-background/95 backdrop-blur-md shadow-lg shadow-black/20': isScrolled || isMobileMenuOpen,
      'bg-transparent': !isScrolled && !isMobileMenuOpen
    }"
  >
    <div class="w-full px-4 sm:px-6 lg:px-8 lg:mx-auto lg:max-w-7xl">
      <div class="flex items-center justify-between h-14 sm:h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="text-lg lg:text-xl font-semibold font-mono text-headline hover:text-button transition-colors duration-200">
            Zkysvern
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex items-center space-x-6 lg:space-x-8">
            <li v-for="item in navItems" :key="item.name">
              <a 
                :href="item.href" 
                class="text-paragraph hover:text-button px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative group"
              >
                {{ item.name }}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-button transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg text-paragraph hover:text-button hover:bg-gray-800/50 transition-all duration-200"
            :class="{ 'text-button': isMobileMenuOpen }"
          >
            <!-- Hamburger Icon -->
            <svg 
              v-if="!isMobileMenuOpen"
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close Icon -->
            <svg 
              v-else
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-gray-800/50 bg-background/95 backdrop-blur-md"
      >
        <div class="px-4 py-4 max-h-screen overflow-y-auto">
          <ul class="space-y-1">
            <li v-for="item in navItems" :key="item.name">
              <a 
                :href="item.href" 
                class="block px-4 py-3 text-paragraph hover:text-button hover:bg-gray-800/30 rounded-lg transition-all duration-200 text-base font-medium"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
      @click="closeMobileMenu"
    ></div>
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
