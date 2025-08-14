<template>
  <section id="skills" class="section-padding bg-background text-headline px-4 py-24 flex justify-center">
    <div class="w-full min-w-2xl max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16" ref="header">
        <h2 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-button to-illustration-highlight bg-clip-text text-transparent">
          My Skills & Expertise
        </h2>
        <p class="text-xl text-paragraph max-w-3xl mx-auto mb-8">
          I specialize in modern web and mobile development technologies, creating seamless user experiences with clean, efficient code.
        </p>
        
        <!-- Skill Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-12" ref="filterButtons">
          <button 
            v-for="category in skillCategories" 
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2',
              activeCategory === category 
                ? 'bg-button text-buttonText border-button shadow-lg shadow-button/25' 
                : 'bg-transparent text-paragraph border-gray-600 hover:border-button/50 hover:text-button'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="grid lg:grid-cols-3 gap-8 items-start">
        <!-- Skills Cards - Now takes 2 columns -->
        <div class="lg:col-span-2 space-y-8" ref="skillList">
          <!-- Skills by Category -->
          <div v-for="category in filteredCategories" :key="category" class="space-y-4">
            <h3 class="text-2xl font-bold text-headline mb-6 flex items-center">
              <div :class="getCategoryIcon(category)" class="w-8 h-8 mr-3"></div>
              {{ category }}
              <div class="flex-1 h-px bg-gradient-to-r from-button/50 to-transparent ml-4"></div>
            </h3>
            
            <div class="grid gap-4">
              <div 
                v-for="(skill, index) in getSkillsByCategory(category)" 
                :key="skill.name"
                class="group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-button/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-button/10"
                :ref="`skill-${category}-${index}`"
              >
                <!-- Skill Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-4">
                    <!-- Skill Icon -->
                    <div :class="[
                      'w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 text-2xl',
                      skill.iconBg,
                      'group-hover:scale-110'
                    ]">
                      {{ skill.icon }}
                    </div>
                    
                    <!-- Skill Info -->
                    <div>
                      <h4 class="text-xl font-bold text-headline group-hover:text-button transition-colors duration-300">
                        {{ skill.name }}
                      </h4>
                      <p class="text-sm text-paragraph">{{ skill.experience }} years experience</p>
                    </div>
                  </div>
                  
                  <!-- Skill Level Badge -->
                  <div class="bg-button/10 border border-button/30 rounded-full px-4 py-2 group-hover:bg-button/20 transition-all duration-300">
                    <span class="text-button font-bold text-lg">{{ skill.level }}%</span>
                  </div>
                </div>

                <!-- Enhanced Progress Bar -->
                <div class="relative mb-4">
                  <div class="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                      :class="skill.progressColor"
                      :style="{ width: skill.level + '%' }"
                      :ref="`progress-${category}-${index}`"
                    >
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                    </div>
                  </div>
                  
                  <!-- Progress Indicator -->
                  <div 
                    class="absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg transition-all duration-1500 ease-out"
                    :style="{ left: skill.level + '%', transform: 'translateX(-50%)' }"
                  ></div>
                </div>

                <!-- Skill Description -->
                <p class="text-paragraph text-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {{ skill.description }}
                </p>

                <!-- Skill Tags -->
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in skill.tags" 
                    :key="tag"
                    class="px-3 py-1 bg-gray-700/50 text-xs text-paragraph rounded-full border border-gray-600/50 group-hover:border-button/30 transition-colors duration-300"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Enhanced Stats & Illustration -->
        <div class="space-y-8" ref="illustration">
          <!-- Skills Summary Stats -->
          <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h3 class="text-xl font-bold text-headline mb-6">Skills Overview</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-paragraph">Total Skills</span>
                <span class="text-2xl font-bold text-button">{{ totalSkills }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-paragraph">Avg. Experience</span>
                <span class="text-2xl font-bold text-illustration-highlight">{{ avgExperience }}y</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-paragraph">Expertise Level</span>
                <span class="text-2xl font-bold text-illustration-secondary">{{ avgLevel }}%</span>
              </div>
            </div>
          </div>

          <!-- Technology Stack Visualization -->
          <div class="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h3 class="text-xl font-bold text-headline mb-6">Tech Stack</h3>
            
            <!-- Central Hub -->
            <div class="relative w-full h-80 flex items-center justify-center">
              <!-- Background Effects -->
              <div class="absolute inset-0 bg-gradient-to-br from-button/5 to-illustration-highlight/5 rounded-2xl blur-3xl animate-pulse"></div>
              
              <!-- Floating Tech Icons -->
              <div class="absolute top-8 left-8 w-16 h-16 bg-gray-800/90 rounded-2xl border border-blue-400/40 backdrop-blur-sm animate-float flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-300">
                <span class="text-2xl">🦋</span>
              </div>
              
              <div class="absolute top-12 right-12 w-14 h-14 bg-gray-800/90 rounded-2xl border border-red-400/40 backdrop-blur-sm animate-float-delayed flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-300">
                <span class="text-xl">🅻</span>
              </div>

              <div class="absolute bottom-16 left-12 w-15 h-15 bg-gray-800/90 rounded-2xl border border-blue-500/40 backdrop-blur-sm animate-float flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-300">
                <span class="text-xl">🌐</span>
              </div>

              <div class="absolute bottom-12 right-16 w-14 h-14 bg-gray-800/90 rounded-2xl border border-yellow-400/40 backdrop-blur-sm animate-float-delayed flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-300">
                <span class="text-xl">⚡</span>
              </div>

              <div class="absolute top-1/2 left-4 w-12 h-12 bg-gray-800/90 rounded-2xl border border-green-400/40 backdrop-blur-sm animate-float flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-300">
                <span class="text-lg">🎨</span>
              </div>

              <div class="absolute top-1/2 right-4 w-12 h-12 bg-gray-800/90 rounded-2xl border border-purple-400/40 backdrop-blur-sm animate-float-delayed flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-300">
                <span class="text-lg">🗄️</span>
              </div>

              <!-- Central Skills Hub -->
              <div class="relative">
                <!-- Rotating Rings -->
                <div class="absolute inset-0 w-32 h-32 border-2 border-button/20 rounded-full animate-spin-slow"></div>
                <div class="absolute inset-4 w-24 h-24 border border-illustration-highlight/15 rounded-full animate-reverse-spin"></div>
                
                <!-- Central Icon -->
                <div class="relative w-28 h-28 bg-gradient-to-br from-button via-illustration-highlight to-button rounded-full flex items-center justify-center shadow-2xl border-2 border-white/10">
                  <div class="w-20 h-20 bg-gradient-to-br from-button/90 to-illustration-highlight/90 rounded-full flex items-center justify-center">
                    <svg class="w-10 h-10 text-buttonText" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience Timeline -->
          <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h3 class="text-xl font-bold text-headline mb-6">Experience Timeline</h3>
            <div class="space-y-3">
              <div v-for="year in experienceYears" :key="year.year" class="flex items-center space-x-4">
                <div class="w-3 h-3 bg-button rounded-full"></div>
                <div class="flex-1">
                  <div class="flex justify-between items-center">
                    <span class="text-paragraph font-medium">{{ year.year }}</span>
                    <span class="text-sm text-button">{{ year.skills }} skills</span>
                  </div>
                  <div class="w-full h-1 bg-gray-700/50 rounded-full mt-1">
                    <div 
                      class="h-full bg-gradient-to-r from-button to-illustration-highlight rounded-full transition-all duration-1000"
                      :style="{ width: (year.skills / maxSkillsPerYear * 100) + '%' }"
                    ></div>
                  </div>
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
  name: 'Skills',
  data() {
    return {
      activeCategory: 'All',
      skills: [
        // Frontend Development
        {
          name: 'HTML/CSS',
          level: 95,
          experience: 4,
          category: 'Frontend',
          icon: '🌐',
          iconBg: 'bg-orange-500/20 text-orange-400',
          progressColor: 'from-orange-500 to-red-500',
          description: 'Expert in semantic HTML5, modern CSS3, Flexbox, Grid, and responsive design principles.',
          tags: ['HTML5', 'CSS3', 'Sass', 'Flexbox', 'Grid', 'Responsive']
        },
        {
          name: 'JavaScript',
          level: 85,
          experience: 3,
          category: 'Frontend',
          icon: '⚡',
          iconBg: 'bg-yellow-500/20 text-yellow-400',
          progressColor: 'from-yellow-500 to-orange-500',
          description: 'Proficient in ES6+, DOM manipulation, async programming, and modern JavaScript frameworks.',
          tags: ['ES6+', 'DOM', 'Async/Await', 'Promises', 'APIs']
        },
        {
          name: 'Vue.js',
          level: 80,
          experience: 2,
          category: 'Frontend',
          icon: '💚',
          iconBg: 'bg-green-500/20 text-green-400',
          progressColor: 'from-green-500 to-emerald-500',
          description: 'Building reactive SPAs with Vue 3, Composition API, Vuex/Pinia, and Vue Router.',
          tags: ['Vue 3', 'Composition API', 'Pinia', 'Vue Router', 'Vite']
        },

        // Backend Development
        {
          name: 'PHP',
          level: 85,
          experience: 3,
          category: 'Backend',
          icon: '🐘',
          iconBg: 'bg-purple-500/20 text-purple-400',
          progressColor: 'from-purple-500 to-indigo-500',
          description: 'Strong foundation in PHP 8+, OOP principles, and modern PHP development practices.',
          tags: ['PHP 8+', 'OOP', 'Composer', 'PSR Standards']
        },
        {
          name: 'Laravel',
          level: 80,
          experience: 2,
          category: 'Backend',
          icon: '🅻',
          iconBg: 'bg-red-500/20 text-red-400',
          progressColor: 'from-red-500 to-pink-500',
          description: 'Building robust web applications with Laravel, Eloquent ORM, and RESTful APIs.',
          tags: ['Laravel 10', 'Eloquent', 'Artisan', 'Blade', 'API']
        },

        // Mobile Development
        {
          name: 'Flutter',
          level: 85,
          experience: 2,
          category: 'Mobile',
          icon: '🦋',
          iconBg: 'bg-blue-500/20 text-blue-400',
          progressColor: 'from-blue-500 to-cyan-500',
          description: 'Cross-platform mobile development with Flutter, Dart, and state management solutions.',
          tags: ['Dart', 'Widgets', 'Provider', 'BLoC', 'Firebase']
        },

        // Design & Tools
        {
          name: 'Figma',
          level: 75,
          experience: 2,
          category: 'Design',
          icon: '🎨',
          iconBg: 'bg-pink-500/20 text-pink-400',
          progressColor: 'from-pink-500 to-rose-500',
          description: 'UI/UX design, prototyping, design systems, and collaborative design workflows.',
          tags: ['UI/UX', 'Prototyping', 'Design Systems', 'Components']
        },
        {
          name: 'WordPress',
          level: 90,
          experience: 4,
          category: 'CMS',
          icon: '🌐',
          iconBg: 'bg-blue-600/20 text-blue-300',
          progressColor: 'from-blue-600 to-indigo-600',
          description: 'Custom theme development, plugin creation, and WordPress optimization.',
          tags: ['Custom Themes', 'Plugins', 'ACF', 'WooCommerce', 'Gutenberg']
        },

        // Database
        {
          name: 'MySQL',
          level: 75,
          experience: 3,
          category: 'Database',
          icon: '🗄️',
          iconBg: 'bg-orange-600/20 text-orange-300',
          progressColor: 'from-orange-600 to-red-600',
          description: 'Database design, optimization, complex queries, and performance tuning.',
          tags: ['SQL', 'Database Design', 'Optimization', 'Indexing']
        }
      ]
    }
  },
  computed: {
    skillCategories() {
      const categories = ['All', ...new Set(this.skills.map(skill => skill.category))]
      return categories
    },
    filteredCategories() {
      if (this.activeCategory === 'All') {
        return [...new Set(this.skills.map(skill => skill.category))]
      }
      return [this.activeCategory]
    },
    totalSkills() {
      return this.skills.length
    },
    avgExperience() {
      const total = this.skills.reduce((sum, skill) => sum + skill.experience, 0)
      return Math.round(total / this.skills.length * 10) / 10
    },
    avgLevel() {
      const total = this.skills.reduce((sum, skill) => sum + skill.level, 0)
      return Math.round(total / this.skills.length)
    },
    experienceYears() {
      const years = [2021, 2022, 2023, 2024]
      return years.map(year => ({
        year,
        skills: this.skills.filter(skill => 
          2024 - skill.experience + 1 <= year
        ).length
      }))
    },
    maxSkillsPerYear() {
      return Math.max(...this.experienceYears.map(y => y.skills))
    }
  },
  mounted() {
    this.initAnimations()
  },
  methods: {
    getSkillsByCategory(category) {
      return this.skills.filter(skill => skill.category === category)
    },
    getCategoryIcon(category) {
      const icons = {
        'Frontend': 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center text-blue-400',
        'Backend': 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center text-purple-400',
        'Mobile': 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center text-green-400',
        'Design': 'bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg flex items-center justify-center text-pink-400',
        'CMS': 'bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg flex items-center justify-center text-blue-300',
        'Database': 'bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-lg flex items-center justify-center text-orange-300'
      }
      return icons[category] || 'bg-gray-500/20 rounded-lg flex items-center justify-center text-gray-400'
    },
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

        // Animate skills list
        gsap.fromTo(this.$refs.skillList, 
          { x: -50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.skillList,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Animate illustration
        gsap.fromTo(this.$refs.illustration, 
          { x: 50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: this.$refs.illustration,
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
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes reverse-spin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 4s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

.animate-reverse-spin {
  animation: reverse-spin 10s linear infinite;
}

.animate-shine {
  animation: shine 2s ease-in-out infinite;
}

/* Custom scrollbar for skill containers */
.space-y-8::-webkit-scrollbar {
  width: 4px;
}

.space-y-8::-webkit-scrollbar-track {
  background: transparent;
}

.space-y-8::-webkit-scrollbar-thumb {
  background: rgba(255, 137, 6, 0.3);
  border-radius: 2px;
}

.space-y-8::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 137, 6, 0.5);
}
</style>
