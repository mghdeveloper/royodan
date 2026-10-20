"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Bell,
  Check,
  ChevronDown,
  ChevronUp,
  Code2,
  Download,
  Globe,
  LayoutGrid,
  Menu,
  MoreHorizontal,
  Rocket,
  Smartphone,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const appProjects = [
  {
    title: "تطبيق متجر",
    category: "تجارة",
    description:
      "تطبيق موبايل لعرض المنتجات واستقبال الطلبات وتسهيل تجربة الشراء.",
    type: "shopping",
  },
  {
    title: "تطبيق خدمات",
    category: "خدمات",
    description:
      "تطبيق لعرض الخدمات واستقبال الحجوزات والطلبات والتواصل مع العملاء.",
    type: "service",
  },
  {
    title: "تطبيق إدارة",
    category: "إدارة",
    description:
      "تطبيق داخلي لمتابعة العمليات والمهام والعملاء والفريق من الهاتف.",
    type: "management",
  },
];

const appFeatures = [
  {
    icon: Smartphone,
    title: "تصميم Mobile First",
    text: "واجهة مصممة خصيصًا للشاشات الصغيرة وسهولة الاستخدام باللمس.",
  },
  {
    icon: Zap,
    title: "أداء سريع",
    text: "تجربة استخدام سريعة مع واجهات خفيفة واستجابة ممتازة.",
  },
  {
    icon: Bell,
    title: "الإشعارات",
    text: "إرسال Push Notifications لإبقاء المستخدمين على اطلاع.",
  },
  {
    icon: Users,
    title: "حسابات المستخدمين",
    text: "تسجيل دخول وحسابات شخصية وصلاحيات حسب احتياجات التطبيق.",
  },
  {
    icon: Globe,
    title: "API & Backend",
    text: "ربط التطبيق بالخادم وقواعد البيانات والخدمات الخارجية.",
  },
  {
    icon: Rocket,
    title: "جاهز للنشر",
    text: "تجهيز التطبيق للنشر على Google Play و App Store.",
  },
];

const appTypes = [
  {
    title: "تطبيقات التجارة",
    description: "تطبيقات لعرض المنتجات والطلبات والعملاء.",
  },
  {
    title: "تطبيقات الخدمات",
    description: "حجوزات، خدمات منزلية، توصيل ومواعيد.",
  },
  {
    title: "تطبيقات الشركات",
    description: "حلول داخلية وتطبيقات لخدمة الموظفين والعملاء.",
  },
  {
    title: "تطبيقات SaaS",
    description: "تجربة موبايل للمنصات والأنظمة الرقمية.",
  },
  {
    title: "تطبيقات اجتماعية",
    description: "مجتمعات، رسائل، ملفات شخصية وتفاعل.",
  },
  {
    title: "تطبيقات مخصصة",
    description: "أي فكرة تحتاج إلى تحويلها إلى تطبيق.",
  },
];

const faqs = [
  {
    q: "هل التطبيق يعمل على Android و iPhone؟",
    a: "نعم، يمكن بناء تطبيقات تستهدف Android و iOS حسب المشروع والمتطلبات.",
  },
  {
    q: "هل يمكن ربط التطبيق بموقع أو API موجود؟",
    a: "نعم، يمكن ربط التطبيق مع APIs وقواعد البيانات والأنظمة الموجودة لديك.",
  },
  {
    q: "هل يمكن إضافة تسجيل الدخول؟",
    a: "نعم، يمكن إضافة تسجيل الدخول والتسجيل وحسابات المستخدمين وطرق المصادقة المختلفة.",
  },
  {
    q: "هل تساعدون في نشر التطبيق؟",
    a: "نعم، يمكن تجهيز المشروع للنشر على Google Play و App Store ومساعدتك في خطوات الإطلاق.",
  },
];

/* =========================================================
   PHONE COMPONENT
========================================================= */

function PhoneFrame({
  type,
  small = false,
}: {
  type: "shopping" | "service" | "management";
  small?: boolean;
}) {
  const scale = small ? "scale-[0.82]" : "";

  if (type === "shopping") {
    return (
      <div
        className={`relative mx-auto w-[250px] rounded-[2.5rem] border-[7px] border-black bg-black p-1.5 shadow-2xl ${scale}`}
      >
        <div className="overflow-hidden rounded-[2rem] bg-[#f6f6f3]">
          <div className="flex h-7 items-center justify-center bg-white">
            <div className="h-1.5 w-16 rounded-full bg-black" />
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[8px] text-black/40">مرحبا بك</div>
                <div className="text-xs font-black">اكتشف منتجاتنا</div>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-400">
                <Bell size={13} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2">
              <div className="h-2.5 w-2.5 rounded-full bg-black/20" />
              <div className="h-1.5 w-20 rounded bg-black/10" />
            </div>

            <div className="mt-4 flex gap-2 overflow-hidden">
              {["الكل", "جديد", "عروض"].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-full px-3 py-1.5 text-[7px] font-bold ${
                    i === 0
                      ? "bg-black text-white"
                      : "bg-white text-black/40"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-xl bg-white"
                >
                  <div
                    className={`h-24 ${
                      item % 2 === 0
                        ? "bg-black"
                        : "bg-yellow-400"
                    }`}
                  />

                  <div className="p-2">
                    <div className="h-1.5 w-3/4 rounded bg-black/15" />
                    <div className="mt-2 h-1.5 w-1/2 rounded bg-black/10" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-black p-3 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[7px] text-white/40">
                    إجمالي الطلبات
                  </div>
                  <div className="mt-1 text-sm font-black">
                    1,248
                  </div>
                </div>

                <ShoppingBagIcon />
              </div>
            </div>
          </div>

          <div className="flex h-12 items-center justify-around border-t bg-white">
            <div className="h-1.5 w-6 rounded bg-yellow-400" />
            <div className="h-1.5 w-6 rounded bg-black/10" />
            <div className="h-1.5 w-6 rounded bg-black/10" />
            <div className="h-1.5 w-6 rounded bg-black/10" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "service") {
    return (
      <div
        className={`relative mx-auto w-[250px] rounded-[2.5rem] border-[7px] border-black bg-black p-1.5 shadow-2xl ${scale}`}
      >
        <div className="overflow-hidden rounded-[2rem] bg-white">
          <div className="flex h-7 items-center justify-center">
            <div className="h-1.5 w-16 rounded-full bg-black" />
          </div>

          <div className="bg-black p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="text-[9px] font-black">
                SERVICE<span className="text-yellow-400">X</span>
              </div>

              <div className="h-6 w-6 rounded-lg bg-yellow-400" />
            </div>

            <div className="mt-8">
              <div className="text-[9px] text-white/40">
                خدمات احترافية
              </div>

              <div className="mt-2 text-xl font-black leading-tight">
                احجز خدمتك
                <br />
                <span className="text-yellow-400">بسهولة.</span>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-white/10 p-3">
              <div className="mb-2 text-[8px] font-bold">
                اختر الخدمة
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-black">
                <span className="text-[8px]">الخدمة المطلوبة</span>
                <ChevronDown size={11} />
              </div>
            </div>

            <div className="mt-2 rounded-xl bg-yellow-400 p-3 text-center text-[8px] font-black text-black">
              احجز الآن
            </div>
          </div>

          <div className="p-4">
            <div className="mb-3 text-[9px] font-black">
              الخدمات المتاحة
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/5 bg-[#f6f6f3] p-3"
                >
                  <div className="mb-3 h-7 w-7 rounded-lg bg-yellow-400" />
                  <div className="h-1.5 w-full rounded bg-black/15" />
                  <div className="mt-2 h-1.5 w-2/3 rounded bg-black/10" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-12 items-center justify-around border-t">
            <div className="h-1.5 w-6 rounded bg-black" />
            <div className="h-1.5 w-6 rounded bg-black/10" />
            <div className="h-1.5 w-6 rounded bg-black/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative mx-auto w-[250px] rounded-[2.5rem] border-[7px] border-black bg-black p-1.5 shadow-2xl ${scale}`}
    >
      <div className="overflow-hidden rounded-[2rem] bg-[#f5f5f2]">
        <div className="flex h-7 items-center justify-center bg-white">
          <div className="h-1.5 w-16 rounded-full bg-black" />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[8px] text-black/40">
                لوحة المتابعة
              </div>
              <div className="text-xs font-black">
                صباح الخير 👋
              </div>
            </div>

            <div className="h-8 w-8 rounded-xl bg-black" />
          </div>

          <div className="mt-4 rounded-2xl bg-black p-4 text-white">
            <div className="text-[8px] text-white/40">
              إجمالي الأداء
            </div>

            <div className="mt-1 text-2xl font-black">
              84.8K
            </div>

            <div className="mt-3 flex items-end gap-1">
              {[30, 45, 35, 60, 50, 75, 65, 90].map(
                (height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-yellow-400"
                    style={{ height: `${height / 2}px` }}
                  />
                )
              )}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              ["المهام", "48"],
              ["العملاء", "126"],
              ["المشاريع", "18"],
              ["النشاط", "+24%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl bg-white p-3"
              >
                <div className="text-[7px] text-black/40">
                  {label}
                </div>
                <div className="mt-1 text-sm font-black">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-white p-3">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[8px] font-black">
                آخر النشاطات
              </div>
              <MoreHorizontal size={11} />
            </div>

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="mb-2 flex items-center gap-2"
              >
                <div className="h-6 w-6 rounded-full bg-yellow-400" />
                <div className="flex-1">
                  <div className="h-1.5 w-full rounded bg-black/10" />
                  <div className="mt-1 h-1.5 w-2/3 rounded bg-black/5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-12 items-center justify-around border-t bg-white">
          <div className="h-1.5 w-6 rounded bg-black" />
          <div className="h-1.5 w-6 rounded bg-black/10" />
          <div className="h-1.5 w-6 rounded bg-black/10" />
          <div className="h-1.5 w-6 rounded bg-black/10" />
        </div>
      </div>
    </div>
  );
}

function ShoppingBagIcon() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400 text-black">
      <span className="text-[10px] font-black">↗</span>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AppsPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#f8f8f5] text-black"
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f8f5]/90 backdrop-blur-sm md:backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            STORE<span className="text-yellow-500">X</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
            <Link
              href="/"
              className="transition hover:text-yellow-500"
            >
              الرئيسية
            </Link>

            <Link
              href="/services/websites"
              className="transition hover:text-yellow-500"
            >
              المواقع
            </Link>

            <Link
              href="/services/stores"
              className="transition hover:text-yellow-500"
            >
              المتاجر
            </Link>

            <Link
              href="/services/dashboards"
              className="transition hover:text-yellow-500"
            >
              لوحات التحكم
            </Link>

            <Link
              href="/services/apps"
              className="text-yellow-500"
            >
              التطبيقات
            </Link>

            <Link
              href="/#services"
              className="transition hover:text-yellow-500"
            >
              خدماتنا
            </Link>

            <Link
              href="/#contact"
              className="transition hover:text-yellow-500"
            >
              تواصل معنا
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="hidden items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-yellow-400 hover:text-black md:flex"
          >
            ابدأ مشروعك
            <ArrowLeft size={16} />
          </Link>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 md:hidden"
          >
            {mobileMenu ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-black/10 bg-[#f8f8f5] p-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-bold">
              <Link
                href="/"
                onClick={() => setMobileMenu(false)}
              >
                الرئيسية
              </Link>

              <Link
                href="/services/websites"
                onClick={() => setMobileMenu(false)}
              >
                المواقع الإلكترونية
              </Link>

              <Link
                href="/services/stores"
                onClick={() => setMobileMenu(false)}
              >
                المتاجر
              </Link>

              <Link
                href="/services/dashboards"
                onClick={() => setMobileMenu(false)}
              >
                لوحات التحكم
              </Link>

              <Link
                href="/services/apps"
                onClick={() => setMobileMenu(false)}
              >
                التطبيقات
              </Link>

              <Link
                href="/#services"
                onClick={() => setMobileMenu(false)}
              >
                خدماتنا
              </Link>

              <Link
                href="/#contact"
                onClick={() => setMobileMenu(false)}
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative border-b border-black/10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-300/25 blur-sm md:blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* TEXT */}

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold">
              <Smartphone size={14} />

              تطوير تطبيقات الهاتف

              <span className="h-2 w-2 rounded-full bg-yellow-400" />
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              فكرتك...
              <span className="block text-yellow-500">
                في هاتف كل عميل.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              نحول أفكارك إلى تطبيقات موبايل عصرية وسريعة وسهلة
              الاستخدام، مصممة لتقديم تجربة قوية للمستخدمين.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-yellow-400 hover:text-black"
              >
                ابدأ تطبيقك

                <ArrowLeft
                  size={17}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-white px-6 py-4 text-sm font-black transition hover:border-black"
              >
                شاهد النماذج

                <ArrowUpLeft size={17} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-black/50">
              <span className="flex items-center gap-2">
                <Check
                  size={14}
                  className="text-yellow-500"
                />
                Android
              </span>

              <span className="flex items-center gap-2">
                <Check
                  size={14}
                  className="text-yellow-500"
                />
                iOS
              </span>

              <span className="flex items-center gap-2">
                <Check
                  size={14}
                  className="text-yellow-500"
                />
                API & Backend
              </span>
            </div>
          </div>

          {/* PHONES */}

          <div className="relative min-h-[500px]">
            <div className="absolute inset-0 rounded-full bg-yellow-300/20 blur-sm md:blur-3xl" />

            <div className="relative flex items-center justify-center">
              <div className="absolute -right-2 top-16 z-10 hidden md:block">
                <PhoneFrame
                  type="service"
                  small
                />
              </div>

              <div className="relative z-20">
                <PhoneFrame type="shopping" />
              </div>

              <div className="absolute -left-2 top-24 z-10 hidden md:block">
                <PhoneFrame
                  type="management"
                  small
                />
              </div>
            </div>

            <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                  <Download size={18} />
                </div>

                <div>
                  <div className="text-[10px] text-black/40">
                    تطبيقك
                  </div>

                  <div className="text-sm font-black">
                    جاهز للمستخدمين
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="scroll-mt-20 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
              نماذج التطبيقات
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              تطبيقات مصممة لأفكار مختلفة
            </h2>

            <p className="mt-5 leading-7 text-black/50">
              من التجارة والخدمات إلى أنظمة الشركات والتطبيقات
              المخصصة.
            </p>
          </div>

          <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            {appProjects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveProject(index)}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-black transition ${
                  activeProject === index
                    ? "bg-black text-white"
                    : "border border-black/10 bg-white hover:border-black"
                }`}
              >
                {project.category}
              </button>
            ))}
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex justify-center">
              <PhoneFrame
                type={
                  appProjects[activeProject].type as
                    | "shopping"
                    | "service"
                    | "management"
                }
              />
            </div>

            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                <Smartphone size={22} />
              </div>

              <h3 className="text-3xl font-black">
                {appProjects[activeProject].title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-black/50">
                {appProjects[activeProject].description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "واجهة Mobile First",
                  "حسابات المستخدمين",
                  "إشعارات Push",
                  "API & Database",
                  "دعم الأجهزة المختلفة",
                  "تصميم UX احترافي",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                      <Check size={13} />
                    </div>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-400">
                خصائص التطبيق
              </div>

              <h2 className="max-w-2xl text-4xl font-black sm:text-5xl">
                تطبيق قوي من الداخل
                <span className="text-yellow-400">
                  {" "}
                  والخارج.
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-white/40">
              نهتم بالتجربة البصرية والأداء والبنية التقنية حتى
              يكون التطبيق جاهزًا للنمو مع مشروعك.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {appFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group bg-[#0d0d0d] p-8 transition hover:bg-[#151515]"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black transition group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-xl font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/40">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE BUILD
      ===================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
                أنواع التطبيقات
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                مهما كانت فكرتك،
                <span className="text-yellow-500">
                  {" "}
                  نبنيها.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-black/50">
                لا نركز على نوع واحد من التطبيقات. نبدأ من فكرتك
                ونحدد أفضل تجربة للمستخدم والوظائف التي يحتاجها
                المشروع.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold">
                  <Code2 size={14} />
                  تطوير مخصص
                </div>

                <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold">
                  <LayoutGrid size={14} />
                  UI/UX
                </div>

                <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold">
                  <Rocket size={14} />
                  نشر التطبيق
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {appTypes.map((type, index) => (
                <div
                  key={type.title}
                  className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400">
                      <span className="text-xs font-black">
                        0{index + 1}
                      </span>
                    </div>

                    <ArrowUpLeft
                      size={15}
                      className="text-black/20 transition group-hover:text-black"
                    />
                  </div>

                  <h3 className="font-black">
                    {type.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-black/45">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APP STORE STYLE SECTION
      ===================================================== */}

      <section className="border-y border-black/10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
                تجربة المستخدم
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                لا يكفي أن يعمل التطبيق.
                <span className="block text-yellow-500">
                  يجب أن يحبه المستخدم.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-black/50">
                نصمم رحلة المستخدم من أول فتح التطبيق إلى تنفيذ
                العملية المطلوبة بأقل عدد ممكن من الخطوات.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "واجهة واضحة وبسيطة",
                  "تنقل سريع بين الصفحات",
                  "تجربة لمس مريحة",
                  "Feedback واضح للمستخدم",
                  "حالات Loading و Empty و Error",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400">
                      <Check size={14} />
                    </div>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-yellow-300/25 blur-sm md:blur-3xl" />

                <div className="relative">
                  <PhoneFrame type="service" />
                </div>

                <div className="absolute -left-14 top-20 rounded-2xl border border-black/10 bg-white p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400">
                      <Star size={15} />
                    </div>

                    <div>
                      <div className="text-[9px] text-black/40">
                        تجربة المستخدم
                      </div>

                      <div className="text-xs font-black">
                        4.9 / 5
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-12 bottom-16 rounded-2xl border border-black/10 bg-black p-4 text-white shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-black">
                      <Download size={14} />
                    </div>

                    <div>
                      <div className="text-[9px] text-white/40">
                        Downloads
                      </div>

                      <div className="text-xs font-black">
                        10K+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
              طريقة العمل
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              من الفكرة إلى التطبيق
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-black/50">
              نمر بعدة مراحل واضحة حتى يتحول تصورك إلى منتج رقمي
              حقيقي.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              [
                "01",
                "الفكرة",
                "نفهم فكرتك والجمهور والهدف من التطبيق.",
              ],
              [
                "02",
                "التصميم",
                "نصمم UX/UI وتجربة المستخدم قبل البرمجة.",
              ],
              [
                "03",
                "التطوير",
                "نبني التطبيق ونربطه بالـ API وقاعدة البيانات.",
              ],
              [
                "04",
                "الإطلاق",
                "اختبار وتجهيز التطبيق للنشر والاستخدام.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <div className="mb-8 text-4xl font-black text-yellow-500">
                  {number}
                </div>

                <h3 className="text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/45">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECH STACK
      ===================================================== */}

      <section className="bg-[#111] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <div className="mb-3 text-xs font-black uppercase tracking-widest text-yellow-400">
                التقنية
              </div>

              <h2 className="text-3xl font-black">
                نبني التطبيق بتقنيات حديثة.
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React Native",
                "Flutter",
                "Kotlin",
                "Swift",
                "Node.js",
                "Firebase",
                "REST API",
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-bold text-white/70 transition hover:border-yellow-400/40 hover:text-yellow-400"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
              FAQ
            </div>

            <h2 className="text-4xl font-black">
              الأسئلة الشائعة
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 p-5 text-right"
                  >
                    <span className="font-black">
                      {faq.q}
                    </span>

                    {open ? (
                      <ChevronUp size={19} />
                    ) : (
                      <ChevronDown size={19} />
                    )}
                  </button>

                  {open && (
                    <div className="border-t border-black/10 px-5 pb-5 pt-4 text-sm leading-7 text-black/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section id="contact" className="px-5 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-yellow-400 p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-yellow-400">
                <Smartphone size={21} />
              </div>

              <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                عندك فكرة تطبيق؟
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/60">
                احكِ لنا عن فكرتك، وسنساعدك على تحويلها إلى تطبيق
                حقيقي يمكن للمستخدمين الاستفادة منه.
              </p>
            </div>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-black px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black"
            >
              استكشف الخدمات
              <ArrowLeft size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-black/10 bg-[#f8f8f5]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="font-black">
            STORE<span className="text-yellow-500">X</span>
          </div>

          <div className="text-black/40">
            نحول الأفكار إلى منتجات رقمية.
          </div>

          <div className="text-xs text-black/35">
            © 2026 جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </main>
  );
}