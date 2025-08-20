<template>
  <section id="home" class="section-padding bg-background text-headline px-4 py-16 md:py-32 flex justify-center hero-section">
    <div class="w-full max-w-7xl">
      <div class="flex gap-20">
        <h1 class="text-[190px] font-extrabold text-headline leading-tight mb-6" ref="helloText">
          <span class="letter" v-for="(letter, index) in helloLetters" :key="index">{{ letter }}</span>
        </h1>
        <img src="/src/assets/images/element.png" class="w-50 h-50 object-contain animate-spin-slow infinite-rotate" alt="" srcset="">
      </div>
      <div class="flex items-end gap-20">
        <div class="">
          <h2 class="text-xl font-semibold mb-2" ref="subheadline">
            A Software Engineer passionate about building modern and scalable web applications.
          </h2>
          <p class="text-md text-paragraph max-w-3xl mb-10" ref="description">
            Focused on creating scalable and user-friendly web solutions.
          </p>
          <div class="" ref="buttons">
            <button class="btn-primary px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300">
              Learn More
            </button>
          </div>
        </div>
        <h1 class="text-[210px] font-extrabold text-headline leading-tight text-end" ref="nameText">
          <span class="letter" v-for="(letter, index) in nameLetters" :key="index">{{ letter }}</span>
        </h1>
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

/* Responsive text sizing */
@media (max-width: 768px) {
  .text-\[200px\] {
    font-size: 60px;
  }
  .text-\[230px\] {
    font-size: 70px;
  }
}
</style>
