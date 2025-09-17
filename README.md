# Therapa Web 🌿

A comprehensive mental wellness platform built with Next.js, adapted from the original Therapa Flutter mobile application. Therapa Web provides users with therapeutic tools, breathing exercises, yoga poses, memory games, and AI-powered mental health support in a beautiful, responsive web interface.

## 🌟 Features

### 🏠 Dashboard
- **Mood Tracking**: Interactive emoji-based mood selection (😞🙁😐🙂😃)
- **AI Chat Integration**: Direct access to AI mental health assistant
- **Task Management**: Daily wellness task tracking
- **Progress Overview**: Statistics and completion metrics
- **Recommended Exercises**: Quick access to wellness activities

### 🫁 Breathing Exercises
- **Animated Breathing Circle**: Visual breathing guide with expanding/contracting circle
- **Guided Sessions**: 30-breath sessions with real-time progress tracking
- **Visual Feedback**: Color-coded breathing phases (inhale/exhale)
- **Session Controls**: Start, pause, reset functionality
- **Instructions**: Step-by-step breathing guidance

### 🧘 Yoga Poses
- **Pose Dashboard**: Interactive grid of 5 therapeutic yoga poses
- **Detailed Instructions**: Step-by-step guidance for each pose
- **Benefits & Duration**: Comprehensive pose information
- **Difficulty Levels**: Beginner to intermediate classifications
- **Categories**: Big Toe Pose, Bridge Pose, Hare Pose, Side Plank, Wind Relieving Pose

### 🧠 Memory Games
- **Number Memory Game**: Progressive difficulty levels (1-10+ digits)
- **Visual Memory Game**: Placeholder for future implementation
- **Game Mechanics**: Show → memorize → input → feedback cycle
- **Progress Tracking**: Level advancement and scoring system
- **Cognitive Training**: Designed to improve short-term memory

### ✅ Task Management
- **Task Creation**: Add/edit/delete tasks with categories and priorities
- **Completion Tracking**: Visual checkbox system with progress indicators
- **Categories**: Wellness, Exercise, Learning, Social, Work, Personal
- **Priority Levels**: Low, Medium, High with color-coded indicators
- **Statistics**: Completion rates and progress metrics

### 💬 AI Chat
- **Mental Health Assistant**: AI-powered therapeutic conversations
- **Personalized Responses**: Context-aware mental health support
- **Safe Environment**: Non-judgmental space for emotional expression
- **Resource Recommendations**: Suggests relevant exercises and techniques

### 👤 Profile & Settings
- **User Profile**: Personal information management
- **Progress Tracking**: Therapy statistics and goal tracking
- **Settings**: Customizable preferences and privacy controls
- **Data Management**: Export and account management options

## 🎨 Design & Theme

### Color Palette
- **Primary Green**: `#91EEA5` - Main brand color
- **Light Background**: `#F1F4F8` - Page background
- **Primary Text**: `#14181B` - Main text color
- **Secondary Text**: `#57636C` - Supporting text
- **Card Background**: `#ffffff` - Component backgrounds
- **Accent Green**: `#E0FFEA` - Light accent color

### Design Principles
- **Pastel Green Theme**: Calming, therapeutic color scheme
- **Responsive Design**: Optimized for desktop and mobile
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Modern UI**: Clean, minimalist interface with smooth animations

## 🛠️ Technology Stack

### Core Framework
- **[Next.js 15.5.2](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React 0.263.1](https://lucide.dev/)** - Icon library
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Conditional className utility

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code linting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler (Next.js default)

## 📦 Package Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | `15.5.2` | React framework with SSR, routing, and optimization |
| `react` | `19.1.0` | Core React library for building user interfaces |
| `react-dom` | `19.1.0` | React DOM rendering for web applications |
| `lucide-react` | `^0.263.1` | Beautiful, customizable SVG icons |
| `clsx` | `^2.1.1` | Utility for constructing className strings conditionally |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | `^5` | Static type checking for JavaScript |
| `@types/node` | `^20` | TypeScript definitions for Node.js |
| `@types/react` | `^19` | TypeScript definitions for React |
| `@types/react-dom` | `^19` | TypeScript definitions for React DOM |
| `tailwindcss` | `^4` | Utility-first CSS framework |
| `@tailwindcss/postcss` | `^4` | PostCSS plugin for Tailwind CSS |
| `eslint` | `^9` | JavaScript/TypeScript linter |
| `eslint-config-next` | `15.5.2` | ESLint configuration for Next.js |
| `@eslint/eslintrc` | `^3` | ESLint configuration utilities |

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd therapa-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with Turbopack |
| `build` | `npm run build` | Build production-ready application |
| `start` | `npm run start` | Start production server |
| `lint` | `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
therapa-web/
├── src/
│   └── app/
│       ├── components/          # Reusable React components
│       │   ├── Dashboard.tsx    # Main dashboard component
│       │   ├── Layout.tsx       # App layout wrapper
│       │   ├── Navigation.tsx   # Sidebar navigation
│       │   └── SessionCard.tsx  # Therapy session card
│       ├── breathing/           # Breathing exercises
│       │   └── page.tsx         # Breathing exercise page
│       ├── chat/                # AI chat interface
│       │   └── page.tsx         # Chat page
│       ├── games/               # Memory games
│       │   └── page.tsx         # Games page
│       ├── profile/             # User profile
│       │   └── page.tsx         # Profile page
│       ├── resources/           # Wellness resources
│       │   └── page.tsx         # Resources page
│       ├── sessions/            # Therapy sessions
│       │   └── page.tsx         # Sessions page
│       ├── settings/            # App settings
│       │   └── page.tsx         # Settings page
│       ├── tasks/               # Task management
│       │   └── page.tsx         # Tasks page
│       ├── yoga/                # Yoga poses
│       │   └── page.tsx         # Yoga page
│       ├── globals.css          # Global styles and theme
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Home page (Dashboard)
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # Project documentation
```

## 🎯 Key Features Implementation

### Breathing Exercise Animation
- **Smooth Transitions**: CSS transitions for circle expansion/contraction
- **Real-time Updates**: JavaScript intervals for breathing rhythm
- **Visual Feedback**: Color-coded phases and progress indicators
- **Session Management**: Start, pause, reset, and completion states

### Memory Game Logic
- **Progressive Difficulty**: Increasing number lengths per level
- **Timing Control**: Dynamic display durations based on complexity
- **State Management**: Game states (start, showing, inputting, result)
- **Score Tracking**: Level progression and accuracy metrics

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Desktop Enhancement**: Sidebar navigation for larger screens
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive designs
- **Touch-Friendly**: Optimized touch targets and interactions

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4 with custom color variables defined in `globals.css`:

```css
:root {
  --primary-green: #91EEA5;
  --light-background: #F1F4F8;
  --primary-text: #14181B;
  --secondary-text: #57636C;
  --card-background: #ffffff;
  --accent-green: #E0FFEA;
}
```

### TypeScript
Strict TypeScript configuration with:
- Strict mode enabled
- Path mapping for clean imports
- Next.js plugin integration
- Modern ES2017+ target

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Deploy to Other Platforms
- **Netlify**: Compatible with static export
- **AWS Amplify**: Full-stack deployment support
- **Docker**: Containerized deployment option

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write accessible HTML and ARIA labels
- Test on multiple devices and browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original Therapa Flutter app for inspiration and feature set
- Next.js team for the excellent React framework
- Tailwind CSS team for the utility-first CSS framework
- Lucide team for the beautiful icon library

## 📞 Support

For support, email support@therapa.com or create an issue in the repository.

---

**Therapa Web** - Your mental wellness companion on the web 🌿