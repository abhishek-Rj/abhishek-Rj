import { BentoCard } from "../components/BentoCard";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-8">
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
              I&apos;m Abhishek - I break things to understand them, then build
              them back better.
            </p>

            <p>
              It started with Linux. Not because anyone told me to, but because
              I needed to know what was happening underneath. That itch never
              really went away. It just scaled - from tinkering with open-source
              configs at 2am to architecting distributed systems with Kafka,
              building semantic search engines, and shipping production code
              that real users depend on. The obsession isn&apos;t the stack,
              it&apos;s the depth. Digging things to why it works the way it
              does is kinda fun.
            </p>

            <p>
              When I&apos;m not doing that, I&apos;m probably down a rabbit hole
              I didn&apos;t plan to enter - retro arcade design, 3D simulations
              in C++, or figuring out why some obscure system call behaves the
              way it does.
            </p>

            <div className="mt-10 mb-4 border-b border-white/10 pb-2">
              <h2 className="text-2xl font-inter text-white">
                Career & Projects
              </h2>
            </div>

            <p>
              I&apos;ve built across the full stack - and I mean that literally,
              not as a buzzword.
            </p>

            <p>
              On the AI side, I built Vawd, an image sharing platform where
              search works the way your brain does - describe what you&apos;re
              looking for and it finds it, no tags, no filenames, no manual
              work. It runs a CLIP-based embedding pipeline, a RAG retrieval
              layer, and a Kafka-backed ingestion system that keeps the whole
              thing fault-tolerant and fast
              <sup className="text-[var(--invert-bg)] text-xs ml-0.5">
                <Link to="/work#proj-0" className="hover:underline">
                  [1]
                </Link>
              </sup>
              .
            </p>

            <p>
              I&apos;ve built Web World, a real-time 2D multiplayer environment
              where people actually hang out - choose an avatar, explore a
              pixelated world, hop into proximity voice chats or pull friends
              into a private meeting room. The kind of thing that&apos;s
              absurdly fun to build because every layer is a different hard
              problem
              <sup className="text-[var(--invert-bg)] text-xs ml-0.5">
                <Link to="/work#proj-1" className="hover:underline">
                  [2]
                </Link>
              </sup>
              .
            </p>

            <p>
              Professionally, I&apos;ve trained AI agents at AfterQuery
              (YC-backed) - not writing prompts, but engineering verifiable
              tasks that teach agents how to actually operate in Linux
              environments. I&apos;ve shipped a fraud detection plugin for
              e-commerce merchants at Wiranium, and built a location-aware
              promotions platform serving real users across Europe
              <sup className="text-[var(--invert-bg)] text-xs ml-0.5">
                <Link to="/work#exp-0" className="hover:underline">
                  [3]
                </Link>
              </sup>
              .
            </p>

            <p>
              The common thread? I like systems that have real stakes, real
              users, and real complexity - and I like owning them end to end.
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
