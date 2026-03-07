import { Routes, Route } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Header } from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-zinc-300 font-supply p-4 md:p-8 lg:p-12">
      {/* Background Accent Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-[900px] mx-auto space-y-12 flex flex-col min-h-[calc(100vh-6rem)]">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>

        <footer className="py-8 mt-4 border-t border-white/10 flex justify-between items-center text-sm text-white/70">
          <p>© 2026 Abhishek Raj</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/abhishek-Rj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/abhishek-raj-7371bb214/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://x.com/abhishekRj_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
