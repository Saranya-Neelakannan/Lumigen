import { motion } from "framer-motion";
import { Users, BookOpen, UserCheck, School, Briefcase } from "lucide-react";

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
  return (
    <section
      id="products"
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-tr from-white via-indigo-50 to-fuchsia-50"
    >
      {/* Glassy blobs */}
      <div className="absolute left-[25%] top-16 w-96 h-96 rounded-3xl bg-gradient-to-tr from-blue-300 via-purple-300 to-fuchsia-200 opacity-20 blur-2xl z-0 pointer-events-none" />
      <div className="absolute -right-10 bottom-[-5rem] w-72 h-72 rounded-full bg-gradient-to-br from-cyan-300 via-pink-200 to-indigo-100 opacity-30 blur-3xl z-0" />

      {/* Hero headline and popping button */}
      <div className="relative z-10 text-center mb-20 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-xl mb-4">
          LearnVerse
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-xl mb-7">
          Education, reimagined with AI. For every role, at every scale.
        </p>
      </div>

      {/* Glassmorphic card grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {benefits.map(({ title, icon: Icon, accent, ring, desc }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.9, y: 34 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.13 }}
            className={`
              relative rounded-[32px] shadow-2xl border border-white/30
              p-9 pt-16 flex flex-col items-center isolate
              bg-white/40 backdrop-blur-2xl
              ring-4 ${ring}
              hover:ring-fuchsia-400 hover:scale-105 transition-all duration-300
            `}
            style={{
              boxShadow:
                "0 6px 28px 0 rgba(34,211,238,0.16), 0 2px 8px 0 rgba(103,23,205,0.08)",
            }}
          >
            {/* Floating glass bubble badge */}
            <motion.div
              initial={{ y: -14, opacity: 0.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55 }}
              className={`
                absolute -top-8 left-1/2 -translate-x-1/2 px-8 py-3
                rounded-full shadow-xl border-2 border-white/50
                bg-gradient-to-r ${accent}
                backdrop-blur-md 
                text-white font-extrabold text-xl flex items-center gap-2 z-20
                ring-2 ${ring}
                drop-shadow-lg
                group-hover:ring-fuchsia-300 group-hover:scale-110 transition-all
              `}
            >
              <Icon size={28} className="text-white drop-shadow" />
              <span className="ml-2">{title}</span>
            </motion.div>
            <div className="mt-10 mb-2 text-lg text-indigo-900 text-center font-semibold">
              {desc}
            </div>
          </motion.div>
        ))}
        <button className="fixed bottom-5 right-5 px-6 py-3 rounded-xl shadow-xl font-bold text-white bg-gradient-to-r from-fuchsia-500 to-indigo-500 animate-bounce z-50 hover:scale-105 transition">
          Explore LearnVerse
        </button>
      </div>
    </section>
  );
}
