<template>
  <section id="contact" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <h2 class="text-6xl font-extrabold mb-12 max-w-4xl" ref="headline">
        Get In Touch
      </h2>
      <p class="text-xl text-paragraph max-w-3xl mb-12" ref="description">
        Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
      </p>
      <form @submit.prevent="submitForm" class="max-w-3xl space-y-8">
        <div>
          <label for="name" class="block text-xl font-semibold mb-2">Full Name</label>
          <input id="name" v-model="form.name" type="text" required class="w-full p-4 rounded bg-gray-800 text-headline focus:outline-none focus:ring-2 focus:ring-button" />
        </div>
        <div>
          <label for="email" class="block text-xl font-semibold mb-2">Email Address</label>
          <input id="email" v-model="form.email" type="email" required class="w-full p-4 rounded bg-gray-800 text-headline focus:outline-none focus:ring-2 focus:ring-button" />
        </div>
        <div>
          <label for="message" class="block text-xl font-semibold mb-2">Message</label>
          <textarea id="message" v-model="form.message" rows="6" required class="w-full p-4 rounded bg-gray-800 text-headline focus:outline-none focus:ring-2 focus:ring-button"></textarea>
        </div>
        <button type="submit" class="btn-primary px-12 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
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
              .from(this.$refs.description, { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
    },
    submitForm() {
      alert('Form submitted! (This is a placeholder)')
    }
  }
}
</script>

<style scoped>
</style>
