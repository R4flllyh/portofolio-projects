<template>
  <section id="services" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <h2 class="text-6xl font-extrabold mb-12 max-w-4xl" ref="headline">
        My Services
      </h2>
      <div class="grid md:grid-cols-3 gap-12">
        <div class="bg-gray-800 bg-opacity-30 rounded-xl p-8 cursor-pointer hover:bg-opacity-50 transition duration-300" ref="service1">
          <h3 class="text-3xl font-semibold mb-4">Frontend Web Development</h3>
          <p class="text-paragraph">
            Building responsive and modern web applications using HTML, CSS, JavaScript, and frameworks like Laravel for dynamic user experiences.
          </p>
        </div>
        <div class="bg-gray-800 bg-opacity-30 rounded-xl p-8 cursor-pointer hover:bg-opacity-50 transition duration-300" ref="service2">
          <h3 class="text-3xl font-semibold mb-4">Flutter Mobile Development</h3>
          <p class="text-paragraph">
            Creating cross-platform mobile applications with Flutter, delivering native performance and beautiful UI across iOS and Android.
          </p>
        </div>
        <div class="bg-gray-800 bg-opacity-30 rounded-xl p-8 cursor-pointer hover:bg-opacity-50 transition duration-300" ref="service3">
          <h3 class="text-3xl font-semibold mb-4">WordPress Development</h3>
          <p class="text-paragraph">
            Developing custom WordPress websites and themes, providing content management solutions that are easy to maintain and scale.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
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

      // Animate service cards
      gsap.fromTo([this.$refs.service1, this.$refs.service2, this.$refs.service3], 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: this.$refs.service1,
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
