<template>
  <footer class="bg-background border-t border-gray-700/50 px-4 py-12 md:py-16 footer-section relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-illustration-highlight/10"></div>
      <div class="grid-pattern"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
        <!-- Brand Section -->
        <div class="md:col-span-2 text-center md:text-left" ref="brandSection">
          <div class="mb-6">
            <h3 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-button to-illustration-highlight bg-clip-text text-transparent mb-2">
              Rafly
            </h3>
            <p class="text-button font-medium">Junior Frontend Developer</p>
          </div>
          
          <p class="text-paragraph text-sm md:text-base mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
            Passionate about creating digital experiences that inspire and engage users worldwide. 
            Let's build something amazing together.
          </p>

          <!-- Social Media Links -->
          <div class="flex justify-center md:justify-start space-x-4 mb-6">
            <a href="https://github.com/R4flllyh" target="_blank" class="social-link github">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rafly-hidayahtullah-806304295/" target="_blank" class="social-link linkedin">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com/raflllyh" target="_blank" class="social-link instagram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://wa.me/6285236835249" target="_blank" class="social-link whatsapp">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </a>
          </div>

          <!-- Contact Info -->
          <div class="text-center md:text-left">
            <p class="text-paragraph text-sm mb-1">
              <span class="text-button">Email:</span> Rutherford9908@gmail.com
            </p>
            <p class="text-paragraph text-sm">
              <span class="text-button">Location:</span> Jakarta, Indonesia
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left" ref="quickLinks">
          <h4 class="text-lg font-semibold text-headline mb-4 flex items-center justify-center md:justify-start">
            <svg class="w-5 h-5 mr-2 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
            </svg>
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li><a href="#home" class="footer-link">Home</a></li>
            <li><a href="#about" class="footer-link">About</a></li>
            <li><a href="#services" class="footer-link">Services</a></li>
            <li><a href="#projects" class="footer-link">Projects</a></li>
            <li><a href="#contact" class="footer-link">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="text-center md:text-left" ref="services">
          <h4 class="text-lg font-semibold text-headline mb-4 flex items-center justify-center md:justify-start">
            <svg class="w-5 h-5 mr-2 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
            </svg>
            Services
          </h4>
          <ul class="space-y-3">
            <li class="footer-service">Web Development</li>
            <li class="footer-service">Mobile Apps</li>
            <li class="footer-service">UI/UX Design</li>
            <li class="footer-service">Consultation</li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 mb-12" ref="newsletter">
        <div class="text-center max-w-2xl mx-auto">
          <h4 class="text-xl md:text-2xl font-semibold text-headline mb-3">Stay Updated</h4>
          <p class="text-paragraph mb-6">
            Subscribe to get the latest updates about my projects and insights into web development.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              v-model="email"
              type="email" 
              placeholder="Enter your email" 
              required
              class="flex-1 p-3 rounded-lg bg-gray-700/50 text-headline border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-button/50 focus:border-button/50 transition-all duration-300"
            />
            <button 
              type="submit" 
              :disabled="isSubscribing"
              class="px-6 py-3 bg-gradient-to-r from-button to-illustration-highlight text-buttonText font-semibold rounded-lg hover:shadow-lg hover:shadow-button/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
            >
              <span v-if="!isSubscribing">Subscribe</span>
              <span v-else>Subscribing...</span>
              <svg v-if="!isSubscribing" class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
          <p v-if="subscriptionMessage" :class="[
            'mt-3 text-sm',
            subscriptionMessage.type === 'success' ? 'text-green-400' : 'text-red-400'
          ]">
            {{ subscriptionMessage.text }}
          </p>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-700/50 pt-8" ref="bottomSection">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-paragraph text-sm">
              © 2024 <span class="text-button font-medium">Rafly</span>. All rights reserved.
            </p>
            <p class="text-paragraph text-xs mt-1">
              Built with ❤️ using Vue.js, Tailwind CSS, and GSAP
            </p>
          </div>
          
          <!-- Back to Top Button -->
          <button 
            @click="scrollToTop"
            class="back-to-top-btn group"
            title="Back to top"
          >
            <svg class="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: '',
      isSubscribing: false,
      subscriptionMessage: null
    }
  },
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      // Check if GSAP is available
      if (typeof this.$gsap !== 'undefined' && typeof this.$ScrollTrigger !== 'undefined') {
        const gsap = this.$gsap
        const ScrollTrigger = this.$ScrollTrigger

        // Animate footer sections
        gsap.fromTo([this.$refs.brandSection, this.$refs.quickLinks, this.$refs.services], 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: this.$refs.brandSection,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Animate newsletter section
        gsap.fromTo(this.$refs.newsletter, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.newsletter,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Animate bottom section
        gsap.fromTo(this.$refs.bottomSection, 
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.bottomSection,
              start: "top 95%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    },
    async subscribeNewsletter() {
      if (!this.email) return

      this.isSubscribing = true
      this.subscriptionMessage = null

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        this.subscriptionMessage = {
          type: 'success',
          text: 'Thank you for subscribing! You\'ll receive updates soon.'
        }
        
        this.email = ''
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.subscriptionMessage = null
        }, 5000)
        
      } catch (error) {
        this.subscriptionMessage = {
          type: 'error',
          text: 'Sorry, there was an error. Please try again.'
        }
      } finally {
        this.isSubscribing = false
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
/* Grid Pattern Background */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 137, 6, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 137, 6, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Social Links */
.social-link {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: scale(1.1) translateY(-0.25rem);
}

.social-link.github {
  background-color: rgba(63, 63, 70, 0.5);
  color: #d1d5db;
}

.social-link.github:hover {
  background-color: #4b5563;
  color: #ffffff;
}

.social-link.linkedin {
  background-color: rgba(37, 99, 235, 0.2);
  color: #60a5fa;
}

.social-link.linkedin:hover {
  background-color: rgba(37, 99, 235, 0.4);
  color: #93c5fd;
}

.social-link.instagram {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2));
  color: #f472b6;
}

.social-link.instagram:hover {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(147, 51, 234, 0.4));
  color: #fbb6ce;
}

.social-link.whatsapp {
  background-color: rgba(34, 197, 94, 0.2);
  color: #4ade80;
}

.social-link.whatsapp:hover {
  background-color: rgba(34, 197, 94, 0.4);
  color: #86efac;
}

/* Footer Links */
.footer-link {
  color: #ffffff;
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
}

.footer-link:hover {
  color: #00ff00;
}

.footer-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #00ff00;
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

/* Footer Services */
.footer-service {
  color: #ffffff;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-service::before {
  content: '•';
  color: #00ff00;
  margin-right: 0.5rem;
}

/* Back to Top Button */
.back-to-top-btn {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.back-to-top-btn:hover {
  background-color: rgba(0, 255, 0, 0.2);
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .social-link {
    width: 2rem;
    height: 2rem;
  }
  
  .grid-pattern {
    background-size: 30px 30px;
  }
  
  .footer-service {
    justify-content: flex-start;
  }
}

@media (min-width: 768px) {
  .footer-service {
    justify-content: flex-start;
  }
}
</style>
