<template>
  <section id="skills" class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center skills-section">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Technology Stack Slider -->
      <div class="flex justify-center">
        <div class="relative overflow-hidden rounded-2xl py-8 px-12 backdrop-blur-sm shadow-2xl">
          <!-- Slider Track -->
          <div class="flex animate-slide-infinite gap-8">
            <!-- First set of icons -->
            <div class="flex gap-8 flex-shrink-0">
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/Figma-logo.png" alt="Figma" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/25 hover:border-yellow-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/javascript-logo.png" alt="JavaScript" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 hover:border-orange-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/HTML-logo.png" alt="HTML" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/25 hover:border-red-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/laravel-logo.png" alt="Laravel" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/Flutter-logo.png" alt="Flutter" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-blue-600/25 hover:border-blue-500/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/Wordpress_Blue_logo.png" alt="WordPress" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
            </div>
            
            <!-- Duplicate set for seamless loop -->
            <div class="flex gap-8 flex-shrink-0">
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/Figma-logo.png" alt="Figma" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/25 hover:border-yellow-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/javascript-logo.png" alt="JavaScript" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 hover:border-orange-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/HTML-logo.png" alt="HTML" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/25 hover:border-red-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/laravel-logo.png" alt="Laravel" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-400/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/Flutter-logo.png" alt="Flutter" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded">
              </div>
              <div class="group w-32 h-32 bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-600/50 shadow-xl hover:shadow-2xl hover:shadow-blue-600/25 hover:border-blue-500/60 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/src/assets/images/Wordpress_Blue_logo.png" alt="WordPress" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 rounded-full">
              </div>
            </div>
          </div>
          
          <!-- Subtle gradient overlays for fade effect -->
          <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
          <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
/* Enhanced Slider Animation */
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

/* Smooth transitions for all interactive elements */
.group {
  position: relative;
  overflow: hidden;
}

.group::before {
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

.group:hover::before {
  left: 100%;
}

/* Enhanced shadow effects */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-slide-infinite {
    animation-duration: 20s;
  }
  
  .group {
    width: 4.5rem;
    height: 4.5rem;
  }
  
  .group img {
    width: 2.25rem;
    height: 2.25rem;
  }
  
  .flex.gap-8 {
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .group {
    width: 4rem;
    height: 4rem;
  }
  
  .group img {
    width: 2rem;
    height: 2rem;
  }
  
  .flex.gap-8 {
    gap: 1rem;
  }
}

/* Performance optimizations */
.animate-slide-infinite {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.group {
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
