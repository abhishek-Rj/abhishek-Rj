import { Terminal, X, GitBranch, FolderClosed, Check } from 'lucide-react';

export default function About() {
    return (
        <div className="w-full h-full flex flex-col pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Terminal Window Wrapper */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col flex-grow font-mono">

                {/* Neovim Bufferline (Top) */}
                <div className="flex bg-black/60 text-zinc-400 text-xs select-none">
                    {/* Active Buffer */}
                    <div className="px-4 py-2 bg-white/5 text-[var(--invert-bg)] border-t-2 border-[var(--invert-bg)] flex items-center gap-2">
                        <Terminal size={14} className="text-[var(--invert-bg)] opacity-80" />
                        <span className="italic font-semibold">about.md</span>
                        <X size={14} className="text-zinc-500 hover:text-[var(--invert-text)] hover:bg-[var(--invert-bg)] rounded-sm cursor-pointer transition-all" />
                    </div>
                </div>

                {/* Editor Area */}
                <div className="flex flex-1 p-2 sm:p-4 text-zinc-300 text-sm sm:text-base selection:bg-white/20 overflow-y-auto">

                    {/* Relative Line Numbers */}
                    <div className="flex flex-col text-zinc-600 text-right pr-4 select-none mr-2 border-r border-white/5 min-w-[2.5rem]">
                        <span className="text-[var(--invert-bg)] font-bold">1</span>
                        {[...Array(20)].map((_, i) => (
                            <span key={i} className="leading-relaxed opacity-60">{i + 1}</span>
                        ))}
                    </div>

                    {/* Buffer Content */}
                    <div className="flex flex-col flex-1 gap-6 pb-4">
                        <p className="leading-relaxed">
                            Growing up around computers and the internet, I was always curious about how things actually worked behind the screen. That curiosity slowly turned into building things myself — <span className="text-[var(--invert-bg)] font-semibold">breaking systems, fixing them, and learning a little more every time</span>.
                        </p>

                        <p className="leading-relaxed">
                            I’m currently pursuing a Computer Science degree at <span className="text-[var(--invert-bg)] opacity-90">Chandigarh University</span>, where most of my time goes into building projects across <span className="text-[var(--invert-bg)] italic">web development, real-time systems, and game development</span>. I enjoy working with technologies like TypeScript, Node.js, React, and cloud tools, while also experimenting with Linux systems and backend infrastructure.
                        </p>

                        <p className="leading-relaxed">
                            Some of the things I’ve built include multiplayer environments, machine-learning powered tools, and even a racing game using <span className="text-[var(--invert-bg)] font-bold">Unreal Engine</span>. I’m especially interested in systems that combine multiple areas of tech — real-time communication, distributed systems, security tooling, or interactive environments.
                        </p>

                        <p className="leading-relaxed">
                            Outside of projects, I spend a lot of time exploring <span className="text-[var(--invert-bg)] font-semibold">Linux</span>, solving cybersecurity challenges, contributing to open source, and generally going down random technical rabbit holes on the internet.
                        </p>

                        {/* Snippet Block */}
                        <div className="mt-6 pt-4">
                            <div className="text-zinc-500 mb-2 italic">{'// current_focus.json'}</div>
                            <div className="text-zinc-300">
                                <span className="text-white/50">{'{'}</span><br />
                                &nbsp;&nbsp;<span className="text-white/90">"status"</span><span className="text-white/50">:</span> <span className="text-[var(--invert-bg)]">"Learning & Building"</span><span className="text-white/50">,</span><br />
                                &nbsp;&nbsp;<span className="text-white/90">"interests"</span><span className="text-white/50">:</span> <span className="text-white/50">[</span><span className="text-[var(--invert-bg)]">"Systems"</span><span className="text-white/50">,</span> <span className="text-[var(--invert-bg)]">"Web"</span><span className="text-white/50">,</span> <span className="text-[var(--invert-bg)]">"Games"</span><span className="text-white/50">,</span> <span className="text-[var(--invert-bg)]">"Cloud"</span><span className="text-white/50">,</span> <span className="text-[var(--invert-bg)]">"Cybersecurity"</span><span className="text-white/50">]</span><br />
                                <span className="text-white/50">{'}'}</span>
                            </div>
                        </div>

                        {/* Empty lines tildes */}
                        <div className="flex flex-col text-[var(--invert-bg)] opacity-30 mt-8">
                            <span>~</span>
                            <span>~</span>
                            <span>~</span>
                        </div>
                    </div>
                </div>

                {/* Lualine (Bottom Status Bar) */}
                <div className="flex items-center justify-between text-xs bg-black/60 text-zinc-400 select-none">
                    <div className="flex items-center">
                        <div className="bg-[var(--invert-bg)] text-[var(--invert-text)] font-bold px-3 py-1 flex items-center gap-2 transition-colors">
                            NORMAL
                        </div>
                        <div className="bg-white/10 text-[var(--invert-bg)] px-3 py-1 flex items-center gap-1 transition-colors">
                            <GitBranch size={12} />
                            <span>main</span>
                        </div>
                        <div className="px-3 py-1 flex items-center gap-1">
                            <FolderClosed size={12} className="opacity-70" />
                            <span className="italic text-zinc-300">src/pages/about.md</span>
                            <span className="text-[var(--invert-bg)] ml-1 font-bold">[+]</span>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center">
                        <div className="px-3 py-1 flex items-center gap-1">
                            <Check size={12} className="text-[var(--invert-bg)]" />
                            <span>Prettier</span>
                        </div>
                        <div className="px-3 py-1 border-l border-white/10">utf-8</div>
                        <div className="px-3 py-1 border-l border-white/10 text-white/90">markdown</div>
                        <div className="bg-white/10 text-zinc-300 px-3 py-1">100%</div>
                        <div className="bg-[var(--invert-bg)] text-[var(--invert-text)] font-bold px-3 py-1 transition-colors">
                            1:1
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
