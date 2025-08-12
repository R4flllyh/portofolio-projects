<template>
  <section id="process" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <h2 class="text-6xl font-extrabold mb-12 max-w-4xl text-center" ref="headline">
        My Work Process
      </h2>
      <p class="text-xl text-paragraph text-center mb-16 max-w-3xl mx-auto" ref="description">
        I follow a structured approach to ensure your project is delivered with the highest quality and meets all your requirements.
      </p>

      <div class="grid md:grid-cols-4 gap-8">
        <!-- Step 1 -->
        <div class="text-center relative" ref="step1">
          <div class="relative mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-button to-illustration-highlight rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <svg class="w-10 h-10 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-button rounded-full flex items-center justify-center text-buttonText font-bold text-sm">
              1
            </div>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Discovery</h3>
          <p class="text-paragraph">
            Understanding your requirements, goals, and target audience to create the perfect solution.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="text-center relative" ref="step2">
          <div class="relative mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-button to-illustration-highlight rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <svg class="w-10 h-10 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-button rounded-full flex items-center justify-center text-buttonText font-bold text-sm">
              2
            </div>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Planning</h3>
          <p class="text-paragraph">
            Creating detailed wireframes, choosing the right technology stack, and planning the development timeline.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="text-center relative" ref="step3">
          <div class="relative mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-button to-illustration-highlight rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <svg class="w-10 h-10 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-button rounded-full flex items-center justify-center text-buttonText font-bold text-sm">
              3
            </div>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Development</h3>
          <p class="text-paragraph">
            Writing clean, efficient code using best practices and keeping you updated throughout the process.
          </p>
        </div>

        <!-- Step 4 -->
        <div class="text-center relative" ref="step4">
          <div class="relative mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-button to-illustration-highlight rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <svg class="w-10 h-10 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-button rounded-full flex items-center justify-center text-buttonText font-bold text-sm">
              4
            </div>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Launch</h3>
          <p class="text-paragraph">
            Testing, optimization, deployment, and providing ongoing support to ensure everything runs smoothly.
          </p>
        </div>
      </div>

      <!-- Process Flow Lines -->
      <div class="hidden md:block relative mt-16">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-button via-illustration-highlight to-button opacity-30 rounded-full"></div>
        <div class="flex justify-between items-center">
          <div class="w-4 h-4 bg-button rounded-full"></div>
          <div class="w-4 h-4 bg-button rounded-full"></div>
          <div class="w-4 h-4 bg-button rounded-full"></div>
          <div class="w-4 h-4 bg-button rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Process',
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

      // Animate description
      gsap.fromTo(this.$refs.description, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.description,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate steps
      gsap.fromTo([this.$refs.step1, this.$refs.step2, this.$refs.step3, this.$refs.step4], 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: this.$refs.step1,
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
</style>
