<template>
  <section id="about" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <h2 class="text-6xl font-extrabold mb-12 max-w-4xl" ref="headline">
        About Me
      </h2>
      <p class="text-xl text-paragraph max-w-3xl mb-8" ref="description">
        I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
      </p>
      <p class="text-xl text-paragraph max-w-3xl" ref="description2">
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      const gsap = this.$gsap
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline.from(this.$refs.headline, { y: 100, opacity: 0, duration: 1 })
              .from(this.$refs.description, { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
              .from(this.$refs.description2, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
    }
  }
}
</script>

<style scoped>
</style>
