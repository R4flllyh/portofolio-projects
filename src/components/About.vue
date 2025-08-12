<template>
  <section id="about" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <h2 class="text-6xl font-extrabold mb-12 max-w-4xl" ref="headline">
        About Me
      </h2>
      <p class="text-xl text-paragraph max-w-3xl mb-8" ref="description">
        Hi I'm Rafly, a passionate junior developer based in Surabaya, Indonesia. I love building web and mobile apps with Flutter & Laravel, designing with Figma. Always excited to learn something new!
      </p>
      <p class="text-xl text-paragraph max-w-3xl" ref="description2">
        Currently working as a Junior Frontend Web Developer at Yayasan Tangan Pengharapan, where I focus on creating responsive web applications and mobile solutions. I'm always eager to take on new challenges and expand my technical skills.
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
