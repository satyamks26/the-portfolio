# 🏎️ Kumar Satyam — Engineering High-Performance Systems & 3D Interactive Portfolio

A cutting-edge, 60 FPS 3D interactive portfolio and developer lab built with **React**, **Three.js / React Three Fiber**, **Tailored GLSL Shaders**, and **Framer Motion**. Featuring a photorealistic Lamborghini Aventador V12 automotive showroom stage with dynamic PBR clearcoat shaders, interactive LED headlights, camera flythrough trajectories, and showcase of 3 production full-stack AI applications.

---

## 🌟 Key Features

### 🏁 3D Automotive Showroom Stage
- **Photorealistic Aventador V12 Model**: 3D Lamborghini Aventador with accurate scale, grounded stance, and custom PBR physical materials.
- **Custom GLSL Automotive Paint Shader**: Real-time fragment shader that recalculates specular highlights and clearcoat across bespoke color swatches (*Chalk Gray*, *Giallo Orion*, *Guards Red*, *Miami Blue*, *Matte Carbon*).
- **Interactive LED DRL Headlights**: Laser projector optic lenses casting dynamic forward beams and reflections onto the wet showroom floor.
- **Atmospheric Street Lamp**: Architectural cast-iron street lamp post with emissive warm tungsten bulb, downward spotlight, and soft ground halo beside the vehicle.
- **Wet Showroom Floor**: Real-time surface reflections using custom blur-pass reflectors.
- **Interactive Micro-Parallax & Engine Idle**: Subtle V12 suspension vibration with responsive mouse tilt tracking.

### 🎥 Cinema-Grade Camera Trajectory
- **Scroll-Synchronized Camera Flythrough**: Fluid 3D camera transitions swooping from the Hero showroom down through About, Experience, Projects, and Contact sections without DOM layout thrashing.
- **60 FPS Performance Architecture**: Passive scroll listeners, GPU-accelerated transforms (`translate3d`), and zero main-thread reflows.

### 💼 Shipped Production Applications
- **FitPlate AI**: Real-time nutrition scanner with Gemini 1.5 Vision food recognition and dynamic macro breakdown.
- **PrepAI**: AI-powered mock interview simulator with OpenAI real-time evaluation, audio feedback, and scorecards.
- **OmniFlow CRM**: Enterprise pipeline platform with interactive drag-and-drop Kanban, analytics, and team collaboration.

---

## 🛠️ Tech Stack

- **Framework**: React 18, Vite
- **3D & Graphics**: Three.js, React Three Fiber (@react-three/fiber), Drei (@react-three/drei)
- **Animation & Motion**: Framer Motion, Canvas Confetti
- **Icons**: Lucide Icons
- **Typography & Styling**: Google Fonts (Syne, Plus Jakarta Sans, JetBrains Mono), Vanilla CSS Design System, Glassmorphism

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/satyamks26/the-portfolio.git
   cd the-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Kumar Satyam**
- **GitHub**: [@satyamks26](https://github.com/satyamks26)
- **LinkedIn**: [satyamks26](https://linkedin.com/in/satyamks26)
- **Portfolio**: [https://github.com/satyamks26/the-portfolio](https://github.com/satyamks26/the-portfolio)
