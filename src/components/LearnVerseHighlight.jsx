import { motion } from "framer-motion";
import { Users, BookOpen, UserCheck, School, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    title: "Students",
    icon: Users,
    accent: "from-cyan-400 via-indigo-400 to-purple-500",
    ring: "ring-cyan-300",
    desc: "AI tutoring, assisted learning, and vibrant online community.",
  },
  {
    title: "Educators",
    icon: BookOpen,
    accent: "from-indigo-300 via-blue-300 to-teal-300",
    ring: "ring-indigo-300",
    desc: "Automated lesson plans, meetings, and digital library.",
  },
  {
    title: "Parents",
    icon: UserCheck,
    accent: "from-pink-400 via-fuchsia-300 to-blue-200",
    ring: "ring-pink-300",
    desc: "Instant tracking, safety alerts, and direct communication.",
  },
  {
    title: "Institutes",
    icon: School,
    accent: "from-green-300 via-blue-200 to-indigo-300",
    ring: "ring-green-300",
    desc: "Finance, payroll, and innovation—all automated.",
  },
  {
    title: "Owners",
    icon: Briefcase,
    accent: "from-purple-300 via-indigo-400 to-cyan-400",
    ring: "ring-purple-300",
    desc: "Full analytics, reports, and cloud promotions.",
  },
];
export default function LearnVerseShowcase() {
  const navigate = useNavigate();
  return (
    <section
      id="products"
      className="relative py-12 md:py-24 px-3 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-tr from-white via-indigo-50 to-fuchsia-50"
    >
      {/* Glassy blobs (hide or scale blobs on mobile) */}
      <div className="absolute left-[10vw] top-6 w-[60vw] max-w-lg h-[40vw] max-h-96 rounded-3xl bg-gradient-to-tr from-blue-300 via-purple-300 to-fuchsia-200 opacity-20 blur-2xl z-0 pointer-events-none" />
      <div className="absolute right-0 -bottom-20 w-[42vw] max-w-sm h-[36vw] max-h-80 rounded-full bg-gradient-to-br from-cyan-300 via-pink-200 to-indigo-100 opacity-30 blur-3xl z-0 pointer-events-none" />

      {/* Hero headline and popping button */}
      <div className="relative z-10 text-center mb-10 md:mb-20 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-xl mb-3 sm:mb-4">
          LearnVerse
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-gray-700 font-medium max-w-xl mb-7">
          Education, reimagined with AI. For every role, at every scale.
        </p>
        <motion.button
          type="button"
          onClick={() => navigate("/learnverse")}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 36px 0 #6366f1, 0 2px 18px 0 #60a5fa",
            background:
              "linear-gradient(90deg, #312e81 6%, #2563eb 52%, #60a5fa 98%)",
          }}
          className="inline-block px-7 py-3 rounded-[28px] font-bold tracking-wide text-base sm:text-lg bg-gradient-to-r from-indigo-900 via-blue-700 to-blue-400 text-white shadow-[0_2px_18px_0_rgba(99,102,241,0.17)] border-none ring-2 ring-indigo-600/70 backdrop-blur-md transition-all duration-200 ease-out drop-shadow-lg relative overflow-hidden"
          style={{
            boxShadow: "0 2px 18px 0 #312e8188, 0 0 24px 0 #2563eb88",
            background:
              "linear-gradient(90deg, #312e81 5%, #2563eb 55%, #60a5fa 99%)",
            letterSpacing: "0.05em",
          }}
        >
          <span
            className="relative z-10 font-bold tracking-wider text-white drop-shadow"
            style={{ textShadow: "0 1px 10px #2563eb99" }}
          >
            Explore LearnVerse
          </span>
          <span
            className="absolute inset-0 pointer-events-none rounded-[28px]"
            style={{
              border: "2px solid rgba(49, 46, 129, 0.22)",
              boxShadow: "0 0 24px 4px #312e8170, 0 0 16px 2px #60a5fa70",
              zIndex: 0,
            }}
          />
        </motion.button>
      </div>

      {/* Glassmorphic card grid, fully responsive */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center items-center">
        {benefits.map(({ title, icon: Icon, accent, ring, desc }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.9, y: 34 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.13 }}
            className={`
              relative rounded-[32px] shadow-2xl border border-white/30
              p-7 pt-14 sm:p-9 sm:pt-16 flex flex-col items-center isolate
              bg-white/55 backdrop-blur-2xl
              ring-4 ${ring}
              hover:ring-fuchsia-400 hover:scale-105 transition-all duration-300
              min-h-[250px]
            `}
            style={{
              boxShadow:
                "0 6px 28px 0 rgba(34,211,238,0.16), 0 2px 8px 0 rgba(103,23,205,0.12)",
            }}
          >
            {/* Floating glass bubble badge */}
            <motion.div
              initial={{ y: -14, opacity: 0.13 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55 }}
              className={`
                absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 sm:px-8 sm:py-3
                rounded-full shadow-xl border-2 border-white/50
                bg-gradient-to-r ${accent}
                backdrop-blur-md
                text-white font-extrabold text-base sm:text-xl flex items-center gap-2 z-20
                ring-2 ${ring}
                drop-shadow-lg
                group-hover:ring-fuchsia-300 group-hover:scale-110 transition-all
              `}
            >
              <Icon size={24} className="text-white drop-shadow" />
              <span className="ml-2">{title}</span>
            </motion.div>
            <div className="mt-8 mb-2 text-base sm:text-lg text-indigo-900 text-center font-semibold">
              {desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
