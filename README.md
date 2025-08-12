# 🚀 Modern Portfolio Website

A stunning, modern portfolio website built with **Vue.js**, **Tailwind CSS**, and **GSAP** animations. Features a minimalistic futuristic design with interactive elements and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Progress-blue)
![Vue.js](https://img.shields.io/badge/Vue.js-3.3.11-4FC08D?logo=vue.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3.12.2-88CE02?logo=greensock)

## ✨ Features

### 🎨 **Modern Design**
- **Minimalistic Futuristic UI** - Clean, professional design with large typography
- **Consistent Color Palette** - Dark theme with orange accents (#0f0e17, #ffffff, #a7a9be, #ff8906)
- **Glassmorphism Effects** - Modern backdrop blur and transparency effects
- **Responsive Layout** - Perfectly optimized for all screen sizes

### 🎭 **Interactive Animations**
- **GSAP Powered** - Smooth, professional animations throughout
- **Floating Elements** - Dynamic floating code blocks and particles
- **Rotating Rings** - Animated rotating elements around central avatar
- **Scroll Animations** - Elements animate as you scroll through sections
- **Hover Effects** - Interactive hover states on all clickable elements

### 🏗️ **Enhanced Illustrations**
- **Code Editor Windows** - Realistic VS Code-style windows with syntax highlighting
- **Tech Icons** - Floating technology icons in glassmorphism containers
- **Developer Avatar** - Central developer icon with animated rotating rings
- **Particle System** - Floating particles and connection lines
- **Gradient Backgrounds** - Beautiful gradient overlays and blur effects

### 📱 **Sections**
- **Hero Section** - Eye-catching introduction with enhanced illustrations
- **About Me** - Professional background and experience
- **Services** - Web Development, UI/UX Design, Performance Optimization
- **Skills** - Interactive skill bars with technology proficiency
- **Projects** - Showcase of completed projects with tech stacks
- **Contact** - Professional contact form with validation
- **Footer** - Social links and newsletter subscription

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vue.js** | 3.3.11 | Frontend framework |
| **Vite** | 5.0.8 | Build tool and dev server |
| **Tailwind CSS** | 3.3.6 | Utility-first CSS framework |
| **GSAP** | 3.12.2 | Animation library |
| **PostCSS** | 8.4.32 | CSS processing |
| **Autoprefixer** | 10.4.16 | CSS vendor prefixing |

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/R4flllyh/portofolio-projects.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.vue          # Navigation header
│   │   ├── Hero.vue            # Hero section with illustrations
│   │   ├── About.vue           # About me section
│   │   ├── Services.vue        # Services offered
│   │   ├── Skills.vue          # Technical skills
│   │   ├── Projects.vue        # Project showcase
│   │   ├── Contact.vue         # Contact form
│   │   └── Footer.vue          # Footer with links
│   ├── assets/
│   │   └── styles/
│   │       └── main.css        # Global styles and Tailwind imports
│   ├── App.vue                 # Main app component
│   └── main.js                 # App entry point
├── package.json
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--background: #0f0e17      /* Dark background */
--headline: #ffffff        /* White headlines */
--paragraph: #a7a9be       /* Light gray text */
--button: #ff8906          /* Orange accent */
--button-text: #0f0e17     /* Dark text on buttons */
```

### Typography
- **Headlines**: Large, bold typography (text-6xl to text-8xl)
- **Body Text**: Clean, readable paragraph text
- **Font Family**: Inter for sans-serif, JetBrains Mono for code

### Animations
- **Float Animation**: 4s ease-in-out infinite
- **Spin Slow**: 8s linear infinite rotation
- **Reverse Spin**: 6s counter-clockwise rotation
- **GSAP Timelines**: Coordinated entrance animations

## 🔧 Customization

### Updating Content
1. **Personal Information**: Edit `src/components/Hero.vue` and `src/components/About.vue`
2. **Services**: Modify `src/components/Services.vue`
3. **Skills**: Update skill levels in `src/components/Skills.vue`
4. **Projects**: Add your projects in `src/components/Projects.vue`
5. **Contact**: Configure contact form in `src/components/Contact.vue`

### Styling
- **Colors**: Update `tailwind.config.js` and CSS custom properties
- **Animations**: Modify GSAP timelines in component methods
- **Layout**: Adjust Tailwind classes for spacing and positioning

### Adding New Sections
1. Create new Vue component in `src/components/`
2. Import and add to `src/App.vue`
3. Update navigation in `src/components/Header.vue`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections use consistent width control:
- `min-w-2xl` for minimum width
- `max-w-7xl` for maximum width
- Centered layout with `flex justify-center`

## 🎯 Performance Features

- **Vite Build Tool**: Fast development and optimized production builds
- **CSS Purging**: Tailwind removes unused CSS in production
- **Component-based**: Modular Vue.js architecture
- **Optimized Assets**: Compressed images and minified code
- **Modern JavaScript**: ES6+ features with proper transpilation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vue.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **GSAP** - For powerful animation capabilities
- **Vite** - For the lightning-fast build tool

## 📞 Contact

**Brunao Dev**
- Website: [Your Website](https://yourwebsite.com)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

<div align="center">
  <p>Made with ❤️ using Vue.js, Tailwind CSS, and GSAP</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
