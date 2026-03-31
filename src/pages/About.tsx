import { BentoCard } from "../components/BentoCard";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full max-w-5xl mx-auto">
        {/* Wikipedia Standard Header */}
        <div className="mb-8 border-b border-white/10 pb-4">
          <h1 className="text-4xl md:text-5xl font-inter text-white tracking-tight">
            Abhishek Raj
          </h1>
          <p className="text-sm text-zinc-500 mt-2 italic">
            From A.Raj, the free portfolio
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Reading Column */}
          <div className="flex-1 order-2 lg:order-1 font-inter text-md leading-relaxed text-zinc-300 space-y-6">
            <p>
              <strong className="text-white">I am Abhishek Raj</strong>, an
              engineering student completing my undergraduate degree in Computer
              Science at Chandigarh University.
            </p>

            <p>
              My interest in technology began the moment I got my hands on my
              first computer. With the curiosity for Linux and open-source
              software, I discovered that software is more than just code it’s a
              collaborative effort to solve problems. Since then, I’ve been
              focused on breaking and building things to understand how they
              work.
            </p>

            <div className="mt-10 mb-4 border-b border-white/10 pb-2">
              <h2 className="text-2xl font-inter text-white">
                Career & Projects
              </h2>
            </div>

            <p>
              I have architected and developed scalable systems across different
              tech stacks. My work spans from creating AI-driven data analysis
              tools designed for the e-commerce sector to building interactive,
              pixelated 2D virtual environments that support concurrent
              real-time voice and video communication across distributed rooms
              <sup className="text-[var(--invert-bg)] text-xs ml-0.5">
                <Link to="/work" className="hover:underline">
                  [1]
                </Link>
              </sup>
              .
            </p>

            <p>
              I am also fond of retro arcade designs and enjoy creating
              immersive 3D simulations utilizing custom engines and C++,
              alongside rendering classic arcade games (which is why the
              majority of my personal work revolves around them)
              <sup className="text-[var(--invert-bg)] text-xs ml-0.5">
                <Link to="/work" className="hover:underline">
                  [2]
                </Link>
              </sup>
              . My professional experience also includes building
              high-conversion frontend engineering suites, managing scalable
              PostgreSQL infrastructure for aggregation platforms, and training
              bash-proficient AI agents in Linux environments.
            </p>
          </div>

          {/* Wikipedia Infobox (Sidebar) */}
          <div className="w-full lg:w-[300px] order-1 lg:order-2 shrink-0">
            <BentoCard
              className="p-0 overflow-hidden bg-[#1c1c1c]/50 hover:bg-[#1c1c1c]/80 transition-colors border-white/10"
              glowColor="rgba(255,255,255,0.05)"
              disableHoverInversion
            >
              {/* Infobox Header */}
              <div className="bg-black/40 p-4 border-b border-white/10 text-center">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Abhishek Raj
                </h3>
              </div>

              {/* Infobox Image Placeholder */}
              <div className="w-full h-[220px] bg-[#111] flex items-center justify-center border-b border-white/10 p-4">
                <img
                  src="/pfp.jpg"
                  alt="Abhishek Raj"
                  className="w-32 h-32 rounded-full border-4 border-white/5 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>

              {/* Infobox Data */}
              <div className="p-5 text-sm space-y-4">
                <div className="grid grid-cols-[100px_1fr] gap-3 border-b border-white/5 pb-3">
                  <span className="font-bold text-zinc-400">Occupation</span>
                  <span className="text-zinc-300">Build Stuff</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-3 border-b border-white/5 pb-3">
                  <span className="font-bold text-zinc-400">Pronouns</span>
                  <span className="text-zinc-300">he/him</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="font-bold text-zinc-400">Focus Areas</span>
                  <span className="col-span-2 text-zinc-300">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Distributed Systems</li>
                      <li>Real-time Networks</li>
                      <li>Low-level Engines</li>
                    </ul>
                  </span>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </div>
  );
}
