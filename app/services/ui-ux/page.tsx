"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronDown,
  ChevronLeft,
  Layers3,
  Menu,
  MousePointer2,
  PenTool,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "SaaS Dashboard",
    category: "Web App",
    description:
      "واجهة SaaS متكاملة لإدارة المشاريع والبيانات والعمليات اليومية.",
    image: "/projects/uiux-saas.jpg",
    tags: ["SaaS", "Dashboard", "UI/UX"],
  },

  {
    id: 2,
    title: "Mobile Finance",
    category: "Mobile",
    description:
      "تجربة تطبيق مالية حديثة تركز على البساطة وسهولة الاستخدام.",
    image: "/projects/store-3.jpg",
    tags: ["Mobile", "Finance", "UX"],
  },

  {
    id: 3,
    title: "Digital Landing",
    category: "Landing Page",
    description:
      "Landing page قوية لمنتج رقمي مع تجربة تحويل واضحة.",
    image: "/projects/store-6.jpg",
    tags: ["Landing", "Conversion", "UI"],
  },

  {
    id: 4,
    title: "Finance Platform",
    category: "Web App",
    description:
      "منصة مالية تعرض الرصيد والمعاملات والتحليلات بطريقة واضحة.",
    image: "/projects/store-2.jpg",
    tags: ["Fintech", "Analytics", "Dashboard"],
  },

  {
    id: 5,
    title: "Analytics System",
    category: "SaaS",
    description:
      "لوحة تحليلات متقدمة لعرض مؤشرات الأداء والبيانات.",
    image: "/projects/store-4.jpg",
    tags: ["Analytics", "SaaS", "Data"],
  },
];

const services = [
  {
    icon: PenTool,
    number: "01",
    title: "UI Design",
    description:
      "تصميم واجهات عصرية ومتناسقة تعكس هوية منتجك وتجعله أكثر احترافية.",
  },
  {
    icon: Target,
    number: "02",
    title: "UX Design",
    description:
      "نبني تجربة استخدام بسيطة ومنطقية تساعد المستخدم على الوصول لهدفه بسرعة.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "User Flow",
    description:
      "نرتب خطوات المستخدم ونبسط الـflows قبل البدء في التصميم النهائي.",
  },
  {
    icon: Layers3,
    number: "04",
    title: "Design System",
    description:
      "مكونات وقواعد تصميم قابلة لإعادة الاستخدام للحفاظ على تناسق المنتج.",
  },
  {
    icon: Smartphone,
    number: "05",
    title: "Mobile UI",
    description:
      "واجهات Mobile محسنة للشاشات الصغيرة مع اهتمام بالتفاعل وسهولة الاستخدام.",
  },
  {
    icon: MousePointer2,
    number: "06",
    title: "Prototype",
    description:
      "Prototype تفاعلي يوضح طريقة عمل المنتج قبل مرحلة التطوير.",
  },
];

const process = [
  {
    number: "01",
    title: "فهم المنتج",
    description:
      "نفهم فكرتك، الجمهور المستهدف، أهداف المنتج والمشاكل التي نحتاج إلى حلها.",
  },
  {
    number: "02",
    title: "UX & User Flow",
    description:
      "نرتب المحتوى والصفحات والـflows حتى تكون تجربة الاستخدام واضحة ومنطقية.",
  },
  {
    number: "03",
    title: "Wireframes",
    description:
      "نبني الهيكل الأساسي للواجهات قبل الدخول في التفاصيل البصرية.",
  },
  {
    number: "04",
    title: "UI Design",
    description:
      "نحوّل الهيكل إلى واجهات احترافية مع ألوان، Typography، Components وتفاصيل دقيقة.",
  },
  {
    number: "05",
    title: "Prototype",
    description:
      "نربط الشاشات معًا لإنشاء تجربة تفاعلية قريبة من المنتج الحقيقي.",
  },
  {
    number: "06",
    title: "Developer Handoff",
    description:
      "نسلم الملفات والمكونات والمقاسات والحالات اللازمة لتسهيل عملية التطوير.",
  },
];

const features = [
  "تصميم متجاوب Desktop / Tablet / Mobile",
  "Wireframes واضحة قبل التصميم النهائي",
  "User Flows منظمة",
  "Design System قابل للتوسع",
  "Components وحالات مختلفة",
  "Prototype تفاعلي",
  "Typography وColor System",
  "Developer Handoff",
  "تنظيم ملفات Figma",
  "Micro-interactions",
  "UX-focused layouts",
  "إمكانية التعديل والمراجعة",
];

const faqs = [
  {
    question: "هل تقدمون UI فقط أم UX أيضًا؟",
    answer:
      "نقدم الاثنين. يمكن أن نبدأ من UX وUser Flow ثم ننتقل إلى UI، أو نعمل على UI فقط إذا كانت تجربة المستخدم محددة مسبقًا.",
  },
  {
    question: "هل التصميم يكون على Figma؟",
    answer:
      "نعم، يمكن تسليم المشروع على Figma مع تنظيم الصفحات والمكونات والـDesign System لتسهيل العمل على فريق التطوير.",
  },
  {
    question: "هل تصممون تطبيقات الهاتف؟",
    answer:
      "نعم. نصمم واجهات iOS وAndroid مع مراعاة أحجام الشاشات، التنقل، الحالات المختلفة وتجربة الاستخدام.",
  },
  {
    question: "هل يمكن تصميم SaaS كامل؟",
    answer:
      "نعم. يمكن تصميم المنتج بالكامل من onboarding والـauthentication إلى dashboard، settings، billing، users وباقي الشاشات.",
  },
  {
    question: "هل يمكنني طلب Prototype فقط؟",
    answer:
      "نعم. يمكن إنشاء Prototype تفاعلي يوضح الـflow وتجربة المنتج قبل البدء في التطوير.",
  },
];

/* =========================================================
   HELPERS
========================================================= */

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] ${
        dark
          ? "border-white/10 bg-white/[0.04] text-white/50"
          : "border-black/10 bg-black/[0.025] text-black/50"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
      {children}
    </div>
  );
}

function ArrowButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-yellow-400 hover:text-black"
    >
      {children}
      <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:bg-black/10">
        <ArrowLeft size={15} />
      </span>
    </Link>
  );
}
function ProjectMockup({
  project,
}: {
  project: (typeof projects)[number];
}) {
  switch (project.id) {
    case 1:
      return (
        <div className="absolute inset-0 overflow-hidden bg-[#f4f3ef] p-5">
          {/* SaaS Dashboard */}
          <div className="mx-auto h-full w-[92%] overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_25px_70px_rgba(0,0,0,.13)]">
            <div className="flex h-full">
              <div className="hidden w-[25%] border-r border-black/5 bg-[#fafafa] p-3 sm:block">
                <div className="mb-7 h-6 w-20 rounded-lg bg-black" />

                <div className="space-y-2">
                  <div className="h-7 rounded-lg bg-yellow-400" />
                  <div className="h-7 rounded-lg bg-black/[0.04]" />
                  <div className="h-7 rounded-lg bg-black/[0.04]" />
                  <div className="h-7 rounded-lg bg-black/[0.04]" />
                  <div className="h-7 rounded-lg bg-black/[0.04]" />
                </div>

                <div className="mt-8 space-y-2">
                  <div className="h-2 w-14 rounded bg-black/10" />
                  <div className="h-6 rounded bg-black/[0.035]" />
                  <div className="h-6 rounded bg-black/[0.035]" />
                </div>
              </div>

              <div className="flex-1 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-3 w-20 rounded bg-black/10" />
                    <div className="mt-2 h-5 w-32 rounded bg-black/80" />
                  </div>

                  <div className="h-8 w-8 rounded-full bg-yellow-400" />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-black/5 p-3">
                    <div className="h-2 w-10 rounded bg-black/10" />
                    <div className="mt-3 h-5 w-16 rounded bg-black/70" />
                  </div>

                  <div className="rounded-xl bg-yellow-400 p-3">
                    <div className="h-2 w-10 rounded bg-black/30" />
                    <div className="mt-3 h-5 w-16 rounded bg-black" />
                  </div>

                  <div className="rounded-xl border border-black/5 p-3">
                    <div className="h-2 w-10 rounded bg-black/10" />
                    <div className="mt-3 h-5 w-16 rounded bg-black/70" />
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-black/5 p-3">
                  <div className="mb-3 flex justify-between">
                    <div className="h-2 w-20 rounded bg-black/10" />
                    <div className="h-2 w-10 rounded bg-black/5" />
                  </div>

                  <div className="flex h-24 items-end gap-2">
                    <div className="h-[35%] flex-1 rounded-t bg-black/10" />
                    <div className="h-[55%] flex-1 rounded-t bg-black/15" />
                    <div className="h-[45%] flex-1 rounded-t bg-yellow-400" />
                    <div className="h-[75%] flex-1 rounded-t bg-black/20" />
                    <div className="h-[62%] flex-1 rounded-t bg-black/10" />
                    <div className="h-[90%] flex-1 rounded-t bg-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e9e9e6]">
          {/* Mobile App */}
          <div className="relative h-[88%] w-[42%] max-w-[190px] overflow-hidden rounded-[32px] border-[5px] border-black bg-white shadow-[0_25px_70px_rgba(0,0,0,.25)]">
            <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />

            <div className="px-4 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-2 w-12 rounded bg-black/10" />
                  <div className="mt-2 h-4 w-20 rounded bg-black/80" />
                </div>

                <div className="h-7 w-7 rounded-full bg-yellow-400" />
              </div>

              <div className="mt-5 rounded-2xl bg-black p-4 text-white">
                <div className="h-2 w-12 rounded bg-white/30" />
                <div className="mt-3 h-5 w-20 rounded bg-white" />
                <div className="mt-5 h-8 w-16 rounded-xl bg-yellow-400" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-20 rounded-2xl bg-yellow-100" />
                <div className="h-20 rounded-2xl bg-black/[0.04]" />
              </div>

              <div className="mt-4 h-3 w-20 rounded bg-black/10" />

              <div className="mt-3 space-y-2">
                <div className="h-11 rounded-xl bg-black/[0.035]" />
                <div className="h-11 rounded-xl bg-black/[0.035]" />
                <div className="h-11 rounded-xl bg-black/[0.035]" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-black/5 bg-white p-3">
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-black/10" />
              <div className="h-3 w-3 rounded-full bg-black/10" />
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="absolute inset-0 bg-[#101010] p-5">
          {/* Landing Page */}
          <div className="mx-auto h-full w-[92%] overflow-hidden rounded-[18px] bg-[#f7f6f1] shadow-[0_25px_70px_rgba(0,0,0,.3)]">
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-3">
              <div className="h-5 w-20 rounded bg-black" />

              <div className="hidden gap-4 sm:flex">
                <div className="h-2 w-10 rounded bg-black/15" />
                <div className="h-2 w-10 rounded bg-black/15" />
                <div className="h-2 w-10 rounded bg-black/15" />
              </div>

              <div className="h-7 w-16 rounded-full bg-black" />
            </div>

            <div className="grid h-[calc(100%-49px)] grid-cols-2">
              <div className="flex flex-col justify-center px-5 sm:px-8">
                <div className="mb-3 h-2 w-20 rounded bg-yellow-400" />

                <div className="h-6 w-[85%] rounded bg-black sm:h-8" />
                <div className="mt-2 h-6 w-[65%] rounded bg-black sm:h-8" />

                <div className="mt-4 h-2 w-[90%] rounded bg-black/10" />
                <div className="mt-2 h-2 w-[75%] rounded bg-black/10" />

                <div className="mt-6 h-9 w-24 rounded-full bg-yellow-400" />
              </div>

              <div className="relative overflow-hidden bg-yellow-400">
                <div className="absolute right-[10%] top-[15%] h-28 w-28 rounded-full bg-black" />
                <div className="absolute bottom-[15%] left-[10%] h-20 w-20 rounded-[24px] bg-white shadow-xl" />
                <div className="absolute bottom-[25%] right-[20%] h-12 w-24 rounded-full bg-black/10" />
              </div>
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="absolute inset-0 bg-[#f0f1f5] p-5">
          {/* Finance App */}
          <div className="mx-auto h-full w-[94%] overflow-hidden rounded-[20px] bg-[#15171c] p-4 text-white shadow-[0_25px_70px_rgba(0,0,0,.2)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-14 rounded bg-white/20" />
                <div className="mt-2 h-5 w-28 rounded bg-white" />
              </div>

              <div className="h-8 w-8 rounded-full bg-yellow-400" />
            </div>

            <div className="mt-5 rounded-2xl bg-yellow-400 p-4 text-black">
              <div className="text-[8px] font-bold opacity-50">
                TOTAL BALANCE
              </div>

              <div className="mt-2 text-xl font-black">
                $24,580
              </div>

              <div className="mt-5 flex justify-between">
                <div className="h-7 w-16 rounded-lg bg-black/10" />
                <div className="h-7 w-16 rounded-lg bg-black" />
              </div>
            </div>

            <div className="mt-4 flex items-end gap-2">
              {[40, 55, 35, 70, 50, 82, 65, 92].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-white/15"
                    style={{ height: `${height}px` }}
                  />
                )
              )}
            </div>

            <div className="mt-5 h-2 w-24 rounded bg-white/20" />

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3 rounded-xl bg-white/[0.05] p-2">
                <div className="h-8 w-8 rounded-full bg-yellow-400" />
                <div className="flex-1">
                  <div className="h-2 w-20 rounded bg-white/20" />
                  <div className="mt-1 h-1.5 w-12 rounded bg-white/10" />
                </div>
                <div className="h-2 w-12 rounded bg-white/20" />
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/[0.05] p-2">
                <div className="h-8 w-8 rounded-full bg-white/10" />
                <div className="flex-1">
                  <div className="h-2 w-20 rounded bg-white/20" />
                  <div className="mt-1 h-1.5 w-12 rounded bg-white/10" />
                </div>
                <div className="h-2 w-12 rounded bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className="absolute inset-0 bg-[#dededb] p-5">
          {/* Analytics Platform */}
          <div className="mx-auto h-full w-[94%] overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_25px_60px_rgba(0,0,0,.14)]">
            <div className="border-b border-black/5 px-5 py-3">
              <div className="flex justify-between">
                <div>
                  <div className="h-2 w-16 rounded bg-black/10" />
                  <div className="mt-2 h-4 w-28 rounded bg-black/70" />
                </div>

                <div className="h-7 w-20 rounded-lg bg-yellow-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4">
              <div className="rounded-xl bg-black p-3 text-white">
                <div className="h-2 w-14 rounded bg-white/20" />
                <div className="mt-3 text-lg font-black">
                  84.6%
                </div>
                <div className="mt-3 h-1 rounded-full bg-yellow-400" />
              </div>

              <div className="rounded-xl bg-yellow-400 p-3">
                <div className="h-2 w-14 rounded bg-black/30" />
                <div className="mt-3 text-lg font-black">
                  +28.4%
                </div>
                <div className="mt-3 h-1 rounded-full bg-black/20" />
              </div>
            </div>

            <div className="mx-4 rounded-xl border border-black/5 p-3">
              <div className="mb-4 flex justify-between">
                <div className="h-2 w-20 rounded bg-black/10" />
                <div className="h-2 w-10 rounded bg-black/5" />
              </div>

              <svg
                viewBox="0 0 500 130"
                className="h-28 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 105 C50 90, 70 100, 110 72 S170 85, 210 55 S280 80, 320 35 S400 50, 500 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-black"
                />

                <path
                  d="M0 115 C60 110, 100 90, 150 95 S230 75, 280 85 S380 60, 500 65"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-yellow-400"
                />
              </svg>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 px-4">
              <div className="h-10 rounded-lg bg-black/[0.035]" />
              <div className="h-10 rounded-lg bg-black/[0.035]" />
              <div className="h-10 rounded-lg bg-black/[0.035]" />
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#ededeb]">
          <div className="h-[72%] w-[76%] rounded-[20px] border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,.1)]">
            <div className="flex h-8 items-center gap-1 border-b border-black/5 px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            </div>

            <div className="p-4">
              <div className="h-5 w-28 rounded bg-black/10" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-xl bg-black/[0.04]" />
                <div className="h-16 rounded-xl bg-yellow-300/60" />
                <div className="h-16 rounded-xl bg-black/[0.04]" />
              </div>

              <div className="mt-3 h-24 rounded-xl bg-black/[0.035]" />
            </div>
          </div>
        </div>
      );
  }
}
/* =========================================================
   PAGE
========================================================= */

export default function UIUXPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-white text-black selection:bg-yellow-300 selection:text-black"
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-black text-yellow-400 shadow-sm">
              <Sparkles size={19} />
            </div>

            <div>
              <div className="text-sm font-black tracking-tight">
                STOREX
              </div>
              <div className="text-[8px] font-bold uppercase tracking-[0.22em] text-black/35">
                Digital Studio
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-sm font-bold text-black/55 transition hover:text-black"
            >
              الرئيسية
            </Link>

            <Link
              href="/#services"
              className="text-sm font-bold text-black transition"
            >
              الخدمات
            </Link>

            <Link
              href="/services/websites"
              className="text-sm font-bold text-black/55 transition hover:text-black"
            >
              المواقع
            </Link>

            <Link
              href="/services/stores"
              className="text-sm font-bold text-black/55 transition hover:text-black"
            >
              المتاجر
            </Link>

            <Link
              href="/services/ai"
              className="text-sm font-bold text-black/55 transition hover:text-black"
            >
              AI
            </Link>
          </nav>

          <div className="hidden md:block">
            <ArrowButton href="/#pricing">
              ابدأ مشروعك
            </ArrowButton>
          </div>

          <button
            onClick={() => setMobileMenu((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 md:hidden"
            aria-label="فتح القائمة"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-black/[0.06] bg-white px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-[1380px] flex-col gap-2">
              {[
                ["الرئيسية", "/"],
                ["الخدمات", "/services"],
                ["المواقع", "/services/websites"],
                ["المتاجر", "/services/stores"],
                ["AI", "/services/ai"],
                ["تواصل معنا", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-black/[0.04]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#f7f7f5] pt-[72px]">
        {/* background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-300/30 blur-[100px]" />
        <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full bg-yellow-200/25 blur-[100px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid min-h-[688px] max-w-[1380px] items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          {/* LEFT VISUAL */}

          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[590px]">
              {/* floating card */}
              <div className="absolute -left-2 top-8 z-20 hidden rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:block lg:-left-8">
                <div className="mb-2 flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-yellow-400">
                    <Layers3 size={16} />
                  </div>

                  <div>
                    <div className="text-[10px] font-black">
                      DESIGN SYSTEM
                    </div>
                    <div className="text-[9px] text-black/40">
                      48 Components
                    </div>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`h-2 w-7 rounded-full ${
                        i === 2
                          ? "bg-yellow-400"
                          : "bg-black/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* main browser */}
              <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_35px_100px_rgba(0,0,0,0.15)]">
                <div className="flex h-12 items-center gap-2 border-b border-black/[0.06] px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

                  <div className="mr-auto h-6 w-44 rounded-md bg-black/[0.035]" />
                </div>

                <div className="grid min-h-[370px] grid-cols-[70px_1fr] sm:min-h-[420px]">
                  {/* mini sidebar */}
                  <div className="border-l border-black/[0.06] bg-[#fafafa] p-3">
                    <div className="mb-6 grid h-9 w-9 place-items-center rounded-xl bg-black text-yellow-400">
                      <Sparkles size={15} />
                    </div>

                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className={`mx-auto h-7 w-7 rounded-lg ${
                            i === 1
                              ? "bg-yellow-400"
                              : "bg-black/[0.045]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* dashboard */}
                  <div className="bg-white p-5 sm:p-7">
                    <div className="mb-7 flex items-start justify-between">
                      <div>
                        <div className="mb-2 h-3 w-28 rounded bg-black/10" />
                        <div className="h-2 w-20 rounded bg-black/[0.06]" />
                      </div>

                      <div className="h-8 w-8 rounded-full bg-yellow-400" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-black/[0.06] p-3"
                        >
                          <div className="mb-3 h-2 w-12 rounded bg-black/10" />
                          <div className="h-5 w-16 rounded bg-black/[0.12]" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-[1.35fr_0.65fr]">
                      <div className="rounded-2xl border border-black/[0.06] p-4">
                        <div className="mb-5 flex justify-between">
                          <div className="h-3 w-20 rounded bg-black/10" />
                          <div className="h-3 w-10 rounded bg-black/5" />
                        </div>

                        <div className="flex h-36 items-end gap-2">
                          {[40, 65, 45, 85, 55, 72, 95, 60, 82, 70].map(
                            (height, i) => (
                              <div
                                key={i}
                                className={`flex-1 rounded-t-md ${
                                  i === 6
                                    ? "bg-yellow-400"
                                    : "bg-black/[0.07]"
                                }`}
                                style={{
                                  height: `${height}%`,
                                }}
                              />
                            )
                          )}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-black/[0.06] p-4">
                        <div className="mb-5 h-3 w-20 rounded bg-black/10" />

                        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border-[15px] border-yellow-400">
                          <div className="text-center">
                            <div className="text-lg font-black">
                              86%
                            </div>
                            <div className="text-[8px] text-black/40">
                              UX SCORE
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating UX card */}
              <div className="absolute -bottom-5 -right-2 z-20 rounded-2xl border border-black/10 bg-black p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:-right-7">
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-yellow-400 text-black">
                    <Zap size={17} />
                  </div>

                  <div>
                    <div className="text-xs font-black">
                      UX SCORE
                    </div>
                    <div className="text-[9px] text-white/40">
                      User experience
                    </div>
                  </div>
                </div>

                <div className="h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[88%] rounded-full bg-yellow-400" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="order-1 max-w-[700px] lg:order-2">
            <SectionLabel>UI / UX DESIGN</SectionLabel>

            <h1 className="text-[clamp(3rem,7vw,6.4rem)] font-black leading-[0.9] tracking-[-0.055em]">
              نصمم
              <br />
              <span className="relative inline-block">
                التجربة
                <span className="absolute -bottom-1 right-0 h-3 w-[75%] -rotate-2 rounded-full bg-yellow-400/80 sm:h-4" />
              </span>
              <br />
              <span className="text-black/25">قبل المنتج.</span>
            </h1>

            <p className="mt-8 max-w-[590px] text-base font-medium leading-8 text-black/55 sm:text-lg">
              تصميم UI/UX احترافي للمنتجات الرقمية، التطبيقات،
              منصات SaaS والأنظمة المعقدة — من أول فكرة إلى
              Prototype جاهز للتطوير.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ArrowButton href="/#pricing">
                اطلب تصميم مشروعك
              </ArrowButton>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:border-black/20"
              >
                شاهد أعمالنا
                <ChevronLeft
                  size={16}
                  className="transition group-hover:-translate-x-1"
                />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-[0.16em] text-black/35">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-yellow-500" />
                Figma
              </span>

              <span className="flex items-center gap-2">
                <Check size={14} className="text-yellow-500" />
                Design Systems
              </span>

              <span className="flex items-center gap-2">
                <Check size={14} className="text-yellow-500" />
                Prototypes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST / MARQUEE
      ===================================================== */}

      <section
        aria-label="Design capabilities"
        className="relative overflow-hidden border-y border-black/[0.06] bg-white"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="flex h-[72px] items-center overflow-hidden">
          <div className="uiux-marquee-track">
            {[1, 2].map((group) => (
              <div
                key={group}
                className="uiux-marquee-group"
                aria-hidden={group === 2}
              >
                {[
                  "UI DESIGN",
                  "UX DESIGN",
                  "FIGMA",
                  "DESIGN SYSTEMS",
                  "MOBILE UI",
                  "PROTOTYPING",
                  "USER FLOWS",
                  "PRODUCT DESIGN",
                ].map((item) => (
                  <div
                    key={`${group}-${item}`}
                    className="uiux-marquee-item"
                  >
                    <span className="text-[10px] font-black tracking-[0.22em] text-black/30 sm:text-xs">
                      {item}
                    </span>

                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <SectionLabel>WHY UI / UX</SectionLabel>

            <div className="max-w-md">
              <div className="text-7xl font-black tracking-[-0.07em] sm:text-8xl">
                01
              </div>

              <div className="mt-4 h-1.5 w-24 rounded-full bg-yellow-400" />
            </div>
          </div>

          <div>
            <h2 className="max-w-[900px] text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              الواجهة الجميلة وحدها
              <br />
              <span className="text-black/25">
                لا تكفي.
              </span>
            </h2>

            <p className="mt-7 max-w-[760px] text-base font-medium leading-8 text-black/50 sm:text-lg">
              المستخدم لا يهتم فقط بالألوان والشكل. يهتم بأن يعرف
              ماذا يفعل، أين يضغط، وكيف يصل إلى هدفه بأقل مجهود.
              لذلك نجمع بين التصميم البصري وتجربة الاستخدام لبناء
              منتجات تبدو قوية وتعمل بطريقة ذكية.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-[#f5f5f2] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>WHAT WE DESIGN</SectionLabel>

              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                كل شيء يحتاجه
                <br />
                <span className="text-black/25">
                  منتج رقمي قوي.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm font-medium leading-7 text-black/45">
              من الشاشة الأولى إلى آخر interaction، نصمم النظام
              الكامل وليس مجرد مجموعة Screens.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group bg-white p-7 transition hover:bg-black hover:text-white sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 text-black transition group-hover:scale-105">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs font-black text-black/20 group-hover:text-white/20">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-12 text-xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-black/45 transition group-hover:text-white/45">
                    {service.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-black/[0.06] group-hover:bg-white/10" />

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-black/35 group-hover:text-white/40">
                    Explore
                    <ArrowLeft size={13} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WORK
      ===================================================== */}

      <section
        id="work"
        className="bg-white px-5 py-24 sm:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>SELECTED WORK</SectionLabel>

              <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                أفكار تحولت إلى
                <br />
                <span className="text-black/25">واجهات.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm font-medium leading-7 text-black/45">
              مجموعة من نماذج UI/UX للمنتجات والمنصات والتطبيقات
              الرقمية.
            </p>
          </div>

          {/* filters */}
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-black transition ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "border border-black/10 bg-white text-black/45 hover:border-black/20 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* projects */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group text-right"
              >
                <div className="relative aspect-[1.18/1] overflow-hidden rounded-[26px] border border-black/[0.07] bg-[#f4f4f1]">
                  <div className="absolute inset-0">
  

  {/* Unique realistic mockup */}
  <ProjectMockup project={project} />
</div>

                  {/* hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/25">
                    <div className="grid h-14 w-14 scale-75 place-items-center rounded-full bg-yellow-400 text-black opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <ArrowUpLeft size={22} />
                    </div>
                  </div>

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black backdrop-blur">
                    {project.category}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-black">
                      {project.title}
                    </h3>

                    <ArrowLeft
                      size={17}
                      className="shrink-0 text-black/25 transition group-hover:-translate-x-1 group-hover:text-black"
                    />
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-black/45">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/[0.035] px-3 py-1 text-[9px] font-bold text-black/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK DESIGN SYSTEM SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1380px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel dark>
              DESIGN SYSTEM
            </SectionLabel>

            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              لا نصمم
              <br />
              <span className="text-white/25">
                شاشة واحدة.
              </span>
              <br />
              نصمم نظامًا.
            </h2>

            <p className="mt-7 max-w-lg text-sm font-medium leading-8 text-white/45 sm:text-base">
              Design System قوي يعني أن كل شاشة تبدو وكأنها جزء من
              نفس المنتج. Components، Typography، Colors، Spacing
              وحالات التفاعل كلها منظمة وقابلة للتوسع.
            </p>

            <div className="mt-9">
              <Link
                href="/#pricing"
                className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                صمم نظامك
                <ArrowLeft
                  size={16}
                  className="transition group-hover:-translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* system visual */}
          <div className="relative">
            <div className="rounded-[30px] border border-white/10 bg-[#111] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black">
                    DESIGN TOKENS
                  </div>
                  <div className="mt-1 text-[9px] text-white/30">
                    Core design system
                  </div>
                </div>

                <div className="rounded-full bg-yellow-400 px-3 py-1 text-[9px] font-black text-black">
                  LIVE
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* colors */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <div className="mb-4 text-[10px] font-black text-white/45">
                    COLORS
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <div className="aspect-square rounded-xl bg-yellow-400" />
                    <div className="aspect-square rounded-xl bg-white" />
                    <div className="aspect-square rounded-xl bg-white/20" />
                    <div className="aspect-square rounded-xl bg-white/5" />
                  </div>
                </div>

                {/* typography */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <div className="mb-4 text-[10px] font-black text-white/45">
                    TYPOGRAPHY
                  </div>

                  <div className="space-y-3">
                    <div className="text-2xl font-black">
                      Aa
                    </div>
                    <div className="h-1.5 w-24 rounded-full bg-white/20" />
                    <div className="h-1.5 w-16 rounded-full bg-white/10" />
                  </div>
                </div>

                {/* buttons */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <div className="mb-4 text-[10px] font-black text-white/45">
                    COMPONENTS
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-xl bg-yellow-400 px-4 py-2 text-center text-[10px] font-black text-black">
                      Primary Button
                    </div>

                    <div className="rounded-xl border border-white/10 px-4 py-2 text-center text-[10px] font-black text-white/50">
                      Secondary
                    </div>
                  </div>
                </div>

                {/* spacing */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <div className="mb-4 text-[10px] font-black text-white/45">
                    SPACING
                  </div>

                  <div className="flex items-end gap-2">
                    {[18, 28, 42, 58, 76].map((height) => (
                      <div
                        key={height}
                        className="w-5 rounded-t-md bg-yellow-400/70"
                        style={{ height }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-black text-white/45">
                    COMPONENT LIBRARY
                  </span>

                  <span className="text-[9px] text-white/25">
                    48 Components
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-9 rounded-lg ${
                        i === 1 || i === 7
                          ? "bg-yellow-400"
                          : "bg-white/[0.06]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          UX / PROCESS
      ===================================================== */}

      <section className="bg-[#f5f5f2] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel>OUR PROCESS</SectionLabel>

              <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                من الفكرة
                <br />
                <span className="text-black/25">
                  إلى Figma.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-black/45">
                عملية واضحة ومنظمة تقلل التعديلات العشوائية وتوصل
                المنتج إلى تصميم جاهز للتطوير.
              </p>
            </div>

            <div className="divide-y divide-black/10">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="group grid gap-5 py-7 sm:grid-cols-[80px_1fr_auto] sm:items-start"
                >
                  <span className="text-xs font-black text-black/20">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-black transition group-hover:translate-x-[-4px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm font-medium leading-7 text-black/45">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 place-items-center rounded-full border border-black/10 bg-white transition group-hover:border-black group-hover:bg-black group-hover:text-white sm:grid">
                    <ArrowLeft size={15} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>WHAT YOU GET</SectionLabel>

              <h2 className="text-4xl font-black leading-[1.04] tracking-[-0.045em] sm:text-5xl">
                كل التفاصيل
                <br />
                <span className="text-black/25">
                  محسوبة.
                </span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="group flex items-center gap-4 rounded-2xl border border-black/[0.07] bg-[#fafafa] p-4 transition hover:-translate-y-0.5 hover:border-black/15 hover:bg-white"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-yellow-400 text-black">
                    <Check size={16} />
                  </div>

                  <span className="text-sm font-bold text-black/65 group-hover:text-black">
                    {feature}
                  </span>

                  <span className="mr-auto text-[9px] font-black text-black/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE / PRODUCT SHOWCASE
      ===================================================== */}

      <section className="overflow-hidden bg-yellow-400 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1380px] items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionLabel>PRODUCT EXPERIENCE</SectionLabel>

            <h2 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              التصميم يجب أن
              <br />
              يجعل المنتج
              <br />
              <span className="text-black/35">
                أسهل.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base font-medium leading-8 text-black/60">
              نركز على hierarchy، spacing، readability، feedback
              وmicro-interactions حتى يشعر المستخدم أن كل شيء في
              مكانه الطبيعي.
            </p>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Clear Navigation",
                "Visual Hierarchy",
                "Fast Interaction",
                "Responsive UI",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/15 bg-black/[0.04] px-4 py-2 text-[10px] font-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* phones */}
          <div className="relative mx-auto h-[500px] w-full max-w-[540px]">
            <div className="absolute left-[7%] top-12 h-[400px] w-[205px] -rotate-6 overflow-hidden rounded-[32px] border-[7px] border-black bg-white shadow-[0_30px_70px_rgba(0,0,0,0.25)] sm:left-[13%]">
              <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-black" />

              <div className="p-4 pt-8">
                <div className="mb-5 h-3 w-20 rounded bg-black/10" />
                <div className="mb-5 h-20 rounded-2xl bg-black" />

                <div className="grid grid-cols-2 gap-2">
                  <div className="h-24 rounded-xl bg-black/[0.05]" />
                  <div className="h-24 rounded-xl bg-yellow-300" />
                </div>

                <div className="mt-3 h-16 rounded-xl bg-black/[0.05]" />
                <div className="mt-3 h-16 rounded-xl bg-black/[0.05]" />
              </div>
            </div>

            <div className="absolute right-[7%] top-2 h-[445px] w-[225px] rotate-6 overflow-hidden rounded-[34px] border-[7px] border-black bg-white shadow-[0_35px_80px_rgba(0,0,0,0.3)] sm:right-[13%]">
              <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-black" />

              <div className="p-4 pt-8">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="mb-2 h-3 w-24 rounded bg-black/10" />
                    <div className="h-2 w-16 rounded bg-black/5" />
                  </div>

                  <div className="h-8 w-8 rounded-full bg-yellow-400" />
                </div>

                <div className="rounded-2xl bg-[#f5f5f2] p-4">
                  <div className="mb-3 text-[9px] font-black">
                    YOUR ACTIVITY
                  </div>

                  <div className="flex h-28 items-end gap-2">
                    {[35, 55, 45, 75, 60, 90, 70].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-md ${
                          i === 5
                            ? "bg-yellow-400"
                            : "bg-black/10"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-black/5 p-3"
                    >
                      <div className="h-7 w-7 rounded-lg bg-black/5" />
                      <div className="flex-1">
                        <div className="mb-1 h-2 w-20 rounded bg-black/10" />
                        <div className="h-1.5 w-12 rounded bg-black/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-2xl bg-black text-yellow-400 shadow-xl">
              <Smartphone size={25} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-black px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1100px] text-center">
          <SectionLabel dark>READY TO DESIGN?</SectionLabel>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            عندك فكرة؟
            <br />
            <span className="text-yellow-400">
              خلينا نصممها.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base font-medium leading-8 text-white/45 sm:text-lg">
            أرسل لنا فكرتك أو المنتج الذي تريد تطويره، وسنساعدك
            في تحويله إلى تجربة رقمية واضحة واحترافية.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#pricing"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 py-4 text-sm font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              ابدأ مشروع UI/UX
              <ArrowLeft
                size={17}
                className="transition group-hover:-translate-x-1"
              />
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-black text-white/70 transition hover:border-white/20 hover:text-white"
            >
              كل الخدمات
              <ChevronLeft size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1050px]">
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              أسئلة شائعة.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-7 text-black/45">
              بعض الأسئلة التي نسمعها قبل بداية مشاريع UI/UX.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px] border border-black/10">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-black/[0.07] last:border-b-0"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-5 py-6 text-right sm:px-7"
                  >
                    <span className="text-sm font-black sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                        open
                          ? "bg-black text-white"
                          : "bg-black/[0.04] text-black/40"
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl px-5 pb-6 text-sm font-medium leading-7 text-black/45 sm:px-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-black/[0.07] bg-[#f7f7f5] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-black text-yellow-400">
              <Sparkles size={18} />
            </div>

            <div>
              <div className="text-sm font-black">
                STOREX
              </div>
              <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/35">
                Digital Studio
              </div>
            </div>
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-black/45">
            <Link
              href="/#services"
              className="transition hover:text-black"
            >
              الخدمات
            </Link>

            <Link
              href="/services/websites"
              className="transition hover:text-black"
            >
              المواقع
            </Link>

            <Link
              href="/services/stores"
              className="transition hover:text-black"
            >
              المتاجر
            </Link>

            <Link
              href="/services/dashboards"
              className="transition hover:text-black"
            >
              Dashboards
            </Link>

            <Link
              href="/services/ai"
              className="transition hover:text-black"
            >
              AI
            </Link>

            <Link
              href="/#pricing"
              className="transition hover:text-black"
            >
              تواصل
            </Link>
          </div>

          <div className="text-[10px] font-bold text-black/25">
            © {new Date().getFullYear()} STOREX
          </div>
        </div>
      </footer>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[30px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute left-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur"
              aria-label="إغلاق"
            >
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-[#f1f1ee] lg:min-h-[520px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[70%] w-[76%] overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-2xl">
                    <div className="flex h-10 items-center gap-2 border-b border-black/5 px-4">
                      <span className="h-2 w-2 rounded-full bg-black/10" />
                      <span className="h-2 w-2 rounded-full bg-black/10" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    </div>

                    <div className="p-5">
                      <div className="mb-5 h-4 w-32 rounded bg-black/10" />

                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-24 rounded-xl bg-black/[0.04]" />
                        <div className="h-24 rounded-xl bg-yellow-300" />
                        <div className="h-24 rounded-xl bg-black/[0.04]" />
                      </div>

                      <div className="mt-4 h-28 rounded-xl bg-black/[0.035]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <div className="mb-4 inline-flex rounded-full bg-yellow-400 px-3 py-1.5 text-[9px] font-black">
                  {selectedProject.category}
                </div>

                <h3 className="text-3xl font-black tracking-[-0.04em]">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 text-sm font-medium leading-8 text-black/50">
                  {selectedProject.description}
                </p>

                <div className="mt-8">
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-black/35">
                    Project Scope
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-2 text-[10px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-9">
                  <Link
                    href="/#pricing"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-black text-white transition hover:bg-yellow-400 hover:text-black"
                  >
                    أريد تصميمًا مشابهًا
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx global>{`
        @keyframes uiux-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .uiux-marquee-track {
          display: flex;
          flex: none;
          width: max-content;
          max-width: none;
          min-width: max-content;
          flex-wrap: nowrap;
          white-space: nowrap;
          direction: ltr;
          will-change: transform;
          animation: uiux-marquee 32s linear infinite;
        }

        .uiux-marquee-group {
          display: flex;
          flex: none;
          width: max-content;
          min-width: max-content;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
          white-space: nowrap;
        }

        .uiux-marquee-item {
          display: flex;
          flex: none;
          flex-shrink: 0;
          align-items: center;
          gap: 3rem;
          padding-inline: 1.5rem;
          white-space: nowrap;
        }

        @media (prefers-reduced-motion: reduce) {
          .uiux-marquee-track {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .uiux-marquee-track {
            animation-duration: 25s;
          }

          .uiux-marquee-item {
            gap: 2rem;
            padding-inline: 1rem;
          }
        }
      `}</style>
    </main>
  );
}