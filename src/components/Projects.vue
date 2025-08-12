<template>
  <section id="projects" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <h2 class="text-6xl font-extrabold mb-12 max-w-4xl" ref="headline">
        My Projects
      </h2>
      <div class="grid md:grid-cols-3 gap-12">
        <div v-for="project in projects" :key="project.title" class="bg-gray-800 bg-opacity-30 rounded-xl p-8 cursor-pointer hover:bg-opacity-50 transition duration-300" ref="projectCards">
          <h3 class="text-3xl font-semibold mb-4">{{ project.title }}</h3>
            <p class="text-paragraph mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech" class="bg-gray-700 rounded-full px-3 py-1 text-sm">{{ tech }}</span>
            </div>
            <div class="flex gap-4">
              <a :href="project.liveDemo" target="_blank" class="btn-primary">Live Demo</a>
              <a :href="project.code" target="_blank" class="btn-secondary">View Code</a>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce platform with modern UI and secure payment integration.',
          technologies: ['Vue.js', 'Node.js', 'MongoDB', '+3'],
          liveDemo: '#',
          code: '#'
        },
        {
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates and team features.',
          technologies: ['React', 'Firebase', 'Material-UI', '+2'],
          liveDemo: '#',
          code: '#'
        },
        {
          title: 'Weather Mobile App',
          description: 'A beautiful weather app with location-based forecasts and interactive maps.',
          technologies: ['React Native', 'Expo', 'Weather API', '+2'],
          liveDemo: '#',
          code: '#'
        }
      ]
    }
  },
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

      // Animate project cards
      gsap.fromTo(this.$refs.projectCards, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: this.$refs.projectCards[0],
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
