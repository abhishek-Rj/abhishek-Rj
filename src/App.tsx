import { Routes, Route } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-zinc-300 font-supply p-4 md:p-8 lg:p-12">
      {/* Background Accent Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--invert-bg)] opacity-5 rounded-full blur-[120px] pointer-events-none -z-10 transition-colors duration-500" />

      <div className="w-full max-w-[900px] mx-auto space-y-12 flex flex-col min-h-[calc(100vh-6rem)]">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <footer className="relative py-8 px-6 mt-4 bg-[var(--card-bg)] border border-[var(--line-color)] transition-colors duration-500 flex justify-between items-center text-sm text-white/70">
          {/* Solid backing to prevent lines from showing through */}
          <div className="absolute inset-0 bg-[var(--card-bg)] pointer-events-none z-[-1] transition-colors duration-500" />
          
          {/* Infinitely extending border lines */}
          <div className="absolute inset-0 pointer-events-none z-[-2] *:bg-[var(--line-color)] *:transition-colors *:duration-500">
              <div className="absolute top-[-1px] left-[-100vw] right-[-100vw] h-[1px]" />
              <div className="absolute bottom-[-1px] left-[-100vw] right-[-100vw] h-[1px]" />
              <div className="absolute top-[-100vh] bottom-[-100vh] left-[-1px] w-[1px]" />
              <div className="absolute top-[-100vh] bottom-[-100vh] right-[-1px] w-[1px]" />
          </div>
          <p>© 2026 Abhishek Raj</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abhishek-Rj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-raj-7371bb214/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/abhishekRj_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
