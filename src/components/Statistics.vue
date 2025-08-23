<template>
  <section id="statistics" class="bg-background text-headline px-4 py-16 md:py-36 flex justify-center statistic-section">
    <div class="w-full min-w-2xl max-w-7xl">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div 
          v-for="(stat, index) in statistics" 
          :key="stat.id"
          class="stat-card text-center group"
          :ref="`stat${index + 1}`"
        >
          <div class="stat-number" ref="numberElement">
            {{ stat.number }}
          </div>
          <h3 class="stat-title">
            {{ stat.title }}
          </h3>
          <p class="stat-description">
            {{ stat.description }}
          </p>
          
          <!-- Decorative elements -->
          <div class="stat-decoration">
            <div class="stat-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statistics',
  data() {
    return {
      statistics: [
        {
          id: 'projects',
          number: '15+',
          title: 'Projects Completed',
          description: 'Successfully delivered web and mobile applications',
          countTo: 15
        },
        {
          id: 'clients',
          number: '8+',
          title: 'Happy Clients',
          description: 'Satisfied clients with quality solutions',
          countTo: 8
        },
        {
          id: 'experience',
          number: '2+',
          title: 'Years Experience',
          description: 'Continuous learning and professional growth',
          countTo: 2
        },
        {
          id: 'support',
          number: '24/7',
          title: 'Support Available',
          description: 'Always ready to help and maintain projects',
          countTo: null // Special case for 24/7
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

        // Animate statistics cards
        const statRefs = this.statistics.map((_, index) => this.$refs[`stat${index + 1}`]).flat()
        
        gsap.fromTo(statRefs, 
          { 
            y: 60, 
            opacity: 0,
            scale: 0.8
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 0.8, 
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: statRefs[0],
              start: "top 85%",
              toggleActions: "play none none reverse",
              onEnter: () => this.animateNumbers()
            }
          }
        )

        // Add hover animations
        statRefs.forEach((ref, index) => {
          if (ref) {
            ref.addEventListener('mouseenter', () => {
              gsap.to(ref.querySelector('.stat-glow'), {
                scale: 1.2,
                opacity: 0.6,
                duration: 0.3,
                ease: "power2.out"
              })
            })

            ref.addEventListener('mouseleave', () => {
              gsap.to(ref.querySelector('.stat-glow'), {
                scale: 1,
                opacity: 0.3,
                duration: 0.3,
                ease: "power2.out"
              })
            })
          }
        })
      }
    },

    animateNumbers() {
      this.statistics.forEach((stat, index) => {
        const element = this.$refs[`stat${index + 1}`]?.[0]?.querySelector('.stat-number')
        if (!element || stat.countTo === null) return

        let current = 0
        const increment = stat.countTo / 30
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.countTo) {
            current = stat.countTo
            clearInterval(timer)
          }
          element.textContent = Math.floor(current) + '+'
        }, 50)
      })
    }
  }
}
</script>

<style scoped>
/* Stat Card Base Styles */
.stat-card {
  position: relative;
  padding: 2rem 1rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.5));
  border: 1px solid rgba(63, 63, 70, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(156, 254, 79, 0.4);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1),
    0 0 20px rgba(156, 254, 79, 0.1);
}

/* Stat Number */
.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #9cfe4f;
  margin-bottom: 1rem;
  line-height: 1;
  text-shadow: 0 0 20px rgba(156, 254, 79, 0.3);
  transition: all 0.3s ease;
}

.group:hover .stat-number {
  transform: scale(1.1);
  text-shadow: 0 0 30px rgba(156, 254, 79, 0.5);
}

/* Stat Title */
.stat-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.group:hover .stat-title {
  color: #9cfe4f;
}

/* Stat Description */
.stat-description {
  font-size: 0.875rem;
  color: #a7a9be;
  line-height: 1.5;
  transition: color 0.3s ease;
}

.group:hover .stat-description {
  color: #ffffff;
}

/* Decorative Elements */
.stat-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.stat-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(156, 254, 79, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
  transition: all 0.3s ease;
}

/* Shimmer Effect */
.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(156, 254, 79, 0.1), transparent);
  transition: left 0.6s ease;
  z-index: 1;
}

.stat-card:hover::before {
  left: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .stat-card {
    padding: 1.5rem 0.75rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }
  
  .stat-title {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  
  .stat-description {
    font-size: 0.75rem;
  }
  
  .stat-glow {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 640px) {
  .stat-card {
    padding: 1rem 0.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-title {
    font-size: 0.875rem;
  }
  
  .stat-description {
    font-size: 0.75rem;
    line-height: 1.4;
  }
}

/* Performance Optimizations */
.stat-card {
  will-change: transform;
  backface-visibility: hidden;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .stat-card {
    transition-duration: 0.2s;
  }
  
  .stat-card:hover {
    transform: translateY(-2px);
  }
  
  .stat-number,
  .stat-title,
  .stat-description {
    transition-duration: 0.2s;
  }
}

/* Focus states */
.stat-card:focus {
  outline: 2px solid #9cfe4f;
  outline-offset: 2px;
}

/* Enhanced visual effects */
.stat-card:hover {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.7));
}

/* Grid enhancements */
@media (min-width: 768px) {
  .stat-number {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .stat-number {
    font-size: 4rem;
  }
  
  .stat-title {
    font-size: 1.25rem;
  }
  
  .stat-description {
    font-size: 1rem;
  }
}
</style>
