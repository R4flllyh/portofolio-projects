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
            <h3 class="brand-title">
              Rafly
            </h3>
            <p class="brand-subtitle">Junior Frontend Developer</p>
          </div>
          
          <p class="brand-description">
            Passionate about creating digital experiences that inspire and engage users worldwide. 
            Let's build something amazing together.
          </p>

          <!-- Social Media Links -->
          <div class="social-links">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank" 
              :class="['social-link', social.class]"
              :title="`Follow me on ${social.name}`"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.iconPath"/>
              </svg>
            </a>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <p class="contact-item">
              <span class="contact-label">Email:</span> 
              <a href="mailto:Rutherford9908@gmail.com" class="contact-value">
                Rutherford9908@gmail.com
              </a>
            </p>
            <p class="contact-item">
              <span class="contact-label">Location:</span> 
              <span class="contact-value">Jakarta, Indonesia</span>
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left" ref="quickLinks">
          <h4 class="footer-section-title">
            <svg class="w-5 h-5 mr-2 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
            </svg>
            Quick Links
          </h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.href">
              <a :href="link.href" class="footer-link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="text-center md:text-left" ref="services">
          <h4 class="footer-section-title">
            <svg class="w-5 h-5 mr-2 text-button" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
            </svg>
            Services
          </h4>
          <ul class="footer-services">
            <li v-for="service in services" :key="service" class="footer-service">
              {{ service }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="newsletter-section" ref="newsletter">
        <div class="newsletter-content">
          <h4 class="newsletter-title">Stay Updated</h4>
          <p class="newsletter-description">
            Subscribe to get the latest updates about my projects and insights into web development.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input 
              v-model="email"
              type="email" 
              placeholder="Enter your email" 
              required
              class="newsletter-input"
            />
            <button 
              type="submit" 
              :disabled="isSubscribing"
              class="newsletter-btn"
            >
              <span v-if="!isSubscribing">Subscribe</span>
              <span v-else>Subscribing...</span>
              <svg v-if="!isSubscribing" class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              <div v-else class="loading-spinner"></div>
            </button>
          </form>
          <p v-if="subscriptionMessage" :class="['subscription-message', subscriptionMessage.type]">
            {{ subscriptionMessage.text }}
          </p>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="footer-bottom" ref="bottomSection">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p class="copyright-text">
              © 2024 <span class="brand-highlight">Rafly</span>. All rights reserved.
            </p>
            <p class="built-with">
              Built with ❤️ using Vue.js, Tailwind CSS, and GSAP
            </p>
          </div>
          
          <!-- Back to Top Button -->
          <button 
            @click="scrollToTop"
            class="back-to-top-btn"
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
      subscriptionMessage: null,
      socialLinks: [
        {
          name: 'GitHub',
          url: 'https://github.com/R4flllyh',
          class: 'github',
          iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/muhammad-rafly-hidayahtullah-806304295/',
          class: 'linkedin',
          iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
        },
        {
          name: 'Instagram',
          url: 'https://instagram.com/raflllyh',
          class: 'instagram',
          iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/6285236835249',
          class: 'whatsapp',
          iconPath: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488'
        }
      ],
      quickLinks: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
      ],
      services: [
        'Web Development',
        'Mobile Apps',
        'UI/UX Design',
        'Consultation'
      ]
    }
  },
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      if (typeof this.$gsap !== 'undefined' && typeof this.$ScrollTrigger !== 'undefined') {
        const gsap = this.$gsap
        const ScrollTrigger = this.$ScrollTrigger

        // Footer sections animation
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
              toggleActions: "play none none reverse"
            }
          }
        )

        // Newsletter section animation
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
              toggleActions: "play none none reverse"
            }
          }
        )

        // Bottom section animation
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
    linear-gradient(rgba(156, 254, 79, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(156, 254, 79, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Brand Section */
.brand-title {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #9cfe4f, #7dd321);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.brand-subtitle {
  color: #9cfe4f;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.brand-description {
  color: #a7a9be;
  font-size: 0.875rem;
  line-height: 1.6;
  max-width: 28rem;
  margin: 0 auto 1.5rem auto;
}

@media (min-width: 768px) {
  .brand-description {
    margin: 0 0 1.5rem 0;
  }
  
  .brand-title {
    font-size: 2.5rem;
  }
  
  .brand-description {
    font-size: 1rem;
  }
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .social-links {
    justify-content: flex-start;
  }
}

.social-link {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
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
  background-color: rgba(156, 254, 79, 0.2);
  color: #9cfe4f;
}

.social-link.whatsapp:hover {
  background-color: rgba(156, 254, 79, 0.4);
  color: #b8ff6b;
}

/* Contact Info */
.contact-info {
  text-align: center;
}

@media (min-width: 768px) {
  .contact-info {
    text-align: left;
  }
}

.contact-item {
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.contact-label {
  color: #9cfe4f;
  font-weight: 500;
}

.contact-value {
  color: #a7a9be;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #ffffff;
}

/* Footer Section Titles */
.footer-section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .footer-section-title {
    justify-content: flex-start;
  }
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #a7a9be;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.footer-link:hover {
  color: #9cfe4f;
}

.footer-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #9cfe4f;
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

/* Footer Services */
.footer-services {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-service {
  color: #a7a9be;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .footer-service {
    justify-content: flex-start;
  }
}

.footer-service::before {
  content: '•';
  color: #9cfe4f;
  margin-right: 0.5rem;
}

/* Newsletter Section */
.newsletter-section {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.5));
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(63, 63, 70, 0.5);
  margin-bottom: 3rem;
  transition: all 0.3s ease;
}

.newsletter-section:hover {
  border-color: rgba(156, 254, 79, 0.3);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.newsletter-content {
  text-align: center;
  max-width: 32rem;
  margin: 0 auto;
}

.newsletter-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.newsletter-description {
  color: #a7a9be;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 24rem;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .newsletter-form {
    flex-direction: row;
  }
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.5), rgba(31, 41, 55, 0.7));
  color: #ffffff;
  border: 1px solid rgba(63, 63, 70, 0.5);
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.newsletter-input:focus {
  outline: none;
  border-color: rgba(156, 254, 79, 0.5);
  box-shadow: 0 0 0 3px rgba(156, 254, 79, 0.1);
}

.newsletter-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #9cfe4f, #7dd321);
  color: #0a0a0a;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.newsletter-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(156, 254, 79, 0.3);
}

.newsletter-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid #0a0a0a;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.subscription-message {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.subscription-message.success {
  color: #9cfe4f;
}

.subscription-message.error {
  color: #ef4444;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(63, 63, 70, 0.5);
  padding-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .footer-bottom-content {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
}

.copyright {
  text-align: center;
}

@media (min-width: 768px) {
  .copyright {
    text-align: left;
  }
}

.copyright-text {
  color: #a7a9be;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.brand-highlight {
  color: #9cfe4f;
  font-weight: 500;
}

.built-with {
  color: #a7a9be;
  font-size: 0.75rem;
}

/* Back to Top Button */
.back-to-top-btn {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.1), rgba(156, 254, 79, 0.05));
  color: #9cfe4f;
  border-radius: 0.5rem;
  border: 1px solid rgba(156, 254, 79, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.back-to-top-btn:hover {
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.2), rgba(156, 254, 79, 0.1));
  transform: scale(1.1);
  border-color: rgba(156, 254, 79, 0.4);
}

/* Animations */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid-pattern {
    background-size: 30px 30px;
  }
  
  .newsletter-section {
    padding: 1.5rem;
  }
  
  .newsletter-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 640px) {
  .brand-title {
    font-size: 1.75rem;
  }
  
  .newsletter-section {
    padding: 1rem;
  }
  
  .social-link {
    width: 2rem;
    height: 2rem;
  }
}

/* Performance Optimizations */
.newsletter-section,
.back-to-top-btn {
  will-change: transform;
  backface-visibility: hidden;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .social-link:hover,
  .back-to-top-btn:hover {
    transform: none;
  }
  
  .newsletter-btn:hover:not(:disabled) {
    transform: none;
  }
}

/* Focus states */
.footer-link:focus,
.social-link:focus,
.newsletter-input:focus,
.newsletter-btn:focus,
.back-to-top-btn:focus {
  outline: 2px solid #9cfe4f;
  outline-offset: 2px;
}

</style>