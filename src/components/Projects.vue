<template>
  <section id="projects" class="section-padding bg-background text-headline px-4 py-16 md:py-24 flex justify-center projects-section">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16 flex items-center gap-10" ref="header">
        <h2 class="text-xl md:text-4xl font-normal font-mono text-headline">
          03 - My Projects
        </h2>
        <img id="scramble-cursor" src="https://assets.codepen.io/16327/scramble-cursor.png" alt="" class="w-14 object-contain animate-pulse" />
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title" 
          class="project-card group" 
          :ref="`project${index + 1}`"
        >
          <!-- Project Image Placeholder -->
          <div class="project-image">
            <div class="project-overlay">
              <div class="project-links">
                <a :href="project.liveDemo" target="_blank" class="project-link-btn">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </a>
                <a :href="project.code" target="_blank" class="project-link-btn">
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
              <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
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
        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-12" ref="viewAllBtn">
        <button class="btn-outline group">
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
      // Check if GSAP is available
      if (typeof this.$gsap !== 'undefined' && typeof this.$ScrollTrigger !== 'undefined') {
        const gsap = this.$gsap
        const ScrollTrigger = this.$ScrollTrigger

        // Animate header
        gsap.fromTo(this.$refs.header, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.header,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Animate project cards
        const projectRefs = this.projects.map((_, index) => this.$refs[`project${index + 1}`]).flat()
        gsap.fromTo(projectRefs, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: projectRefs[0],
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Animate view all button
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
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }
  }
}
</script>

<style scoped>
/* Project Card Styles */
.project-card {
  background-color: rgba(31, 41, 55, 0.4);
  backdrop-filter: blur(4px);
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(63, 63, 70, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.project-card:hover {
  border-color: rgba(0, 255, 0, 0.5);
  transform: translateY(-0.5rem);
  box-shadow: 0 25px 50px -12px rgba(0, 255, 0, 0.1);
}

.project-image {
  position: relative;
  height: 12rem;
  background-color: rgba(63, 63, 70, 0.3);
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
  background-color: rgba(0, 0, 0, 0.6);
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
  background-color: #00ff00;
  color: #0a0a0a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.project-link-btn:hover {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-category {
  color: #00ff00;
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
}

.group:hover .project-title {
  color: #00ff00;
}

.project-description {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.625;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  padding: 0.25rem 0.75rem;
  background-color: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-size: 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(0, 255, 0, 0.2);
  transition: background-color 0.3s ease;
}

.tech-badge:hover {
  background-color: rgba(0, 255, 0, 0.2);
}

.project-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(63, 63, 70, 0.3);
}

.status-indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
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
  color: #ffffff;
}

.project-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.25rem;
  font-weight: 700;
  color: rgba(0, 255, 0, 0.1);
  font-family: 'Courier New', monospace;
  transition: color 0.3s ease;
}

.group:hover .project-number {
  color: rgba(0, 255, 0, 0.2);
}

/* Button Styles */
.btn-outline {
  border: 2px solid #00ff00;
  color: #00ff00;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: #00ff00;
  color: #0a0a0a;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-card:hover {
    transform: translateY(0);
  }
  
  .project-content {
    padding: 1rem;
    gap: 0.75rem;
  }
  
  .project-title {
    font-size: 1.125rem;
  }
  
  .project-number {
    font-size: 1.875rem;
    top: 0.5rem;
    right: 0.5rem;
  }
  
  .project-image {
    height: 10rem;
  }
}
</style>
