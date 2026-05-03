# ArchX - Futuristic Architecture Firm Website

ArchX is a premium, high-end architectural firm website designed with a futuristic aesthetic. It features immersive 3D elements, smooth micro-interactions, and a minimalist luxury design language.

![ArchX Preview](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)

## ✨ Key Features

- **Interactive 3D UI:** Immersive 3D architectural models on the landing page using Three.js.
- **Minimal Luxury Aesthetic:** Dark theme with glassmorphism, subtle gradients, and premium typography.
- **Smooth Animations:** Framer Motion-powered page transitions and scroll-triggered animations.
- **Dynamic Gallery:** Masonry-style project grid with category filtering and lightbox previews.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile devices.
- **Working Contact Form:** Functional contact interface with simulated API integration (ready for EmailJS/SMTP).
- **Modern Tech Stack:** Built with the latest industry standards for performance and scalability.

## 🛠️ Tech Stack

- **Frontend:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router Dom](https://reactrouter.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Navbar, Footer, Scene, etc.)
├── pages/            # Page-level components (Home, Projects, Services, About, Contact)
├── utils/            # Utility functions (cn for tailwind-merge)
├── App.jsx           # Main application logic & routing
├── main.jsx          # Entry point
└── index.css         # Global styles & Tailwind v4 directives
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/archx-architecture.git
   ```
2. Navigate to the project directory:
   ```bash
   cd archx-architecture
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment

### Vercel / Netlify (Recommended)

1. **Vercel:**
   - Connect your GitHub repo to Vercel.
   - It will automatically detect the Vite build settings.
   - Click "Deploy".

2. **Manual Build:**
   ```bash
   npm run build
   ```
   The production-ready files will be in the `dist/` directory.

## 📧 Email Integration

The contact form is currently set up with a simulated success state. To enable real email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Install the SDK: `npm install @emailjs/browser`.
3. Update the `handleSubmit` function in `src/pages/Contact.jsx` with your `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Designed with ❤️ by [Your Name/ArchX Team]
