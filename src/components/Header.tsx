import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { toggleTheme, nextThemeColor } = useTheme();
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Helper to determine if a link is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="relative py-4 z-50">
            <div className="flex justify-between items-center">
                <Link to="/" onClick={closeMenu} className="text-xl font-bold text-white tracking-widest uppercase z-50">
                    A.Raj
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Link to="/" className={`${isActive('/') ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'} transition-colors duration-300`}>Home</Link>
                    <Link to="/work" className={`${isActive('/work') ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'} transition-colors duration-300`}>Work</Link>
                    <Link to="/about" className={`${isActive('/about') ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'} transition-colors duration-300`}>About</Link>
                    <a href="https://www.dropbox.com/scl/fi/0j6kossvhwj3634d5ubbs/Resume-Abhishek-Raj.pdf?rlkey=5pq5o15fw2e0sby87pwm7qnhq&st=sao9hfnb&dl=0" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-300">Resume</a>
                    <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center hover:bg-[#2a2a2a] transition-colors relative group">
                        <span className="sr-only">Toggle Theme</span>
                        <div
                            className="w-4 h-4 rounded-full border border-white/20 transition-colors duration-500"
                            style={{ backgroundColor: nextThemeColor === '#0a0a0a' ? 'white' : nextThemeColor }}
                        />
                    </button>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center hover:bg-[#2a2a2a] transition-colors relative group">
                        <span className="sr-only">Toggle Theme</span>
                        <div
                            className="w-4 h-4 rounded-full border border-white/20 transition-colors duration-500"
                            style={{ backgroundColor: nextThemeColor === '#0a0a0a' ? 'white' : nextThemeColor }}
                        />
                    </button>
                    <button onClick={toggleMenu} className="text-white p-2">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 py-4 bg-[#1c1c1c]/95 backdrop-blur-xl border border-white/10 rounded-2xl mt-4 flex flex-col items-center gap-6 transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <Link to="/" onClick={closeMenu} className={`${isActive('/') ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'} text-lg transition-colors`}>Home</Link>
                <Link to="/work" onClick={closeMenu} className={`${isActive('/work') ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'} text-lg transition-colors`}>Work</Link>
                <Link to="/about" onClick={closeMenu} className={`${isActive('/about') ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'} text-lg transition-colors`}>About</Link>
                <a href="https://www.dropbox.com/scl/fi/0j6kossvhwj3634d5ubbs/Resume-Abhishek-Raj.pdf?rlkey=5pq5o15fw2e0sby87pwm7qnhq&st=sao9hfnb&dl=0" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="text-zinc-400 hover:text-white text-lg transition-colors">Resume</a>
            </div>
        </header>
    );
}
