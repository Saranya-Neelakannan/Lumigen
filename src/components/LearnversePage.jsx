import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  UserCheck,
  School,
  Briefcase,
  LineChart,
  ClipboardList,
  CalendarClock,
  WalletCards,
} from "lucide-react";
import BtoB from "../assets/BtoB.png";
import BtoC from "../assets/StudentLearnverse.png";
import Students from "../assets/StudentsAI.png";
import Teachers from "../assets/Teachers.png";
import Parents from "../assets/Parents.png";
import Principal from "../assets/Principal.png";
import OwnandMan from "../assets/OwnandMan.png";
import StudentAI from "../assets/StudentAI.png";

// --- ANIMATION HELPERS ---
const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const cardFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.4 } },
});

// --- 1. HERO SECTION (your latest version with banner moved right + sparkles) ---
function HeroSection() {
  return (
    <section
      id="learnverse-hero"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-indigo-50"
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 flex justify-center">
        <div className="h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute -right-32 bottom-0">
        <div className="h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-24 md:pt-28 md:pb-28 relative">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-50 px-3.5 py-1.5 text-[11px] md:text-xs mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            <span>AI‑first workspace for Institutes & Learners</span>
          </div>

          <h1 className="text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem] leading-tight font-black text-slate-900 tracking-tight mb-6">
            LearnVerse – the one AI workspace for learning and running your
            institute
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-7">
            Help students learn better and leaders run smarter — all from a
            calm, AI‑assisted platform built for both sides of education.
          </p>

          <ul className="space-y-2.5 text-base md:text-lg text-slate-600">
            <li className="flex items-start gap-3">
              <span className="relative mt-1 flex h-4 w-4 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-sky-400/40 blur-[2px]" />
                <span className="relative h-3 w-3 rounded-full bg-gradient-to-tr from-sky-400 via-sky-300 to-sky-200 shadow-sm" />
              </span>
              <span>
                Personalized paths for students and working professionals.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="relative mt-1 flex h-4 w-4 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-sky-400/40 blur-[2px]" />
                <span className="relative h-3 w-3 rounded-full bg-gradient-to-tr from-sky-400 via-sky-300 to-sky-200 shadow-sm" />
              </span>
              <span>
                Timetables, attendance, finance, and staff in one place.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="relative mt-1 flex h-4 w-4 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-sky-400/40 blur-[2px]" />
                <span className="relative h-3 w-3 rounded-full bg-gradient-to-tr from-sky-400 via-sky-300 to-sky-200 shadow-sm" />
              </span>
              <span>
                Real‑time dashboards for parents, teachers, and owners.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// --- 2. HYBRID VALUE BAND ---
function HybridValueBand() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 space-y-12 md:space-y-14">
        {/* Heading */}
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built for every corner of your learning universe
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            LearnVerse has two main “faces” — one for running institutions, one
            for growing learners — inside the same calm product.
          </p>
        </motion.div>

        {/* Row 1: B2B hero */}
        <motion.div
          variants={cardFade(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:items-center"
        >
          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1.5 text-xs md:text-[13px] font-semibold text-sky-800 border border-sky-100 mb-4">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              B2B · Institutes & owners
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Run the ecosystem
            </h3>
            <p className="text-sm md:text-base text-slate-600 mb-5 max-w-md">
              Timetables, fees, people, and reports in one organised control
              surface for schools, colleges, and networks.
            </p>
            <div className="flex flex-wrap gap-2.5 text-xs md:text-[13px] text-sky-900">
              <span className="rounded-full bg-white px-3.5 py-1 border border-sky-100">
                Campus overview
              </span>
              <span className="rounded-full bg-white px-3.5 py-1 border border-sky-100">
                Finance & fees
              </span>
              <span className="rounded-full bg-white px-3.5 py-1 border border-sky-100">
                Staff & attendance
              </span>
            </div>
          </div>

          {/* Illustration side */}
          <div className="relative">
            <div className="absolute inset-x-6 bottom-0 h-24 bg-sky-50 rounded-[999px] blur-lg" />
            <div className="relative flex justify-center">
              {/* Replace src with your B2B illustration */}
              <img
                src={BtoB}
                alt="Illustration of institutes using LearnVerse"
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Row 2: B2C hero */}
        <motion.div
          variants={cardFade(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:items-center"
        >
          {/* Illustration first on desktop */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-x-6 bottom-0 h-24 bg-emerald-50 rounded-[999px] blur-lg" />
            <div className="relative flex justify-center">
              {/* Replace src with your B2C illustration */}
              <img
                src={BtoC}
                alt="Illustration of learners using LearnVerse"
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs md:text-[13px] font-semibold text-emerald-800 border border-emerald-100 mb-4 self-start md:self-end">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              B2C · Students, parents & professionals
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Live inside the learning
            </h3>
            <p className="text-sm md:text-base text-slate-600 mb-5 max-w-md">
              Learners and families simply see what to do next — lessons,
              quizzes, alerts, and career steps tuned to them.
            </p>
            <div className="flex flex-wrap gap-2.5 text-xs md:text-[13px] text-emerald-900">
              <span className="rounded-full bg-white px-3.5 py-1 border border-emerald-100">
                Adaptive paths
              </span>
              <span className="rounded-full bg-white px-3.5 py-1 border border-emerald-100">
                Progress & alerts
              </span>
              <span className="rounded-full bg-white px-3.5 py-1 border border-emerald-100">
                Skills & careers
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- 3. AUDIENCE BENEFITS (REDESIGNED CARDS) ---
function AudienceBenefitsSection() {
  const blocks = [
    {
      key: "students",
      img: Students,
      label: "Students & Learners",
      // accent: "from-sky-500/90 to-sky-600/90",
      icon: Users,
      subtitle: null,
      points: [
        "Visually assisted learning that simplifies complex ideas.",
        "AI homework assistance and flexible exam/test management.",
        "Balanced curricular and extra‑curricular content plus off‑school learning.",
        "Online quizzes and exclusive student communities/social networks.",
      ],
    },
    {
      key: "teachers",
      img: Teachers,
      label: "Teachers & Staff",
      // accent: "from-indigo-500/90 to-sky-600/90",
      icon: BookOpen,
      subtitle:
        "For teachers, professors, hostel, transport, librarians & wardens.",
      points: [
        "AI‑assisted teaching, lecturing, and detailed chapter/lesson planning.",
        "Automated timetable and schedule management across classes and shifts.",
        "Hostel, transport, and library management in one connected workspace.",
        "Meeting and chat tools with anytime access to reports.",
      ],
    },
    {
      key: "parents",
      img: Parents,
      label: "Parents & Guardians",
      // accent: "from-emerald-500/90 to-emerald-600/90",
      icon: UserCheck,
      subtitle: null,
      points: [
        "Track learning progress, attendance, and transport in real time.",
        "Digital diary for homework, camera integration for toddlers, and alerts.",
        "Transparent circular notifications via WhatsApp, SMS, and email.",
        "Benchmark/percentile reports plus AI‑assisted career guidance support.",
      ],
    },
    {
      key: "principals",
      img: Principal,
      label: "Institutes & Principals",
      // accent: "from-amber-500/90 to-orange-500/90",
      icon: School,
      subtitle: null,
      points: [
        "Anytime management of academic, administrative, and compliance tasks.",
        "Attendance management for students, staff, and faculties.",
        "Finance management across fees, balances, admissions, and scholarships.",
        "Procurement, payroll, employee records, innovation incubators, and faculty assessment reports.",
      ],
    },
    {
      key: "owners",
      img: OwnandMan,
      label: "Owners & Management",
      // accent: "from-rose-500/90 to-fuchsia-500/90",
      icon: Briefcase,
      subtitle: null,
      points: [
        "AI‑automated end‑to‑end administration with cloud‑first access.",
        "Custom AI reports for school and institutional promotions.",
        "AI camera integration, e‑shops and promotions built‑in.",
        "Tools to create explainer videos and in‑app help/FAQ sections.",
      ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            What’s in it for everyone?
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            Each card is a real person LearnVerse serves — from the student in
            class to the owner running a multi‑campus network.
          </p>
        </motion.div>

        {/* 2-column layout on desktop, 1-column on mobile */}
        <div className="grid gap-8 md:grid-cols-2 justify-items-stretch md:justify-items-center max-w-5xl mx-auto">
          {blocks.map((block, idx) => (
            <motion.article
              key={block.key}
              variants={cardFade(idx * 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group w-full max-w-md rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all overflow-hidden flex flex-col"
            >
              {/* Image + gradient + label chip */}
              <div className="relative h-40 md:h-44 overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={block.img}
                  alt={block.label}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${block.accent} opacity-80`}
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 shadow">
                    <block.icon size={14} className="text-slate-800" />
                    <span className="text-[11px] font-semibold text-slate-900">
                      {block.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 px-4 py-4 md:px-5 md:py-5">
                {block.subtitle && (
                  <p className="text-[11px] text-slate-500 mb-2">
                    {block.subtitle}
                  </p>
                )}
                <ul className="space-y-1.5 text-xs md:text-sm text-slate-700">
                  {block.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 4. OPS & FINANCE (MORE DESIGNED GRID) ---
function OpsAndFinanceSection() {
  const items = [
    {
      icon: WalletCards,
      title: "Effortless Administration & Finance",
      desc: "Simplify fee collection, batch billing, revenue forecasting, and expense tracking so finance stays predictable and transparent.",
    },
    {
      icon: ClipboardList,
      title: "Integrated Attendance & Enrollment",
      desc: "Use predictive enrollment tools, digital sign‑ins/outs, and automated, real‑time attendance tracking for students and staff.",
    },
    {
      icon: CalendarClock,
      title: "Staff & Event Management",
      desc: "Coordinate staff schedules, automate ratios, and manage events from a single calendar, ensuring all resources are aligned.",
    },
    {
      icon: LineChart,
      title: "Data‑Driven Insights",
      desc: "Generate instant reports on occupancy, academic performance, and financial health to guide faster, better strategic decisions.",
    },
  ];

  return (
    <section className="bg-slate-50 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-18">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Effortless administration for modern institutions
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            LearnVerse gives principals, admins, and owners a calm, real‑time
            view of how their institution is running – from finances to
            classrooms and everything in between.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={cardFade(idx * 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-white border border-slate-100 p-0 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 px-5 py-4 bg-sky-50/60 border-b border-slate-100">
                <div className="h-9 w-9 rounded-2xl bg-white flex items-center justify-center shadow-xs">
                  <item.icon className="text-sky-700" size={20} />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm md:text-base">
                  {item.title}
                </h3>
              </div>
              <p className="px-5 py-4 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 5. PERSONALIZED LEARNING & CAREERS (WITH FAUX APP WINDOW) ---
function PersonalizedLearningSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-18 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Personalized learning and career‑ready growth
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-5">
            Whether the goal is exam excellence or career advancement,
            LearnVerse builds a unique path for each learner using advanced AI.
          </p>

          <div className="space-y-4 text-sm md:text-base text-slate-700">
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Personalize Your Potential
              </h3>
              <p>
                Students and working professionals get a clear, adaptive roadmap
                that responds to their current level, pace, and long‑term goals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                AI‑Based Custom Learning Content
              </h3>
              <p>
                LearnVerse analyzes progress, knowledge gaps, and preferences to
                generate or curate the right mix of lessons, practice quizzes,
                and multimedia resources, supported by instant contextual
                feedback for deeper understanding.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Career Readiness & Placement
              </h3>
              <p>
                Learners access industry‑relevant training, real‑world
                scenarios, mock interviews, and profile optimization while
                LearnVerse helps connect job‑ready talent with institutional
                hiring partners.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardFade(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-sky-100 via-indigo-50 to-emerald-50 border border-slate-100 p-5 md:p-6 shadow-lg"
        >
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-x-6 bottom-0 h-24 bg-emerald-50 rounded-[999px] blur-lg" />
            <div className="relative flex justify-center">
              {/* Replace src with your B2C illustration */}
              <img
                src={StudentAI}
                alt="Illustration of learners using LearnVerse"
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- 6. SIMPLE TESTIMONIALS, DEMO, FAQ, CTA, FOOTER (you can swap with your existing ones) ---
function TestimonialsSection() {
  return (
    <section className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Hear from our community
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
            <p className="text-sm md:text-base text-slate-700 mb-4 italic">
              “LearnVerse helped us unify teaching, parents, and operations
              under one platform without overwhelming staff. The AI tools feel
              supportive, not confusing.”
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Principal, K‑12 Institution
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
            <p className="text-sm md:text-base text-slate-700 mb-4 italic">
              “As a parent, I finally feel informed without chasing updates.
              Attendance, homework, and progress are just there – with helpful
              alerts when something needs attention.”
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Parent of Grade 6 student
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoVideoSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-14 md:py-18 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          See LearnVerse in a live walkthrough
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl mx-auto">
          Watch how AI connects students, teachers, parents, and admins in a
          light, intuitive workspace – from classroom flows to finance and
          reporting.
        </p>
        <div className="aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-lg max-w-3xl mx-auto bg-slate-100">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="LearnVerse Demo"
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Is LearnVerse suitable for both schools and individual learners?",
      a: "Yes. LearnVerse is built as a hybrid platform – schools and institutes can run operations and academics, while students or professionals can use AI‑powered learning paths individually.",
    },
    {
      q: "Can parents track attendance, transport, and progress in real time?",
      a: "Parents get dashboards and alerts covering attendance, learning progress, transport tracking, and key updates sent via app, SMS, WhatsApp, or email.",
    },
    {
      q: "How long does it take to get started?",
      a: "Most institutes start with a pilot in a few weeks – importing data, configuring timetables, and onboarding staff and parents – before scaling across campuses.",
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section className="bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-14 md:py-18">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-slate-200 rounded-2xl bg-white border border-slate-100">
          {faqs.map((item, idx) => (
            <button
              key={item.q}
              onClick={() => setOpen(open === idx ? -1 : idx)}
              className="w-full text-left px-5 md:px-6 py-4 focus:outline-none"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-sm md:text-base text-slate-900">
                  {item.q}
                </p>
                <span className="text-slate-500 text-xl">
                  {open === idx ? "−" : "+"}
                </span>
              </div>
              {open === idx && (
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">LearnVerse</h3>
          <p className="text-sm text-slate-400">
            AI‑driven learning and institutional management, built to keep every
            stakeholder connected and informed.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Product</h4>
          <ul className="space-y-1 text-sm">
            <li>For schools & institutes</li>
            <li>For students & learners</li>
            <li>For working professionals</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Contact Us</h4>
          <p className="text-sm text-slate-400">LumigenLabs@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LearnVerse. All rights reserved.
      </div>
    </footer>
  );
}

// --- 7. PAGE ASSEMBLY ---
export default function LearnVersePage() {
  useEffect(() => {
    // when /learnverse loads, jump to top of this page
    const el = document.getElementById("learnverse-hero");
    if (el) {
      el.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);
  return (
    <main className="bg-white text-slate-900">
      <HeroSection />
      <HybridValueBand />
      <AudienceBenefitsSection />
      <OpsAndFinanceSection />
      <PersonalizedLearningSection />
      <TestimonialsSection />
      <DemoVideoSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
