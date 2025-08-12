# 🚀 Amit Santosh Sahu - Full-Stack Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

> A modern, responsive portfolio website showcasing full-stack development skills, AI integration expertise, and professional achievements.

## 🌟 Live Demo

**🔗 [View Portfolio](https://portfolio-wheat-seven-70.vercel.app)**

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This portfolio represents **Amit Santosh Sahu**, a passionate Full-Stack Developer specializing in AI integration and scalable cloud solutions. Currently serving as Technical Head at Data Science Community (DASCA), leading cross-functional teams and organizing technical events.

### 🏆 Key Achievements

- **500+ LeetCode Problems Solved** (Rating: 1676)
- **3+ Production Applications** deployed with 99.9% uptime
- **Technical Leadership** at DASCA with 200+ student impact
- **AI/ML Expertise** with LangChain and OpenAI integration

## ✨ Features

- 🎨 **Modern UI/UX** - Responsive design with smooth animations
- 📱 **Mobile-First** - Optimized for all device sizes
- 🚀 **Performance Optimized** - Next.js 13+ with TypeScript
- 🔍 **SEO Ready** - Meta tags, Open Graph, and structured data
- 📊 **Dynamic Content** - GitHub integration and real-time data
- 🎭 **Interactive Elements** - Lottie animations and smooth transitions
- 📧 **Contact Integration** - EmailJS-powered contact form
- 🌐 **PWA Ready** - Progressive Web App capabilities

## 🛠️ Technologies

### Frontend

- **Next.js 13+** - React framework with App Router
- **TypeScript 4.9+** - Type-safe JavaScript
- **React 18.2+** - Modern React with hooks
- **Bootstrap 5** - Responsive CSS framework
- **Tailwind CSS** - Utility-first CSS framework

### Backend & APIs

- **Node.js** - Server-side JavaScript
- **FastAPI** - Python web framework
- **PostgreSQL** - Relational database
- **MongoDB** - NoSQL database

### AI & ML

- **LangChain** - AI application framework
- **OpenAI APIs** - GPT integration
- **Scikit-learn** - Machine learning library
- **Pandas** - Data manipulation

### DevOps & Tools

- **Docker** - Containerization
- **Vercel** - Deployment platform
- **GitHub Actions** - CI/CD automation
- **Playwright** - End-to-end testing

## 📁 Project Structure

```
portfolio/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Navigation bar
│   ├── SEO.tsx         # SEO optimization
│   ├── ContactUs.tsx   # Contact form
│   └── ...             # Other components
├── containers/          # Page sections
│   ├── Greetings.tsx   # Hero section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Project gallery
│   └── ...             # Other sections
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Home page
├── public/             # Static assets
│   ├── img/            # Images and icons
│   ├── lottie/         # Animation files
│   └── fonts/          # Custom fonts
├── styles/             # CSS and styling
├── types/              # TypeScript type definitions
└── portfolio.ts        # Portfolio data configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0+
- **npm** 8.0+ or **yarn** 1.22+
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/amit-s4507/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Quick Start (Windows)

Use the included batch file for quick setup:

```bash
start-portfolio.bat
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint and Prettier checks
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# GitHub API (optional)
GITHUB_TOKEN=your_github_token

# EmailJS (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Code Style

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy automatically** on every push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

### Environment Variables

Set these in your deployment platform:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Portfolio**: [https://portfolio-wheat-seven-70.vercel.app](https://portfolio-wheat-seven-70.vercel.app)
- **LinkedIn**: [https://linkedin.com/in/amit-sahu-24a03s1707](https://linkedin.com/in/amit-sahu-24a03s1707)
- **GitHub**: [https://github.com/amit-s4507](https://github.com/amit-s4507)
- **Email**: amitsahu174507@gmail.com

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **React Community** for continuous innovation
- **Open Source Contributors** for inspiration
- **DASCA Community** for support and collaboration

---

⭐ **Star this repository if you found it helpful!**
