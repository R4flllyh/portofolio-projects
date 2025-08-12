<template>
  <div id="app" class="min-h-screen bg-background text-headline font-sans">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="space-y-32">
      <!-- Hero Section -->
      <Hero />
      
      <!-- About Section -->
      <About />
      
      <!-- Services Section -->
      <Services />
      
      <!-- Skills Section -->
      <Skills />
      
      <!-- Projects Section -->
      <Projects />
      
      <!-- Contact Section -->
      <Contact />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Services,
    Skills,
    Projects,
    Contact,
    Footer
  },
  mounted() {
    // Initialize smooth scrolling for navigation links
    this.initSmoothScrolling()
  },
  methods: {
    initSmoothScrolling() {
      // Handle smooth scrolling for anchor links
      document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]')) {
          e.preventDefault()
          const targetId = e.target.getAttribute('href').substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            const headerHeight = 80
            const targetPosition = targetElement.offsetTop - headerHeight
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        }
      })
    }
  }
}
</script>

<style>
/* Global styles are handled in main.css */
</style>
