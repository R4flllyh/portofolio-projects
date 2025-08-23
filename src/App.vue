<template>
  <div id="app" class="min-h-screen bg-background text-headline font-sans min-w-2xl">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="">
      <!-- Hero Section -->
      <Hero />
      
      <!-- About Section -->
      <About class="mt-36"/>
      
      <!-- Statistics Section -->
      <Statistics class="mt-20"/>
      
      <!-- Services Section -->
      <Services/>
      
      <!-- Skills Section -->
      <Skills />
      
      <!-- Why Choose Me Section -->
      <WhyChooseMe />
      
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
import Statistics from './components/Statistics.vue'
import Services from './components/Services.vue'
import Skills from './components/Skills.vue'
import WhyChooseMe from './components/WhyChooseMe.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Statistics,
    Services,
    Skills,
    WhyChooseMe,
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
