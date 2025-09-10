<template>
  <section id="why-choose-me" class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center helix">
    <div class="w-full max-w-7xl">
      <!-- Section Header -->
      <div class="mb-12 md:mb-10 flex items-center gap-10" ref="header">
        <h2 class="text-xl md:text-4xl font-normal font-mono text-headline">
          03 - Experience
        </h2>
        <img 
          id="scramble-cursor" 
          src="https://assets.codepen.io/16327/scramble-cursor.png" 
          alt="Decorative cursor" 
          class="w-14 object-contain animate-pulse" 
        />
      </div>

      <!-- Section Content -->
      <div class="mb-12">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-headline leading-tight mb-6" ref="headline">
          Crafting solutions through experience
        </h1>
        <p class="text-base sm:text-lg text-paragraph leading-relaxed max-w-2xl" ref="description">
          A journey through my career in design and development, showcasing growth and expertise across different roles and companies.
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="space-y-8 lg:space-y-12" ref="timeline">
        <!-- Previous Position 1 -->
        <div class="experience-item flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-b border-gray-700/30 hover:border-button/30 transition-all duration-300 group">
          <div class="flex-1 mb-4 lg:mb-0">
            <h3 class="text-xl lg:text-2xl font-bold text-headline mb-2 group-hover:text-button transition-colors duration-300">
              Intern WordPress Developer
            </h3>
            <p class="text-paragraph text-sm lg:text-base mb-2">
              Webcare Digital Indonesia
            </p>
            <p class="text-paragraph text-xs lg:text-sm opacity-80">
              Sidoarjo, East Java, Indonesia
            </p>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">UI/UX</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">WordPress</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Elementor</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Web Development</span>
            </div>
          </div>
          <div class="text-button font-semibold text-lg lg:text-xl">
            Oct 2022 - Mar 2023
          </div>
        </div>
        
        <!-- Previous Position 2 -->
        <div class="experience-item flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-b border-gray-700/30 hover:border-button/30 transition-all duration-300 group">
          <div class="flex-1 mb-4 lg:mb-0">
            <h3 class="text-xl lg:text-2xl font-bold text-headline mb-2 group-hover:text-button transition-colors duration-300">
              Freelance WordPress Developer
            </h3>
            <p class="text-paragraph text-sm lg:text-base mb-2">
              Webcare Digital Indonesia
            </p>
            <p class="text-paragraph text-xs lg:text-sm opacity-80">
              Sidoarjo, East Java, Indonesia
            </p>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">WordPress</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">UI/UX</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Figma</span>
            </div>
          </div>
          <div class="text-button font-semibold text-lg lg:text-xl">
            Mar 2023 - Dec 2024
          </div>
        </div>
        

        <!-- Current Position -->
        <div class="experience-item flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-b border-gray-700/30 hover:border-button/30 transition-all duration-300 group">
          <div class="flex-1 mb-4 lg:mb-0">
            <h3 class="text-xl lg:text-2xl font-bold text-headline mb-2 group-hover:text-button transition-colors duration-300">
              Intern Junior Frontend Web Developer
            </h3>
            <p class="text-paragraph text-sm lg:text-base mb-2">
              Yayasan Tangan Pengharapan
            </p>
            <p class="text-paragraph text-xs lg:text-sm opacity-80">
              North Jakarta, Jakarta Raya, Indonesia
            </p>
            <div class="flex flex-wrap items-center gap-2 mt-2">
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Laravel</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Filament</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Frontend</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Figma</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Tailwind</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Flutter</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">Git</span>
              <span class="text-xs bg-gray-700/50 px-2 py-1 rounded">WordPress</span>
            </div>
          </div>
          <div class="text-button font-semibold text-lg lg:text-xl">
            Feb 2025 - Present
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12" ref="buttons">
        <button class="btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Download CV
        </button>
        <button class="border-2 border-secondButton text-secondButton px-8 py-4 text-lg font-semibold hover:bg-secondButton hover:text-white transition-all duration-300 rounded-lg">
          View Portfolio
        </button>
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

      // Headline animation
      gsap.fromTo(this.$refs.headline, 
        { y: -50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.headline,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Description animation
      gsap.fromTo(this.$refs.description, 
        { y: -30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.description,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Timeline items animation with stagger
      gsap.fromTo(this.$refs.timeline.querySelectorAll('.experience-item'), 
        { x: -100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.timeline,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Buttons animation
      gsap.fromTo(this.$refs.buttons, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.buttons,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }
}
</script>

<style scoped>
/* Experience item base styles */
.experience-item {
  cursor: pointer;
  position: relative;
}

/* Hover effects */
.experience-item:hover {
  transform: translateX(10px);
  background: rgba(156, 254, 79, 0.05);
  border-radius: 8px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Skill tags */
.experience-item span {
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: normal; /* Allow wrapping */
  word-break: break-word; /* Break long words */
  max-width: 100%; /* Prevent overflow */
  display: inline-block;
}

.experience-item:hover span {
  background: rgba(156, 254, 79, 0.2);
  color: #9cfe4f;
}

/* Responsive design */
@media (max-width: 1024px) {
  .experience-item {
    padding: 1.5rem 0;
  }
  
  .experience-item:hover {
    transform: translateX(5px);
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 640px) {
  .experience-item h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .experience-item p {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }
  
  .experience-item .text-button {
    font-size: 1rem;
  }
  
  .experience-item:hover {
    transform: none;
    padding-left: 0;
    padding-right: 0;
  }
  
  .experience-item span {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
}

/* Timeline visual enhancement */
.experience-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(156, 254, 79, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.experience-item:hover::after {
  opacity: 1;
}

@media (max-width: 640px) {
  .experience-item:not(:last-child)::after {
    display: none;
  }
}

/* Animation enhancements */
.experience-item {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.experience-item h3 {
  transition: color 0.3s ease;
}

.experience-item:hover h3 {
  color: #9cfe4f;
}
</style>
