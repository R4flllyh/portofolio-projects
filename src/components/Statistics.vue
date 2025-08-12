<template>
  <section id="statistics" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center" ref="stat1">
          <div class="text-5xl font-extrabold text-button mb-4">15+</div>
          <h3 class="text-xl font-semibold mb-2">Projects Completed</h3>
          <p class="text-paragraph">Successfully delivered web and mobile applications</p>
        </div>
        <div class="text-center" ref="stat2">
          <div class="text-5xl font-extrabold text-button mb-4">8+</div>
          <h3 class="text-xl font-semibold mb-2">Happy Clients</h3>
          <p class="text-paragraph">Satisfied clients with quality solutions</p>
        </div>
        <div class="text-center" ref="stat3">
          <div class="text-5xl font-extrabold text-button mb-4">2+</div>
          <h3 class="text-xl font-semibold mb-2">Years Experience</h3>
          <p class="text-paragraph">Continuous learning and professional growth</p>
        </div>
        <div class="text-center" ref="stat4">
          <div class="text-5xl font-extrabold text-button mb-4">24/7</div>
          <h3 class="text-xl font-semibold mb-2">Support Available</h3>
          <p class="text-paragraph">Always ready to help and maintain projects</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statistics',
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger

      // Animate statistics
      gsap.fromTo([this.$refs.stat1, this.$refs.stat2, this.$refs.stat3, this.$refs.stat4], 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: this.$refs.stat1,
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
