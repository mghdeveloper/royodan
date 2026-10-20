"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronDown,
  ChevronUp,
  Globe,
  Menu,
  Monitor,
  Rocket,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type WebsiteStyle = "corporate" | "landing" | "agency" | "portfolio";

const projects: {
  title: string;
  category: string;
  description: string;
  style: WebsiteStyle;
}[] = [
  {
    title: "موقع شركة احترافي",
    category: "شركات",
    description:
      "موقع تعريفي عصري للشركات والخدمات مع صفحات متعددة وتجربة استخدام احترافية.",
    style: "corporate",
  },
  {
    title: "Landing Page",
    category: "Landing Pages",
    description:
      "صفحة هبوط قوية مصممة لتحويل الزوار إلى عملاء وزيادة طلبات التواصل.",
    style: "landing",
  },
  {
    title: "موقع وكالة",
    category: "وكالات",
    description:
      "موقع إبداعي للوكالات والشركات الرقمية مع عرض الخدمات والأعمال السابقة.",
    style: "agency",
  },
  {
    title: "موقع شخصي",
    category: "Portfolio",
    description:
      "Portfolio شخصي أنيق لعرض الخبرات والمشاريع والمهارات بطريقة احترافية.",
    style: "portfolio",
  },
];

const websiteTypes = [
  {
    icon: Globe,
    title: "مواقع الشركات",
    text: "موقع احترافي يمثل شركتك ويعرض خدماتك ومعلومات التواصل.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    text: "صفحات هبوط مخصصة للحملات والإعلانات وتحويل الزوار إلى عملاء.",
  },
  {
    icon: Sparkles,
    title: "مواقع الوكالات",
    text: "مواقع إبداعية لعرض الخدمات والأعمال السابقة بطريقة مميزة.",
  },
  {
    icon: Monitor,
    title: "Portfolio",
    text: "مواقع شخصية للمصممين والمطورين والفريلانسرز وأصحاب الأعمال.",
  },
];

const benefits = [
  "تصميم UI مخصص",
  "متجاوب مع الهاتف والتابلت",
  "سرعة تحميل ممتازة",
  "تحسين لمحركات البحث SEO",
  "صفحات منظمة وسهلة الاستخدام",
  "ربط WhatsApp ووسائل التواصل",
  "دعم اللغات حسب الحاجة",
  "كود نظيف وقابل للتطوير",
];

const faqs = [
  {
    q: "ما الفرق بين الموقع الإلكتروني والمتجر؟",
    a: "الموقع الإلكتروني يركز على تقديم الشركة أو الخدمة أو العلامة التجارية، بينما المتجر يركز على بيع المنتجات وإدارة الطلبات والدفع.",
  },
  {
    q: "هل يمكن تصميم الموقع بالكامل حسب هويتي؟",
    a: "نعم. يمكن بناء التصميم حسب الشعار والألوان والهوية البصرية والأسلوب الذي يناسب نشاطك.",
  },
  {
    q: "هل الموقع يعمل على الهاتف؟",
    a: "نعم. يتم تصميم الموقع Responsive ليعمل على الهاتف والتابلت والكمبيوتر.",
  },
  {
    q: "هل يمكن إضافة WhatsApp والتواصل الاجتماعي؟",
    a: "نعم. يمكن إضافة أزرار WhatsApp وروابط Instagram وFacebook وغيرها حسب احتياجات الموقع.",
  },
];

function WebsiteMockup({
  style,
}: {
  style: "corporate" | "landing" | "agency" | "portfolio";
}) {
  if (style === "landing") {
    return (
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
        <div className="flex h-9 items-center justify-between border-b px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <div className="h-2 w-24 rounded-full bg-black/10" />
        </div>

        <div className="bg-black px-7 py-7">
          <div className="mb-10 flex items-center justify-between">
            <div className="text-xs font-black text-white">
              BRAND<span className="text-yellow-400">.</span>
            </div>

            <div className="hidden gap-3 md:flex">
              <div className="h-1.5 w-8 rounded bg-white/20" />
              <div className="h-1.5 w-8 rounded bg-white/20" />
              <div className="h-1.5 w-8 rounded bg-white/20" />
            </div>
          </div>

          <div className="max-w-lg">
            <div className="mb-3 h-3 w-24 rounded bg-yellow-400" />

            <div className="space-y-2">
              <div className="h-5 w-full rounded bg-white/90" />
              <div className="h-5 w-4/5 rounded bg-white/90" />
            </div>

            <div className="mt-4 h-2 w-3/5 rounded bg-white/20" />

            <div className="mt-6 flex gap-2">
              <div className="h-8 w-24 rounded-lg bg-yellow-400" />
              <div className="h-8 w-20 rounded-lg border border-white/20" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-16 rounded-xl bg-white/[0.06]"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (style === "agency") {
    return (
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#f1f1ee] shadow-2xl">
        <div className="flex h-9 items-center justify-between border-b bg-white px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <div className="h-2 w-20 rounded-full bg-black/10" />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-black">
              STUDIO<span className="text-yellow-500">X</span>
            </div>

            <div className="flex gap-2">
              <div className="h-6 w-6 rounded-full bg-black" />
              <div className="h-6 w-6 rounded-full bg-yellow-400" />
            </div>
          </div>

          <div className="mt-12">
            <div className="text-3xl font-black leading-none">
              WE BUILD
            </div>
            <div className="text-3xl font-black leading-none text-yellow-500">
              DIGITAL
            </div>
            <div className="text-3xl font-black leading-none">
              EXPERIENCES.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2">
            <div className="h-24 rounded-xl bg-black" />
            <div className="h-24 rounded-xl bg-yellow-400" />
            <div className="h-24 rounded-xl bg-black/10" />
          </div>
        </div>
      </div>
    );
  }

  if (style === "portfolio") {
    return (
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
        <div className="flex h-9 items-center justify-between border-b px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <div className="h-2 w-24 rounded-full bg-black/10" />
        </div>

        <div className="grid min-h-[300px] md:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-black p-6 text-white">
            <div className="mb-12 text-xs font-black">
              AHMED<span className="text-yellow-400">.</span>
            </div>

            <div className="text-3xl font-black leading-tight">
              CREATIVE
              <br />
              DEVELOPER
            </div>

            <div className="mt-5 h-2 w-32 rounded bg-white/20" />

            <div className="mt-10 flex gap-2">
              <div className="h-7 w-20 rounded bg-yellow-400" />
              <div className="h-7 w-20 rounded border border-white/20" />
            </div>
          </div>

          <div className="bg-[#e9e9e5] p-6">
            <div className="grid h-full grid-cols-2 gap-2">
              <div className="rounded-xl bg-white" />
              <div className="rounded-xl bg-yellow-400" />
              <div className="rounded-xl bg-black" />
              <div className="rounded-xl bg-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
      <div className="flex h-9 items-center justify-between border-b px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        <div className="h-2 w-24 rounded-full bg-black/10" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-black">
            COMPANY<span className="text-yellow-500">.</span>
          </div>

          <div className="flex gap-3">
            <div className="h-2 w-8 rounded bg-black/10" />
            <div className="h-2 w-8 rounded bg-black/10" />
            <div className="h-2 w-8 rounded bg-black/10" />
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="mb-3 h-2 w-20 rounded bg-yellow-400" />

            <div className="space-y-2">
              <div className="h-5 w-full rounded bg-black/90" />
              <div className="h-5 w-4/5 rounded bg-black/90" />
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded bg-black/10" />
              <div className="h-2 w-4/5 rounded bg-black/10" />
            </div>

            <div className="mt-6 h-9 w-28 rounded-lg bg-black" />
          </div>

          <div className="h-44 rounded-2xl bg-yellow-400 p-4">
            <div className="h-full rounded-xl border-2 border-black/10 bg-white/40" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2">
          <div className="h-12 rounded-lg bg-black/[0.04]" />
          <div className="h-12 rounded-lg bg-black/[0.04]" />
          <div className="h-12 rounded-lg bg-black/[0.04]" />
        </div>
      </div>
    </div>
  );
}

export default function WebsitesPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#f8f8f5] text-black"
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f8f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="text-2xl font-black">
            STORE<span className="text-yellow-500">X</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
            <Link href="/" className="transition hover:text-yellow-500">
              الرئيسية
            </Link>

            <Link
              href="/services/websites"
              className="text-yellow-500"
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
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-black/10 bg-[#f8f8f5] p-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-bold">
              <Link href="/" onClick={() => setMobileMenu(false)}>
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

              <Link href="/#services" onClick={() => setMobileMenu(false)}>
                خدماتنا
              </Link>

              <Link href="/#contact" onClick={() => setMobileMenu(false)}>
                تواصل معنا
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative border-b border-black/10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-300/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold">
              <Globe size={14} />
              تصميم مواقع إلكترونية
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              موقعك هو
              <span className="block text-yellow-500">
                واجهتك الرقمية.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              نصمم مواقع إلكترونية عصرية وسريعة تعبر عن نشاطك، وتقدم
              خدماتك بشكل احترافي، وتترك انطباعًا قويًا لدى الزوار.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-yellow-400 hover:text-black"
              >
                اطلب موقعك الآن
                <ArrowLeft
                  size={17}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-white px-6 py-4 text-sm font-black transition hover:border-black"
              >
                شاهد الأعمال
                <ArrowUpLeft size={17} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-black/50">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-yellow-500" />
                تصميم مخصص
              </span>

              <span className="flex items-center gap-2">
                <Check size={14} className="text-yellow-500" />
                سريع ومتجاوب
              </span>

              <span className="flex items-center gap-2">
                <Check size={14} className="text-yellow-500" />
                SEO
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-yellow-300/20 blur-3xl" />

            <div className="relative">
              <WebsiteMockup style="corporate" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                  <Smartphone size={18} />
                </div>

                <div>
                  <div className="text-[10px] text-black/40">
                    Responsive
                  </div>
                  <div className="text-sm font-black">
                    جميع الأجهزة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
              نماذج المواقع
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              مواقع مصممة لأهداف مختلفة
            </h2>

            <p className="mt-5 leading-7 text-black/50">
              اختر نوع الموقع الذي يناسب نشاطك وشاهد كيف يمكن أن تكون
              واجهتك الرقمية.
            </p>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {projects.map((project, index) => (
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

          <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <WebsiteMockup
                style={projects[activeProject].style}
              />
            </div>

            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                <Globe size={22} />
              </div>

              <h3 className="text-3xl font-black">
                {projects[activeProject].title}
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                {projects[activeProject].description}
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "تصميم عصري واحترافي",
                  "متوافق مع الهاتف",
                  "تنقل واضح وسهل",
                  "تحسين تجربة المستخدم",
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

      {/* TYPES */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-400">
              ماذا يمكننا أن نبني؟
            </div>

            <h2 className="max-w-2xl text-4xl font-black sm:text-5xl">
              موقع مناسب لطبيعة نشاطك.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {websiteTypes.map((type) => {
              const Icon = type.icon;

              return (
                <div
                  key={type.title}
                  className="group bg-[#0d0d0d] p-8 transition hover:bg-[#151515]"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black transition group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-xl font-black">
                    {type.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-white/40">
                    {type.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-bold text-yellow-400">
                    اكتشف المزيد
                    <ArrowLeft size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
                ما الذي تحصل عليه؟
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                أكثر من مجرد
                <span className="text-yellow-500"> موقع جميل.</span>
              </h2>

              <p className="mt-6 leading-8 text-black/50">
                نهتم بالتصميم، السرعة، تجربة المستخدم، التوافق مع الأجهزة
                ومحركات البحث حتى يكون الموقع مفيدًا لنشاطك وليس مجرد
                واجهة.
              </p>

              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-yellow-400 hover:text-black"
              >
                ابدأ مشروعك
                <ArrowLeft size={17} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-400">
                    <Check size={16} />
                  </div>

                  <span className="text-sm font-bold">{benefit}</span>

                  <span className="mr-auto text-xs text-black/20">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIVE */}
      <section className="border-y border-black/10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-5 rounded-full bg-yellow-300/20 blur-3xl" />

                <div className="relative rounded-[2rem] border-8 border-black bg-black p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[1.5rem] bg-white">
                    <div className="flex h-8 items-center justify-center">
                      <div className="h-1.5 w-20 rounded-full bg-black" />
                    </div>

                    <div className="bg-[#f4f4f1] p-5">
                      <div className="mb-8 flex items-center justify-between">
                        <div className="text-xs font-black">
                          BRAND<span className="text-yellow-500">.</span>
                        </div>

                        <div className="h-7 w-7 rounded-lg bg-black" />
                      </div>

                      <div className="h-4 w-full rounded bg-black/80" />
                      <div className="mt-2 h-4 w-3/4 rounded bg-black/80" />

                      <div className="mt-5 h-9 w-28 rounded-lg bg-yellow-400" />

                      <div className="mt-8 grid grid-cols-2 gap-2">
                        <div className="h-24 rounded-xl bg-black" />
                        <div className="h-24 rounded-xl bg-yellow-400" />
                      </div>

                      <div className="mt-3 h-20 rounded-xl bg-black/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
                Mobile First
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                موقع رائع على
                <span className="text-yellow-500"> كل شاشة.</span>
              </h2>

              <p className="mt-6 leading-8 text-black/50">
                أغلب الزوار اليوم يستخدمون الهاتف. لذلك نصمم تجربة كاملة
                تبدأ من الهاتف وتعمل بشكل ممتاز على جميع المقاسات.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  ["هاتف", "تجربة سريعة وسهلة باللمس"],
                  ["تابلت", "تخطيط متوازن وواضح"],
                  ["كمبيوتر", "استغلال كامل للمساحة"],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400">
                      <Check size={17} />
                    </div>

                    <div>
                      <div className="font-black">{title}</div>
                      <div className="mt-1 text-sm text-black/45">
                        {text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
              طريقة العمل
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              من الفكرة إلى موقع جاهز
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["01", "نفهم نشاطك", "نتعرف على شركتك والجمهور والهدف من الموقع."],
              ["02", "نصمم", "نحول الأفكار إلى تصميم UI احترافي."],
              ["03", "نطور", "نبني الموقع ونضيف الصفحات والوظائف المطلوبة."],
              ["04", "نطلق", "اختبار كامل وتجهيز الموقع للنشر."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <div className="mb-8 text-4xl font-black text-yellow-500">
                  {number}
                </div>

                <h3 className="text-xl font-black">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-black/45">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-black/10 py-24">
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
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-right"
                  >
                    <span className="font-black">{faq.q}</span>

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

      {/* CTA */}
      <section id="contact" className="px-5 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-yellow-400 p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-yellow-400">
                <Zap size={21} />
              </div>

              <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                جاهز تبني موقعك؟
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/60">
                أخبرنا عن نشاطك وفكرتك وسنساعدك في بناء موقع احترافي
                يمثل علامتك التجارية.
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

      {/* FOOTER */}
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="font-black">
            STORE<span className="text-yellow-500">X</span>
          </div>

          <div className="text-black/40">
            مواقع إلكترونية عصرية لنشاطك التجاري.
          </div>

          <div className="text-xs text-black/35">
            © 2026 جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </main>
  );
}