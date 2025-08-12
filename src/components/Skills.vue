<template>
  <section id="skills" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <h2 class="text-6xl font-extrabold mb-12 max-w-4xl" ref="headline">
        My Skills
      </h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div ref="skillList">
          <div v-for="skill in skills" :key="skill.name" class="mb-8">
            <h3 class="text-3xl font-semibold mb-2">{{ skill.name }}</h3>
            <div class="w-full bg-gray-800 rounded-full h-6">
              <div 
                class="bg-button h-6 rounded-full transition-all duration-1000"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-paragraph max-w-lg">
            These are the technologies and tools I use to bring ideas to life.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'TypeScript', level: 75 },
        { name: 'CSS/SCSS', level: 85 },
        { name: 'SQL', level: 70 }
      ]
    }
  },
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      const gsap = this.$gsap
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline.from(this.$refs.headline, { y: 100, opacity: 0, duration: 1 })
              .from(this.$refs.skillList, { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
    }
  }
}
</script>

<style scoped>
</style>
