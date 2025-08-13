<template>
  <section id="about" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16" ref="header">
        <h2 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-button to-illustration-highlight bg-clip-text text-transparent">
          About Me
        </h2>
        <p class="text-xl text-paragraph max-w-3xl mx-auto">
          Passionate developer crafting digital experiences with modern technologies
        </p>
      </div>

      <!-- About Grid -->
      <div class="grid lg:grid-cols-3 gap-12 items-start">
        <!-- Left Column - Personal Info & Image -->
        <div class="lg:col-span-1 space-y-8" ref="personalInfo">
          <!-- Profile Card -->
          <div class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
            <!-- Profile Image Placeholder -->
            <div class="relative mx-auto mb-6">
              <div class="w-32 h-32 bg-gradient-to-br from-button via-illustration-highlight to-illustration-secondary rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white/10">
                <div class="w-28 h-28 bg-gradient-to-br from-button/90 to-illustration-highlight/90 rounded-full flex items-center justify-center">
                  <svg class="w-16 h-16 text-buttonText" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <!-- Status Indicator -->
              <div class="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>

            <h3 class="text-2xl font-bold text-headline mb-2">Rafly</h3>
            <p class="text-button font-semibold mb-4">Junior Frontend Developer</p>
            <p class="text-paragraph text-sm mb-6">📍 Surabaya, Indonesia</p>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-gray-700/30 rounded-xl p-3">
                <div class="text-2xl font-bold text-button">2+</div>
                <div class="text-xs text-paragraph">Years Experience</div>
              </div>
              <div class="bg-gray-700/30 rounded-xl p-3">
                <div class="text-2xl font-bold text-illustration-highlight">15+</div>
                <div class="text-xs text-paragraph">Projects Done</div>
              </div>
            </div>

            <!-- Download CV Button -->
            <button class="w-full bg-gradient-to-r from-button to-illustration-highlight text-buttonText font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-button/25 hover:scale-105 transition-all duration-300">
              <div class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                <span>Download CV</span>
              </div>
            </button>
          </div>

          <!-- Technologies I Love -->
          <div class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h4 class="text-lg font-bold text-headline mb-4 flex items-center">
              <div class="w-6 h-6 bg-gradient-to-br from-button/20 to-illustration-highlight/20 rounded-lg flex items-center justify-center mr-2">
                <svg class="w-4 h-4 text-button" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
              Technologies I Love
            </h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Flutter</span>
              <span class="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30">Laravel</span>
              <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">JavaScript</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Vue.js</span>
              <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Figma</span>
              <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30">HTML/CSS</span>
            </div>
          </div>
        </div>

        <!-- Right Column - Detailed Info -->
        <div class="lg:col-span-2 space-y-8" ref="detailedInfo">
          <!-- About Story -->
          <div class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 class="text-2xl font-bold text-headline mb-6 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-br from-illustration-highlight/20 to-button/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-illustration-highlight" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
              My Story
            </h3>
            <div class="space-y-4 text-paragraph leading-relaxed">
              <p>
                Hi there! I'm <span class="text-button font-semibold">Rafly</span>, a passionate junior developer based in the vibrant city of Surabaya, Indonesia. My journey into the world of technology began with a simple curiosity about how websites and mobile apps work, which quickly evolved into a deep love for creating digital experiences.
              </p>
              <p>
                I specialize in building modern web and mobile applications using <span class="text-illustration-highlight font-semibold">Flutter & Laravel</span>, and I have a keen eye for design with <span class="text-illustration-secondary font-semibold">Figma</span>. What drives me most is the endless opportunity to learn something new every day in this ever-evolving field.
              </p>
              <p>
                Currently, I'm working as a <span class="text-button font-semibold">Junior Frontend Web Developer</span> at Yayasan Tangan Pengharapan, where I focus on creating responsive web applications and mobile solutions that make a real difference in people's lives. I'm always eager to take on new challenges and expand my technical skills.
              </p>
            </div>
          </div>

          <!-- Experience & Education -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Experience -->
            <div class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h4 class="text-xl font-bold text-headline mb-6 flex items-center">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M10,4V6H14V4H10Z"/>
                  </svg>
                </div>
                Experience
              </h4>
              <div class="space-y-4">
                <div class="border-l-2 border-button/30 pl-4">
                  <div class="flex items-center space-x-2 mb-1">
                    <div class="w-2 h-2 bg-button rounded-full"></div>
                    <span class="text-sm text-button font-semibold">2023 - Present</span>
                  </div>
                  <h5 class="font-semibold text-headline">Junior Frontend Developer</h5>
                  <p class="text-sm text-paragraph">Yayasan Tangan Pengharapan</p>
                  <p class="text-xs text-paragraph mt-1">Building responsive web applications and mobile solutions</p>
                </div>
                <div class="border-l-2 border-gray-600/30 pl-4">
                  <div class="flex items-center space-x-2 mb-1">
                    <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span class="text-sm text-gray-400 font-semibold">2022 - 2023</span>
                  </div>
                  <h5 class="font-semibold text-headline">Freelance Developer</h5>
                  <p class="text-sm text-paragraph">Self-employed</p>
                  <p class="text-xs text-paragraph mt-1">Web development and UI/UX design projects</p>
                </div>
              </div>
            </div>

            <!-- Education -->
            <div class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h4 class="text-xl font-bold text-headline mb-6 flex items-center">
                <div class="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                  </svg>
                </div>
                Education
              </h4>
              <div class="space-y-4">
                <div class="border-l-2 border-illustration-highlight/30 pl-4">
                  <div class="flex items-center space-x-2 mb-1">
                    <div class="w-2 h-2 bg-illustration-highlight rounded-full"></div>
                    <span class="text-sm text-illustration-highlight font-semibold">2021 - 2024</span>
                  </div>
                  <h5 class="font-semibold text-headline">Computer Science</h5>
                  <p class="text-sm text-paragraph">University of Technology</p>
                  <p class="text-xs text-paragraph mt-1">Focus on Web Development & Software Engineering</p>
                </div>
                <div class="border-l-2 border-gray-600/30 pl-4">
                  <div class="flex items-center space-x-2 mb-1">
                    <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span class="text-sm text-gray-400 font-semibold">2018 - 2021</span>
                  </div>
                  <h5 class="font-semibold text-headline">High School</h5>
                  <p class="text-sm text-paragraph">SMAN 1 Surabaya</p>
                  <p class="text-xs text-paragraph mt-1">Science Major</p>
                </div>
              </div>
            </div>
          </div>

          <!-- What I Do -->
          <div class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 class="text-2xl font-bold text-headline mb-6 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-br from-button/20 to-illustration-secondary/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-button" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                </svg>
              </div>
              What I Do
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-semibold text-headline mb-1">Web Development</h5>
                    <p class="text-sm text-paragraph">Building responsive and modern web applications using Vue.js, Laravel, and other cutting-edge technologies.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-semibold text-headline mb-1">Mobile Development</h5>
                    <p class="text-sm text-paragraph">Creating cross-platform mobile applications with Flutter, delivering native performance and beautiful UIs.</p>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V19H19V9Z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-semibold text-headline mb-1">UI/UX Design</h5>
                    <p class="text-sm text-paragraph">Designing intuitive and visually appealing user interfaces with Figma, focusing on user experience and accessibility.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-semibold text-headline mb-1">Problem Solving</h5>
                    <p class="text-sm text-paragraph">Analyzing complex problems and developing efficient, scalable solutions that meet business requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Fun Facts -->
          <div class="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 class="text-2xl font-bold text-headline mb-6 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-br from-illustration-secondary/20 to-button/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-illustration-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22.74L12,19.27L5.82,22.74L7,14L2,9L10.91,8.26L12,2Z"/>
                </svg>
              </div>
              Fun Facts About Me
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">☕</span>
                  <span class="text-paragraph">Coffee enthusiast - I code better with good coffee</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🎮</span>
                  <span class="text-paragraph">Gamer in my free time - strategy games are my favorite</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">📚</span>
                  <span class="text-paragraph">Always learning - currently exploring AI and machine learning</span>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🌱</span>
                  <span class="text-paragraph">Love nature and outdoor activities</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🎵</span>
                  <span class="text-paragraph">Music lover - lo-fi beats while coding</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">🚀</span>
                  <span class="text-paragraph">Dream to work on space technology someday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
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

        // Animate personal info
        gsap.fromTo(this.$refs.personalInfo, 
          { x: -50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.personalInfo,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Animate detailed info
        gsap.fromTo(this.$refs.detailedInfo, 
          { x: 50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.detailedInfo,
              start: "top 80%",
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
/* Custom animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Hover effects for cards */
.bg-gray-800\/40:hover {
  background-color: rgba(31, 41, 55, 0.6);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Custom scrollbar for content areas */
.space-y-4::-webkit-scrollbar {
  width: 4px;
}

.space-y-4::-webkit-scrollbar-track {
  background: transparent;
}

.space-y-4::-webkit-scrollbar-thumb {
  background: rgba(255, 137, 6, 0.3);
  border-radius: 2px;
}

.space-y-4::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 137, 6, 0.5);
}

/* Timeline line effects */
.border-l-2 {
  position: relative;
}

.border-l-2::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, rgba(255, 137, 6, 0.3), transparent);
}
</style>
