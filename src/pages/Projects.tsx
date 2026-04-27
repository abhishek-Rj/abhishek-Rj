import { BentoCard } from "../components/BentoCard";
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
import {
  Database,
  Gamepad2,
  Globe,
  Terminal,
  Zap,
  Monitor,
  Code,
} from "lucide-react";

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
        icon: <Gamepad2 size={12} />,
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
        icon: <Zap size={12} />,
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
        icon: <Monitor size={12} />,
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
    case "SFML":
      return {
        icon: <Gamepad2 size={12} />,
        color: "text-[#8CC445]",
        border: "border-[#8CC445]/30",
        bg: "bg-[#8CC445]/10",
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

export default function Projects() {
  return (
    <div className="w-full h-full flex flex-col px-4 md:px-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 relative z-0 mt-8">
          {projects.map((proj, i) => (
            <BentoCard
              key={i}
              className="p-5 bg-[#1c1c1c]/50 hover:bg-[#2a2a2a]/50 transition-colors border-white/5"
              glowColor="rgba(255,255,255,0.05)"
              disableHoverInversion
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tighter leading-none">
                    {proj.title}
                  </h3>
                </div>
                {proj.link && (
                  <a
                    href={`https://${proj.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 rounded-sm bg-[var(--invert-bg)]/10 text-[var(--invert-bg)] hover:bg-[var(--invert-bg)] hover:text-[var(--invert-text)] transition-colors w-fit font-bold z-20 relative tracking-tight"
                  >
                    {proj.link}
                  </a>
                )}
              </div>

              <p className="text-zinc-400 leading-relaxed tracking-wide mb-6 text-xs text-left">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {proj.stack.map((tech, j) => {
                  const { icon, color, border, bg } = getTechStackProps(tech);
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
          ))}
        </div>
      </div>
    </div>
  );
}
