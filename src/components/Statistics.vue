<template>
  <section id="statistics" class="bg-thirdBackground text-headline px-4 py-16 md:py-24 flex justify-center statistics-section relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 bg-button/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-40 h-40 bg-illustration-highlight/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="w-full min-w-2xl max-w-7xl relative z-10">

      <!-- Statistics Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <!-- Stat 1: Projects Completed -->
        <div class="stat-card group" ref="stat1">
          <div class="stat-icon">
            <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
            </svg>
          </div>
          <div class="stat-number" data-target="15">0</div>
          <div class="stat-suffix">+</div>
          <h3 class="stat-title">Projects Completed</h3>
          <p class="stat-description">Successfully delivered web and mobile applications with modern technologies</p>
          <div class="stat-progress">
            <div class="stat-progress-bar" style="width: 85%;"></div>
          </div>
        </div>

        <!-- Stat 2: Happy Clients -->
        <div class="stat-card group" ref="stat2">
          <div class="stat-icon">
            <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
            </svg>
          </div>
          <div class="stat-number" data-target="8">0</div>
          <div class="stat-suffix">+</div>
          <h3 class="stat-title">Happy Clients</h3>
          <p class="stat-description">Satisfied clients with quality solutions and excellent communication</p>
          <div class="stat-progress">
            <div class="stat-progress-bar" style="width: 95%;"></div>
          </div>
        </div>

        <!-- Stat 3: Years Experience -->
        <div class="stat-card group" ref="stat3">
          <div class="stat-icon">
            <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
          <div class="stat-number" data-target="2">0</div>
          <div class="stat-suffix">+</div>
          <h3 class="stat-title">Years Experience</h3>
          <p class="stat-description">Continuous learning and professional growth in web development</p>
          <div class="stat-progress">
            <div class="stat-progress-bar" style="width: 70%;"></div>
          </div>
        </div>

        <!-- Stat 4: Code Commits -->
        <div class="stat-card group" ref="stat4">
          <div class="stat-icon">
            <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </div>
          <div class="stat-number" data-target="500">0</div>
          <div class="stat-suffix">+</div>
          <h3 class="stat-title">Code Commits</h3>
          <p class="stat-description">Lines of code written and committed to various projects</p>
          <div class="stat-progress">
            <div class="stat-progress-bar" style="width: 80%;"></div>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="text-center mt-12 md:mt-16" ref="additionalInfo">
        <div class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 max-w-4xl mx-auto">
          <h3 class="text-xl md:text-2xl font-semibold text-headline mb-4">
            Always Growing, Always Learning
          </h3>
          <p class="text-paragraph leading-relaxed">
            These numbers represent my journey so far, but I'm always looking forward to new challenges and opportunities. 
            Every project teaches me something new, and every client interaction helps me grow as a developer and professional.
          </p>
          <div class="flex justify-center mt-6">
            <div class="flex items-center space-x-2 text-button">
              <div class="w-2 h-2 bg-button rounded-full animate-pulse"></div>
              <span class="text-sm font-medium">Currently available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statistics',
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      // Check if GSAP is available
      if (typeof this.$gsap !== 'undefined' && typeof this.$ScrollTrigger !== 'undefined') {
        const gsap = this.$gsap
        const ScrollTrigger = this.$ScrollTrigger

        // Animate header
        gsap.fromTo(this.$refs.header, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.header,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Animate statistics cards
        gsap.fromTo([this.$refs.stat1, this.$refs.stat2, this.$refs.stat3, this.$refs.stat4], 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: this.$refs.stat1,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              onEnter: () => this.animateNumbers()
            }
          }
        )

        // Animate additional info
        gsap.fromTo(this.$refs.additionalInfo, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.additionalInfo,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    },
    animateNumbers() {
      const numberElements = document.querySelectorAll('.stat-number')
      
      numberElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'))
        let current = 0
        const increment = target / 50 // Adjust speed here
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          element.textContent = Math.floor(current)
        }, 30)
      })

      // Animate progress bars
      const progressBars = document.querySelectorAll('.stat-progress-bar')
      progressBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.transform = 'scaleX(1)'
        }, index * 200)
      })
    }
  }
}
</script>

<style scoped>
/* Statistics Card Styles */
.stat-card {
  background-color: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(63, 63, 70, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  border-color: rgba(0, 255, 0, 0.5);
  transform: translateY(-0.5rem);
  box-shadow: 0 25px 50px -12px rgba(0, 255, 0, 0.1);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.stat-card:hover::before {
  transform: translateX(100%);
}

.stat-icon {
  width: 4rem;
  height: 4rem;
  background-color: rgba(0, 255, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
  transition: all 0.3s ease;
}

.group:hover .stat-icon {
  background-color: rgba(0, 255, 0, 0.2);
  transform: scale(1.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #00ff00;
  margin-bottom: 0.25rem;
  font-family: 'Courier New', monospace;
  transition: transform 0.3s ease;
}

.group:hover .stat-number {
  transform: scale(1.1);
}

.stat-suffix {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(0, 255, 0, 0.7);
  display: inline-block;
  transition: color 0.3s ease;
}

.group:hover .stat-suffix {
  color: #00ff00;
}

.stat-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.group:hover .stat-title {
  color: #00ff00;
}

.stat-description {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.625;
  margin-bottom: 1rem;
}

.stat-progress {
  width: 100%;
  height: 0.25rem;
  background-color: rgba(63, 63, 70, 0.5);
  border-radius: 9999px;
  overflow: hidden;
}

.stat-progress-bar {
  height: 100%;
  background: linear-gradient(to right, #00ff00, #00cc00);
  border-radius: 9999px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s ease-out;
}

/* Background Animation */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

/* Pulse Animation */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .stat-card {
    padding: 1rem;
  }
  
  .stat-card:hover {
    transform: translateY(0);
  }
  
  .stat-icon {
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.75rem;
  }
  
  .stat-number {
    font-size: 1.875rem;
  }
  
  .stat-suffix {
    font-size: 1.25rem;
  }
  
  .stat-title {
    font-size: 1rem;
  }
  
  .stat-description {
    font-size: 0.75rem;
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media (min-width: 768px) {
  .stat-card {
    padding: 2rem;
  }
  
  .stat-number {
    font-size: 3rem;
  }
  
  .stat-suffix {
    font-size: 1.875rem;
  }
  
  .stat-title {
    font-size: 1.25rem;
  }
}
</style>
