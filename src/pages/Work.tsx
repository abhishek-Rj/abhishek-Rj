import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Briefcase,
  Code,
  Gamepad2,
  Globe,
  Server,
  TerminalSquare,
} from "lucide-react";
import { BentoCard } from "../components/BentoCard";

const experiences = [
  {
    title: "Founding Engineer",
    company: "Wiranium (Unexploit)",
    time: "7 Months",
    link: "wiranium.com",
    icon: <Server className="w-5 h-5" />,
    description:
      "In a world where e-commerce moves billions of products, return fraud is a costly reality for Shopify retailers—whether it's claiming false defects or swapping products for refunds. Engineered as a specialized Shopify plugin, Unexploit was built to give merchants the power of foresight. Utilizing AI-driven demeanor metrics to accurately assess customer risk empowers sellers to automate their workflows and confidently accept or reject return requests.",
    stack: ["Remix.js", "GraphQL", "Postgres", "Webhooks", "Python", "LLMs"],
  },
  {
    title: "Software Engineer (Contract)",
    company: "AfterQuery",
    time: "6 Months",
    link: "experts.afterquery.com",
    icon: <TerminalSquare className="w-5 h-5" />,
    description:
      "Specialized in training and fine-tuning AI agents using low-level system prompts. Responsibilities included testing multi-agent capabilities across Linux environments, expanding their proficiency in bash scripting, automating complex server operations, and establishing reliable testing domains for new functional capabilities.",
    stack: ["Bash", "Linux", "Docker", "Python"],
  },
];

const projects = [
  {
    title: "VAWD Image",
    link: "vawd.abhishekraj.xyz",
    icon: <Globe className="w-5 h-5" />,
    description:
      "A next-generation image search engine built on a microservice architecture. It leverages a RAG pipeline to understand and search images based on their visual content rather than text tags, delivering highly accurate results.",
    stack: ["Next.js", "Go", "Kafka", "Amazon Bedrock", "Python", "Pinecone"],
  },
  {
    title: "Web World",
    link: "webworld.abhishekraj.xyz",
    icon: <Globe className="w-5 h-5" />,
    description:
      "A 2D pixelated virtual world where users can customize their avatars, embark on side quests, and hang out with friends. Features include reliable voice and video communication inside dedicated rooms, providing a gamified and much less serious environment for online meetings.",
    stack: ["Vite", "Phaser", "Node.js", "WebSockets", "Mediasoup"],
  },
  {
    title: "Topprix",
    link: "topprix.re",
    icon: <Briefcase className="w-5 h-5" />,
    description:
      "A highly-scalable coupon and flyer aggregation platform utilized by thousands of active users across France. Architected with robust multi-language support and heavy cloud optimization to ensure sub-second delivery of local brand deals.",
    stack: ["React", "Prisma", "Postgres", "DevOps", "AWS"],
  },
  {
    title: "Broom",
    link: "",
    icon: <Gamepad2 className="w-5 h-5" />,
    description:
      "An immersive 3D racing game developed from scratch. Featuring diverse tracking maps with custom textures designed in Blender, and utilizing Unreal Engine's Blueprints alongside C++ to create engaging and tightly-tuned player mechanics.",
    stack: ["Unreal Engine", "Blender", "C++"],
  },
  {
    title: "Devmint",
    link: "devmint.tech",
    icon: <Code className="w-5 h-5" />,
    description:
      "Designed and engineered a high-conversion landing page serving as the marketing frontier for the Devmint freelancing agency.",
    stack: ["Frontend", "UI/UX"],
  },
  {
    title: "Online Clipboard",
    link: "",
    icon: <Code className="w-5 h-5" />,
    description:
      "A blazingly fast, ephemeral clipboard tool for sharing quick text snippets, links, and images between devices.",
    stack: ["Next.js", "Redis"],
  },
  {
    title: "Retro Arcade Emulator",
    link: "",
    icon: <Gamepad2 className="w-5 h-5" />,
    description:
      "Low-level recreations of classic arcade games like Pong and Alien Wars using raw C++ rendering loops.",
    stack: ["C++", "SFML"],
  },
];

export default function Work() {
  const [activeId, setActiveId] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    }
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" },
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-full flex flex-col px-4 md:px-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">
          Experience &{" "}
          <span className="text-[var(--invert-bg)] transition-colors duration-500">
            Projects
          </span>
        </h1>

        {/* Timeline Container */}
        <div className="relative pl-10 md:pl-12 pb-8 space-y-16">
          {/* The continuous vertical line */}
          <div className="absolute left-0 top-3 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Experiences Section */}
          <div className="relative">
            <div className="relative flex items-center mb-10">
              {/* Icon centered precisely on the line */}
              <div className="absolute -left-10 md:-left-12 -translate-x-1/2 bg-[#1c1c1c] p-2 mt-1 rounded-full border border-white/10 text-[var(--invert-bg)] transition-colors duration-500 z-10 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Work Experience</h2>
            </div>

            <div className="space-y-10">
              {experiences.map((exp, i) => {
                const id = `exp-${i}`;
                const isActive = activeId === id;
                return (
                  <div key={i} id={id} className="timeline-item relative group">
                    {/* Circle marker centered precisely on the line */}
                    <div
                      className={`absolute -left-10 md:-left-12 top-8 -translate-x-1/2 w-[14px] h-[14px] rounded-full border-[2px] border-[var(--invert-bg)] transition-colors duration-500 z-10 ${isActive ? "bg-[var(--invert-bg)] box-shadow-glow" : "bg-black"}`}
                    />
                    <BentoCard
                      className="p-6 md:p-8 bg-[#1c1c1c]/50 hover:bg-[#2a2a2a]/50 transition-colors border-white/5"
                      glowColor="rgba(255,255,255,0.05)"
                      disableHoverInversion
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            {exp.title}
                          </h3>
                          <div className="text-[var(--invert-bg)] font-medium mt-1 transition-colors">
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-end gap-3 lg:gap-4">
                          {exp.link && (
                            <a
                              href={`https://${exp.link}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full bg-[var(--invert-bg)]/10 text-[var(--invert-bg)] hover:bg-[var(--invert-bg)] hover:text-[var(--invert-text)] transition-colors w-fit font-medium z-20 relative"
                            >
                              {exp.link}
                            </a>
                          )}
                          <div className="text-sm px-3 py-1 rounded-full bg-white/5 text-zinc-400 w-fit">
                            {exp.time}
                          </div>
                        </div>
                      </div>

                      <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </BentoCard>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Projects Section */}
          <div className="relative pt-4">
            <div className="relative flex items-center mb-10">
              {/* Icon centered precisely on the line */}
              <div className="absolute -left-10 md:-left-12 -translate-x-1/2 bg-[#1c1c1c] p-2 mt-1 rounded-full border border-white/10 text-[var(--invert-bg)] transition-colors duration-500 z-10 flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Featured Projects
              </h2>
            </div>

            <div className="space-y-10">
              {projects.map((proj, i) => {
                const id = `proj-${i}`;
                const isActive = activeId === id;
                return (
                  <div key={i} id={id} className="timeline-item relative group">
                    {/* Circle marker centered precisely on the line */}
                    <div
                      className={`absolute -left-10 md:-left-12 top-8 -translate-x-1/2 w-[14px] h-[14px] rounded-full border-[2px] border-[var(--invert-bg)] transition-colors duration-500 z-10 ${isActive ? "bg-[var(--invert-bg)] box-shadow-glow" : "bg-black"}`}
                    />
                    <BentoCard
                      className="p-6 md:p-8 bg-[#1c1c1c]/50 hover:bg-[#2a2a2a]/50 transition-colors border-white/5"
                      glowColor="rgba(255,255,255,0.05)"
                      disableHoverInversion
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            {proj.icon}
                            {proj.title}
                          </h3>
                        </div>
                        {proj.link && (
                          <a
                            href={`https://${proj.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm px-3 py-1 rounded-full bg-[var(--invert-bg)]/10 text-[var(--invert-bg)] hover:bg-[var(--invert-bg)] hover:text-[var(--invert-text)] transition-colors w-fit font-medium z-20 relative"
                          >
                            {proj.link}
                          </a>
                        )}
                      </div>

                      <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {proj.stack.map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </BentoCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
