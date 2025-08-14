<template>
  <section id="why-choose-me" class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <!-- Left Column - Content -->
        <div class="text-center lg:text-left">
          <h2 class="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 md:mb-8 max-w-4xl mx-auto lg:mx-0" ref="headline">
            Why Choose Me For Your Next Project?
          </h2>
          <p class="text-lg md:text-xl text-paragraph mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0" ref="description">
            I bring dedication, expertise, and a passion for creating exceptional digital solutions that help your business grow.
          </p>
          
          <div class="space-y-6 md:space-y-8" ref="features">
            <div class="flex items-start space-x-3 md:space-x-4 text-left">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-button to-illustration-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-semibold mb-2">Quality Assurance</h3>
                <p class="text-paragraph">Every project is thoroughly tested and optimized for the best performance and user experience.</p>
              </div>
            </div>

            <div class="flex items-start space-x-3 md:space-x-4 text-left">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-button to-illustration-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg md:text-2xl font-semibold mb-1 md:mb-2">On-Time Delivery</h3>
                <p class="text-paragraph text-sm md:text-base">I respect deadlines and ensure your project is completed within the agreed timeframe.</p>
              </div>
            </div>

            <div class="flex items-start space-x-3 md:space-x-4 text-left">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-button to-illustration-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg md:text-2xl font-semibold mb-1 md:mb-2">24/7 Support</h3>
                <p class="text-paragraph text-sm md:text-base">Continuous support and maintenance to keep your applications running smoothly.</p>
              </div>
            </div>
          </div>

          <div class="mt-8 md:mt-12 text-center lg:text-left">
            <button class="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold hover:scale-105 transition-transform duration-300">
              Start Your Project
            </button>
          </div>
        </div>

        <!-- Right Column - Illustration -->
        <div class="relative flex justify-center items-center mt-12 lg:mt-0" ref="illustration">
          <div class="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <!-- Background Elements -->
            <div class="absolute inset-0 bg-gradient-to-br from-button/20 to-illustration-highlight/20 rounded-full blur-3xl animate-pulse"></div>
            
            <!-- Success Metrics Cards - Mobile Optimized -->
            <div class="absolute top-4 left-4 md:top-8 md:left-8 bg-gray-800/90 rounded-lg md:rounded-xl p-2 md:p-4 backdrop-blur-sm animate-float shadow-2xl">
              <div class="flex items-center space-x-2 md:space-x-3">
                <div class="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs md:text-sm font-semibold text-headline">100% Success</div>
                  <div class="text-xs text-paragraph hidden md:block">Project Completion</div>
                </div>
              </div>
            </div>

            <div class="absolute top-16 right-2 md:top-20 md:right-12 bg-gray-800/90 rounded-lg md:rounded-xl p-2 md:p-4 backdrop-blur-sm animate-float-delayed shadow-2xl">
              <div class="flex items-center space-x-2 md:space-x-3">
                <div class="w-6 h-6 md:w-8 md:h-8 bg-button rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs md:text-sm font-semibold text-headline">5.0 Rating</div>
                  <div class="text-xs text-paragraph hidden md:block">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div class="absolute bottom-12 left-2 md:bottom-16 md:left-12 bg-gray-800/90 rounded-lg md:rounded-xl p-2 md:p-4 backdrop-blur-sm animate-float shadow-2xl">
              <div class="flex items-center space-x-2 md:space-x-3">
                <div class="w-6 h-6 md:w-8 md:h-8 bg-illustration-highlight rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs md:text-sm font-semibold text-headline">Fast Delivery</div>
                  <div class="text-xs text-paragraph hidden md:block">Always On Time</div>
                </div>
              </div>
            </div>

            <!-- Central Element -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <div class="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-button to-illustration-highlight rounded-full flex items-center justify-center shadow-2xl">
                  <svg class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-buttonText" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Floating Particles - Hidden on mobile for cleaner look -->
            <div class="absolute top-24 right-6 w-1.5 h-1.5 md:w-2 md:h-2 bg-button rounded-full animate-float opacity-60 hidden md:block"></div>
            <div class="absolute bottom-24 left-16 w-1 h-1 md:w-1.5 md:h-1.5 bg-illustration-highlight rounded-full animate-float-delayed opacity-40 hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyChooseMe',
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

      // Animate features
      gsap.fromTo(this.$refs.features, 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.features,
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

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 4s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
