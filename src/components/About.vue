<template>
  <section id="about" class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center about-section">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16 flex items-center gap-10" ref="header">
        <h2 class="text-xl md:text-4xl font-normal font-mono">
          01 - Get to Know Me
        </h2>
        <img 
          id="scramble-cursor" 
          src="https://assets.codepen.io/16327/scramble-cursor.png" 
          alt="Decorative cursor" 
          class="w-14 object-contain animate-pulse" 
        />
      </div>

      <!-- About Content -->
      <div class="max-w-4xl relative">
        <!-- Decorative Element -->
        <div class="absolute -top-8 md:-top-12 md:-right-16 z-10">
          <div class="flower-decoration"></div>
        </div>
        
        <!-- Main Content Card -->
        <div class="bg-gray-800/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/50 relative z-20 hover:bg-gray-800/60 hover:transform hover:-translate-y-1 transition-all duration-300">
          <div class="space-y-6 text-white leading-relaxed">
            <p class="text-2xl sm:text-3xl lg:text-4xl text-white mb-5 font-medium" ref="scrambleText">
              Hi! I'm Rafly, a passionate junior developer based in Surabaya, Indonesia.
              I love building web and mobile applications with Flutter & Laravel, designing clean interfaces with Tailwind, and exploring UI/UX using Figma.
            </p>
            <p class="text-base sm:text-lg text-paragraph leading-relaxed">
              I enjoy turning ideas into functional products and am always excited to collaborate and learn something new.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    this.initAnimations()
    this.initScrambleText()
  },
  methods: {
    initAnimations() {
      if (typeof this.$gsap !== 'undefined' && typeof this.$ScrollTrigger !== 'undefined') {
        const gsap = this.$gsap
        const ScrollTrigger = this.$ScrollTrigger

        // Header animation
        gsap.fromTo(this.$refs.header, 
          { y: -30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.header,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Content card animation
        gsap.fromTo('.bg-gray-800\\/40', 
          { y: 50, opacity: 0, scale: 0.95 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: '.bg-gray-800\\/40',
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    },

    initScrambleText() {
      const element = this.$refs.scrambleText
      if (!element) return

      const originalText = element.textContent
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
      let iteration = 0

      this.$nextTick(() => {
        // Preserve layout to prevent jumping
        const originalHeight = element.offsetHeight
        const computedStyle = window.getComputedStyle(element)
        
        element.style.minHeight = originalHeight + 'px'
        element.style.lineHeight = computedStyle.lineHeight
        element.style.wordWrap = 'break-word'

        const scramble = () => {
          element.textContent = originalText
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return originalText[index]
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')

          if (iteration >= originalText.length) {
            clearInterval(interval)
            // Reset height after animation
            element.style.minHeight = 'auto'
          }

          iteration += 2
        }

        // Start scramble effect when element comes into view
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              iteration = 0
              const interval = setInterval(scramble, 50)
              observer.unobserve(element)
            }
          })
        }, { threshold: 0.3 })

        observer.observe(element)
      })
    }
  }
}
</script>

<style scoped>
/* Flower Decoration */
.flower-decoration {
  width: 80px;
  height: 80px;
  position: relative;
  animation: float 6s ease-in-out infinite;
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

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

/* Responsive Design */
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
}

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
}

/* Performance optimizations */
.flower-decoration {
  will-change: transform;
  backface-visibility: hidden;
}

/* Content card enhancements */
.bg-gray-800\/40 {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.bg-gray-800\/40:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}
</style>
