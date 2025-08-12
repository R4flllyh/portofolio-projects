<template>
  <section id="skills" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <h2 class="text-6xl font-extrabold mb-12 max-w-4xl" ref="headline">
        My Skills
      </h2>
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Column - Skills List -->
        <div ref="skillList">
          <div v-for="skill in skills" :key="skill.name" class="mb-8">
            <h3 class="text-3xl font-semibold mb-2">{{ skill.name }}</h3>
            <div class="w-full bg-gray-800 rounded-full h-6">
              <div 
                class="bg-button h-6 rounded-full transition-all duration-1000"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Right Column - Enhanced Illustration -->
        <div class="relative flex justify-center items-center" ref="illustration">
          <!-- Main Illustration Container -->
          <div class="relative w-[450px] h-[450px]">
            <!-- Background Gradient Circles -->
            <div class="absolute inset-0 bg-gradient-to-br from-button/20 to-illustration-highlight/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute top-12 right-12 w-24 h-24 bg-gradient-to-br from-illustration-highlight/15 to-button/15 rounded-full blur-2xl animate-float"></div>
            
            <!-- Technology Stack Icons -->
            <div class="absolute top-16 left-12 w-20 h-20 bg-gray-800/90 rounded-2xl border border-button/40 backdrop-blur-sm animate-float flex items-center justify-center shadow-2xl">
              <!-- Vue.js Icon -->
              <svg class="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
              </svg>
            </div>
            
            <div class="absolute top-20 right-16 w-18 h-18 bg-gray-800/90 rounded-2xl border border-illustration-highlight/40 backdrop-blur-sm animate-float-delayed flex items-center justify-center shadow-2xl">
              <!-- React Icon -->
              <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95"/>
              </svg>
            </div>

            <!-- Development Tools -->
            <div class="absolute bottom-20 left-8 w-24 h-16 bg-gray-900/95 rounded-xl border border-button/30 backdrop-blur-sm animate-float shadow-2xl">
              <div class="flex items-center justify-center h-full">
                <!-- Terminal Icon -->
                <svg class="w-8 h-8 text-button" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,19V7H4V19H20M20,3A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5C2,3.89 2.9,3 4,3H20M13,17V15H18V17H13M9.58,13L5.57,9H8.4L11.7,12.3C12.09,12.69 12.09,13.33 11.7,13.72L8.42,17H5.59L9.58,13Z"/>
                </svg>
              </div>
            </div>

            <div class="absolute bottom-24 right-12 w-20 h-20 bg-gray-900/95 rounded-xl border border-illustration-highlight/30 backdrop-blur-sm animate-float-delayed shadow-2xl">
              <div class="flex items-center justify-center h-full">
                <!-- Database Icon -->
                <svg class="w-10 h-10 text-illustration-highlight" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
                </svg>
              </div>
            </div>

            <!-- Central Skills Hub -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <!-- Rotating Skill Rings -->
                <div class="absolute inset-0 w-40 h-40 border-4 border-button/20 rounded-full animate-spin-slow"></div>
                <div class="absolute inset-4 w-32 h-32 border-2 border-illustration-highlight/15 rounded-full animate-reverse-spin"></div>
                <div class="absolute inset-8 w-24 h-24 border border-paragraph/10 rounded-full animate-spin-slow"></div>
                
                <!-- Central Skills Icon -->
                <div class="relative w-32 h-32 bg-gradient-to-br from-button to-illustration-highlight rounded-full flex items-center justify-center shadow-2xl">
                  <svg class="w-16 h-16 text-buttonText" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Floating Code Snippets -->
            <div class="absolute top-32 left-20 w-16 h-12 bg-gray-800/80 rounded-lg border border-green-400/30 backdrop-blur-sm animate-float opacity-70">
              <div class="p-2 space-y-1">
                <div class="w-8 h-1 bg-green-400 rounded"></div>
                <div class="w-6 h-1 bg-blue-400 rounded"></div>
                <div class="w-10 h-1 bg-yellow-400 rounded"></div>
              </div>
            </div>

            <div class="absolute bottom-32 right-20 w-14 h-10 bg-gray-800/80 rounded-lg border border-purple-400/30 backdrop-blur-sm animate-float-delayed opacity-70">
              <div class="p-1.5 space-y-1">
                <div class="w-6 h-0.5 bg-purple-400 rounded"></div>
                <div class="w-8 h-0.5 bg-pink-400 rounded"></div>
                <div class="w-4 h-0.5 bg-indigo-400 rounded"></div>
              </div>
            </div>

            <!-- Floating Particles -->
            <div class="absolute top-24 right-24 w-2 h-2 bg-button rounded-full animate-float opacity-60"></div>
            <div class="absolute bottom-28 left-24 w-1.5 h-1.5 bg-illustration-highlight rounded-full animate-float-delayed opacity-40"></div>
            <div class="absolute top-40 left-40 w-1 h-1 bg-paragraph rounded-full animate-float opacity-50"></div>
            
            <!-- Connection Lines -->
            <div class="absolute top-36 left-32 w-12 h-0.5 bg-gradient-to-r from-button/40 to-transparent animate-pulse"></div>
            <div class="absolute bottom-36 right-32 w-10 h-0.5 bg-gradient-to-l from-illustration-highlight/40 to-transparent animate-pulse"></div>
          </div>

          <!-- Description Text -->
          <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <p class="text-paragraph text-center max-w-sm">
              These are the technologies and tools I use to bring ideas to life.
            </p>
          </div>
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
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Laravel', level: 80 },
        { name: 'WordPress', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'MySQL', level: 70 }
      ]
    }
  },
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger

      // Animate headline
      gsap.fromTo(this.$refs.headline, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.headline,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate skills list
      gsap.fromTo(this.$refs.skillList, 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.skillList,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate illustration
      gsap.fromTo(this.$refs.illustration, 
        { x: 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.illustration,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
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
  animation: spin-slow 10s linear infinite;
}

.animate-reverse-spin {
  animation: reverse-spin 8s linear infinite;
}
</style>
