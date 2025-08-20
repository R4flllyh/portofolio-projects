<template>
  <section id="services" class="section-padding bg-thirdBackground text-headline px-4 py-16 md:py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <div class="mb-12 md:mb-16 flex items-center gap-10" ref="header">
        <h2 class="text-xl md:text-4xl font-normal font-mono">
          02 - Get to Know Me
        </h2>
        <img id="scramble-cursor" src="https://assets.codepen.io/16327/scramble-cursor.png" alt="" class="w-14 object-contain" />
      </div>
      <div class="grid md:grid-cols-3 gap-6 md:gap-12">
        <div class="bg-background rounded-xl p-6 md:p-8 cursor-pointer hover:bg-opacity-80 transition duration-300" ref="service1">
          <h3 class="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">Frontend Web Development</h3>
          <p class="text-paragraph text-sm md:text-base">
            Building responsive and modern web applications using HTML, CSS, JavaScript, and frameworks like Laravel for dynamic user experiences.
          </p>
        </div>
        <div class="bg-background rounded-xl p-6 md:p-8 cursor-pointer hover:bg-opacity-80 transition duration-300" ref="service2">
          <h3 class="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">Flutter Mobile Development</h3>
          <p class="text-paragraph text-sm md:text-base">
            Creating cross-platform mobile applications with Flutter, delivering native performance and beautiful UI across iOS and Android.
          </p>
        </div>
        <div class="bg-background rounded-xl p-6 md:p-8 cursor-pointer hover:bg-opacity-80 transition duration-300" ref="service3">
          <h3 class="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">WordPress Development</h3>
          <p class="text-paragraph text-sm md:text-base">
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
