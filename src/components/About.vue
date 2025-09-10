<template>
  <section 
    id="about" 
    class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center about-section overflow-hidden"
    aria-labelledby="about-heading"
    role="region"
  >
    <div class="w-full max-w-7xl mx-auto">
      <!-- Section Header -->
      <header class="mb-12 md:mb-16 flex items-center gap-6 md:gap-10" ref="headerRef">
        <h2 
          id="about-heading"
          class="text-xl md:text-4xl font-normal font-mono text-white"
          aria-label="About section: Get to Know Me"
        >
          01 - Get to Know Me
        </h2>
        <img 
          src="https://assets.codepen.io/16327/scramble-cursor.png" 
          alt="" 
          class="w-12 md:w-14 object-contain animate-pulse flex-shrink-0" 
          role="presentation"
          loading="lazy"
        />
      </header>

      <!-- About Content -->
      <div class="max-w-4xl relative">
        <!-- Decorative Element -->
        <div 
          class="absolute -top-6 -right-6 md:-top-12 md:-right-16 z-10"
          aria-hidden="true"
        >
          <div class="flower-decoration" role="presentation"></div>
        </div>
        
        <!-- Main Content Card -->
        <article class="content-card bg-gray-800/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-700/50 relative z-20 transition-all duration-300 ease-out hover:bg-gray-800/60 hover:transform hover:-translate-y-1">
          <div class="space-y-6 text-white leading-relaxed">
            <p 
              class="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 font-medium leading-tight" 
              ref="scrambleTextRef"
              aria-label="Introduction text with scramble animation effect"
            >
              Hi! I'm Rafly, a passionate junior developer based in Surabaya, Indonesia.
              I love building web and mobile applications with Flutter & Laravel, designing clean interfaces with Tailwind, and exploring UI/UX using Figma.
            </p>
            <p class="text-base sm:text-lg lg:text-xl text-paragraph leading-relaxed">
              I enjoy turning ideas into functional products and am always excited to collaborate and learn something new.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      // Store animation instances for cleanup
      gsapAnimations: [],
      intersectionObserver: null,
      scrambleInterval: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initAnimations()
      this.initScrambleText()
    })
  },
  beforeUnmount() {
    // Cleanup animations and observers
    this.cleanup()
  },
  methods: {
    /**
     * Initialize GSAP animations with error handling
     */
    initAnimations() {
      try {
        if (typeof this.$gsap === 'undefined' || typeof this.$ScrollTrigger === 'undefined') {
          console.warn('GSAP or ScrollTrigger not available')
          return
        }

        const gsap = this.$gsap
        const ScrollTrigger = this.$ScrollTrigger

        // Header animation with null check
        if (this.$refs.headerRef) {
          const headerAnimation = gsap.fromTo(this.$refs.headerRef, 
            { y: -30, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.8, 
              ease: "power3.out",
              scrollTrigger: {
                trigger: this.$refs.headerRef,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          )
          this.gsapAnimations.push(headerAnimation)
        }

        // Content card animation with better selector
        const contentCard = this.$el.querySelector('.content-card')
        if (contentCard) {
          const cardAnimation = gsap.fromTo(contentCard, 
            { y: 50, opacity: 0, scale: 0.95 },
            { 
              y: 0, 
              opacity: 1, 
              scale: 1,
              duration: 1, 
              ease: "power3.out",
              scrollTrigger: {
                trigger: contentCard,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          )
          this.gsapAnimations.push(cardAnimation)
        }
      } catch (error) {
        console.error('Error initializing animations:', error)
      }
    },

    /**
     * Initialize scramble text effect with improved performance
     */
    initScrambleText() {
      try {
        const element = this.$refs.scrambleTextRef
        if (!element) {
          console.warn('Scramble text element not found')
          return
        }

        const originalText = element.textContent.trim()
        if (!originalText) return

        const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
        let iteration = 0

        // Preserve layout to prevent content jumping
        const originalHeight = element.offsetHeight
        const computedStyle = window.getComputedStyle(element)
        
        element.style.minHeight = `${originalHeight}px`
        element.style.lineHeight = computedStyle.lineHeight
        element.style.wordWrap = 'break-word'

        /**
         * Scramble animation function
         */
        const performScramble = () => {
          if (!element || iteration > originalText.length) {
            this.clearScrambleInterval()
            if (element) {
              element.style.minHeight = 'auto'
            }
            return
          }

          element.textContent = originalText
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return originalText[index]
              }
              return char === ' ' ? ' ' : scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
            })
            .join('')

          iteration += Math.random() > 0.5 ? 2 : 1 // Variable speed for more natural effect
        }

        /**
         * Start scramble effect when element enters viewport
         */
        const startScrambleEffect = () => {
          iteration = 0
          this.scrambleInterval = setInterval(performScramble, 50)
        }

        // Use Intersection Observer for better performance
        this.intersectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !this.scrambleInterval) {
                startScrambleEffect()
                // Disconnect after first trigger to prevent re-triggering
                this.intersectionObserver.unobserve(element)
              }
            })
          },
          { 
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
          }
        )

        this.intersectionObserver.observe(element)
      } catch (error) {
        console.error('Error initializing scramble text:', error)
      }
    },

    /**
     * Clear scramble interval
     */
    clearScrambleInterval() {
      if (this.scrambleInterval) {
        clearInterval(this.scrambleInterval)
        this.scrambleInterval = null
      }
    },

    /**
     * Cleanup all animations and observers
     */
    cleanup() {
      try {
        // Clear GSAP animations
        this.gsapAnimations.forEach(animation => {
          if (animation && typeof animation.kill === 'function') {
            animation.kill()
          }
        })
        this.gsapAnimations = []

        // Clear scramble interval
        this.clearScrambleInterval()

        // Disconnect intersection observer
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect()
          this.intersectionObserver = null
        }
      } catch (error) {
        console.error('Error during cleanup:', error)
      }
    }
  }
}
</script>

<style scoped>
/* ===== FLOWER DECORATION ===== */
.flower-decoration {
  width: 80px;
  height: 80px;
  position: relative;
  animation: float 6s ease-in-out infinite;
  /* Performance optimizations */
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0); /* Force hardware acceleration */
}

.flower-decoration::before,
.flower-decoration::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #a855f7, #c084fc, #e879f9);
  border-radius: 50% 50% 50% 0;
  transform-origin: center;
  /* Performance optimizations */
  will-change: transform;
  backface-visibility: hidden;
}

.flower-decoration::before {
  top: 0;
  left: 0;
  transform: rotate(0deg);
  box-shadow: 
    40px 0 0 0 #a855f7,
    0 40px 0 0 #c084fc,
    40px 40px 0 0 #e879f9;
}

.flower-decoration::after {
  top: 20px;
  left: 20px;
  transform: rotate(45deg);
  background: linear-gradient(135deg, #c084fc, #e879f9, #f0abfc);
  box-shadow: 
    -20px -20px 0 0 #a855f7,
    20px -20px 0 0 #c084fc,
    -20px 20px 0 0 #e879f9,
    20px 20px 0 0 #f0abfc;
}

/* ===== ANIMATIONS ===== */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) translateZ(0);
  }
  50% {
    transform: translateY(-10px) rotate(5deg) translateZ(0);
  }
}

/* ===== CONTENT CARD ENHANCEMENTS ===== */
.content-card {
  /* Enhanced shadows for better depth */
  box-shadow: 
    0 10px 25px -3px rgba(0, 0, 0, 0.1), 
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.05); /* Subtle border highlight */
  
  /* Performance optimizations */
  will-change: transform, box-shadow;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.content-card:hover {
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.15), 
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1); /* Enhanced border on hover */
}

/* ===== RESPONSIVE DESIGN ===== */
/* Tablet and small desktop */
@media (max-width: 1024px) {
  .content-card {
    padding: 1.5rem 2rem;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .flower-decoration {
    width: 60px;
    height: 60px;
  }
  
  .flower-decoration::before,
  .flower-decoration::after {
    width: 30px;
    height: 30px;
  }
  
  .flower-decoration::before {
    box-shadow: 
      30px 0 0 0 #a855f7,
      0 30px 0 0 #c084fc,
      30px 30px 0 0 #e879f9;
  }
  
  .flower-decoration::after {
    top: 15px;
    left: 15px;
    box-shadow: 
      -15px -15px 0 0 #a855f7,
      15px -15px 0 0 #c084fc,
      -15px 15px 0 0 #e879f9,
      15px 15px 0 0 #f0abfc;
  }

  .content-card {
    padding: 1.25rem 1.5rem;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .flower-decoration {
    width: 50px;
    height: 50px;
  }
  
  .flower-decoration::before,
  .flower-decoration::after {
    width: 25px;
    height: 25px;
  }
  
  .flower-decoration::before {
    box-shadow: 
      25px 0 0 0 #a855f7,
      0 25px 0 0 #c084fc,
      25px 25px 0 0 #e879f9;
  }
  
  .flower-decoration::after {
    top: 12.5px;
    left: 12.5px;
    box-shadow: 
      -12.5px -12.5px 0 0 #a855f7,
      12.5px -12.5px 0 0 #c084fc,
      -12.5px 12.5px 0 0 #e879f9,
      12.5px 12.5px 0 0 #f0abfc;
  }

  .content-card {
    padding: 1rem 1.25rem;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .flower-decoration {
    width: 40px;
    height: 40px;
  }
  
  .flower-decoration::before,
  .flower-decoration::after {
    width: 20px;
    height: 20px;
  }
  
  .flower-decoration::before {
    box-shadow: 
      20px 0 0 0 #a855f7,
      0 20px 0 0 #c084fc,
      20px 20px 0 0 #e879f9;
  }
  
  .flower-decoration::after {
    top: 10px;
    left: 10px;
    box-shadow: 
      -10px -10px 0 0 #a855f7,
      10px -10px 0 0 #c084fc,
      -10px 10px 0 0 #e879f9,
      10px 10px 0 0 #f0abfc;
  }

  .content-card {
    padding: 1rem;
  }
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  .flower-decoration {
    animation: none;
  }
  
  .content-card {
    transition: none;
  }
  
  .content-card:hover {
    transform: none;
  }
}

/* ===== HIGH CONTRAST MODE ===== */
@media (prefers-contrast: high) {
  .content-card {
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.3);
  }
}

/* ===== PRINT STYLES ===== */
@media print {
  .flower-decoration {
    display: none;
  }
  
  .content-card {
    box-shadow: none;
    border: 1px solid #000;
    background: white !important;
    color: black !important;
  }
}
</style>
