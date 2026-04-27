import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Globe, Database, Terminal, Code, Briefcase } from "lucide-react";
import { FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiGo,
  SiApachekafka,
  SiPython,
  SiVite,
  SiReact,
  SiPrisma,
  SiPostgresql,
  SiUnrealengine,
  SiBlender,
  SiCplusplus,
  SiRedis,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";
import { BentoCard } from "../components/BentoCard";

const getTechStackProps = (tech: string) => {
  switch (tech) {
    case "Next.js":
      return {
        icon: <SiNextdotjs size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "Go":
      return {
        icon: <SiGo size={12} />,
        color: "text-[#00ADD8]",
        border: "border-[#00ADD8]/30",
        bg: "bg-[#00ADD8]/10",
      };
    case "Kafka":
      return {
        icon: <SiApachekafka size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "Amazon Bedrock":
      return {
        icon: <Database size={12} />,
        color: "text-[#FF9900]",
        border: "border-[#FF9900]/30",
        bg: "bg-[#FF9900]/10",
      };
    case "Python":
      return {
        icon: <SiPython size={12} />,
        color: "text-[#3776AB]",
        border: "border-[#3776AB]/30",
        bg: "bg-[#3776AB]/10",
      };
    case "Pinecone":
      return {
        icon: <Globe size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "Vite":
      return {
        icon: <SiVite size={12} />,
        color: "text-[#646CFF]",
        border: "border-[#646CFF]/30",
        bg: "bg-[#646CFF]/10",
      };
    case "Phaser":
      return {
        icon: <Code size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "Node.js":
      return {
        icon: <SiNodedotjs size={12} />,
        color: "text-[#339933]",
        border: "border-[#339933]/30",
        bg: "bg-[#339933]/10",
      };
    case "WebSockets":
      return {
        icon: <Globe size={12} />,
        color: "text-[#FF9900]",
        border: "border-[#FF9900]/30",
        bg: "bg-[#FF9900]/10",
      };
    case "Mediasoup":
      return {
        icon: <Globe size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "React":
      return {
        icon: <SiReact size={12} />,
        color: "text-[#61DAFB]",
        border: "border-[#61DAFB]/30",
        bg: "bg-[#61DAFB]/10",
      };
    case "Prisma":
      return {
        icon: <SiPrisma size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "Postgres":
      return {
        icon: <SiPostgresql size={12} />,
        color: "text-[#4169E1]",
        border: "border-[#4169E1]/30",
        bg: "bg-[#4169E1]/10",
      };
    case "DevOps":
      return {
        icon: <Terminal size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "AWS":
      return {
        icon: <FaAws size={12} />,
        color: "text-[#FF9900]",
        border: "border-[#FF9900]/30",
        bg: "bg-[#FF9900]/10",
      };
    case "Unreal Engine":
      return {
        icon: <SiUnrealengine size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "Blender":
      return {
        icon: <SiBlender size={12} />,
        color: "text-[#F5792A]",
        border: "border-[#F5792A]/30",
        bg: "bg-[#F5792A]/10",
      };
    case "C++":
      return {
        icon: <SiCplusplus size={12} />,
        color: "text-[#00599C]",
        border: "border-[#00599C]/30",
        bg: "bg-[#00599C]/10",
      };
    case "Frontend":
      return {
        icon: <Code size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "UI/UX":
      return {
        icon: <SiFigma size={12} />,
        color: "text-[#F24E1E]",
        border: "border-[#F24E1E]/30",
        bg: "bg-[#F24E1E]/10",
      };
    case "Redis":
      return {
        icon: <SiRedis size={12} />,
        color: "text-[#DC382D]",
        border: "border-[#DC382D]/30",
        bg: "bg-[#DC382D]/10",
      };
    case "Bash":
      return {
        icon: <Terminal size={12} />,
        color: "text-[#4EAA25]",
        border: "border-[#4EAA25]/30",
        bg: "bg-[#4EAA25]/10",
      };
    case "Linux":
      return {
        icon: <Terminal size={12} />,
        color: "text-[#FCC624]",
        border: "border-[#FCC624]/30",
        bg: "bg-[#FCC624]/10",
      };
    case "Docker":
      return {
        icon: <Code size={12} />,
        color: "text-[#2496ED]",
        border: "border-[#2496ED]/30",
        bg: "bg-[#2496ED]/10",
      };
    case "Remix.js":
      return {
        icon: <SiReact size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "GraphQL":
      return {
        icon: <Code size={12} />,
        color: "text-[#E10098]",
        border: "border-[#E10098]/30",
        bg: "bg-[#E10098]/10",
      };
    case "Webhooks":
      return {
        icon: <Globe size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    case "LLMs":
      return {
        icon: <Code size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
    default:
      return {
        icon: <Code size={12} />,
        color: "text-white",
        border: "border-white/20",
        bg: "bg-white/5",
      };
  }
};

const experiences = [
  {
    title: "Software Engineer (Contract)",
    company: "AfterQuery",
    location: "Remote",
    time: "Present",
    link: "experts.afterquery.com",
    icon: (
      <img
        src="/afterquery.webp"
        alt="AfterQuery"
        className="w-8 h-8 object-contain rounded-md bg-white/5 p-0.5 border border-white/10"
      />
    ),
    bullets: [
      "Specialized in training and fine-tuning AI agents using low-level system prompts and deep architectural context.",
      "Tested multi-agent capabilities across varied <strong class='text-white font-bold'>Linux</strong> environments to establish reliable and secure testing domains.",
      "Automated complex server operations by expanding proficiency in <strong class='text-white font-bold'>Bash</strong> scripting and <strong class='text-white font-bold'>Docker</strong> containerization.",
    ],
    stack: ["Bash", "Linux", "Docker", "Python"],
  },
  {
    title: "Founding Engineer",
    company: "Wiranium",
    location: "Remote",
    time: "Jan 2025 - Nov 2025",
    link: "wiranium.com",
    icon: (
      <img
        src="/wirelogo.png"
        alt="Wiranium"
        className="w-8 h-8 object-contain rounded-md bg-white/5 p-0.5 border border-white/10"
      />
    ),
    bullets: [
      "Engineered a specialized <strong class='text-white font-bold'>Shopify</strong> plugin to combat multi-billion dollar return fraud for e-commerce retailers.",
      "Developed an AI-driven demeanor metrics system using <strong class='text-white font-bold'>Python</strong> and <strong class='text-white font-bold'>LLMs</strong> to accurately assess customer risk profiles.",
      "Integrated <strong class='text-white font-bold'>Webhooks</strong> with a <strong class='text-white font-bold'>Remix.js</strong> and <strong class='text-white font-bold'>GraphQL</strong> frontend, backed by a scalable <strong class='text-white font-bold'>Postgres</strong> database to empower automated workflows.",
    ],
    stack: ["Remix.js", "GraphQL", "Postgres", "Webhooks", "Python", "LLMs"],
  },
  {
    title: "Full Stack Developer (Freelance)",
    company: "Topprix",
    location: "Remote",
    time: "Jan 2025 - Sept 2025",
    link: "topprix.re",
    icon: (
      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/5 border border-white/10">
        <Briefcase className="w-4 h-4 text-white" />
      </div>
    ),
    bullets: [
      "Engineered a highly-scalable coupon and flyer aggregation platform utilized by thousands of active users across France.",
      "Architected the backend with robust multi-language support and heavy cloud optimization using <strong class='text-white font-bold'>AWS</strong>.",
      "Implemented a <strong class='text-white font-bold'>React</strong> frontend backed by <strong class='text-white font-bold'>Prisma</strong> and <strong class='text-white font-bold'>Postgres</strong>, leveraging <strong class='text-white font-bold'>DevOps</strong> pipelines to ensure sub-second delivery of local brand deals.",
    ],
    stack: ["React", "Prisma", "Postgres", "DevOps", "AWS"],
  },
];

export default function Experience() {
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
        {/* Timeline Container */}
        <div className="relative pb-8 space-y-16 mt-8">
          {/* Experiences Section */}
          <div className="relative">
            <div className="space-y-10 md:space-y-16">
              {experiences.map((exp, i) => {
                const id = `exp-${i}`;
                const isActive = activeId === id;
                return (
                  <div key={i} id={id} className="timeline-item relative group">
                    {/* Circle marker centered precisely on the card's left grid line */}
                    <div
                      className={`absolute left-0 top-10 -translate-x-1/2 w-[14px] h-[14px] rounded-full border-[2px] border-[var(--invert-bg)] transition-colors duration-500 z-10 ${isActive ? "bg-[var(--invert-bg)] box-shadow-glow" : "bg-black"}`}
                    />
                    <BentoCard
                      className="p-5 bg-[#1c1c1c]/50 hover:bg-[#2a2a2a]/50 transition-colors border-white/5"
                      glowColor="rgba(255,255,255,0.05)"
                      disableHoverInversion
                    >
                      <div className="flex flex-row items-start justify-between gap-4 mb-6">
                        <div className="flex flex-row items-start gap-3">
                          <div className="shrink-0 mt-0.5">{exp.icon}</div>
                          <div className="flex flex-col">
                            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                              {exp.link ? (
                                <a
                                  href={`https://${exp.link}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline decoration-white/50 underline-offset-4"
                                >
                                  {exp.company}
                                </a>
                              ) : (
                                exp.company
                              )}
                            </h3>
                            <div className="text-xs font-medium text-[var(--invert-bg)] mt-1">
                              {exp.title}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end text-right shrink-0 gap-1">
                          <div className="text-xs font-medium text-zinc-400">
                            {exp.time}
                          </div>
                          <div className="text-xs font-medium text-zinc-500">
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mb-3">
                        Key Responsibilities
                      </div>

                      <ul className="text-zinc-400 leading-relaxed tracking-wide mb-6 text-xs text-left space-y-3 list-disc pl-4">
                        {exp.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            dangerouslySetInnerHTML={{ __html: bullet }}
                          />
                        ))}
                      </ul>

                      <div className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mb-3 mt-6">
                        Technology Used
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {exp.stack.map((tech, j) => {
                          const { icon, color, border, bg } =
                            getTechStackProps(tech);
                          return (
                            <span
                              key={j}
                              className={`text-[11px] flex items-center gap-1.5 font-medium px-2 py-1 rounded-md border border-dashed ${border} ${bg} ${color}`}
                            >
                              {icon}
                              {tech}
                            </span>
                          );
                        })}
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
