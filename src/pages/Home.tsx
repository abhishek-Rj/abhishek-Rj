import { useState, useEffect, type CSSProperties } from "react";
import { Linkedin, ArrowUpRight, Music, Send } from "lucide-react";
import { FaAws } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiCplusplus,
    SiPython,
    SiNextdotjs,
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
    SiKubernetes,
    SiApachekafka,
    SiRedis,
    SiTerraform,
    SiGithub,
    SiX,
} from "react-icons/si";

function LeetCodeIcon({ className = "w-16 h-16" }: { className?: string }) {
    return (
        <svg
            viewBox="-13 -2 118 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* LeetCode bottom loop */}
            <path
                d="M67.5068339,83.0664138 C70.0005384,80.5763786 74.0371402,80.5828822 76.5228362,83.0809398 C79.0085322,85.5789975 79.00204,89.6226456 76.5083355,92.1126808 L65.4351451,103.169577 C55.2192332,113.370744 38.5604663,113.518673 28.1722578,103.513204 C28.112217,103.455678 23.486583,98.9201326 8.22702585,83.9570195 C-1.92478479,74.0028895 -2.93614945,58.0748736 6.61697549,47.8463644 L24.4286944,28.7745461 C33.9100043,18.6218594 51.3874487,17.5122246 62.2279907,26.2789232 L78.4052912,39.3620235 C81.1448956,41.5776292 81.5728103,45.5984975 79.3610655,48.3428842 C77.1493207,51.0872709 73.1354592,51.5159327 70.3958548,49.300327 L54.2186634,36.2173149 C48.5492813,31.6325105 38.631911,32.2621597 33.7398535,37.5006265 L15.9279056,56.5726899 C11.2772073,61.552182 11.7865613,69.5740156 17.1461283,74.8292186 C28.3515339,85.8169393 36.9874071,94.2846214 36.9973988,94.294225 C42.3981571,99.4959838 51.130862,99.418438 56.43358,94.1233737 L67.5068339,83.0664138 Z"
                fill="#FFA116"
            />
            {/* LeetCode middle divider */}
            <path
                d="M40.6069914,72.0014117 C37.086019,72.0014117 34.2317068,69.142117 34.2317068,65.6149982 C34.2317068,62.0878794 37.086019,59.2285847 40.6069914,59.2285847 L87.6247154,59.2285847 C91.1456879,59.2285847 94,62.0878794 94,65.6149982 C94,69.142117 91.1456879,72.0014117 87.6247154,72.0014117 L40.6069914,72.0014117 Z"
                fill="#B3B3B3"
            />
            {/* LeetCode upper bracket */}
            <path
                d="M49.4124315,2.02335002 C51.8178981,-0.552320454 55.852269,-0.686893945 58.4234511,1.72277172 C60.9946333,4.13243738 61.1289722,8.17385083 58.7235056,10.7495213 L15.9282277,56.5728697 C11.2773659,61.551984 11.7867168,69.5737689 17.1459309,74.8291832 L36.9094236,94.2091099 C39.4255514,96.6764051 39.4686234,100.719828 37.0056277,103.240348 C34.5426319,105.760868 30.5062548,105.804016 27.990127,103.33672 L8.22654289,83.9567041 C-1.92467414,74.0021005 -2.93603527,58.0741402 6.61751533,47.846311 L49.4124315,2.02335002 Z"
                fill="#FFFFFF"
            />
        </svg>
    );
}

const techIconsRow1 = [
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiCplusplus, name: "C++", color: "#008CFF" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { Icon: SiGo, name: "Go", color: "#00ADD8" },
    { Icon: SiRust, name: "Rust", color: "#E57324" },
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { Icon: SiUnrealengine, name: "Unreal Engine", color: "#FFFFFF" },
];

const techIconsRow2 = [
    { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { Icon: FaAws, name: "AWS", color: "#FF9900" },
    { Icon: SiApachekafka, name: "Kafka", color: "#FFFFFF" },
    { Icon: SiRedis, name: "Redis", color: "#DC382D" },
    { Icon: SiTerraform, name: "Terraform", color: "#844FBA" },
    { Icon: SiDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { Icon: SiCloudflare, name: "Cloudflare", color: "#F38020" },
    { Icon: SiArchlinux, name: "Arch Linux", color: "#1793D1" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
];

type TechIconItem = (typeof techIconsRow1)[number];

const renderTechRow = (items: TechIconItem[], prefix: string) =>
    [...items, ...items, ...items, ...items].map((tech, i) => (
        <div
            key={`${prefix}-${i}`}
            className="pr-12 flex items-center justify-center"
        >
            <div
                className="opacity-50 hover:opacity-100 text-white hover:text-[var(--icon-color)] transition-all duration-300"
                style={{ "--icon-color": tech.color } as CSSProperties}
                title={tech.name}
            >
                <tech.Icon className="w-10 h-10" />
            </div>
        </div>
    ));

import { BentoGrid } from "../components/BentoGrid";
import { BentoCard } from "../components/BentoCard";
// Removed unused useTheme

function Home() {
    const [youtubeData, setYoutubeData] = useState<any>(null);
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isInputHovered, setIsInputHovered] = useState(false);
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
                    body: JSON.stringify({
                        email,
                        message: message.trim() || undefined,
                    }),
                },
            );

            const data = await res.json();

            if (res.ok && data.success) {
                setSubmitStatus("success");
                setEmail("");
                setMessage("");
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
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=Justice%20Neverender%20feat.%20Tame%20Impala&key=${apiKey}`,
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
    const inputHoverHandlers = {
        onMouseEnter: () => setIsInputHovered(true),
        onMouseLeave: () => setIsInputHovered(false),
    };

    const inputFieldClass =
        "w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 text-white placeholder:text-zinc-600 hover:bg-[#262626] hover:border-[var(--invert-bg)]/60 focus:bg-[#262626] focus:border-[var(--invert-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--invert-bg)]/20 transition-all font-supply text-sm";

    const now = new Date();
    const currentMonth = now
        .toLocaleString("en-US", { month: "short" })
        .toUpperCase();
    const currentDay = now.getDate();

    return (
        <BentoGrid>
            {/* Hero / Bio Card */}
            <BentoCard className="md:col-span-2 md:row-span-2 p-6 md:p-8 flex flex-col justify-between group">
                <div>
                    <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 overflow-hidden mb-6 filter">
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
                        Learning and building backend systems, distributed
                        architecture, and AI/ML. There is nothing more fun to me
                        than breaking a system and understanding how and why
                        things work the way they do. Transitioning my way into
                        system and network programming. I adore computers. And
                        did I mention, I use Arch, btw?
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
                <SiGithub className="w-16 h-16 text-white group-hover:text-[var(--invert-text)] group-hover:scale-110 transition-all duration-300 z-10" />
            </BentoCard>

            {/* LeetCode Card */}
            <BentoCard
                disableHoverInversion
                className="bg-[#FFA116]/10 hover:bg-[#FFA116]/20 border-[#FFA116]/20 hover:border-[#FFA116]/60 p-6 flex items-center justify-center group"
                glowColor="rgba(255, 161, 22, 0.25)"
            >
                <a
                    href="https://leetcode.com/u/tyrantt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                ></a>
                <ArrowUpRight className="absolute top-6 right-6 w-6 h-6 text-[#FFA116]/50 group-hover:text-[#FFA116] transition-colors z-10" />
                <LeetCodeIcon className="w-16 h-16 group-hover:scale-110 transition-transform duration-300 z-10" />
            </BentoCard>

            {/* Split Socials: LinkedIn & X */}
            <div className="flex flex-col gap-4 h-full">
                {/* LinkedIn Card */}
                <BentoCard
                    disableHoverInversion
                    className="flex-1 bg-[#0A66C2]/10 hover:bg-[#0A66C2] border-[#0A66C2]/20 hover:border-white/60 p-4 flex items-center justify-center relative group min-h-[100px]"
                    glowColor="rgba(10, 102, 194, 0.2)"
                >
                    <a
                        href="https://www.linkedin.com/in/abhishek-rj0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20"
                    ></a>
                    <ArrowUpRight className="absolute top-3.5 right-3.5 w-4 h-4 text-[#0A66C2]/50 group-hover:text-white transition-colors z-10" />
                    <Linkedin className="w-8 h-8 text-[#0A66C2] group-hover:text-white group-hover:scale-110 transition-all duration-300 z-10" />
                </BentoCard>

                {/* X Card */}
                <BentoCard
                    className="flex-1 bg-black/50 p-4 flex items-center justify-center relative group min-h-[100px]"
                    glowColor="rgba(255, 255, 255, 0.1)"
                >
                    <a
                        href="https://x.com/abhishekRj_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20"
                    ></a>
                    <ArrowUpRight className="absolute top-3.5 right-3.5 w-4 h-4 text-zinc-500 group-hover:text-[var(--invert-text)] transition-colors z-10" />
                    <SiX className="w-7 h-7 text-white group-hover:text-[var(--invert-text)] group-hover:scale-110 transition-all duration-300 z-10" />
                </BentoCard>
            </div>

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
                                Understanding QEMU: Architecture, KVM
                                Integration, and How It Differs from Traditional
                                Hypervisors
                            </h3>
                            <p className="text-zinc-400 group-hover:text-[var(--invert-text)] opacity-90 transition-colors text-sm line-clamp-2 leading-relaxed">
                                QEMU is an open-source virtualizer and emulator
                                that allows you to run multiple operating
                                systems and software designed for specific
                                hardware.
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
            <BentoCard
                disableHoverInversion
                className="bg-[#1c1c1c]/30 relative p-0"
            >
                <div className="w-full h-full overflow-hidden flex flex-col justify-center gap-8 py-8">
                    {/* Row 1 (Scrolling Left) */}
                    <div className="flex whitespace-nowrap animate-marquee items-center w-max">
                        {renderTechRow(techIconsRow1, "r1")}
                    </div>

                    {/* Row 2 (Scrolling Right) */}
                    <div
                        className="flex whitespace-nowrap animate-marquee items-center w-max"
                        style={{
                            animationDirection: "reverse",
                            animationDuration: "35s",
                        }}
                    >
                        {renderTechRow(techIconsRow2, "r2")}
                    </div>
                </div>
            </BentoCard>

            {/* Contact Form Card */}
            <BentoCard
                disableHoverInversion={isInputHovered}
                disableHoverBorder={isInputHovered}
                className="md:row-span-1 md:col-span-2 lg:col-span-3 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
                <div className="w-full md:flex-1 space-y-3">
                    <h2
                        className={`text-2xl md:text-3xl font-bold text-white ${!isInputHovered ? "group-hover:text-[var(--invert-text)]" : ""} transition-colors tracking-tight`}
                    >
                        Let's create together
                    </h2>
                    <p
                        className={`text-zinc-400 ${!isInputHovered ? "group-hover:text-[var(--invert-text)]" : ""} opacity-90 transition-colors text-xs md:text-sm leading-relaxed max-w-sm`}
                    >
                        Got a project in mind or just want to say hi? Drop a
                        message.
                    </p>
                </div>
                <div className="w-full md:flex-1 md:max-w-xs space-y-2.5">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className={`${inputFieldClass} py-2.5`}
                        {...inputHoverHandlers}
                    />
                    <textarea
                        rows={2}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Leave a message..."
                        className={`${inputFieldClass} py-2 resize-none`}
                        {...inputHoverHandlers}
                    />
                    <button
                        onClick={handleContactSubmit}
                        disabled={isSubmitting}
                        className={`w-full font-bold rounded-xl px-4 py-2.5 flex items-center justify-center gap-2 transition-colors text-sm
              ${
                  submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : submitStatus === "error"
                        ? "bg-red-500 text-white"
                        : `bg-white text-black ${!isInputHovered ? "group-hover:bg-[var(--invert-text)] group-hover:text-[var(--invert-bg)]" : ""} cursor-pointer`
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

            {/* Schedule Meeting Card */}
            <BentoCard
                className="md:col-span-2 lg:col-span-1 p-6 flex flex-col justify-between relative group"
                glowColor="rgba(255,255,255,0.05)"
            >
                <a
                    href="https://cal.com/abhishek-raj-fpn29v/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                ></a>
                <div className="flex justify-between items-start z-10">
                    <div className="px-2.5 py-1 rounded-full bg-white/10 group-hover:bg-[var(--invert-text)]/10 text-[11px] font-medium text-white group-hover:text-[var(--invert-text)] transition-colors">
                        30 Min
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[var(--invert-text)] transition-colors" />
                </div>
                <div className="flex-1 flex items-center justify-center z-10">
                    <div className="w-[74px] rounded-xl border border-white/15 group-hover:border-[var(--invert-text)]/25 overflow-hidden bg-white/[0.03] group-hover:bg-[var(--invert-text)]/[0.06] group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <div className="px-2 py-1 bg-white/10 group-hover:bg-[var(--invert-text)]/15 border-b border-white/10 group-hover:border-[var(--invert-text)]/15 flex items-center justify-between transition-colors">
                            <span className="text-[9px] font-bold tracking-widest text-zinc-300 group-hover:text-[var(--invert-text)] transition-colors">
                                {currentMonth}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                        </div>
                        <div className="py-2 flex items-center justify-center">
                            <span className="text-2xl font-bold leading-none text-white group-hover:text-[var(--invert-text)] transition-colors">
                                {currentDay}
                            </span>
                        </div>
                    </div>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[var(--invert-text)] transition-colors tracking-tight text-center z-10"></h3>
            </BentoCard>
        </BentoGrid>
    );
}

export default Home;
