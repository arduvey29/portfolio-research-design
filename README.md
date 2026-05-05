# Portfolio Design Research

A modern, high-performance portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and optimized performance across all devices.

## 🎨 Features

- **Smooth Animations** - Lenis-powered scroll animations for engaging user experience
- **Responsive Design** - Optimized for mobile, tablet, and desktop breakpoints
- **Modern Stack** - Built with Next.js 14, React, TypeScript, and Tailwind CSS
- **Performance Focused** - Optimized images, CSS, and lazy-loaded components
- **Well-Tested** - Comprehensive test coverage with Vitest
- **Accessible** - Built with accessibility best practices in mind

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Lenis](https://lenis.studiofreight.com/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Package Manager**: npm

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── fonts/             # Custom fonts
├── components/            # Reusable React components
│   ├── Brief.tsx          # Brief card component
│   ├── Redacted.tsx       # Redacted component
│   ├── SocialLinks.tsx    # Social media links
│   ├── Stamp.tsx          # Stamp component
│   ├── LenisProvider.tsx  # Smooth scroll provider
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Hero section
│       ├── Method.tsx     # Method section
│       ├── Stack.tsx      # Tech stack section
│       ├── Cases.tsx      # Case studies
│       ├── Signal.tsx     # Signal section
│       └── Contact.tsx    # Contact section
├── lib/                   # Utility functions and data
│   ├── animations.ts      # Animation utilities
│   ├── data.ts           # Static data
│   └── fonts.ts          # Font configuration
├── __tests__/            # Test files
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arduvey29/portfolio-design-research.git
cd portfolio-design-research
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint

## 🎯 Key Sections

- **Hero** - Introduction and headline
- **Method** - Process/methodology showcase
- **Stack** - Technology stack display
- **Cases** - Case studies and projects
- **Signal** - Call to action
- **Contact** - Contact and social links
- **Brief** - Project brief cards with reveal animations

## 🧪 Testing

This project uses Vitest for unit and component testing:

```bash
npm test
```

## 📱 Responsive Design

The portfolio is fully responsive with optimized breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎭 Animations

Smooth scroll animations powered by Lenis create a polished, professional feel. All animations are GPU-accelerated for optimal performance.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**arduvey29** - [GitHub](https://github.com/arduvey29)

---

Built as a design and engineering portfolio showcase
