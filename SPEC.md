# Portfolio Specification - Rohit Kumar

## Concept & Vision
A developer portfolio that feels like a premium SaaS landing page — not a template. Bold, dark aesthetic with vibrant accent gradients, interactive terminal sections, and real working demos throughout. The visitor should think "this person builds real things" from the first scroll. Every project has a live demo or video — no dead links.

## Design Language

### Aesthetic Direction
Dark cyberpunk-meets-minimal: deep charcoal backgrounds with electric gradient accents (cyan to purple), glassmorphism cards, and subtle noise textures. Think "developer who ships polished products."

### Color Palette
```
--bg-primary: #0a0a0f
--bg-secondary: #12121a
--bg-card: rgba(255, 255, 255, 0.03)
--accent-cyan: #00d4ff
--accent-purple: #a855f7
--accent-pink: #ec4899
--text-primary: #f8fafc
--text-secondary: #94a3b8
--text-muted: #64748b
--gradient: linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ec4899 100%)
```

### Typography
- Headings: Space Grotesk (bold, geometric, modern)
- Body: Inter (clean, readable)
- Code/Terminal: JetBrains Mono

### Motion Philosophy
- Smooth scroll with intersection observer animations
- Staggered fade-up on section entry
- Magnetic hover effects on cards
- Typing animation for terminal sections
- Gradient shimmer on hover states
- Parallax scroll on hero

## Layout Structure

### 1. Navigation (Fixed)
- Logo "RK" with gradient
- Nav links: About, Projects, Skills, Experience, Contact
- CTA: "Download Resume" button
- Mobile: Hamburger with slide-out menu

### 2. Hero Section
- Large name with gradient text
- Animated typing subtitle: "Full Stack Developer" cycling through roles
- Floating 3D-ish cards showing tech stack logos
- Particle/constellation background
- Scroll indicator animation

### 3. About Section
- Split layout: Photo placeholder + bio
- Stats row: Projects (6+), Technologies, Months of Experience
- Quick facts with icons

### 4. Featured Projects (Main Showcase)
Each project as an expandable card with:
- Screenshot/preview
- Title + tech stack badges
- Description
- **LIVE DEMO** button (working)
- GitHub link

**Featured Projects:**
1. **Bulk Mail Sender** — Full working demo with CSV upload simulation
2. **Currency Converter** — Live forex API integration
3. **Crypto Dashboard** — Real API data (CoinGecko)
4. **Terminal Portfolio** — Embedded terminal emulator
5. **YouTube Player** — Demo with search
6. **Portfolio Builder** — Live form demo

### 5. Skills Section
- Animated progress bars for core skills
- Tech stack grid with icons
- Certification badges

### 6. Experience Timeline
- Vertical timeline with company cards
- Hover to expand details

### 7. Contact Section
- Working contact form (Formspree integration)
- Social links with hover effects
- Location/map visual

### 8. Footer
- "Built with ❤️ using Next.js"
- Quick links
- Back to top button

## Features & Interactions

### Working Demos

**Currency Converter:**
- Input amount + select currencies
- Live conversion using ExchangeRate API
- Swap button with rotation animation
- Loading state while fetching

**Crypto Dashboard:**
- Live price data from CoinGecko API
- Price cards with change indicators (up/down arrows)
- Sparkline mini-charts
- Refresh button

**Terminal Emulator:**
- Functional terminal UI
- Commands: help, about, skills, contact, projects, clear
- Typing animation for responses
- ASCII art header

**Contact Form:**
- Fields: Name, Email, Subject, Message
- Client-side validation
- Submit to Formspree
- Success/error states

**Bulk Mail Preview:**
- CSV upload simulation
- Preview recipients table
- Send simulation with progress bar

### Micro-interactions
- Nav links: underline slide animation
- Buttons: scale + glow on hover
- Cards: lift + border glow
- Social icons: bounce on hover
- Scroll: smooth behavior throughout

## Technical Approach
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom config
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (frontend)
- **Backend:** Next.js API routes for demo features

## Component List
- [x] Navbar (fixed, transparent → solid on scroll)
- [x] Hero (animated, particle background)
- [x] About (stats, bio)
- [x] ProjectCard (expandable, with demo)
- [x] ProjectGrid (filterable by category)
- [x] SkillsSection (progress bars, grid)
- [x] Timeline (experience)
- [x] ContactForm (working)
- [x] Footer
- [x] Cursor (custom cursor with trailing effect)
- [x] CursorFollower (interactive)