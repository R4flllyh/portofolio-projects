<template>
  <section id="skills" class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center skills-section">
    <div class="w-full">
      <!-- Technology Stack Slider -->
      <div class="flex justify-center">
        <div class="relative overflow-hidden rounded-2xl py-8 px-12 backdrop-blur-sm shadow-2xl">
          <!-- Slider Track -->
          <div class="flex animate-slide-infinite gap-10">
            <!-- First set of icons -->
            <div class="flex gap-10 flex-shrink-0">
              <div 
                v-for="(tech, index) in technologies" 
                :key="`first-${index}`"
                class="tech-card group"
                :class="tech.hoverColor"
              >
                <div class="tech-overlay" :class="tech.overlayColor"></div>
                <img 
                  :src="tech.image" 
                  :alt="tech.name" 
                  class="tech-image"
                  loading="lazy"
                >
              </div>
            </div>

            <!-- Duplicate set for seamless loop -->
            <div class="flex gap-10 flex-shrink-0">
              <div 
                v-for="(tech, index) in technologies" 
                :key="`second-${index}`"
                class="tech-card group"
                :class="tech.hoverColor"
              >
                <div class="tech-overlay" :class="tech.overlayColor"></div>
                <img 
                  :src="tech.image" 
                  :alt="tech.name" 
                  class="tech-image"
                  loading="lazy"
                >
              </div>
            </div>
          </div>
          
          <!-- Gradient overlays for fade effect -->
          <div class="fade-overlay fade-left"></div>
          <div class="fade-overlay fade-right"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      technologies: [
        {
          name: 'Figma',
          image: '/src/assets/images/Figma-logo.png',
          hoverColor: 'hover:border-purple-400/60',
          overlayColor: 'from-purple-500/10'
        },
        {
          name: 'Git',
          image: '/src/assets/images/git-logo.png',
          hoverColor: 'hover:border-orange-400/60',
          overlayColor: 'from-orange-500/10'
        },
        {
          name: 'JavaScript',
          image: '/src/assets/images/javascript-logo.png',
          hoverColor: 'hover:border-yellow-400/60',
          overlayColor: 'from-yellow-500/10'
        },
        {
          name: 'HTML',
          image: '/src/assets/images/HTML-logo.png',
          hoverColor: 'hover:border-orange-400/60',
          overlayColor: 'from-orange-500/10'
        },
        {
          name: 'CSS',
          image: '/src/assets/images/CSS-logo.png',
          hoverColor: 'hover:border-blue-400/60',
          overlayColor: 'from-blue-500/10'
        },
        {
          name: 'Laravel',
          image: '/src/assets/images/laravel-logo.png',
          hoverColor: 'hover:border-red-400/60',
          overlayColor: 'from-red-500/10'
        },
        {
          name: 'Tailwind CSS',
          image: '/src/assets/images/tailwind-logo.png',
          hoverColor: 'hover:border-cyan-400/60',
          overlayColor: 'from-cyan-500/10'
        },
        {
          name: 'Flutter',
          image: '/src/assets/images/Flutter-logo.png',
          hoverColor: 'hover:border-blue-400/60',
          overlayColor: 'from-blue-500/10'
        },
        {
          name: 'Dart',
          image: '/src/assets/images/dart-logo.png',
          hoverColor: 'hover:border-blue-400/60',
          overlayColor: 'from-blue-500/10'
        },
        {
          name: 'WordPress',
          image: '/src/assets/images/Wordpress_Blue_logo.png',
          hoverColor: 'hover:border-blue-500/60',
          overlayColor: 'from-blue-600/10'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Tech Card Base Styles */
.tech-card {
  width: 8rem;
  height: 8rem;
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.95));
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(63, 63, 70, 0.5);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.tech-card:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
}

/* Tech Image */
.tech-image {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
}

.group:hover .tech-image {
  transform: scale(1.1);
}

/* Tech Overlay */
.tech-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--tw-gradient-from), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.group:hover .tech-overlay {
  opacity: 1;
}

/* Shimmer Effect */
.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
  transition: left 0.6s ease;
  z-index: 5;
}

.tech-card:hover::before {
  left: 100%;
}

/* Slider Animation */
@keyframes slide-infinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-slide-infinite {
  animation: slide-infinite 25s linear infinite;
  will-change: transform;
}

.animate-slide-infinite:hover {
  animation-play-state: paused;
}

/* Fade Overlays */
.fade-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 5rem;
  pointer-events: none;
  z-index: 10;
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, #0a0a0a, rgba(10, 10, 10, 0.8), transparent);
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, #0a0a0a, rgba(10, 10, 10, 0.8), transparent);
}

/* Responsive Design */
@media (max-width: 768px) {
  .animate-slide-infinite {
    animation-duration: 20s;
  }
  
  .tech-card {
    width: 4.5rem;
    height: 4.5rem;
  }
  
  .tech-image {
    width: 2.25rem;
    height: 2.25rem;
  }
  
  .flex.gap-10 {
    gap: 1.5rem;
  }
  
  .fade-overlay {
    width: 3rem;
  }
}

@media (max-width: 640px) {
  .tech-card {
    width: 4rem;
    height: 4rem;
  }
  
  .tech-image {
    width: 2rem;
    height: 2rem;
  }
  
  .flex.gap-10 {
    gap: 1rem;
  }
  
  .fade-overlay {
    width: 2rem;
  }
}

/* Performance Optimizations */
.animate-slide-infinite {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.tech-card {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Enhanced Shadow Effects */
.tech-card:hover {
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-infinite {
    animation-duration: 60s;
  }
  
  .tech-card {
    transition-duration: 0.2s;
  }
  
  .tech-card:hover {
    transform: scale(1.05);
  }
}

/* Focus states for accessibility */
.tech-card:focus {
  outline: 2px solid #9cfe4f;
  outline-offset: 2px;
}
</style>
