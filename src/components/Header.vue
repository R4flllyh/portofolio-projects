<template>
  <header 
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full"
    :class="{ 
      'bg-background/95 backdrop-blur-md shadow-lg shadow-black/20': isScrolled || isMobileMenuOpen,
      'bg-transparent': !isScrolled && !isMobileMenuOpen
    }"
    role="banner"
  >
    <div class="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-16 sm:h-16 md:h-18 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a 
            href="#home" 
            class="text-lg sm:text-xl lg:text-2xl font-semibold font-mono text-headline hover:text-button transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-button focus:ring-offset-2 focus:ring-offset-background rounded-sm"
            @click="handleSmoothScroll"
            aria-label="Zkysvern - Go to home section"
          >
            Zkysvern
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:block" role="navigation" aria-label="Main navigation">
          <ul class="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <li v-for="item in navItems" :key="item.name">
              <a 
                :href="item.href" 
                class="nav-link text-paragraph hover:text-button px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-button focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                :class="{ 'text-button': activeSection === item.section }"
                @click="handleSmoothScroll"
                :aria-current="activeSection === item.section ? 'page' : null"
              >
                {{ item.name }}
                <span 
                  class="absolute bottom-0 left-0 h-0.5 bg-button transition-all duration-300"
                  :class="activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'"
                ></span>
              </a>
            </li>
          </ul>
        </nav>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            @keydown.escape="closeMobileMenu"
            class="mobile-menu-btn p-2 rounded-lg text-paragraph hover:text-button hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-button focus:ring-offset-2 focus:ring-offset-background"
            :class="{ 'text-button bg-gray-800/50': isMobileMenuOpen }"
            :aria-expanded="isMobileMenuOpen"
            :aria-label="isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          >
            <!-- Hamburger Icon -->
            <svg 
              v-if="!isMobileMenuOpen"
              class="w-6 h-6 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close Icon -->
            <svg 
              v-else
              class="w-6 h-6 transition-transform duration-200 rotate-90" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-gray-800/50 bg-background/98 backdrop-blur-md shadow-lg"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div class="px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul class="space-y-2" role="list">
            <li v-for="item in navItems" :key="item.name" role="listitem">
              <a 
                :href="item.href" 
                class="mobile-nav-link block px-4 py-3 text-paragraph hover:text-button hover:bg-gray-800/30 rounded-lg transition-all duration-200 text-base font-medium focus:outline-none focus:ring-2 focus:ring-button focus:ring-offset-2 focus:ring-offset-background"
                :class="{ 'text-button bg-gray-800/20': activeSection === item.section }"
                @click="handleMobileNavClick"
                :aria-current="activeSection === item.section ? 'page' : null"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    
    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
        @click="closeMobileMenu"
        @keydown.escape="closeMobileMenu"
        aria-hidden="true"
      ></div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      activeSection: 'home',
      scrollTimeout: null,
      resizeTimeout: null,
      navItems: [
        { name: 'Home', href: '#home', section: 'home' },
        { name: 'About', href: '#about', section: 'about' },
        { name: 'Services', href: '#services', section: 'services' },
        { name: 'Skills', href: '#skills', section: 'skills' },
        { name: 'Projects', href: '#projects', section: 'projects' },
        { name: 'Contact', href: '#contact', section: 'contact' }
      ]
    }
  },
  mounted() {
    this.initEventListeners()
    this.detectActiveSection()
  },
  beforeUnmount() {
    this.cleanup()
  },
  methods: {
    /**
     * Initialize all event listeners
     */
    initEventListeners() {
      try {
        window.addEventListener('scroll', this.throttledScrollHandler, { passive: true })
        window.addEventListener('resize', this.throttledResizeHandler, { passive: true })
        document.addEventListener('keydown', this.handleKeydown)
      } catch (error) {
        console.error('Error initializing event listeners:', error)
      }
    },

    /**
     * Throttled scroll handler for better performance
     */
    throttledScrollHandler() {
      if (this.scrollTimeout) return
      
      this.scrollTimeout = setTimeout(() => {
        this.handleScroll()
        this.detectActiveSection()
        this.scrollTimeout = null
      }, 16) // ~60fps
    },

    /**
     * Throttled resize handler
     */
    throttledResizeHandler() {
      if (this.resizeTimeout) return
      
      this.resizeTimeout = setTimeout(() => {
        this.handleResize()
        this.resizeTimeout = null
      }, 250)
    },

    /**
     * Handle scroll events
     */
    handleScroll() {
      try {
        this.isScrolled = window.scrollY > 10
      } catch (error) {
        console.error('Error handling scroll:', error)
      }
    },

    /**
     * Handle window resize
     */
    handleResize() {
      try {
        // Close mobile menu on desktop resize
        if (window.innerWidth >= 768 && this.isMobileMenuOpen) {
          this.closeMobileMenu()
        }
      } catch (error) {
        console.error('Error handling resize:', error)
      }
    },

    /**
     * Detect active section based on scroll position
     */
    detectActiveSection() {
      try {
        const sections = this.navItems.map(item => item.section)
        const scrollPosition = window.scrollY + 100 // Offset for header height

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && section.offsetTop <= scrollPosition) {
            this.activeSection = sections[i]
            break
          }
        }
      } catch (error) {
        console.error('Error detecting active section:', error)
      }
    },

    /**
     * Handle smooth scroll navigation
     */
    handleSmoothScroll(event) {
      try {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          const headerHeight = this.$refs.headerRef?.offsetHeight || 80
          const targetPosition = targetElement.offsetTop - headerHeight
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
          
          // Update active section immediately for better UX
          this.activeSection = targetId
        }
      } catch (error) {
        console.error('Error handling smooth scroll:', error)
      }
    },

    /**
     * Handle mobile navigation click
     */
    handleMobileNavClick(event) {
      this.handleSmoothScroll(event)
      // Delay closing menu for better UX
      setTimeout(() => {
        this.closeMobileMenu()
      }, 150)
    },

    /**
     * Handle keyboard navigation
     */
    handleKeydown(event) {
      try {
        // Close mobile menu on Escape key
        if (event.key === 'Escape' && this.isMobileMenuOpen) {
          this.closeMobileMenu()
          // Focus back to menu button
          this.$nextTick(() => {
            const menuButton = this.$el.querySelector('.mobile-menu-btn')
            if (menuButton) menuButton.focus()
          })
        }
      } catch (error) {
        console.error('Error handling keydown:', error)
      }
    },

    /**
     * Toggle mobile menu with focus management
     */
    toggleMobileMenu() {
      try {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
        
        // Manage focus for accessibility
        if (this.isMobileMenuOpen) {
          // Prevent body scroll when menu is open
          document.body.style.overflow = 'hidden'
          
          // Focus first menu item
          this.$nextTick(() => {
            const firstMenuItem = this.$el.querySelector('.mobile-nav-link')
            if (firstMenuItem) firstMenuItem.focus()
          })
        } else {
          // Restore body scroll
          document.body.style.overflow = ''
        }
      } catch (error) {
        console.error('Error toggling mobile menu:', error)
      }
    },

    /**
     * Close mobile menu with cleanup
     */
    closeMobileMenu() {
      try {
        if (this.isMobileMenuOpen) {
          this.isMobileMenuOpen = false
          document.body.style.overflow = ''
        }
      } catch (error) {
        console.error('Error closing mobile menu:', error)
      }
    },

    /**
     * Cleanup all event listeners and timeouts
     */
    cleanup() {
      try {
        // Clear timeouts
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout)
          this.scrollTimeout = null
        }
        if (this.resizeTimeout) {
          clearTimeout(this.resizeTimeout)
          this.resizeTimeout = null
        }

        // Remove event listeners
        window.removeEventListener('scroll', this.throttledScrollHandler)
        window.removeEventListener('resize', this.throttledResizeHandler)
        document.removeEventListener('keydown', this.handleKeydown)
        
        // Restore body scroll
        document.body.style.overflow = ''
      } catch (error) {
        console.error('Error during cleanup:', error)
      }
    }
  }
}
</script>

<style scoped>
/* ===== PERFORMANCE OPTIMIZATIONS ===== */
.header {
  will-change: background-color, backdrop-filter;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* ===== NAVIGATION ENHANCEMENTS ===== */
.nav-link {
  position: relative;
  will-change: color;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(156, 254, 79, 0.1);
  border-radius: 0.375rem;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.nav-link:focus::before {
  opacity: 1;
}

/* ===== MOBILE MENU ENHANCEMENTS ===== */
.mobile-menu-btn {
  will-change: transform, background-color;
  touch-action: manipulation;
}

.mobile-nav-link {
  will-change: background-color, color;
  touch-action: manipulation;
}

.mobile-nav-link:active {
  transform: scale(0.98);
  transition: transform 0.1s ease;
}

/* ===== RESPONSIVE IMPROVEMENTS ===== */
/* Fix width issues on mobile */
header {
  min-width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
}

/* Mobile specific fixes */
@media (max-width: 640px) {
  header {
    width: 100vw !important;
  }
  
  header > div {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .flex-shrink-0 a {
    font-size: 1.125rem;
    white-space: nowrap;
  }
  
  .mobile-menu-btn {
    padding: 0.5rem;
    flex-shrink: 0;
  }
}

@media (max-width: 480px) {
  header > div {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  .flex-shrink-0 a {
    font-size: 1rem;
  }
  
  .mobile-nav-link {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
}

/* Extra small devices */
@media (max-width: 375px) {
  header > div {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .flex-shrink-0 a {
    font-size: 0.875rem;
  }
}

/* ===== TABLET OPTIMIZATIONS ===== */
@media (min-width: 768px) and (max-width: 1024px) {
  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .mobile-menu-btn svg {
    transition: none;
  }
  
  .nav-link span {
    transition: none;
  }
}

@media (prefers-contrast: high) {
  .nav-link {
    border: 1px solid transparent;
  }
  
  .nav-link:focus {
    border-color: currentColor;
  }
  
  .mobile-menu-btn:focus {
    border: 2px solid currentColor;
  }
}

/* ===== FOCUS MANAGEMENT ===== */
.nav-link:focus-visible,
.mobile-nav-link:focus-visible,
.mobile-menu-btn:focus-visible {
  outline: 2px solid #9cfe4f;
  outline-offset: 2px;
}

/* ===== SMOOTH TRANSITIONS ===== */
.header-transition {
  transition: 
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== MOBILE MENU OVERLAY IMPROVEMENTS ===== */
.mobile-overlay {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* ===== LOGO ENHANCEMENTS ===== */
.logo-link {
  position: relative;
  overflow: hidden;
}

.logo-link::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(156, 254, 79, 0.2), transparent);
  transition: left 0.6s ease;
}

.logo-link:hover::after {
  left: 100%;
}

/* ===== ACTIVE STATE ENHANCEMENTS ===== */
.nav-link.active {
  color: #9cfe4f;
}

.nav-link.active span {
  width: 100%;
}

/* ===== MOBILE MENU ANIMATION IMPROVEMENTS ===== */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ===== PRINT STYLES ===== */
@media print {
  header {
    position: static !important;
    background: white !important;
    color: black !important;
    box-shadow: none !important;
  }
  
  .mobile-menu-btn,
  .mobile-overlay {
    display: none !important;
  }
  
  nav {
    display: block !important;
  }
  
  .nav-link {
    color: black !important;
  }
}

/* ===== DARK MODE OPTIMIZATIONS ===== */
@media (prefers-color-scheme: dark) {
  .nav-link:focus::before {
    background: rgba(156, 254, 79, 0.15);
  }
}

/* ===== TOUCH DEVICE OPTIMIZATIONS ===== */
@media (hover: none) and (pointer: coarse) {
  .nav-link:hover span {
    width: 0;
  }
  
  .mobile-nav-link {
    min-height: 44px; /* iOS touch target minimum */
  }
  
  .mobile-menu-btn {
    min-height: 44px;
    min-width: 44px;
  }
}

/* ===== HIGH DPI DISPLAY OPTIMIZATIONS ===== */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .nav-link span {
    height: 1px;
  }
}
</style>
