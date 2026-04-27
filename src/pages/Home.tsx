import { useState, useEffect } from "react";
import {
  Github,
  Twitter,
  Linkedin,
  ArrowUpRight,
  Music,
  Send,
} from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiRemix,
  SiVite,
  SiNextdotjs,
  SiPrisma,
  SiUnrealengine,
  SiArchlinux,
  SiNodedotjs,
  SiPostgresql,
  SiGraphql,
  SiGo,
  SiRust,
  SiFirebase,
  SiDocker,
  SiCloudflare,
} from "react-icons/si";

const techIconsRow1 = [
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiCplusplus, name: "C++" },
  { Icon: SiPython, name: "Python" },
  { Icon: SiRemix, name: "Remix" },
  { Icon: SiVite, name: "Vite" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiPrisma, name: "Prisma" },
  { Icon: SiUnrealengine, name: "Unreal Engine" },
];

const techIconsRow2 = [
  { Icon: SiArchlinux, name: "Arch Linux" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiGraphql, name: "GraphQL" },
  { Icon: SiGo, name: "Go" },
  { Icon: SiRust, name: "Rust" },
  { Icon: SiFirebase, name: "Firebase" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiCloudflare, name: "Cloudflare" },
];

import { BentoGrid } from "../components/BentoGrid";
import { BentoCard } from "../components/BentoCard";
// Removed unused useTheme

function Home() {
  const [youtubeData, setYoutubeData] = useState<any>(null);
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleContactSubmit = async () => {
    if (!email || isSubmitting) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch(
        "https://backend.abhishekr2077.workers.dev/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus((prev) =>
          prev === "success" || prev === "error" ? "idle" : prev,
        );
      }, 3000);
    }
  };

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const apiKey = import.meta.env.VITE_GOOGLE_API;
        if (!apiKey) return;

        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=ice+slowed+zertal&key=${apiKey}`,
        );
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          setYoutubeData(data.items[0]);
        }
      } catch (error) {
        console.error("Failed to fetch youtube data", error);
      }
    };

    fetchMusic();
  }, []);
  return (
    <BentoGrid>
      {/* Hero / Bio Card */}
      <BentoCard className="row-span-2 md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between group">
        <div>
          <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 overflow-hidden mb-6 filter grayscale">
            <img
              src="/pfp.jpg"
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-[var(--invert-text)] transition-colors mb-4 tracking-tighter leading-none">
            Hi, I'm Abhishek Raj.
          </h1>
          <p className="text-zinc-400 group-hover:text-[var(--invert-text)] opacity-90 transition-colors text-xs md:text-sm leading-relaxed tracking-wide text-justify">
            Full stack by day, low level by night, breaking things in between.
            I've shipped web apps, dabbled in cybersecurity, learning AI
            systems, spent way too many hours writing games in C++ and Unreal
            Engine. I just really like knowing how stuff works, all the way
            down.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-zinc-500 group-hover:text-[var(--invert-text)] opacity-90 transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
            Available for new opportunities
          </div>
        </div>
      </BentoCard>

      {/* GitHub Stats Card */}
      <BentoCard
        className="md:col-span-2 p-6 flex items-center justify-center relative group"
        glowColor="rgba(255,255,255,0.05)"
      >
        <a
          href="https://github.com/abhishek-Rj"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
        ></a>
        <ArrowUpRight className="absolute top-6 right-6 w-6 h-6 text-zinc-500 group-hover:text-[var(--invert-text)] transition-colors z-10" />
        <Github className="w-16 h-16 text-white group-hover:text-[var(--invert-text)] group-hover:scale-110 transition-all duration-300 z-10" />
      </BentoCard>

      {/* LinkedIn Card */}
      <BentoCard
        className="bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border-[#0A66C2]/20 p-6 flex items-center justify-center group"
        glowColor="rgba(10, 102, 194, 0.2)"
      >
        <a
          href="https://www.linkedin.com/in/abhishek-raj-7371bb214/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
        ></a>
        <ArrowUpRight className="absolute top-6 right-6 w-6 h-6 text-[#0A66C2]/50 group-hover:text-[var(--invert-text)] transition-colors z-10" />
        <Linkedin className="w-16 h-16 text-[#0A66C2] group-hover:scale-110 transition-all duration-300 z-10" />
      </BentoCard>

      {/* X (Twitter) Card */}
      <BentoCard
        className="bg-black/50 p-6 flex items-center justify-center group"
        glowColor="rgba(255, 255, 255, 0.1)"
      >
        <a
          href="https://x.com/abhishekRj_"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
        ></a>
        <ArrowUpRight className="absolute top-6 right-6 w-6 h-6 text-zinc-500 group-hover:text-[var(--invert-text)] transition-colors z-10" />
        <Twitter className="w-16 h-16 text-white group-hover:text-[var(--invert-text)] group-hover:scale-110 transition-all duration-300 z-10" />
      </BentoCard>

      {/* Latest Project or Post */}
      <BentoCard
        className="md:col-span-2 p-[2px] border-transparent bg-[var(--invert-bg)] rounded-3xl group transition-colors duration-500"
        glowColor="rgba(255,255,255,0)"
      >
        <a
          href="https://app.daily.dev/posts/M8FlKpNmU"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
        >
          <div className="w-full h-full bg-[#1c1c1c] group-hover:bg-transparent rounded-[22px] p-6 flex flex-col justify-between transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="px-3 py-1 rounded-full bg-white/10 group-hover:bg-[var(--invert-text)]/10 text-xs font-medium text-white group-hover:text-[var(--invert-text)] transition-colors backdrop-blur-md">
                Latest Post
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[var(--invert-text)] transition-colors" />
            </div>
            <div className="mt-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--invert-text)] transition-colors mb-2 line-clamp-2">
                Understanding QEMU: Architecture, KVM Integration, and How It
                Differs from Traditional Hypervisors
              </h3>
              <p className="text-zinc-400 group-hover:text-[var(--invert-text)] opacity-90 transition-colors text-sm line-clamp-2 leading-relaxed">
                QEMU is an open-source virtualizer and emulator that allows you
                to run multiple operating systems and software designed for
                specific hardware.
              </p>
            </div>
          </div>
        </a>
      </BentoCard>

      {/* Spotify / Music Card */}
      <BentoCard
        className="p-0 group border-transparent"
        glowColor="rgba(255, 255, 255, 0.1)"
      >
        {youtubeData ? (
          <a
            href={`https://www.youtube.com/watch?v=${youtubeData.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full relative block overflow-hidden"
          >
            <img
              src={youtubeData.snippet.thumbnails.high.url}
              alt={youtubeData.snippet.title}
              className="w-full h-full object-cover scale-[1.35] group-hover:scale-[1.45] filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Subtle gradient overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-white/90 group-hover:via-white/50 transition-colors duration-300" />

            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start">
              <Music className="w-5 h-5 text-white group-hover:text-[var(--invert-text)] transition-colors mb-2 animate-[bounce_3s_infinite]" />
              <h3
                className="text-white group-hover:text-[var(--invert-text)] transition-colors font-bold text-sm line-clamp-1 mb-0.5"
                dangerouslySetInnerHTML={{
                  __html: youtubeData.snippet.title,
                }}
              ></h3>
              <p className="text-xs text-zinc-300 group-hover:text-zinc-700 transition-colors uppercase tracking-wider font-semibold">
                Currently Listening
              </p>
            </div>
          </a>
        ) : (
          <div className="w-full h-full p-6 flex flex-col justify-center items-center text-center">
            <Music className="w-10 h-10 text-white group-hover:text-[var(--invert-text)] transition-colors mb-4 animate-[bounce_3s_infinite]" />
            <h3 className="text-white group-hover:text-[var(--invert-text)] transition-colors font-bold mb-1">
              Loading...
            </h3>
          </div>
        )}
      </BentoCard>

      {/* Tech Stack Visual */}
      <BentoCard disableHoverInversion className="bg-[#1c1c1c]/30 relative p-0">
        <div className="w-full h-full overflow-hidden flex flex-col justify-center gap-8 py-8">
          {/* Row 1 (Scrolling Left) */}
          <div className="flex whitespace-nowrap animate-marquee items-center w-max">
            {[
              ...techIconsRow1,
              ...techIconsRow1,
              ...techIconsRow1,
              ...techIconsRow1,
            ].map((tech, i) => (
              <div
                key={`r1-${i}`}
                className="flex flex-col items-center justify-center gap-3 opacity-50 hover:opacity-100 transition-opacity pr-12"
              >
                <tech.Icon className="w-10 h-10 text-white transition-colors" />
              </div>
            ))}
          </div>

          {/* Row 2 (Scrolling Right) */}
          <div
            className="flex whitespace-nowrap animate-marquee items-center w-max"
            style={{
              animationDirection: "reverse",
              animationDuration: "35s",
            }}
          >
            {[
              ...techIconsRow2,
              ...techIconsRow2,
              ...techIconsRow2,
              ...techIconsRow2,
            ].map((tech, i) => (
              <div
                key={`r2-${i}`}
                className="flex flex-col items-center justify-center gap-3 opacity-50 hover:opacity-100 transition-opacity pr-12"
              >
                <tech.Icon className="w-10 h-10 text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </BentoCard>

      {/* Contact Form Card */}
      <BentoCard className="row-span-2 md:row-span-1 md:col-span-2 lg:col-span-4 p-8 flex flex-col md:flex-row gap-8 items-center bg-zinc-900/50">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-white group-hover:text-[var(--invert-text)] transition-colors flex items-center gap-3">
            Let's create together
            <span className="inline-block hover:animate-[spin_1s_ease-in-out_infinite] origin-bottom-right">
              👋
            </span>
          </h2>
          <p className="text-zinc-400 group-hover:text-[var(--invert-text)] opacity-90 transition-colors max-w-md">
            Have a project in mind or just want to say hi? Drop a message and
            I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex-1 w-full max-w-sm space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-supply text-sm"
          />
          <button
            onClick={handleContactSubmit}
            disabled={isSubmitting}
            className={`w-full font-bold rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-colors text-sm
              ${
                submitStatus === "success"
                  ? "bg-green-500 text-white"
                  : submitStatus === "error"
                    ? "bg-red-500 text-white"
                    : "bg-white text-black group-hover:bg-[var(--invert-text)] group-hover:text-[var(--invert-bg)] cursor-pointer"
              }
              ${isSubmitting ? "opacity-80 cursor-not-allowed bg-white text-black" : ""}
            `}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : submitStatus === "success" ? (
              "Sent!"
            ) : submitStatus === "error" ? (
              "Error! Try Again"
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send
              </>
            )}
          </button>
        </div>
      </BentoCard>
    </BentoGrid>
  );
}

export default Home;
