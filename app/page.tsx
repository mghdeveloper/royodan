"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ChevronLeft,
  Globe2,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Users,
  X,
  Zap,
  Send,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      icon: Store,
      title: "متاجر إلكترونية",
      href: "/services/stores",
      description:
        "متجر احترافي وسريع مصمم خصيصاً لنشاطك، مع تجربة شراء سهلة ومتوافقة مع الهاتف.",
      tag: "الأكثر طلباً",
    },
    {
      icon: LayoutDashboard,
      title: "لوحات تحكم",
      href: "/services/dashboards",
      description:
        "لوحة تحكم متطورة لإدارة المنتجات والطلبات والعملاء والمبيعات من مكان واحد.",
      tag: "احترافي",
    },
    {
      icon: Globe2,
      title: "مواقع إلكترونية",
      href: "/services/websites",
      description:
        "مواقع شركات، خدمات، صفحات هبوط ومواقع احترافية تعكس هوية علامتك التجارية.",
      tag: "Business",
    },
    {
      icon: Smartphone,
      title: "تصميم متجاوب",
      href: "/services/ui-ux",
      description:
        "تصميم يعمل بشكل ممتاز على الهاتف والتابلت والكمبيوتر بدون تنازلات.",
      tag: "Mobile First",
    },
    {
      icon: Bot,
      title: "حلول الذكاء الاصطناعي",
      href: "/services/ai",
      description:
        "أضف الذكاء الاصطناعي إلى متجرك وخدماتك لتوفير الوقت وتحسين تجربة العملاء.",
      tag: "AI",
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      href: "/services/ui-ux",
      description:
        "واجهات حديثة ومدروسة تجعل استخدام موقعك أسهل وأكثر احترافية.",
      tag: "Design",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "سرعة عالية",
      text: "نبني مشاريع سريعة ومحسنة لتقديم تجربة ممتازة.",
    },
    {
      icon: ShieldCheck,
      title: "أمان وموثوقية",
      text: "نهتم بحماية بيانات مشروعك وتجربة استخدام آمنة.",
    },
    {
      icon: Smartphone,
      title: "متوافق مع الهاتف",
      text: "كل شيء مصمم ليعمل بشكل ممتاز على جميع الشاشات.",
    },
    {
      icon: Settings,
      title: "قابل للتطوير",
      text: "مشروعك يمكن أن يكبر معنا ويأخذ مزايا جديدة مستقبلاً.",
    },
  ];

  const projects = [
    {
      title: "متجر أزياء",
      category: "E-Commerce",
      number: "01",
      gradient: "from-yellow-300 via-yellow-400 to-orange-400",
    },
    {
      title: "لوحة إدارة متقدمة",
      category: "Dashboard",
      number: "02",
      gradient: "from-zinc-700 via-zinc-900 to-black",
    },
    {
      title: "موقع شركة",
      category: "Business Website",
      number: "03",
      gradient: "from-neutral-200 via-white to-yellow-100",
    },
  ];

  const plans = [
    {
      name: "بداية",
      price: "499",
      href: "/services/websites",
      description: "للمشاريع الصغيرة وأصحاب الأعمال الجدد.",
      features: [
        "موقع احترافي",
        "تصميم متجاوب",
        "صفحة رئيسية",
        "صفحات الخدمات",
        "ربط WhatsApp",
      ],
    },
    {
      name: "احترافي",
      price: "999",
      href: "/services/stores",
      popular: true,
      description: "الحل المتكامل للمتاجر والمشاريع الجادة.",
      features: [
        "متجر إلكتروني كامل",
        "لوحة تحكم",
        "إدارة المنتجات والطلبات",
        "تصميم احترافي مخصص",
        "SEO أساسي",
        "دعم فني",
      ],
    },
    {
      name: "متقدم",
      price: "حسب المشروع",
      href: "/services/dashboards",
      description: "للمشاريع التي تحتاج حلولاً خاصة.",
      features: [
        "نظام مخصص",
        "Dashboard متقدمة",
        "API & Database",
        "ذكاء اصطناعي",
        "صلاحيات المستخدمين",
        "دعم وتطوير مستمر",
      ],
    },
  ];

  const faqs = [
    {
      q: "كم يستغرق إنشاء المتجر أو الموقع؟",
      a: "يعتمد الوقت على حجم المشروع والمزايا المطلوبة، لكن المشاريع البسيطة يمكن تجهيزها خلال فترة قصيرة، بينما المشاريع المتقدمة تحتاج وقتاً أكبر للتطوير والاختبار.",
    },
    {
      q: "هل التصميم يكون متوافقاً مع الهاتف؟",
      a: "نعم. جميع المشاريع يتم تصميمها بشكل Responsive لتعمل على الهاتف والتابلت والكمبيوتر.",
    },
    {
      q: "هل يمكنني طلب لوحة تحكم خاصة؟",
      a: "نعم، يمكننا بناء لوحة تحكم مخصصة لإدارة المنتجات والطلبات والعملاء والمستخدمين والإحصائيات وغيرها.",
    },
    {
      q: "هل يمكن إضافة الذكاء الاصطناعي إلى المتجر؟",
      a: "نعم. يمكن إضافة مساعد ذكي، إنشاء المحتوى، أدوات تحليل، وأتمتة العديد من العمليات حسب احتياجات مشروعك.",
    },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-white text-zinc-950 selection:bg-yellow-300 selection:text-black"
    >
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between rounded-2xl border border-black/10 bg-white/90 px-4 shadow-xl shadow-black/5 backdrop-blur-xl sm:px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-yellow-400 shadow-lg">
                <Sparkles size={21} strokeWidth={2.5} />
              </div>

              <div className="leading-none">
                <div className="text-lg font-black tracking-tight">
                  STORE<span className="text-yellow-500">X</span>
                </div>
                <div className="mt-1 text-[9px] font-bold tracking-[0.25em] text-zinc-400">
                  DIGITAL STUDIO
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-8 lg:flex">
              <a
                href="#services"
                className="text-sm font-bold text-zinc-600 transition hover:text-black"
              >
                خدماتنا
              </a>
              <a
                href="#work"
                className="text-sm font-bold text-zinc-600 transition hover:text-black"
              >
                أعمالنا
              </a>
              <a
                href="#features"
                className="text-sm font-bold text-zinc-600 transition hover:text-black"
              >
                المميزات
              </a>
              <a
                href="#pricing"
                className="text-sm font-bold text-zinc-600 transition hover:text-black"
              >
                الأسعار
              </a>
              <a
                href="#faq"
                className="text-sm font-bold text-zinc-600 transition hover:text-black"
              >
                الأسئلة
              </a>
            </div>

            {/* CTA */}
            <div className="hidden items-center gap-3 sm:flex">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-yellow-400 hover:text-black"
              >
                ابدأ مشروعك
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </a>
            </div>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 sm:hidden"
              aria-label="القائمة"
            >
              {mobileMenu ? <X size={21} /> : <Menu size={21} />}
            </button>
          </nav>

          {mobileMenu && (
            <div className="mt-2 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl sm:hidden">
              <div className="flex flex-col gap-1">
                {[
                  ["الخدمات", "#services"],
                  ["أعمالنا", "#work"],
                  ["المميزات", "#features"],
                  ["الأسعار", "#pricing"],
                  ["الأسئلة", "#faq"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenu(false)}
                    className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-yellow-100"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMobileMenu(false)}
                  className="mt-2 rounded-xl bg-black px-4 py-3 text-center text-sm font-black text-white"
                >
                  ابدأ مشروعك
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative isolate overflow-hidden pt-32 sm:pt-40">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-80 -z-10 h-[400px] w-[400px] rounded-full bg-yellow-100 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28">
          {/* Hero copy */}
          <div className="text-center lg:text-right">
            <div className="mb-6 inline-flex animate-[fadeIn_.6s_ease-out] items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-xs font-black text-zinc-900">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
              </span>
              نصنع حلولاً رقمية مختلفة
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              حوّل فكرتك إلى
              <br />
              <span className="relative inline-block text-yellow-400">
                مشروع رقمي
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 300 20"
                  fill="none"
                >
                  <path
                    d="M3 14C65 3 165 3 297 11"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-black">يبيع وينمو.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-8 text-zinc-500 sm:text-lg lg:mx-0">
              نصمم ونطور المتاجر الإلكترونية، المواقع، ولوحات التحكم
              الاحترافية التي تساعد علامتك التجارية على الظهور بشكل أقوى
              وتحويل الزوار إلى عملاء.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-xl shadow-yellow-300/30 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
              >
                ابدأ مشروعك الآن
                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </a>

              <a
                href="#work"
                className="flex items-center justify-center gap-3 rounded-2xl border-2 border-zinc-200 bg-white px-7 py-4 text-sm font-black transition hover:border-black hover:bg-black hover:text-white"
              >
                شاهد أعمالنا
                <ArrowUpLeft size={18} />
              </a>
            </div>

            {/* Trust */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-zinc-500 lg:justify-start">
              <div className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-yellow-500" />
                تصميم مخصص
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-yellow-500" />
                Responsive
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-yellow-500" />
                دعم مستمر
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[3rem] bg-yellow-300/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-zinc-950 p-3 shadow-2xl shadow-black/20 sm:p-4">
              {/* Browser top */}
              <div className="flex h-10 items-center justify-between rounded-xl bg-zinc-900 px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <div className="rounded-lg bg-zinc-800 px-5 py-1 text-[8px] font-bold text-zinc-500">
                  yourstore.com
                </div>

                <div className="w-10" />
              </div>

              {/* Dashboard mock */}
              <div className="mt-3 grid min-h-[390px] grid-cols-[72px_1fr] gap-3 rounded-xl bg-white p-3 text-black sm:min-h-[460px] sm:grid-cols-[85px_1fr]">
                {/* sidebar */}
                <div className="flex flex-col items-center gap-5 rounded-xl bg-black py-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400">
                    <Sparkles size={17} />
                  </div>

                  {[LayoutDashboard, ShoppingBag, Users, BarChart3, Settings].map(
                    (Icon, i) => (
                      <div
                        key={i}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          i === 0
                            ? "bg-yellow-400 text-black"
                            : "text-zinc-500"
                        }`}
                      >
                        <Icon size={15} />
                      </div>
                    )
                  )}
                </div>

                {/* content */}
                <div className="min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black sm:text-xs">
                        لوحة التحكم
                      </div>
                      <div className="mt-1 text-[7px] text-zinc-400">
                        أهلاً بك، لديك تحديثات جديدة
                      </div>
                    </div>

                    <div className="h-7 w-7 rounded-full bg-yellow-300" />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      ["المبيعات", "24,580 DH"],
                      ["الطلبات", "184"],
                      ["العملاء", "1,240"],
                      ["المنتجات", "328"],
                    ].map(([title, value], i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-zinc-100 p-3"
                      >
                        <div className="text-[7px] text-zinc-400">
                          {title}
                        </div>
                        <div className="mt-1 text-[9px] font-black sm:text-[11px]">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* chart */}
                  <div className="mt-3 rounded-xl border border-zinc-100 p-3">
                    <div className="flex items-center justify-between">
                      <div className="text-[9px] font-black">
                        أداء المبيعات
                      </div>
                      <div className="rounded-md bg-yellow-100 px-2 py-1 text-[6px] font-bold">
                        آخر 7 أيام
                      </div>
                    </div>

                    <div className="mt-5 flex h-28 items-end gap-2 sm:h-36">
                      {[35, 55, 42, 75, 52, 85, 68, 95, 72, 100].map(
                        (height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-md bg-yellow-300 transition hover:bg-yellow-400"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* orders */}
                  <div className="mt-3 rounded-xl border border-zinc-100 p-3">
                    <div className="mb-3 text-[9px] font-black">
                      آخر الطلبات
                    </div>

                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-t border-zinc-100 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-md bg-zinc-100" />
                          <div>
                            <div className="text-[7px] font-bold">
                              طلب #{1020 + item}
                            </div>
                            <div className="text-[6px] text-zinc-400">
                              منذ {item} ساعة
                            </div>
                          </div>
                        </div>

                        <span className="rounded-full bg-green-50 px-2 py-1 text-[6px] font-bold text-green-600">
                          مكتمل
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -left-5 bottom-8 hidden w-44 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-black/10 bg-white p-4 shadow-2xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                  <Rocket size={19} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400">
                    نمو المبيعات
                  </div>
                  <div className="text-lg font-black">+48.6%</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-20 hidden animate-[float_5s_ease-in-out_infinite] rounded-2xl bg-yellow-400 p-4 shadow-xl sm:block">
              <Zap size={24} fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-black/5 bg-zinc-950 py-5">
          <div className="flex min-w-max animate-[marquee_25s_linear_infinite] items-center gap-12">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex items-center gap-12">
                {[
                  "WEBSITES",
                  "E-COMMERCE",
                  "DASHBOARDS",
                  "UI / UX",
                  "AI SOLUTIONS",
                  "DIGITAL STORES",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 text-sm font-black tracking-widest text-white"
                  >
                    <span className="text-yellow-400">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section id="services" className="scroll-mt-28 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-black text-yellow-600">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                ماذا نقدم؟
              </div>

              <h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                كل ما تحتاجه لبناء
                <span className="text-yellow-500"> حضور رقمي قوي.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm font-medium leading-7 text-zinc-500">
              من الفكرة الأولى إلى الإطلاق، نساعدك على بناء منتج رقمي احترافي
              مصمم حول أهداف مشروعك.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={service.href}
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-black hover:shadow-2xl hover:shadow-black/10"
                >
                  <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-yellow-300/0 blur-2xl transition group-hover:bg-yellow-300/60" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-yellow-400 transition duration-300 group-hover:rotate-6 group-hover:bg-yellow-400 group-hover:text-black">
                        <Icon size={25} />
                      </div>

                      <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-black text-zinc-500">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-black">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-zinc-500">
                      {service.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-xs font-black">
                      اكتشف الخدمة
                      <ChevronLeft
                        size={16}
                        className="transition-transform group-hover:-translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK FEATURE SECTION
      ====================================================== */}
      <section
        id="features"
        className="scroll-mt-28 bg-zinc-950 py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-400">
                <Sparkles size={14} />
                لماذا نحن؟
              </div>

              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                لا نريد أن يكون
                <br />
                <span className="text-yellow-400">موقعك مجرد موقع.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm font-medium leading-8 text-zinc-400 sm:text-base">
                نركز على التفاصيل التي تجعل المشروع يبدو احترافياً، سريعاً،
                واضحاً، وسهل الاستخدام. لأن التصميم الجميل وحده لا يكفي.
              </p>

              <a
                href="#pricing"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-black text-black transition hover:bg-yellow-300"
              >
                تحدث معنا
                <MessageCircle size={18} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 font-black">{feature.title}</h3>

                    <p className="mt-2 text-xs font-medium leading-6 text-zinc-500">
                      {feature.text}
                    </p>

                    <div className="mt-5 text-xs font-black text-yellow-400">
                      0{index + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="bg-yellow-400 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <div className="text-xs font-black">كيف نعمل؟</div>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                من الفكرة
                <br />
                إلى الإطلاق.
              </h2>

              <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-black/60">
                عملية بسيطة وواضحة بدون تعقيد، نعمل معك خطوة بخطوة حتى يصبح
                مشروعك جاهزاً.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                ["01", "فهم المشروع", "نفهم فكرتك وأهدافك والجمهور المستهدف."],
                ["02", "التصميم", "نصمم واجهة حديثة تعكس هوية مشروعك."],
                ["03", "التطوير", "نحول التصميم إلى مشروع سريع ومتجاوب."],
                ["04", "الإطلاق", "نختبر كل شيء ثم نجهز المشروع للإطلاق."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="group flex items-center gap-5 rounded-2xl border border-black/10 bg-white/70 p-5 transition hover:bg-white"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-sm font-black text-yellow-400">
                    {number}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-black">{title}</h3>
                    <p className="mt-1 text-xs font-medium text-black/50">
                      {text}
                    </p>
                  </div>

                  <ArrowUpLeft
                    size={20}
                    className="opacity-30 transition group-hover:-translate-x-1 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORK
      ====================================================== */}
      <section id="work" className="scroll-mt-28 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex items-end justify-between gap-5">
            <div>
              <div className="mb-4 text-xs font-black text-yellow-600">
                مشاريعنا
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                أعمال تتحدث
                <span className="text-yellow-500"> عن نفسها.</span>
              </h2>
            </div>

            <button className="hidden items-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-xs font-black sm:flex">
              كل المشاريع
              <ArrowLeft size={15} />
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.number}
                className="group cursor-pointer overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50"
              >
                <div
                  className={`relative aspect-[1.15] overflow-hidden bg-gradient-to-br ${project.gradient} p-5 transition duration-500 group-hover:scale-[.98]`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-black/80 px-3 py-1.5 text-[9px] font-black text-white">
                      {project.category}
                    </span>

                    <span className="text-4xl font-black text-black/20">
                      {project.number}
                    </span>
                  </div>

                  <div className="absolute bottom-6 right-6 left-6">
                    <div className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-xl backdrop-blur">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black">
                          {project.title}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                          <ArrowUpLeft size={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="border-y border-black/10 bg-zinc-50 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            ["50+", "مشروعاً"],
            ["98%", "رضا العملاء"],
            ["24/7", "دعم"],
            ["∞", "أفكار جديدة"],
          ].map(([number, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black sm:text-4xl">{number}</div>
              <div className="mt-2 text-xs font-bold text-zinc-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PRICING
      ====================================================== */}
      <section id="pricing" className="scroll-mt-28 bg-zinc-950 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 text-xs font-black text-yellow-400">
              الأسعار
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              اختر المستوى المناسب
              <br />
              <span className="text-yellow-400">لمشروعك.</span>
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-zinc-500">
              أسعار مرنة حسب احتياجاتك. وإذا كان مشروعك يحتاج شيئاً مختلفاً،
              يمكننا بناء عرض مخصص لك.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-7 ${
                  plan.popular
                    ? "border-yellow-400 bg-yellow-400 text-black"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 rounded-full bg-black px-4 py-1.5 text-[10px] font-black text-yellow-400">
                    الأكثر اختياراً
                  </div>
                )}

                <div className="text-sm font-black">{plan.name}</div>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== "حسب المشروع" && (
                    <span className="mb-1 text-xs font-bold opacity-50">
                      DH
                    </span>
                  )}
                </div>

                <p className="mt-4 min-h-[48px] text-xs font-medium leading-6 opacity-60">
                  {plan.description}
                </p>

                <div
                  className={`my-7 h-px ${
                    plan.popular ? "bg-black/10" : "bg-white/10"
                  }`}
                />

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-xs font-bold"
                    >
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full ${
                          plan.popular
                            ? "bg-black text-yellow-400"
                            : "bg-yellow-400 text-black"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={plan.href}
                  className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-xs font-black transition ${
                    plan.popular
                      ? "bg-black text-white hover:bg-zinc-800"
                      : "bg-white text-black hover:bg-yellow-400"
                  }`}
                >
                  اختر هذه الخطة
                  <ArrowLeft size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          AI / SPECIAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-yellow-400 py-24 sm:py-32">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-black text-yellow-400">
                <Bot size={14} />
                POWERED BY AI
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
                متجرك القادم
                <br />
                يمكن أن يكون أذكى.
              </h2>

              <p className="mt-6 max-w-xl text-sm font-medium leading-8 text-black/60">
                أضف أدوات الذكاء الاصطناعي لمشروعك، من خدمة العملاء وإنشاء
                المحتوى إلى تحليل البيانات وأتمتة المهام.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-black px-7 py-4 text-sm font-black text-white transition hover:bg-zinc-800"
              >
                اكتشف حلول AI
                <ArrowUpLeft size={18} />
              </a>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-black/10 bg-black p-3 shadow-2xl">
                <div className="rounded-[1.5rem] bg-zinc-900 p-5 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                      <Bot size={23} />
                    </div>

                    <div>
                      <div className="text-sm font-black">المساعد الذكي</div>
                      <div className="mt-1 text-[10px] text-zinc-500">
                        متصل الآن
                      </div>
                    </div>

                    <div className="mr-auto h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  <div className="mt-7 space-y-3">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-zinc-800 p-4 text-xs font-medium leading-6 text-zinc-300">
                      مرحباً 👋 كيف يمكنني مساعدتك اليوم؟
                    </div>

                    <div className="mr-auto max-w-[75%] rounded-2xl rounded-tl-md bg-yellow-400 p-4 text-xs font-bold leading-6 text-black">
                      أريد معرفة أفضل المنتجات مبيعاً هذا الشهر.
                    </div>

                    <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-zinc-800 p-4 text-xs font-medium leading-6 text-zinc-300">
                      بالتأكيد. المنتج الأول حقق مبيعات أعلى بنسبة 42% مقارنة
                      بالشهر الماضي.
                    </div>
                  </div>

                  <div className="mt-5 flex gap-2 rounded-xl border border-white/10 bg-black p-2">
                    <div className="flex-1 px-2 py-2 text-[10px] text-zinc-600">
                      اكتب رسالتك...
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-black">
                      <Send size={13} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section id="faq" className="scroll-mt-28 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 text-xs font-black text-yellow-600">
              الأسئلة الشائعة
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              لديك سؤال؟
              <span className="text-yellow-500"> لدينا الإجابة.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-yellow-300 bg-yellow-50"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-right"
                  >
                    <span className="text-sm font-black">{faq.q}</span>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                        isOpen
                          ? "rotate-180 bg-yellow-400 text-black"
                          : "bg-zinc-100"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm font-medium leading-7 text-zinc-500">
                        {faq.a}
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
          CONTACT CTA
      ====================================================== */}
      <section id="contact" className="scroll-mt-28 px-4 pb-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-black px-6 py-16 text-center text-white sm:px-12 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black">
              <Rocket size={28} />
            </div>

            <h2 className="mt-7 text-4xl font-black leading-tight sm:text-6xl">
              جاهز لبناء
              <br />
              <span className="text-yellow-400">مشروعك القادم؟</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-7 text-zinc-500">
              أخبرنا عن فكرتك وسنساعدك على تحويلها إلى تجربة رقمية احترافية.
            </p>

            <a
              href="#pricing"
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black transition hover:bg-yellow-300"
            >
              استكشف الباقات
              <ArrowLeft size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="bg-white px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-zinc-200 pb-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-yellow-400">
                  <Sparkles size={20} />
                </div>

                <div className="text-xl font-black">
                  STORE<span className="text-yellow-500">X</span>
                </div>
              </a>

              <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-zinc-500">
                استوديو رقمي متخصص في تصميم وتطوير المتاجر والمواقع ولوحات
                التحكم الحديثة.
              </p>
            </div>

            <div>
              <div className="text-sm font-black">الخدمات</div>

              <div className="mt-5 space-y-3 text-xs font-bold text-zinc-500">
                <a href="#services" className="block hover:text-black">
                  المتاجر الإلكترونية
                </a>
                <a href="#services" className="block hover:text-black">
                  المواقع
                </a>
                <a href="#services" className="block hover:text-black">
                  لوحات التحكم
                </a>
                <a href="#services" className="block hover:text-black">
                  UI / UX
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-black">روابط</div>

              <div className="mt-5 space-y-3 text-xs font-bold text-zinc-500">
                <a href="#work" className="block hover:text-black">
                  أعمالنا
                </a>
                <a href="#pricing" className="block hover:text-black">
                  الأسعار
                </a>
                <a href="#faq" className="block hover:text-black">
                  الأسئلة الشائعة
                </a>
                <a href="#contact" className="block hover:text-black">
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-7 text-[10px] font-bold text-zinc-400 sm:flex-row">
            <div>© 2026 STOREX. جميع الحقوق محفوظة.</div>

            <div className="flex items-center gap-2">
              صنع بـ
              <span className="text-yellow-500">♥</span>
              لتطوير أعمالك
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          GLOBAL ANIMATIONS
      ====================================================== */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(50%);
          }
        }

        ::selection {
          background: #facc15;
          color: #000;
        }
      `}</style>
    </main>
  );
}