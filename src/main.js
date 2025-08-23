import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin)

// Make GSAP available globally
const app = createApp(App)

app.config.globalProperties.$gsap = gsap
app.config.globalProperties.$ScrollTrigger = ScrollTrigger
app.config.globalProperties.$SplitText = SplitText
app.config.globalProperties.$ScrambleTextPlugin = ScrambleTextPlugin

app.mount('#app')
