<template>
  <section id="contact" class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center helix-3">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16" ref="header">
        <h2 class="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-button to-illustration-highlight bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p class="text-lg md:text-xl text-paragraph max-w-3xl mx-auto px-4">
          Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
        <!-- Left Column - Contact Form -->
        <div class="space-y-8" ref="contactForm">
          <!-- Contact Form Card -->
          <div class="contact-form-card">
            <h3 class="form-title">
              <div class="form-icon">
                <svg class="w-5 h-5 text-button" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              Send Me a Message
            </h3>

            <form @submit.prevent="submitForm" class="contact-form">
              <!-- Name Input -->
              <div class="form-group">
                <label for="name" class="form-label">Full Name *</label>
                <div class="input-wrapper">
                  <input 
                    id="name" 
                    v-model="form.name" 
                    type="text" 
                    required 
                    :class="['form-input', { 'error': errors.name }]"
                    placeholder="Enter your full name"
                    @blur="validateField('name')"
                  />
                  <div class="input-icon">
                    <svg class="w-5 h-5 text-paragraph" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
              </div>

              <!-- Email Input -->
              <div class="form-group">
                <label for="email" class="form-label">Email Address *</label>
                <div class="input-wrapper">
                  <input 
                    id="email" 
                    v-model="form.email" 
                    type="email" 
                    required 
                    :class="['form-input', { 'error': errors.email }]"
                    placeholder="Enter your email address"
                    @blur="validateField('email')"
                  />
                  <div class="input-icon">
                    <svg class="w-5 h-5 text-paragraph" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                </div>
                <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
              </div>

              <!-- Subject Input -->
              <div class="form-group">
                <label for="subject" class="form-label">Subject *</label>
                <div class="input-wrapper">
                  <select 
                    id="subject" 
                    v-model="form.subject" 
                    required 
                    class="form-input form-select"
                  >
                    <option value="">Select a subject</option>
                    <option 
                      v-for="option in subjectOptions" 
                      :key="option.value" 
                      :value="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>
                  <div class="input-icon">
                    <svg class="w-5 h-5 text-paragraph" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Message Input -->
              <div class="form-group">
                <label for="message" class="form-label">Message *</label>
                <div class="input-wrapper">
                  <textarea 
                    id="message" 
                    v-model="form.message" 
                    rows="5" 
                    required 
                    maxlength="500"
                    :class="['form-input form-textarea', { 'error': errors.message }]"
                    placeholder="Tell me about your project or how I can help you..."
                    @blur="validateField('message')"
                  ></textarea>
                  <div class="input-icon textarea-icon">
                    <svg class="w-5 h-5 text-paragraph" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.4 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>
                <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
                <p class="character-count">{{ form.message.length }}/500 characters</p>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="submit-btn"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
                <svg v-if="!isSubmitting" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                <div v-else class="loading-spinner"></div>
              </button>
            </form>

            <!-- Response Message -->
            <div v-if="responseMessage" :class="['response-message', responseMessage.type]">
              {{ responseMessage.text }}
            </div>
          </div>
        </div>

        <!-- Right Column - Contact Info & Social -->
        <div class="space-y-8" ref="contactInfo">
          <!-- Contact Information -->
          <div class="contact-info-card">
            <h3 class="info-title">
              <div class="info-icon">
                <svg class="w-5 h-5 text-illustration-highlight" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              Contact Information
            </h3>

            <div class="contact-details">
              <!-- Email -->
              <div class="contact-item group">
                <div class="contact-item-icon email">
                  <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p class="contact-label">Email</p>
                  <a href="mailto:Rutherford9908@gmail.com" class="contact-link">
                    Rutherford9908@gmail.com
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="contact-item group">
                <div class="contact-item-icon phone">
                  <svg class="w-6 h-6 text-secondBackground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p class="contact-label">Phone</p>
                  <a href="tel:+6285236835249" class="contact-link">
                    +62 852-3683-5249
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="contact-item group">
                <div class="contact-item-icon location">
                  <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p class="contact-label">Location</p>
                  <p class="contact-value">Jakarta, Indonesia</p>
                </div>
              </div>

              <!-- Availability -->
              <div class="contact-item group">
                <div class="contact-item-icon availability">
                  <svg class="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <p class="contact-label">Availability</p>
                  <div class="availability-status">
                    <div class="status-dot"></div>
                    <p class="contact-value">Available for projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="social-card">
            <h3 class="social-title">
              <div class="social-icon">
                <svg class="w-5 h-5 text-button" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </div>
              Connect With Me
            </h3>

            <div class="social-grid">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                target="_blank" 
                :class="['social-link', social.class]"
                :title="`Connect on ${social.name}`"
              >
                <div :class="['social-link-icon', social.iconClass]">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="social.iconPath"/>
                  </svg>
                </div>
                <span class="social-link-text">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
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
        subject: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      responseMessage: null,
      subjectOptions: [
        { value: 'web-development', label: 'Web Development Project' },
        { value: 'mobile-development', label: 'Mobile App Development' },
        { value: 'ui-ux-design', label: 'UI/UX Design' },
        { value: 'consultation', label: 'Technical Consultation' },
        { value: 'collaboration', label: 'Collaboration Opportunity' },
        { value: 'other', label: 'Other' }
      ],
      socialLinks: [
        {
          name: 'GitHub',
          url: 'https://github.com/R4flllyh',
          class: 'github',
          iconClass: 'bg-gray-600/50 group-hover:bg-gray-600/70',
          iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/muhammad-rafly-hidayahtullah-806304295/',
          class: 'linkedin',
          iconClass: 'bg-blue-600/50 group-hover:bg-blue-600/70',
          iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
        },
        {
          name: 'Instagram',
          url: 'https://instagram.com/raflllyh',
          class: 'instagram',
          iconClass: 'bg-gradient-to-br from-pink-500 to-purple-600 group-hover:scale-110',
          iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/6285236835249',
          class: 'whatsapp',
          iconClass: 'bg-secondBackground/50 group-hover:bg-secondBackground/70',
          iconPath: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488'
        }
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

        // Header animation
        gsap.fromTo(this.$refs.header, 
          { y: -30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.header,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Contact form animation
        gsap.fromTo(this.$refs.contactForm, 
          { x: -50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.contactForm,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Contact info animation
        gsap.fromTo(this.$refs.contactInfo, 
          { x: 50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.contactInfo,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    },

    validateField(field) {
      this.errors[field] = ''
      
      switch (field) {
        case 'name':
          if (!this.form.name.trim()) {
            this.errors.name = 'Name is required'
          } else if (this.form.name.trim().length < 2) {
            this.errors.name = 'Name must be at least 2 characters'
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!this.form.email.trim()) {
            this.errors.email = 'Email is required'
          } else if (!emailRegex.test(this.form.email)) {
            this.errors.email = 'Please enter a valid email address'
          }
          break
        case 'message':
          if (!this.form.message.trim()) {
            this.errors.message = 'Message is required'
          } else if (this.form.message.trim().length < 10) {
            this.errors.message = 'Message must be at least 10 characters'
          }
          break
      }
    },

    validateForm() {
      this.validateField('name')
      this.validateField('email')
      this.validateField('message')
      
      return !this.errors.name && !this.errors.email && !this.errors.message
    },

    async submitForm() {
      if (!this.validateForm()) {
        return
      }

      this.isSubmitting = true
      this.responseMessage = null

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Success response
        this.responseMessage = {
          type: 'success',
          text: 'Thank you for your message! I\'ll get back to you soon.'
        }
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        
        // Clear response message after 5 seconds
        setTimeout(() => {
          this.responseMessage = null
        }, 5000)
        
      } catch (error) {
        this.responseMessage = {
          type: 'error',
          text: 'Sorry, there was an error sending your message. Please try again.'
        }
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
/* Contact Form Card */
.contact-form-card {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.4), rgba(17, 24, 39, 0.6));
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(63, 63, 70, 0.5);
  transition: all 0.3s ease;
}

.contact-form-card:hover {
  border-color: rgba(156, 254, 79, 0.3);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

/* Form Title */
.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.form-icon {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.2), rgba(156, 254, 79, 0.1));
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.5), rgba(31, 41, 55, 0.7));
  color: #ffffff;
  border: 1px solid rgba(63, 63, 70, 0.5);
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.form-input:focus {
  outline: none;
  border-color: rgba(156, 254, 79, 0.5);
  box-shadow: 0 0 0 3px rgba(156, 254, 79, 0.1);
  transform: translateY(-1px);
}

.form-input:hover {
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.7), rgba(31, 41, 55, 0.9));
}

.form-input.error {
  border-color: rgba(239, 68, 68, 0.5);
}

.form-select {
  cursor: pointer;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.textarea-icon {
  top: 1rem;
  transform: none;
}

.error-message {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.character-count {
  color: #a7a9be;
  font-size: 0.75rem;
  text-align: right;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  background: linear-gradient(135deg, #9cfe4f, #7dd321);
  color: #0a0a0a;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(156, 254, 79, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #0a0a0a;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Response Message */
.response-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  font-weight: 500;
}

.response-message.success {
  background: rgba(156, 254, 79, 0.2);
  color: #9cfe4f;
  border: 1px solid rgba(156, 254, 79, 0.3);
}

.response-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Contact Info Card */
.contact-info-card {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.4), rgba(17, 24, 39, 0.6));
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(63, 63, 70, 0.5);
  transition: all 0.3s ease;
}

.contact-info-card:hover {
  border-color: rgba(156, 254, 79, 0.3);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.info-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.info-icon {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.2), rgba(156, 254, 79, 0.2));
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

/* Contact Details */
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-item-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.contact-item-icon.email {
  background-color: rgba(59, 130, 246, 0.2);
}

.contact-item-icon.phone {
  background-color: rgba(156, 254, 79, 0.2);
}

.contact-item-icon.location {
  background-color: rgba(147, 51, 234, 0.2);
}

.contact-item-icon.availability {
  background-color: rgba(249, 115, 22, 0.2);
}

.group:hover .contact-item-icon {
  transform: scale(1.1);
}

.contact-label {
  font-size: 0.875rem;
  color: #a7a9be;
  margin-bottom: 0.25rem;
}

.contact-link {
  color: #ffffff;
  font-weight: 500;
  transition: color 0.3s ease;
  text-decoration: none;
}

.contact-link:hover {
  color: #9cfe4f;
}

.contact-value {
  color: #ffffff;
  font-weight: 500;
}

.availability-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #9cfe4f;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/* Social Card */
.social-card {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.4), rgba(17, 24, 39, 0.6));
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(63, 63, 70, 0.5);
  transition: all 0.3s ease;
}

.social-card:hover {
  border-color: rgba(156, 254, 79, 0.3);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.social-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.social-icon {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.2), rgba(255, 137, 6, 0.2));
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(55, 65, 81, 0.3), rgba(31, 41, 55, 0.5));
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid rgba(63, 63, 70, 0.3);
}

.social-link:hover {
  transform: translateY(-2px) scale(1.02);
  border-color: rgba(156, 254, 79, 0.3);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.social-link-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-link-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  transition: color 0.3s ease;
}

.social-link:hover .social-link-text {
  color: #9cfe4f;
}

/* Animations */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-form-card,
  .contact-info-card,
  .social-card {
    padding: 1.5rem;
  }
  
  .form-title,
  .info-title,
  .social-title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  .contact-form {
    gap: 1rem;
  }
  
  .form-input {
    padding: 0.875rem 0.875rem 0.875rem 2.5rem;
  }
  
  .input-icon {
    left: 0.875rem;
  }
  
  .contact-details {
    gap: 1rem;
  }
  
  .contact-item-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .social-link {
    padding: 0.75rem;
  }
  
  .social-link-icon {
    width: 2rem;
    height: 2rem;
  }
}

@media (max-width: 640px) {
  .contact-form-card,
  .contact-info-card,
  .social-card {
    padding: 1rem;
  }
  
  .form-input {
    font-size: 0.875rem;
  }
  
  .submit-btn {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }
}

/* Performance Optimizations */
.contact-form-card,
.contact-info-card,
.social-card {
  will-change: transform;
  backface-visibility: hidden;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .contact-item:hover {
    transform: none;
  }
  
  .social-link:hover {
    transform: none;
  }
  
  .submit-btn:hover:not(:disabled) {
    transform: none;
  }
  
  .status-dot {
    animation: none;
  }
}

/* Focus states */
.form-input:focus,
.submit-btn:focus,
.contact-link:focus,
.social-link:focus {
  outline: 2px solid #9cfe4f;
  outline-offset: 2px;
}

</style>