<template>
  <header 
    ref="header"
    class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300"
    :class="{ 'shadow-lg shadow-black/20': isScrolled }"
  >
    <nav class="px-4 md:px-6 flex justify-center">
      <div class="flex items-center justify-between h-16 md:h-20 w-full min-w-2xl max-w-7xl">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="text-xl md:text-2xl font-bold bg-gradient-to-r from-button to-illustration-highlight bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
            Rafly Dev
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-6 lg:space-x-8">
            <a 
              v-for="item in navItems" 
              :key="item.name"
              :href="item.href" 
              class="nav-link text-paragraph hover:text-button px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative"
              @click="setActiveLink"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-lg text-paragraph hover:text-button hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-button/50 transition-all duration-200"
            :class="{ 'bg-gray-800/50 text-button': isMobileMenuOpen }"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              class="h-6 w-6 transition-transform duration-200" 
              :class="{ 'rotate-90 opacity-0': isMobileMenuOpen, 'rotate-0 opacity-100': !isMobileMenuOpen }"
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              class="h-6 w-6 absolute transition-transform duration-200" 
              :class="{ 'rotate-0 opacity-100': isMobileMenuOpen, '-rotate-90 opacity-0': !isMobileMenuOpen }"
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    
    <!-- Mobile Navigation -->
    <div 
      class="md:hidden transition-all duration-300 ease-in-out overflow-hidden"
      :class="{ 
        'max-h-80 opacity-100 visible': isMobileMenuOpen, 
        'max-h-0 opacity-0 invisible': !isMobileMenuOpen 
      }"
    >
      <div class="bg-background/95 backdrop-blur-md border-t border-gray-800/50">
        <div class="px-4 py-3 space-y-1">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href" 
            class="block px-4 py-3 text-base font-medium text-paragraph hover:text-button hover:bg-gray-800/30 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-700/50"
            @click="closeMobileMenu"
          >
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-button rounded-full opacity-0 transition-opacity duration-200 hover:opacity-100"></div>
              <span>{{ item.name }}</span>
            </div>
          </a>
        </div>
        
        <!-- Mobile Menu Footer -->
        <div class="px-4 py-3 border-t border-gray-800/30">
          <div class="flex items-center justify-center space-x-4">
            <div class="text-xs text-paragraph/60">
              © 2024 Rafly Dev
            </div>
          </div>
        </div>
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
    this.initScrollListener()
    this.animateHeader()
  },
  methods: {
    initScrollListener() {
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    setActiveLink(event) {
      // Remove active class from all links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-button')
        link.classList.add('text-paragraph')
      })
      
      // Add active class to clicked link
      event.target.classList.remove('text-paragraph')
      event.target.classList.add('text-button')
    },
    animateHeader() {
      this.$gsap.fromTo(this.$refs.header, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  background-color: #ff8906;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}
</style>
