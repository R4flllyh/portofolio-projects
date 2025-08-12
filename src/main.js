import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Make GSAP available globally
const app = createApp(App)

app.config.globalProperties.$gsap = gsap
app.config.globalProperties.$ScrollTrigger = ScrollTrigger

app.mount('#app')
