"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  ChevronLeft,
  Code2,
  Cpu,
  Database,
  Gauge,
  Globe,
  Layers3,
  Lightbulb,
  MessageCircle,
  MessageSquare,
  Rocket,
  Send,
  Settings2,
  Sparkles,
  Target,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

const aiSolutions = [
  {
    icon: MessageCircle,
    title: "مساعد ذكاء اصطناعي للعملاء",
    description:
      "مساعد ذكي يتعامل مع أسئلة العملاء ويرد عليهم بشكل طبيعي وسريع على مدار الساعة.",
    tags: ["WhatsApp", "Messenger", "Instagram"],
  },
  {
    icon: Sparkles,
    title: "إنشاء المحتوى بالذكاء الاصطناعي",
    description:
      "حوّل أفكارك وصور منتجاتك إلى نصوص وصور وتسويق احترافي خلال دقائق.",
    tags: ["صور", "نصوص", "Marketing"],
  },
  {
    icon: Workflow,
    title: "أتمتة الأعمال",
    description:
      "اربط العمليات المتكررة بالذكاء الاصطناعي لتقليل العمل اليدوي وتسريع فريقك.",
    tags: ["Automation", "Workflows", "AI"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "وكلاء ذكيون قادرون على تنفيذ مهام حقيقية والتعامل مع الأنظمة والبيانات.",
    tags: ["Agents", "Tools", "APIs"],
  },
  {
    icon: BrainCircuit,
    title: "حلول AI مخصصة",
    description:
      "نبني لك نظام ذكاء اصطناعي مصمم حسب طريقة عمل مشروعك واحتياجاتك.",
    tags: ["Custom", "AI", "SaaS"],
  },
  {
    icon: Database,
    title: "ربط AI بالبيانات",
    description:
      "اجعل الذكاء الاصطناعي يفهم بيانات شركتك ومستنداتك وقاعدة معلوماتك.",
    tags: ["Data", "Knowledge", "API"],
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "محادثات ذكية",
    text: "AI يفهم الأسئلة والسياق ويرد بطريقة طبيعية بدل الردود التقليدية.",
  },
  {
    icon: Zap,
    title: "سرعة الاستجابة",
    text: "استجابات فورية للعملاء والموظفين بدون انتظار.",
  },
  {
    icon: Workflow,
    title: "أتمتة المهام",
    text: "دع الذكاء الاصطناعي يتعامل مع المهام المتكررة بدل فريقك.",
  },
  {
    icon: Database,
    title: "فهم بياناتك",
    text: "يمكن ربط النظام ببيانات ومعلومات مشروعك حسب الحاجة.",
  },
  {
    icon: Code2,
    title: "API & Integrations",
    text: "ربط الحل مع موقعك، تطبيقك، CRM أو أي نظام آخر.",
  },
  {
    icon: Settings2,
    title: "حل مخصص",
    text: "لا نقدم نظامًا واحدًا للجميع، بل نبني الحل حسب المشروع.",
  },
];

const useCases = [
  {
    number: "01",
    title: "خدمة العملاء",
    text: "استقبال الأسئلة، تقديم المعلومات، متابعة الطلبات وتحويل المحادثة للموظف عند الحاجة.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "التسويق",
    text: "إنشاء أفكار الحملات، المحتوى، النصوص التسويقية والمحتوى المرئي.",
    icon: Target,
  },
  {
    number: "03",
    title: "المبيعات",
    text: "مساعدة العملاء، التأهيل الأولي للعملاء المحتملين وتوجيههم للخدمة المناسبة.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "العمليات",
    text: "أتمتة المهام اليومية وربط الأنظمة ببعضها لتقليل الوقت والعمل اليدوي.",
    icon: Workflow,
  },
];

const steps = [
  {
    number: "01",
    title: "نفهم المشروع",
    text: "نحدد المشكلة والمهام التي يمكن للذكاء الاصطناعي تحسينها.",
  },
  {
    number: "02",
    title: "نصمم الحل",
    text: "نضع تجربة المستخدم والمنطق والـWorkflow المناسب.",
  },
  {
    number: "03",
    title: "نبني النظام",
    text: "نطور الـAI والواجهات والـAPIs والتكاملات المطلوبة.",
  },
  {
    number: "04",
    title: "نطلق ونطور",
    text: "نختبر النظام ونطلقه ثم نضيف التحسينات حسب الاستخدام.",
  },
];

const faqs = [
  {
    q: "هل يمكن ربط الذكاء الاصطناعي مع WhatsApp؟",
    a: "نعم، يمكن بناء حلول تربط الذكاء الاصطناعي بقنوات التواصل المناسبة حسب الـAPI والمنصة المستخدمة.",
  },
  {
    q: "هل يمكن للـAI معرفة معلومات مشروعي؟",
    a: "نعم. يمكن تصميم النظام ليعتمد على معلومات وبيانات ومستندات المشروع حتى يقدم إجابات أكثر ارتباطًا بنشاطك.",
  },
  {
    q: "هل يمكن ربط AI مع موقعي الحالي؟",
    a: "نعم. يمكن دمج حلول AI داخل المواقع والتطبيقات والأنظمة الموجودة باستخدام APIs وواجهات مخصصة.",
  },
  {
    q: "هل تقدمون حلول AI مخصصة؟",
    a: "نعم. يمكن بناء حل مخصص بالكامل بدل الاعتماد على chatbot تقليدي فقط.",
  },
  {
    q: "هل يمكن للـAI تنفيذ مهام وليس فقط الرد؟",
    a: "نعم. يمكن بناء AI Agents قادرة على استخدام أدوات وAPIs وتنفيذ خطوات محددة وفق الصلاحيات التي يتم إعطاؤها لها.",
  },
];

function AIBrainVisual() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[600px]">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[100px]" />

      {/* Orbit rings */}
      <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10" />

      {/* Floating cards */}
      <div className="absolute right-0 top-12 hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:block animate-float">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-yellow-400 p-2">
            <MessageCircle size={19} />
          </div>
          <div>
            <p className="text-xs font-bold">AI Assistant</p>
            <p className="text-[10px] text-black/50">Online الآن</p>
          </div>
          <span className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </div>

      <div className="absolute bottom-16 left-0 hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:block animate-float-delayed">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-black p-2 text-yellow-400">
            <Workflow size={19} />
          </div>
          <div>
            <p className="text-xs font-bold">Automation</p>
            <p className="text-[10px] text-black/50">12 tasks running</p>
          </div>
        </div>
      </div>

      {/* Main AI Core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-56 w-56 items-center justify-center rounded-[3rem] border border-black/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.16)]">
          <div className="absolute inset-4 rounded-[2.5rem] bg-black" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.35)]">
              <BrainCircuit size={42} strokeWidth={1.7} />
            </div>

            <p className="text-lg font-black text-white">AI CORE</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Connection nodes */}
      <div className="absolute left-[12%] top-[32%] h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.8)]" />
      <div className="absolute right-[15%] top-[28%] h-2.5 w-2.5 rounded-full bg-black" />
      <div className="absolute bottom-[25%] right-[18%] h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.8)]" />
      <div className="absolute bottom-[22%] left-[23%] h-2 w-2 rounded-full bg-black" />

      {/* Labels */}
      <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full border border-black/10 bg-white px-4 py-2 text-[10px] font-bold shadow-lg">
        THINK
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-black/10 bg-black px-4 py-2 text-[10px] font-bold text-yellow-400 shadow-lg">
        AUTOMATE
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-black">
            <Bot size={18} />
          </div>
          <div>
            <p className="text-xs font-bold text-white">STOREX AI</p>
            <p className="text-[10px] text-white/40">مساعدك الذكي</p>
          </div>
        </div>

        <span className="flex items-center gap-1.5 text-[10px] text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          متصل
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-white/10 p-3 text-xs leading-6 text-white/80">
          مرحباً 👋 كيف يمكنني مساعدتك اليوم؟
        </div>

        <div className="mr-auto max-w-[75%] rounded-2xl rounded-tl-md bg-yellow-400 p-3 text-xs leading-6 text-black">
          أريد معرفة الخدمات المتوفرة لديكم.
        </div>

        <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-white/10 p-3 text-xs leading-6 text-white/80">
          بالتأكيد. نوفر تطوير المواقع، المتاجر، التطبيقات، لوحات التحكم
          وحلول الذكاء الاصطناعي المخصصة.
        </div>

        <div className="flex items-center gap-2 border-t border-white/10 pt-4">
          <div className="flex-1 rounded-xl bg-white/5 px-3 py-2 text-[10px] text-white/30">
            اكتب رسالتك...
          </div>
          <div className="rounded-xl bg-yellow-400 p-2 text-black">
            <Send size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7.2v3H10v8h3.5Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}
export default function AISolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#fafafa] text-black selection:bg-yellow-400 selection:text-black"
    >
      {/* =========================================================
          GLOBAL STYLES
      ========================================================= */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatDelayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes pulseSoft {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes ai-marquee {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

.ai-marquee-track {
  display: flex;
  width: max-content;
  min-width: max-content;
  flex-wrap: nowrap;
  will-change: transform;
  animation: ai-marquee 32s linear infinite;
}

.ai-marquee-group {
  display: flex;
  width: max-content;
  flex-shrink: 0;
  flex-wrap: nowrap;
  align-items: center;
}

.ai-marquee-item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 3rem;
  padding-inline: 1.5rem;
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .ai-marquee-track {
    animation: none;
  }
}

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 5s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulseSoft 3s ease-in-out infinite;
        }
      `}</style>

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-sm md:backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-yellow-400 transition-transform group-hover:rotate-6">
              <Sparkles size={21} />
            </div>

            <div>
              <p className="text-lg font-black tracking-tight">STOREX</p>
              <p className="text-[9px] font-bold tracking-[0.25em] text-black/40">
                DIGITAL STUDIO
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="/"
              className="text-sm font-bold text-black/60 transition hover:text-black"
            >
              الرئيسية
            </Link>

            <Link
              href="/services/websites"
              className="text-sm font-bold text-black/60 transition hover:text-black"
            >
              المواقع
            </Link>

            <Link
              href="/services/stores"
              className="text-sm font-bold text-black/60 transition hover:text-black"
            >
              المتاجر
            </Link>

            <Link
              href="/services/dashboards"
              className="text-sm font-bold text-black/60 transition hover:text-black"
            >
              لوحات التحكم
            </Link>

            <Link
              href="/services/apps"
              className="text-sm font-bold text-black/60 transition hover:text-black"
            >
              التطبيقات
            </Link>

            <Link
              href="/services/ai"
              className="relative text-sm font-black text-black"
            >
              حلول AI
              <span className="absolute -bottom-2 right-0 h-1 w-5 rounded-full bg-yellow-400" />
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="hidden items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-yellow-400 hover:text-black sm:flex"
          >
            ابدأ مشروعك
            <ArrowLeft size={16} />
          </Link>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-xl border border-black/10 p-3 lg:hidden"
            aria-label="فتح القائمة"
          >
            <Layers3 size={20} />
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-black/5 bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-2">
              {[
                ["الرئيسية", "/"],
                ["المواقع", "/services/websites"],
                ["المتاجر", "/services/stores"],
                ["لوحات التحكم", "/services/dashboards"],
                ["التطبيقات", "/services/apps"],
                ["حلول AI", "/services/ai"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-bold ${
                    href === "/services/ai"
                      ? "bg-yellow-400"
                      : "hover:bg-black/5"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#fafafa] pt-32 lg:pt-40">
        <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-yellow-300/30 blur-[120px]" />
        <div className="absolute left-[-100px] top-60 h-72 w-72 rounded-full bg-yellow-200/20 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400">
                <Sparkles size={13} />
              </span>

              <span className="text-xs font-black">
                ARTIFICIAL INTELLIGENCE
              </span>

              <span className="rounded-full bg-black px-2 py-1 text-[9px] font-bold text-yellow-400">
                NEW
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              خلّي الذكاء
              <br />
              <span className="relative inline-block">
                يشتغل
                <span className="absolute -bottom-1 right-0 -z-10 h-4 w-full -rotate-2 rounded bg-yellow-400 sm:h-5" />
              </span>{" "}
              لمشروعك.
            </h1>

            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-black/55 sm:text-lg">
              نبني حلول ذكاء اصطناعي تساعدك على خدمة عملائك، أتمتة العمليات،
              إنشاء المحتوى، تحليل البيانات وتنفيذ المهام بشكل أذكى وأسرع.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
              >
                تحدث معنا عن فكرتك
                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white px-7 py-4 text-sm font-black transition hover:border-black/20 hover:bg-black/5"
              >
                استكشف الحلول
                <ArrowUpLeft size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-bold text-black/45">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-600" />
                حلول مخصصة
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-600" />
                API Integration
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-600" />
                قابل للتوسع
              </span>
            </div>
          </div>

          <AIBrainVisual />
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================= */}
      {/* =========================================================
    AI CAPABILITIES TICKER
========================================================= */}
<section
  aria-label="AI capabilities"
  className="relative overflow-hidden border-y border-black/[0.06] bg-white"
>
  {/* Soft edge fade */}
  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />

  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

  {/* Top accent */}
  <div className="absolute inset-x-0 top-0 h-px bg-black/[0.04]" />

  <div className="flex h-[78px] items-center overflow-hidden">
    <div className="ai-marquee-track">
      {/* GROUP 1 */}
      <div className="ai-marquee-group">
        {[
          "AI AUTOMATION",
          "AI AGENTS",
          "CUSTOM AI",
          "SMART CHATBOTS",
          "BUSINESS AUTOMATION",
          "AI CONTENT",
          "API INTEGRATION",
          "DATA & AI",
        ].map((item) => (
          <div
            key={`first-${item}`}
            className="ai-marquee-item"
          >
            <span className="text-[11px] font-black tracking-[0.22em] text-black/30 sm:text-xs">
              {item}
            </span>

            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
          </div>
        ))}
      </div>

      {/* GROUP 2
          Exact duplicate makes the animation seamless */}
      <div className="ai-marquee-group" aria-hidden="true">
        {[
          "AI AUTOMATION",
          "AI AGENTS",
          "CUSTOM AI",
          "SMART CHATBOTS",
          "BUSINESS AUTOMATION",
          "AI CONTENT",
          "API INTEGRATION",
          "DATA & AI",
        ].map((item) => (
          <div
            key={`second-${item}`}
            className="ai-marquee-item"
          >
            <span className="text-[11px] font-black tracking-[0.22em] text-black/30 sm:text-xs">
              {item}
            </span>

            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Bottom accent */}
  <div className="absolute inset-x-0 bottom-0 h-px bg-black/[0.04]" />
</section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-black/35">
              AI / 01
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              الذكاء الاصطناعي
              <br />
              ليس مجرد Chatbot.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-xl font-bold leading-9 text-black/70">
              الحل الجيد لا يكتفي بالإجابة على سؤال. يمكنه أن يفهم البيانات،
              يتعامل مع الأدوات، ينفذ خطوات، يساعد الموظفين ويعمل داخل تجربة
              مشروعك.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Understand",
                "Analyze",
                "Decide",
                "Automate",
                "Execute",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-[#fafafa] px-4 py-2 text-xs font-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section
        id="solutions"
        className="bg-black py-24 text-white lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                AI SOLUTIONS / 02
              </span>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                حل الذكاء الاصطناعي
                <br />
                الذي يحتاجه مشروعك.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/45">
              من أتمتة مهمة صغيرة إلى بناء نظام AI متكامل، نختار التقنية حسب
              المشكلة وليس العكس.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aiSolutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black transition-transform group-hover:rotate-6">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs font-black text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-black">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {solution.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold text-white/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs font-black text-yellow-400 opacity-0 transition group-hover:opacity-100">
                    اكتشف الحل
                    <ArrowLeft size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          AI CHAT / PRODUCT SHOWCASE
      ========================================================= */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-black/35">
              AI ASSISTANT / 03
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              موظف رقمي
              <br />
              يعمل معك 24/7.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/55">
              أنشئ مساعدًا ذكيًا يتعامل مع العملاء، يفهم الخدمات، يجيب عن
              الأسئلة ويجمع المعلومات الأولية قبل وصول العميل إلى فريقك.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "يرد على الأسئلة المتكررة",
                "يفهم المحادثة والسياق",
                "يعمل خارج أوقات العمل",
                "يمكن ربطه بالأنظمة والـAPIs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400">
                    <Check size={14} />
                  </div>
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-yellow-400 hover:text-black"
            >
              ابنِ مساعدك الذكي
              <ArrowLeft size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-yellow-400/20 blur-sm md:blur-3xl" />

            <div className="relative">
              <ChatMockup />

              <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                    <Zap size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-black">Response time</p>
                    <p className="mt-1 text-lg font-black">0.8s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-black/35">
              CAPABILITIES / 04
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              أكثر من مجرد ذكاء.
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/50">
              نبني النظام حول احتياجات مشروعك حتى يصبح الذكاء الاصطناعي جزءًا
              حقيقيًا من طريقة عملك.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group bg-white p-7 transition hover:bg-[#fafafa]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#fafafa] transition group-hover:border-black group-hover:bg-yellow-400">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-lg font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/50">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          USE CASES
      ========================================================= */}
      <section className="bg-yellow-400 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-black/45">
                USE CASES / 05
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                أين يمكن
                <br />
                للـAI مساعدتك؟
              </h2>

              <p className="mt-6 max-w-md text-sm font-medium leading-7 text-black/60">
                يمكن تطبيق الذكاء الاصطناعي على أجزاء مختلفة من مشروعك، من
                التواصل مع العملاء إلى العمليات الداخلية.
              </p>

              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-400">
                <Lightbulb size={28} />
              </div>
            </div>

            <div className="grid gap-3">
              {useCases.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group rounded-[1.5rem] border border-black/10 bg-white/60 p-6 backdrop-blur-sm transition hover:bg-white md:backdrop-blur"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-yellow-400">
                        <Icon size={19} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-black">
                            {item.title}
                          </h3>

                          <span className="text-xs font-black text-black/25">
                            {item.number}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-7 text-black/55">
                          {item.text}
                        </p>
                      </div>

                      <ChevronLeft
                        size={18}
                        className="mt-1 opacity-20 transition group-hover:-translate-x-1 group-hover:opacity-70"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section className="bg-black py-24 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                TECHNOLOGY / 06
              </span>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                التقنية وراء الحل.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-white/45">
              نختار الأدوات حسب متطلبات المشروع، قابلية التوسع، التكلفة وتجربة
              المستخدم.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [BrainCircuit, "AI Models"],
              [Code2, "APIs"],
              [Database, "Data"],
              [Workflow, "Automation"],
              [Terminal, "Backend"],
              [Globe, "Web"],
              [Cpu, "Processing"],
              [Rocket, "Deployment"],
            ].map(([Icon, title]) => {
              const IconComponent = Icon as typeof BrainCircuit;

              return (
                <div
                  key={title as string}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-yellow-400/30 hover:bg-white/[0.07]"
                >
                  <IconComponent
                    size={20}
                    className="text-yellow-400 transition group-hover:scale-110"
                  />

                  <p className="mt-5 text-sm font-black">{title as string}</p>

                  <div className="mt-4 h-1 w-8 rounded-full bg-yellow-400 transition-all group-hover:w-14" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-black/35">
              PROCESS / 07
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              من الفكرة إلى AI حقيقي.
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute right-[12%] left-[12%] top-8 hidden h-px bg-black/10 lg:block" />

            <div className="grid gap-10 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-white text-lg font-black shadow-sm">
                    <span>{step.number}</span>
                  </div>

                  <h3 className="mt-7 text-xl font-black">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-black/50">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL CHANNELS
      ========================================================= */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-[2.5rem] bg-black p-7 text-white sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  <MessageCircle size={23} />
                </div>

                <h2 className="mt-6 max-w-2xl text-3xl font-black sm:text-4xl">
                  اجمع قنوات التواصل مع AI واحد.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
                  يمكن تصميم تجربة موحدة للتعامل مع العملاء عبر القنوات
                  المناسبة لنشاطك.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
  {/* WhatsApp */}
  <div className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-bold">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-yellow-400"
    >
      <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7c1.7.9 3.6 1.4 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.9 0-3.1-1.2-6.1-3.4-8.3ZM12 21.6c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.1C2 6.4 6.5 2 12 2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 7c0 5.4-4.4 9.7-9.8 9.7Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.1 3.1 1.2 3.3.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.8-.7 2-1.3.3-.6.3-1.2.2-1.3-.1-.2-.3-.3-.6-.4Z" />
    </svg>

    WhatsApp
  </div>

  {/* Instagram */}
  <div className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-bold">
    <InstagramIcon
      size={16}
    />
    Instagram
  </div>

  {/* Facebook Messenger */}
  <div className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-bold">
    <FacebookIcon
      size={16}
    />
    Messenger
  </div>
</div>
              </div>

              <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-white/10">
                <div className="absolute inset-5 rounded-full border border-yellow-400/20" />
                <div className="absolute inset-10 rounded-full border border-white/10" />

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400 text-black shadow-[0_0_70px_rgba(250,204,21,0.25)]">
                  <Bot size={35} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#fafafa] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-black/35">
              FAQ / 08
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              أسئلة شائعة.
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-black/15 bg-white"
                      : "border-black/10 bg-white/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-right sm:px-7"
                  >
                    <span className="text-sm font-black sm:text-base">
                      {faq.q}
                    </span>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "rotate-180 bg-yellow-400"
                          : "bg-black/5"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-7">
                      <p className="max-w-3xl text-sm leading-7 text-black/50">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-yellow-400 py-24 lg:py-32">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[50px] border-black/5" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[60px] border-black/5" />

        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-400">
            <Sparkles size={29} />
          </div>

          <h2 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            عندك فكرة للـAI؟
            <br />
            خلينا نبنيها.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-7 text-black/60 sm:text-base">
            احكِ لنا عن المشكلة التي تريد حلها، وسنساعدك في تحويلها إلى حل
            رقمي ذكي وقابل للتطوير.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1"
            >
              ابدأ مشروع AI
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-black/15 bg-white/50 px-7 py-4 text-sm font-black transition hover:bg-white"
            >
              العودة للرئيسية
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-black px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black">
              <Sparkles size={19} />
            </div>

            <div>
              <p className="text-sm font-black">STOREX</p>
              <p className="text-[8px] tracking-[0.2em] text-white/35">
                DIGITAL STUDIO
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap gap-5 text-xs font-bold text-white/40">
            <Link href="/services/websites" className="hover:text-white">
              المواقع
            </Link>
            <Link href="/services/stores" className="hover:text-white">
              المتاجر
            </Link>
            <Link href="/services/dashboards" className="hover:text-white">
              لوحات التحكم
            </Link>
            <Link href="/services/apps" className="hover:text-white">
              التطبيقات
            </Link>
            <Link href="/services/ai" className="text-yellow-400">
              AI
            </Link>
          </div>

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} STOREX. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </main>
  );
}