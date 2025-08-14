<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-background px-4 py-24 relative overflow-hidden">
    <div class="grid lg:grid-cols-2 gap-16 items-center w-full min-w-2xl max-w-7xl">
      <!-- Left Column - Content -->
      <div>
        <!-- Large Typography -->
        <h1 class="text-8xl font-extrabold text-headline leading-tight mb-8" ref="headline">
          Rafly Dev
        </h1>
        <h2 class="text-4xl font-semibold text-button mb-12" ref="subheadline">
          Frontend Web Developer & Flutter Developer
        </h2>
        <p class="text-xl text-paragraph max-w-3xl mb-16" ref="description">
          I build modern web and mobile applications with Flutter & Laravel, creating seamless user experiences.
        </p>

        <!-- CTA Buttons -->
        <div class="flex space-x-8" ref="buttons">
          <button class="btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Hire Me
          </button>
          <button class="btn-secondary px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Download CV
          </button>
        </div>
      </div>

      <!-- Right Column - Enhanced Illustration -->
      <div class="relative flex justify-center items-center" ref="illustration">
        <!-- Main Illustration Container -->
        <div class="relative w-[500px] h-[500px]">
          <!-- Background Gradient Circles -->
          <div class="absolute inset-0 bg-gradient-to-br from-button/30 to-illustration-highlight/30 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-illustration-highlight/20 to-button/20 rounded-full blur-2xl animate-float"></div>
          
          <!-- Floating Tech Icons -->
          <div class="absolute top-12 left-16 w-16 h-16 bg-gray-800/90 rounded-xl border border-button/50 backdrop-blur-sm animate-float flex items-center justify-center">
            <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          <div class="absolute top-20 right-12 w-14 h-14 bg-gray-800/90 rounded-xl border border-illustration-highlight/50 backdrop-blur-sm animate-float-delayed flex items-center justify-center">
            <svg class="w-7 h-7 text-illustration-highlight" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>

          <!-- Code Editor Windows -->
          <div class="absolute top-24 left-8 w-40 h-28 bg-gray-900/95 rounded-lg border border-button/30 backdrop-blur-sm animate-float shadow-2xl">
            <div class="flex items-center space-x-2 p-2 border-b border-gray-700">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="p-3 space-y-1">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-purple-400 rounded"></div>
                <div class="w-12 h-1.5 bg-button rounded"></div>
              </div>
              <div class="flex items-center space-x-2 ml-4">
                <div class="w-8 h-1.5 bg-paragraph rounded"></div>
                <div class="w-4 h-1.5 bg-illustration-highlight rounded"></div>
              </div>
              <div class="flex items-center space-x-2 ml-4">
                <div class="w-6 h-1.5 bg-green-400 rounded"></div>
              </div>
            </div>
          </div>
          
          <div class="absolute bottom-32 right-8 w-36 h-24 bg-gray-900/95 rounded-lg border border-illustration-highlight/30 backdrop-blur-sm animate-float-delayed shadow-2xl">
            <div class="flex items-center space-x-2 p-2 border-b border-gray-700">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="p-2 space-y-1">
              <div class="flex items-center space-x-1">
                <div class="w-1.5 h-1.5 bg-blue-400 rounded"></div>
                <div class="w-10 h-1 bg-illustration-highlight rounded"></div>
              </div>
              <div class="flex items-center space-x-1 ml-3">
                <div class="w-6 h-1 bg-paragraph rounded"></div>
                <div class="w-3 h-1 bg-button rounded"></div>
              </div>
            </div>
          </div>

          <!-- Central Developer Avatar -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative">
              <!-- Rotating Ring -->
              <div class="absolute inset-0 w-32 h-32 border-4 border-button/30 rounded-full animate-spin-slow"></div>
              <div class="absolute inset-2 w-28 h-28 border-2 border-illustration-highlight/20 rounded-full animate-reverse-spin"></div>
              
              <!-- Avatar Container -->
              <div class="relative w-24 h-24 bg-gradient-to-br from-button to-illustration-highlight rounded-full flex items-center justify-center shadow-2xl">
                <svg class="w-12 h-12 text-buttonText" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 21H5V3H13V9H19V21Z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Floating Particles -->
          <div class="absolute top-16 right-20 w-2 h-2 bg-button rounded-full animate-float opacity-60"></div>
          <div class="absolute bottom-24 left-20 w-1.5 h-1.5 bg-illustration-highlight rounded-full animate-float-delayed opacity-40"></div>
          <div class="absolute top-32 left-32 w-1 h-1 bg-paragraph rounded-full animate-float opacity-50"></div>
          
          <!-- Connection Lines -->
          <div class="absolute top-28 left-24 w-16 h-0.5 bg-gradient-to-r from-button/50 to-transparent animate-pulse"></div>
          <div class="absolute bottom-40 right-20 w-12 h-0.5 bg-gradient-to-l from-illustration-highlight/50 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Background Decorative Elements with Glassmorphism -->
    <div class="absolute top-10 right-10 w-24 h-24 bg-button/20 rounded-full blur-2xl opacity-60 animate-float"></div>
    <div class="absolute bottom-20 left-20 w-32 h-32 bg-illustration-highlight/20 rounded-full blur-3xl opacity-50 animate-float-delayed"></div>
    <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-paragraph/15 rounded-full blur-xl opacity-40 animate-float"></div>
    
    <!-- Additional Glassmorphism Elements -->
    <div class="absolute top-1/3 left-16 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-float-delayed opacity-30"></div>
    <div class="absolute bottom-1/3 right-20 w-18 h-18 bg-white/3 backdrop-blur-sm rounded-full border border-button/20 animate-float opacity-25"></div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      const gsap = this.$gsap
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline.from(this.$refs.headline, { y: 100, opacity: 0, duration: 1 })
              .from(this.$refs.subheadline, { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
              .from(this.$refs.description, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
              .from(this.$refs.buttons, { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.5")
    }
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes reverse-spin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 4s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-reverse-spin {
  animation: reverse-spin 6s linear infinite;
}
</style>
