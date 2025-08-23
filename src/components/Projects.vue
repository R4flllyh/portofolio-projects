<template>
  <section id="projects" class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center projects-section helix-2">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16 flex items-center gap-10" ref="header">
        <h2 class="text-xl md:text-4xl font-normal font-mono text-headline">
          04 - My Projects
        </h2>
        <img 
          id="scramble-cursor" 
          src="https://assets.codepen.io/16327/scramble-cursor.png" 
          alt="Decorative cursor" 
          class="w-14 object-contain animate-pulse" 
        />
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id" 
          class="project-card group" 
          :ref="`project${index + 1}`"
        >
          <!-- Project Image -->
          <div class="project-image">
            <div class="project-overlay">
              <div class="project-links">
                <a 
                  :href="project.liveDemo" 
                  target="_blank" 
                  class="project-link-btn"
                  :title="`View ${project.title} live demo`"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </a>
                <a 
                  :href="project.code" 
                  target="_blank" 
                  class="project-link-btn"
                  :title="`View ${project.title} source code`"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="project-placeholder">
              <svg class="w-16 h-16 text-button/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
              </svg>
            </div>
          </div>

          <!-- Project Content -->
          <div class="project-content">
            <div class="project-category">{{ project.category }}</div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <!-- Technologies -->
            <div class="project-tech-stack">
              <span 
                v-for="tech in project.technologies" 
                :key="tech" 
                class="tech-badge"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Status -->
            <div class="project-status">
              <span class="status-indicator" :class="project.status"></span>
              <span class="status-text">{{ project.statusText }}</span>
            </div>
          </div>

          <!-- Project Number -->
          <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>
          
          <!-- Project Glow Effect -->
          <div class="project-glow"></div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-12" ref="viewAllBtn">
        <button class="btn-outline group" @click="handleViewAllProjects">
          <span>View All Projects</span>
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
          </svg>
        </button>
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
          id: 'ecommerce-app',
          title: 'E-Commerce Mobile App',
          category: 'Mobile Development',
          description: 'A modern e-commerce mobile application built with Flutter, featuring user authentication, product catalog, shopping cart, and payment integration.',
          technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API'],
          liveDemo: '#',
          code: '#',
          status: 'completed',
          statusText: 'Completed'
        },
        {
          id: 'task-management',
          title: 'Task Management System',
          category: 'Web Development',
          description: 'A comprehensive task management web application with real-time collaboration, built using Laravel and Vue.js with modern UI/UX design.',
          technologies: ['Laravel', 'Vue.js', 'MySQL', 'WebSocket'],
          liveDemo: '#',
          code: '#',
          status: 'in-progress',
          statusText: 'In Progress'
        },
        {
          id: 'portfolio-website',
          title: 'Portfolio Website',
          category: 'Web Design',
          description: 'A responsive portfolio website showcasing modern web development techniques with smooth animations and interactive elements.',
          technologies: ['Vue.js', 'Tailwind CSS', 'GSAP', 'Vite'],
          liveDemo: '#',
          code: '#',
          status: 'completed',
          statusText: 'Completed'
        },
        {
          id: 'restaurant-booking',
          title: 'Restaurant Booking App',
          category: 'Mobile Development',
          description: 'A Flutter-based restaurant booking application with table reservation, menu browsing, and order management features.',
          technologies: ['Flutter', 'Firebase', 'Google Maps', 'Push Notifications'],
          liveDemo: '#',
          code: '#',
          status: 'planning',
          statusText: 'Planning'
        },
        {
          id: 'cms-dashboard',
          title: 'CMS Dashboard',
          category: 'Web Development',
          description: 'A custom content management system with advanced analytics, user management, and content publishing capabilities.',
          technologies: ['Laravel', 'Chart.js', 'Bootstrap', 'MySQL'],
          liveDemo: '#',
          code: '#',
          status: 'completed',
          statusText: 'Completed'
        },
        {
          id: 'weather-app',
          title: 'Weather Forecast App',
          category: 'Mobile Development',
          description: 'A beautiful weather application with location-based forecasts, interactive maps, and weather alerts using Flutter.',
          technologies: ['Flutter', 'Weather API', 'Google Maps', 'Local Storage'],
          liveDemo: '#',
          code: '#',
          status: 'in-progress',
          statusText: 'In Progress'
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

        // Project cards animation
        const projectRefs = this.projects.map((_, index) => this.$refs[`project${index + 1}`]).flat()
        gsap.fromTo(projectRefs, 
          { 
            y: 60, 
            opacity: 0,
            scale: 0.9
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 0.8, 
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: projectRefs[0],
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // View all button animation
        gsap.fromTo(this.$refs.viewAllBtn, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.viewAllBtn,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Add hover animations for project cards
        projectRefs.forEach((ref) => {
          if (ref) {
            ref.addEventListener('mouseenter', () => {
              gsap.to(ref.querySelector('.project-glow'), {
                scale: 1.2,
                opacity: 0.3,
                duration: 0.3
              })
            })

            ref.addEventListener('mouseleave', () => {
              gsap.to(ref.querySelector('.project-glow'), {
                scale: 1,
                opacity: 0.1,
                duration: 0.3
              })
            })
          }
        })
      }
    },

    handleViewAllProjects() {
      // Placeholder for view all projects functionality
      console.log('View all projects clicked')
    }
  }
}
</script>

<style scoped>
/* Project Card Base Styles */
.project-card {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.4), rgba(17, 24, 39, 0.6));
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(63, 63, 70, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
}

.project-card:hover {
  border-color: rgba(156, 254, 79, 0.5);
  transform: translateY(-8px) rotateX(2deg);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 20px rgba(156, 254, 79, 0.1);
}

/* Project Image */
.project-image {
  position: relative;
  height: 12rem;
  background: linear-gradient(135deg, rgba(63, 63, 70, 0.3), rgba(31, 41, 55, 0.5));
  overflow: hidden;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5));
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.group:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link-btn {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #9cfe4f, #7dd321);
  color: #0a0a0a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(156, 254, 79, 0.3);
}

.project-link-btn:hover {
  transform: scale(1.1) translateY(-2px);
  box-shadow: 0 8px 25px rgba(156, 254, 79, 0.4);
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-category {
  color: #9cfe4f;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  transition: color 0.3s ease;
  line-height: 1.3;
}

.group:hover .project-title {
  color: #9cfe4f;
}

.project-description {
  color: #a7a9be;
  font-size: 0.875rem;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.group:hover .project-description {
  color: #ffffff;
}

/* Tech Stack */
.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  padding: 0.375rem 0.75rem;
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.1), rgba(156, 254, 79, 0.05));
  color: #9cfe4f;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid rgba(156, 254, 79, 0.2);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: linear-gradient(135deg, rgba(156, 254, 79, 0.2), rgba(156, 254, 79, 0.1));
  border-color: rgba(156, 254, 79, 0.4);
  transform: translateY(-1px);
}

/* Project Status */
.project-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(63, 63, 70, 0.3);
}

.status-indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-indicator.completed {
  background-color: #10b981;
}

.status-indicator.in-progress {
  background-color: #f59e0b;
}

.status-indicator.planning {
  background-color: #3b82f6;
}

.status-text {
  font-size: 0.75rem;
  color: #a7a9be;
  font-weight: 500;
}

/* Project Number */
.project-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(156, 254, 79, 0.1);
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  line-height: 1;
}

.group:hover .project-number {
  color: rgba(156, 254, 79, 0.2);
  transform: scale(1.1);
}

/* Project Glow Effect */
.project-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(156, 254, 79, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  transition: all 0.3s ease;
  pointer-events: none;
}

/* Button Styles */
.btn-outline {
  border: 2px solid #9cfe4f;
  color: #9cfe4f;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;
}

.btn-outline:hover {
  background: linear-gradient(135deg, #9cfe4f, #7dd321);
  color: #0a0a0a;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(156, 254, 79, 0.3);
}

/* Animations */
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
  .project-card:hover {
    transform: translateY(-4px);
  }
  
  .project-content {
    padding: 1rem;
    gap: 0.75rem;
  }
  
  .project-title {
    font-size: 1.125rem;
  }
  
  .project-number {
    font-size: 2rem;
    top: 0.75rem;
    right: 0.75rem;
  }
  
  .project-image {
    height: 10rem;
  }
  
  .project-link-btn {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (max-width: 640px) {
  .project-number {
    font-size: 1.75rem;
  }
  
  .tech-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
}

/* Performance Optimizations */
.project-card {
  will-change: transform;
  backface-visibility: hidden;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition-duration: 0.2s;
  }
  
  .project-card:hover {
    transform: translateY(-2px);
  }
  
  .status-indicator {
    animation: none;
  }
}

/* Focus states */
.project-card:focus,
.project-link-btn:focus,
.btn-outline:focus {
  outline: 2px solid #9cfe4f;
  outline-offset: 2px;
}
</style>
