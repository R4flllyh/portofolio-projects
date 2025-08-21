<template>
  <section id="services" class="bg-thirdBackground px-4 py-16 md:py-24 flex justify-center services-section">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16 flex items-center gap-10" ref="header">
        <h2 class="text-xl md:text-4xl font-normal font-mono text-headline">
          02 - My Services
        </h2>
        <img id="scramble-cursor" src="https://assets.codepen.io/16327/scramble-cursor.png" alt="" class="w-14 object-contain animate-bounce-slow" />
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <!-- Service 1: Frontend Web Development -->
        <div class="service-card group" ref="service1">
          <div class="service-icon">
            <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-headline group-hover:text-button transition-colors duration-300">
            Frontend Web Development
          </h3>
          <p class="text-paragraph text-sm md:text-base leading-relaxed mb-4">
            Building responsive and modern web applications using HTML, CSS, JavaScript, and frameworks like Vue.js and Laravel for dynamic user experiences.
          </p>
          <div class="service-tech-stack">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Laravel</span>
            <span class="tech-tag">Tailwind CSS</span>
          </div>
          <div class="service-number">01</div>
        </div>

        <!-- Service 2: Flutter Mobile Development -->
        <div class="service-card group" ref="service2">
          <div class="service-icon">
            <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z"/>
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-headline group-hover:text-button transition-colors duration-300">
            Flutter Mobile Development
          </h3>
          <p class="text-paragraph text-sm md:text-base leading-relaxed mb-4">
            Creating cross-platform mobile applications with Flutter, delivering native performance and beautiful UI across iOS and Android platforms.
          </p>
          <div class="service-tech-stack">
            <span class="tech-tag">Flutter</span>
            <span class="tech-tag">Dart</span>
            <span class="tech-tag">Firebase</span>
          </div>
          <div class="service-number">02</div>
        </div>

        <!-- Service 3: UI/UX Design -->
        <div class="service-card group" ref="service3">
          <div class="service-icon">
            <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V19H19V9Z"/>
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-headline group-hover:text-button transition-colors duration-300">
            UI/UX Design
          </h3>
          <p class="text-paragraph text-sm md:text-base leading-relaxed mb-4">
            Designing intuitive and visually appealing user interfaces with Figma, focusing on user experience and creating design systems.
          </p>
          <div class="service-tech-stack">
            <span class="tech-tag">Figma</span>
            <span class="tech-tag">Adobe XD</span>
            <span class="tech-tag">Prototyping</span>
          </div>
          <div class="service-number">03</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
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

        // Animate service cards
        gsap.fromTo([this.$refs.service1, this.$refs.service2, this.$refs.service3], 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: this.$refs.service1,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }
  }
}
</script>

<style scoped>
/* Service Card Styles */
.service-card {
  background-color: #0a0a0a;
  border-radius: 0.75rem;
  padding: 1.5rem 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(63, 63, 70, 0.3);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  cursor: pointer;
}

.service-card:hover {
  border-color: rgba(0, 255, 0, 0.5);
  box-shadow: 0 10px 25px -3px rgba(0, 255, 0, 0.1);
  transform: translateY(-0.5rem);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.service-card:hover::before {
  transform: translateX(100%);
}

.service-icon {
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 255, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
}

.group:hover .service-icon {
  background-color: rgba(0, 255, 0, 0.2);
}

.service-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background-color: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-size: 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(0, 255, 0, 0.2);
  transition: background-color 0.3s ease;
}

.tech-tag:hover {
  background-color: rgba(0, 255, 0, 0.2);
}

.service-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3.75rem;
  font-weight: 700;
  color: rgba(0, 255, 0, 0.1);
  font-family: 'Courier New', monospace;
  transition: color 0.3s ease;
}

.group:hover .service-number {
  color: rgba(0, 255, 0, 0.2);
}

/* Bounce Animation */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

/* Responsive Design */
@media (max-width: 768px) {
  .service-card {
    padding: 1rem;
  }
  
  .service-number {
    font-size: 2.25rem;
    top: 0.5rem;
    right: 0.5rem;
  }
  
  .service-icon {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 0.75rem;
  }
  
  .tech-tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
}

@media (min-width: 768px) {
  .service-card {
    padding: 2rem;
  }
}
</style>
