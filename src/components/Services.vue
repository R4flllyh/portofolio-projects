<template>
  <section id="services" class="bg-thirdBackground px-4 py-16 md:py-24 flex justify-center services-section">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16 flex items-center gap-10" ref="header">
        <h2 class="text-xl md:text-4xl font-normal font-mono text-headline">
          02 - My Services
        </h2>
        <img 
          id="scramble-cursor" 
          src="https://assets.codepen.io/16327/scramble-cursor.png" 
          alt="Decorative cursor" 
          class="w-14 object-contain animate-bounce-slow" 
        />
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="service-card group" 
          :ref="`service${index + 1}`"
        >
          <!-- Service Icon -->
          <div class="service-icon">
            <component :is="'svg'" class="w-8 h-8 text-secondBackground" fill="currentColor" viewBox="0 0 24 24">
              <path :d="service.iconPath"/>
            </component>
          </div>

          <!-- Service Content -->
          <h3 class="service-title">
            {{ service.title }}
          </h3>
          
          <p class="service-description">
            {{ service.description }}
          </p>

          <!-- Tech Stack -->
          <div class="service-tech-stack">
            <span 
              v-for="tech in service.technologies" 
              :key="tech" 
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Service Number -->
          <div class="service-number">{{ String(index + 1).padStart(2, '0') }}</div>

          <!-- Hover Effects -->
          <div class="service-overlay"></div>
          <div class="service-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          id: 'frontend',
          title: 'Frontend Web Development',
          description: 'Building responsive and modern web applications using HTML, CSS, JavaScript, and frameworks like Vue.js and Laravel for dynamic user experiences.',
          technologies: ['Vue.js', 'Laravel', 'Tailwind CSS'],
          iconPath: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z'
        },
        {
          id: 'mobile',
          title: 'Flutter Mobile Development',
          description: 'Creating cross-platform mobile applications with Flutter, delivering native performance and beautiful UI across iOS and Android platforms.',
          technologies: ['Flutter', 'Dart', 'Firebase'],
          iconPath: 'M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z'
        },
        {
          id: 'design',
          title: 'UI/UX Design',
          description: 'Designing intuitive and visually appealing user interfaces with Figma, focusing on user experience and creating design systems.',
          technologies: ['Figma', 'Adobe XD', 'Prototyping'],
          iconPath: 'M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V19H19V9Z'
        }
      ]
    }
  },
  mounted() {
    this.initAnimations()
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

        // Service cards animation
        const serviceRefs = this.services.map((_, index) => this.$refs[`service${index + 1}`]).flat()
        gsap.fromTo(serviceRefs, 
          { 
            y: 60, 
            opacity: 0,
            rotationX: 15
          },
          { 
            y: 0, 
            opacity: 1,
            rotationX: 0,
            duration: 0.8, 
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: serviceRefs[0],
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Add individual hover animations
        serviceRefs.forEach((ref) => {
          if (ref) {
            ref.addEventListener('mouseenter', () => {
              gsap.to(ref.querySelector('.service-glow'), {
                scale: 1.2,
                opacity: 0.4,
                duration: 0.3
              })
            })

            ref.addEventListener('mouseleave', () => {
              gsap.to(ref.querySelector('.service-glow'), {
                scale: 1,
                opacity: 0.2,
                duration: 0.3
              })
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>
/* Service Card Base Styles */
.service-card {
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(17, 24, 39, 0.8));
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(63, 63, 70, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  transform-style: preserve-3d;
}

.service-card:hover {
  border-color: rgba(156, 254, 79, 0.5);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    0 0 20px rgba(156, 254, 79, 0.1);
  transform: translateY(-8px) rotateX(2deg);
}

/* Service Icon */
.service-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.1), rgba(156, 254, 79, 0.05));
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(156, 254, 79, 0.2);
}

.group:hover .service-icon {
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.2), rgba(156, 254, 79, 0.1));
  transform: scale(1.1) rotateY(5deg);
  border-color: rgba(156, 254, 79, 0.4);
}

/* Service Title */
.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  line-height: 1.3;
}

.group:hover .service-title {
  color: #9cfe4f;
}

/* Service Description */
.service-description {
  color: #a7a9be;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
}

.group:hover .service-description {
  color: #ffffff;
}

/* Tech Stack */
.service-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  padding: 0.375rem 0.75rem;
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.1), rgba(156, 254, 79, 0.05));
  color: #9cfe4f;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid rgba(156, 254, 79, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.2), rgba(156, 254, 79, 0.1));
  border-color: rgba(156, 254, 79, 0.4);
  transform: translateY(-1px);
}

/* Service Number */
.service-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 4rem;
  font-weight: 700;
  color: rgba(156, 254, 79, 0.1);
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  line-height: 1;
}

.group:hover .service-number {
  color: rgba(156, 254, 79, 0.2);
  transform: scale(1.1);
}

/* Service Overlay Effects */
.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #9cfe4f, transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.service-card:hover .service-overlay {
  transform: translateX(100%);
}

.service-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(156, 254, 79, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  transition: all 0.3s ease;
  pointer-events: none;
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
    padding: 1.5rem;
  }
  
  .service-number {
    font-size: 2.5rem;
    top: 1rem;
    right: 1rem;
  }
  
  .service-icon {
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
  }
  
  .service-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  .service-description {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  
  .tech-tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
}

@media (max-width: 640px) {
  .service-card:hover {
    transform: translateY(-4px);
  }
  
  .service-number {
    font-size: 2rem;
  }
}

/* Performance Optimizations */
.service-card {
  will-change: transform;
  backface-visibility: hidden;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .service-card {
    transition-duration: 0.2s;
  }
  
  .service-card:hover {
    transform: translateY(-2px);
  }
  
  .animate-bounce-slow {
    animation: none;
  }
}

/* Focus states */
.service-card:focus {
  outline: 2px solid #9cfe4f;
  outline-offset: 2px;
}

/* Enhanced visual depth */
.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.service-card:hover::before {
  opacity: 1;
}
</style>
