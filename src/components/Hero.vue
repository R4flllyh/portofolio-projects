<template>
  <section id="home" class="section-padding bg-background text-headline px-4 py-8 sm:py-16 md:py-24 lg:py-32 flex justify-center hero-section relative overflow-hidden">
    <!-- Decorative Flower Element -->

    <div class="w-full max-w-7xl relative z-20">
      <!-- Mobile Layout: Stack everything vertically -->
      <div class="block lg:hidden">
        <!-- Decorative Element -->
        <div class="flex mb-1 mt-20 gap-4 items-center">
          <h1 class="text-6xl sm:text-4xl font-extrabold text-headline leading-tight text-start" ref="helloText">
            <span class="letter" v-for="(letter, index) in helloLetters" :key="index">{{ letter }}</span>
          </h1>
          <img src="/src/assets/images/element.png" class="w-16 h-16 sm:w-20 sm:h-20 object-contain animate-spin-slow" alt="Decorative Element">
        </div>
        
        <!-- Name Text -->
        <div class="mb-6">
          <h1 class="text-7xl sm:text-6xl font-extrabold text-headline leading-tight text-start" ref="nameText">
            <span class="letter" v-for="(letter, index) in nameLetters" :key="index">{{ letter }}</span>
          </h1>
        </div>
        
        <!-- Content -->
        <div class="text-center">
          <h2 class="text-base sm:text-lg font-semibold mb-3 text-secondBackground text-start" ref="subheadline">
            A Software Engineer passionate about building modern and scalable web applications.
          </h2>
          <p class="text-sm sm:text-base text-paragraph mb-6 leading-relaxed text-start" ref="description">
            Focused on creating scalable and user-friendly web solutions with modern technologies and best practices.
          </p>
          <div class="flex flex-col gap-3" ref="buttons">
            <button class="btn-primary px-6 py-3 text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More
            </button>
            <button class="border-2 border-secondButton text-secondButton px-6 py-3 text-base font-semibold hover:bg-secondButton hover:text-white transition-all duration-300 rounded-lg">
              View Projects
            </button>
          </div>
        </div>
      </div>

      <!-- Desktop Layout: Original design preserved -->
      <div class="hidden lg:block">
        <!-- First Row: Hello Text and Decorative Element -->
        <div class="flex gap-20 items-center mb-0">
          <div class="flex-1">
            <h1 class="text-[140px] xl:text-[190px] font-extrabold text-headline leading-tight" ref="helloText">
              <span class="letter" v-for="(letter, index) in helloLetters" :key="index">{{ letter }}</span>
            </h1>
          </div>
          <div class="flex-shrink-0">
            <img src="/src/assets/images/element.png" class="w-32 h-32 object-contain animate-spin-slow" alt="Decorative Element">
          </div>
        </div>
        
        <!-- Second Row: Content and Name -->
        <div class="flex items-end gap-20 mt-8">
          <div class="flex-1">
            <h2 class="text-xl font-semibold mb-4 text-secondBackground" ref="subheadline">
              A Software Engineer passionate about building modern and scalable web applications.
            </h2>
            <p class="text-lg text-paragraph max-w-3xl mb-10 leading-relaxed" ref="description">
              Focused on creating scalable and user-friendly web solutions with modern technologies and best practices.
            </p>
            <div class="flex gap-4" ref="buttons">
              <button class="btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
              <button class="border-2 border-secondButton text-secondButton px-8 py-4 text-lg font-semibold hover:bg-secondButton hover:text-white transition-all duration-300 rounded-lg">
                View Projects
              </button>
            </div>
          </div>
          <div class="flex-shrink-0">
            <h1 class="text-[160px] xl:text-[210px] font-extrabold text-headline leading-tight text-end" ref="nameText">
              <span class="letter" v-for="(letter, index) in nameLetters" :key="index">{{ letter }}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      helloLetters: "HELLO, I'M".split(''),
      nameLetters: "RAFLY".split('')
    }
  },
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      const gsap = this.$gsap
      
      // Enhanced timeline for text animations
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Animate "HELLO, I'M" with letter-by-letter effect
      timeline.from(this.$refs.helloText.querySelectorAll('.letter'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)"
      })
      // Animate "RAFLY" with letter-by-letter effect
      .from(this.$refs.nameText.querySelectorAll('.letter'), {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.5")
      // Animate subheadline and description
      .from(this.$refs.subheadline, { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(this.$refs.description, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(this.$refs.buttons, { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.5")

      // Add hover effects
      this.addHoverEffects()
    },
    
    addHoverEffects() {
      const gsap = this.$gsap
      
      // Hover effect for hello text
      this.$refs.helloText.addEventListener('mouseenter', () => {
        gsap.to(this.$refs.helloText.querySelectorAll('.letter'), {
          scale: 1.1,
          color: '#7669D6',
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out"
        })
      })
      
      this.$refs.helloText.addEventListener('mouseleave', () => {
        gsap.to(this.$refs.helloText.querySelectorAll('.letter'), {
          scale: 1,
          color: '#FFFFFF',
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out"
        })
      })
      
      // Hover effect for name text
      this.$refs.nameText.addEventListener('mouseenter', () => {
        gsap.to(this.$refs.nameText.querySelectorAll('.letter'), {
          scale: 1.1,
          color: '#9cfe4f',
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out"
        })
      })
      
      this.$refs.nameText.addEventListener('mouseleave', () => {
        gsap.to(this.$refs.nameText.querySelectorAll('.letter'), {
          scale: 1,
          color: '#FFFFFF',
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out"
        })
      })
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

/* @keyframes glow {
  0%, 100% {
    text-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6);
  }
} */

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
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

/* .letter {
  cursor: pointer;
  transition: all 0.3s ease;
}

.letter:hover {
  animation: pulse 0.5s ease-in-out;
} */

/* Decorative Flower Styles */
.flower-container {
  width: 120px;
  height: 120px;
  position: relative;
}

.flower {
  position: relative;
  width: 100%;
  height: 100%;
}

.petal {
  position: absolute;
  width: 30px;
  height: 60px;
  background: linear-gradient(135deg, #a855f7, #f0abfc);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  transform-origin: center bottom;
}

.petal-1 { transform: rotate(0deg) translateY(-20px); }
.petal-2 { transform: rotate(60deg) translateY(-20px); }
.petal-3 { transform: rotate(120deg) translateY(-20px); }
.petal-4 { transform: rotate(180deg) translateY(-20px); }
.petal-5 { transform: rotate(240deg) translateY(-20px); }
.petal-6 { transform: rotate(300deg) translateY(-20px); }

.flower-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #fbbf24, #f59e0b);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
}

/* Enhanced responsive styles for better mobile experience */
@media (max-width: 640px) {
  .hero-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .letter {
    display: inline-block;
    transition: all 0.3s ease;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

/* Ensure proper text wrapping on very small screens */
@media (max-width: 360px) {
  .hero-section .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
