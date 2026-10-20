"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Menu,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Truck,
  Users,
  X,
  Zap,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  result: string;
  accent: "yellow" | "black" | "white";
};

export default function StoresPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  /*
   * =========================================================
   * PROJECTS
   * Replace the images with your own project screenshots.
   *
   * Put your images inside:
   *
   * /public/projects/store-1.jpg
   * /public/projects/store-2.jpg
   * /public/projects/store-3.jpg
   * ...
   * =========================================================
   */

  const projects: Project[] = [
    {
      id: 1,
      title: "متجر أزياء فاخر",
      category: "fashion",
      categoryLabel: "أزياء",
      description:
        "متجر إلكتروني عصري لعلامة أزياء مع تجربة شراء مريحة وتصميم يركز على المنتجات.",
      image: "/projects/store-1.jpg",
      tags: [
        "متجر إلكتروني",
        "Responsive",
        "لوحة تحكم",
        "دفع إلكتروني",
      ],
      result: "+38% تفاعل مع المنتجات",
      accent: "yellow",
    },
    {
      id: 2,
      title: "متجر إلكترونيات",
      category: "electronics",
      categoryLabel: "إلكترونيات",
      description:
        "متجر متخصص في الأجهزة والإكسسوارات مع تصنيفات وفلاتر متقدمة.",
      image: "/projects/store-2.jpg",
      tags: [
        "Product Filters",
        "Dashboard",
        "Orders",
        "Inventory",
      ],
      result: "تجربة شراء أسرع",
      accent: "black",
    },
    {
      id: 3,
      title: "متجر مستحضرات",
      category: "beauty",
      categoryLabel: "تجميل",
      description:
        "تصميم أنيق لعلامة تجميل يركز على الهوية البصرية وصور المنتجات.",
      image: "/projects/store-3.jpg",
      tags: [
        "UI / UX",
        "Mobile First",
        "Reviews",
        "Wishlist",
      ],
      result: "+52% تفاعل على الهاتف",
      accent: "white",
    },
    {
      id: 4,
      title: "متجر منتجات منزلية",
      category: "general",
      categoryLabel: "متجر عام",
      description:
        "متجر متكامل لإدارة عدد كبير من المنتجات والطلبات والعملاء.",
      image: "/projects/store-4.jpg",
      tags: [
        "E-Commerce",
        "Admin Panel",
        "Analytics",
        "Coupons",
      ],
      result: "إدارة أكثر من 1,000 منتج",
      accent: "yellow",
    },
    {
      id: 5,
      title: "متجر عطور",
      category: "beauty",
      categoryLabel: "عطور",
      description:
        "متجر Premium للعطور بتصميم بسيط وفخم يركز على الثقة والتحويل.",
      image: "/projects/store-5.jpg",
      tags: [
        "Premium UI",
        "Arabic RTL",
        "Checkout",
        "WhatsApp",
      ],
      result: "تجربة عربية كاملة",
      accent: "black",
    },
    {
      id: 6,
      title: "متجر متعدد الأقسام",
      category: "general",
      categoryLabel: "Marketplace",
      description:
        "واجهة متجر كبيرة تحتوي على أقسام ومنتجات وعروض وحسابات عملاء.",
      image: "/projects/store-6.jpg",
      tags: [
        "Marketplace",
        "Categories",
        "Offers",
        "Accounts",
      ],
      result: "واجهة قابلة للتوسع",
      accent: "white",
    },
  ];

  const filters = [
    { id: "all", label: "الكل" },
    { id: "fashion", label: "أزياء" },
    { id: "electronics", label: "إلكترونيات" },
    { id: "beauty", label: "تجميل وعطور" },
    { id: "general", label: "متاجر عامة" },
  ];

  const filteredProjects =
    activeFilter === "الكل"
      ? projects
      : projects.filter(
          (project) => project.categoryLabel === activeFilter
        );

  const storeFeatures = [
    {
      icon: ShoppingBag,
      title: "إدارة المنتجات",
      description:
        "إضافة المنتجات، الصور، الأسعار، الخصائص، المخزون والتصنيفات بسهولة.",
    },
    {
      icon: Users,
      title: "إدارة العملاء",
      description:
        "نظام كامل لمتابعة العملاء والحسابات والطلبات وسجل المشتريات.",
    },
    {
      icon: BarChart3,
      title: "إحصائيات المبيعات",
      description:
        "تابع المبيعات والطلبات والأداء من خلال لوحة تحكم واضحة.",
    },
    {
      icon: Truck,
      title: "إدارة الطلبات",
      description:
        "تتبع الطلبات من لحظة إنشائها حتى الشحن والتسليم.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description:
        "إمكانية ربط المتجر بواتساب لتسهيل التواصل مع العملاء.",
    },
    {
      icon: Bot,
      title: "ذكاء اصطناعي",
      description:
        "يمكن إضافة أدوات AI لخدمة العملاء والمحتوى وإدارة المتجر.",
    },
  ];

  const included = [
    "تصميم UI / UX احترافي",
    "متجر متوافق مع الهاتف",
    "صفحة رئيسية قوية",
    "صفحات المنتجات",
    "السلة و Checkout",
    "إدارة المنتجات",
    "إدارة الطلبات",
    "إدارة العملاء",
    "كوبونات وعروض",
    "لوحة تحكم",
    "إحصائيات",
    "تهيئة SEO الأساسية",
  ];

  const faqs = [
    {
      q: "هل يمكن تصميم المتجر بالكامل حسب هويتي؟",
      a: "نعم. لا نعتمد على تصميم واحد لجميع العملاء. يمكن بناء الألوان والخطوط والأقسام وتجربة المستخدم حسب هوية علامتك التجارية.",
    },
    {
      q: "هل المتجر يعمل على الهاتف؟",
      a: "نعم. نصمم المتجر بأسلوب Mobile First ليكون سريعاً وسهل الاستخدام على الهاتف والتابلت والكمبيوتر.",
    },
    {
      q: "هل أستطيع إدارة المنتجات والطلبات بنفسي؟",
      a: "نعم. يمكن تجهيز لوحة تحكم خاصة لإضافة المنتجات وإدارة الطلبات والعملاء والمخزون والعروض والإحصائيات.",
    },
    {
      q: "هل يمكن ربط المتجر بالدفع الإلكتروني؟",
      a: "نعم. يمكن تجهيز المتجر لربط بوابات الدفع المناسبة حسب بلدك وطريقة العمل التي تريدها.",
    },
    {
      q: "هل يمكن إضافة الذكاء الاصطناعي؟",
      a: "نعم. يمكن إضافة AI لخدمة العملاء، إنشاء المحتوى، اقتراح المنتجات، تحليل البيانات وأتمتة بعض العمليات.",
    },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-white text-zinc-950"
    >
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between rounded-2xl border border-black/10 bg-white/90 px-4 shadow-xl shadow-black/5 backdrop-blur-xl sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-yellow-400">
                <Sparkles size={20} />
              </div>

              <div>
                <div className="text-lg font-black">
                  STORE<span className="text-yellow-500">X</span>
                </div>

                <div className="text-[8px] font-bold tracking-[0.25em] text-zinc-400">
                  DIGITAL STUDIO
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              <Link
                href="/"
                className="text-sm font-bold text-zinc-500 hover:text-black"
              >
                الرئيسية
              </Link>

              <a
                href="#projects"
                className="text-sm font-bold text-black"
              >
                المتاجر
              </a>

              <a
                href="#features"
                className="text-sm font-bold text-zinc-500 hover:text-black"
              >
                المميزات
              </a>

              <a
                href="#process"
                className="text-sm font-bold text-zinc-500 hover:text-black"
              >
                كيف نعمل؟
              </a>

              <a
                href="#faq"
                className="text-sm font-bold text-zinc-500 hover:text-black"
              >
                الأسئلة
              </a>
            </div>

            <div className="hidden sm:block">
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-xs font-black text-white transition hover:bg-yellow-400 hover:text-black"
              >
                ابدأ متجرك
                <ArrowLeft size={15} />
              </a>
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 lg:hidden"
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {mobileMenu && (
            <div className="mt-2 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl lg:hidden">
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-yellow-100"
                >
                  الرئيسية
                </Link>

                <a
                  href="#projects"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-yellow-100"
                >
                  المتاجر
                </a>

                <a
                  href="#features"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-yellow-100"
                >
                  المميزات
                </a>

                <a
                  href="#process"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold hover:bg-yellow-100"
                >
                  كيف نعمل؟
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenu(false)}
                  className="mt-2 rounded-xl bg-black px-4 py-3 text-center text-sm font-black text-white"
                >
                  ابدأ متجرك
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-zinc-950 pt-32 text-white sm:pt-40">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:pb-32">
          <div className="text-center lg:text-right">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-400">
              <Store size={14} />
              خدمة المتاجر الإلكترونية
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              متجرك ليس مجرد
              <br />
              <span className="text-yellow-400">
                صفحة لبيع المنتجات.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-sm font-medium leading-8 text-zinc-400 sm:text-base lg:mx-0">
              نبني لك متجراً إلكترونياً احترافياً يجمع بين التصميم القوي،
              تجربة المستخدم، السرعة، لوحة التحكم والأدوات التي تحتاجها
              لتنمية مبيعاتك.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                أريد متجري
                <ArrowLeft size={18} />
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-black transition hover:bg-white/10"
              >
                شاهد الأعمال
                <ArrowUpLeft size={18} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-5 text-xs font-bold text-zinc-500 lg:justify-start">
              <div className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-yellow-400" />
                تصميم مخصص
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-yellow-400" />
                Responsive
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-yellow-400" />
                لوحة تحكم
              </div>
            </div>
          </div>

          {/* Hero image composition */}

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-5 rounded-[3rem] bg-yellow-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-3 shadow-2xl sm:p-4">
              <div className="flex h-10 items-center justify-between rounded-xl bg-black px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <div className="rounded-lg bg-zinc-900 px-5 py-1 text-[8px] text-zinc-500">
                  mystore.ma
                </div>

                <div className="w-10" />
              </div>

              <div className="mt-3 overflow-hidden rounded-xl bg-white text-black">
                {/* Fake store header */}

                <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
                  <div className="text-sm font-black">
                    MY<span className="text-yellow-500">STORE</span>
                  </div>

                  <div className="hidden items-center gap-5 text-[8px] font-bold text-zinc-400 sm:flex">
                    <span>الرئيسية</span>
                    <span>المنتجات</span>
                    <span>العروض</span>
                    <span>من نحن</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100">
                      <Search size={12} />
                    </div>

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400">
                      <ShoppingBag size={12} />
                    </div>
                  </div>
                </div>

                {/* Fake hero */}

                <div className="grid min-h-[350px] grid-cols-2 gap-3 bg-yellow-50 p-4 sm:min-h-[420px]">
                  <div className="flex flex-col justify-center px-2 sm:px-5">
                    <div className="mb-2 text-[8px] font-black text-yellow-600">
                      COLLECTION 2026
                    </div>

                    <div className="text-2xl font-black leading-tight sm:text-4xl">
                      اكتشف
                      <br />
                      مجموعتنا
                      <br />
                      <span className="text-yellow-500">
                        الجديدة.
                      </span>
                    </div>

                    <div className="mt-4 h-2 w-28 rounded-full bg-black/10" />
                    <div className="mt-2 h-2 w-20 rounded-full bg-black/10" />

                    <div className="mt-5 flex w-fit items-center gap-2 rounded-xl bg-black px-4 py-2 text-[8px] font-black text-white">
                      تسوق الآن
                      <ArrowLeft size={10} />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
                    <Image
                      src="/projects/banner2.jpg"
                      alt="متجر إلكتروني"
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* products */}

                <div className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-xs font-black">
                      المنتجات المميزة
                    </div>

                    <div className="text-[8px] font-bold text-yellow-600">
                      عرض الكل
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item}>
                        <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
                          <Image
                            src={`/projects/product-${item}.jpg`}
                            alt={`منتج ${item}`}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="mt-2 h-1.5 w-3/4 rounded-full bg-zinc-200" />
                        <div className="mt-1 h-1.5 w-1/2 rounded-full bg-zinc-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-black/10 bg-white p-4 text-black shadow-2xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400">
                  <BarChart3 size={20} />
                </div>

                <div>
                  <div className="text-[9px] font-bold text-zinc-400">
                    نمو المبيعات
                  </div>
                  <div className="text-lg font-black">
                    +48.6%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="scroll-mt-28 bg-white py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-black text-yellow-600">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                أعمالنا السابقة
              </div>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                متاجر صممناها
                <br />
                <span className="text-yellow-500">
                  لتبدو مختلفة.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm font-medium leading-7 text-zinc-500">
              مجموعة من النماذج والمشاريع التي توضح طريقة تصميمنا للمتاجر
              وتجربة المستخدم.
            </p>
          </div>

          {/* Filters */}

          <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(
                  filter.id === "all"
                    ? "الكل"
                    : filter.label
                )}
                className={`whitespace-nowrap rounded-xl px-5 py-3 text-xs font-black transition ${
                  (
                    filter.id === "all"
                      ? activeFilter === "الكل"
                      : activeFilter === filter.label
                  )
                    ? "bg-black text-yellow-400"
                    : "border border-zinc-200 bg-white text-zinc-500 hover:border-black hover:text-black"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Project grid */}

          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden rounded-[2rem] border border-zinc-200 text-right ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? "aspect-[16/8]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute right-5 top-5">
                    <span className="rounded-full bg-white/90 px-3 py-2 text-[10px] font-black text-black backdrop-blur">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-5 right-5 left-5">
                    <div className="flex items-end justify-between gap-5 text-white">
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-[9px] font-bold text-yellow-400">
                          مشروع #{String(project.id).padStart(2, "0")}
                        </div>

                        <h3 className="text-xl font-black sm:text-2xl">
                          {project.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-xs font-medium leading-6 text-white/70">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black transition group-hover:-translate-x-1">
                        <ArrowUpLeft size={19} />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT MODAL
      ====================================================== */}

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition hover:bg-yellow-400 hover:text-black"
              aria-label="إغلاق"
            >
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-[1.15fr_.85fr]">
              <div className="relative aspect-[4/3] min-h-[300px] bg-zinc-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7 sm:p-10">
                <div className="mb-4 inline-flex rounded-full bg-yellow-100 px-3 py-2 text-[10px] font-black text-yellow-700">
                  {selectedProject.categoryLabel}
                </div>

                <h3 className="text-3xl font-black">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 text-sm font-medium leading-7 text-zinc-500">
                  {selectedProject.description}
                </p>

                <div className="mt-7 rounded-2xl bg-yellow-50 p-5">
                  <div className="text-[10px] font-black text-yellow-700">
                    النتيجة
                  </div>

                  <div className="mt-2 text-lg font-black">
                    {selectedProject.result}
                  </div>
                </div>

                <div className="mt-7">
                  <div className="mb-4 text-sm font-black">
                    المميزات المستخدمة
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl border border-zinc-200 px-3 py-2 text-[10px] font-bold text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-4 text-xs font-black text-white transition hover:bg-yellow-400 hover:text-black"
                >
                  أريد متجراً مثل هذا
                  <ArrowLeft size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section
        id="features"
        className="scroll-mt-28 bg-zinc-950 py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-400">
                <Zap size={14} />
                أكثر من مجرد تصميم
              </div>

              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                نبني لك
                <br />
                <span className="text-yellow-400">
                  نظام بيع كامل.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm font-medium leading-8 text-zinc-500">
                المتجر الناجح يحتاج أكثر من واجهة جميلة. لذلك نركز على
                الإدارة، الطلبات، المنتجات، العملاء، الأداء وتجربة الشراء.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-3 space-x-reverse">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="h-10 w-10 rounded-full border-2 border-zinc-950 bg-yellow-400"
                    />
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={12}
                        fill="currentColor"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="mt-1 text-[10px] font-bold text-zinc-500">
                    تجارب عملاء ناجحة
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {storeFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                      <Icon size={21} />
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <h3 className="text-sm font-black">
                        {feature.title}
                      </h3>

                      <span className="text-[10px] font-black text-yellow-400">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-3 text-xs font-medium leading-6 text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INCLUDED
      ====================================================== */}

      <section className="bg-yellow-400 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="text-xs font-black">
                ماذا ستحصل عليه؟
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                كل الأساسيات
                <br />
                في مكان واحد.
              </h2>

              <p className="mt-6 max-w-md text-sm font-medium leading-7 text-black/60">
                نجهز المتجر ليكون قابلاً للاستخدام والتوسع، وليس مجرد تصميم
                تجريبي.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-black px-6 py-4 text-xs font-black text-white"
              >
                ناقش مشروعك
                <ArrowLeft size={16} />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 p-4 transition hover:bg-white"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black text-yellow-400">
                    <Check size={15} strokeWidth={3} />
                  </div>

                  <span className="text-xs font-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        id="process"
        className="scroll-mt-28 bg-white py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 text-xs font-black text-yellow-600">
              طريقة العمل
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              من الفكرة
              <span className="text-yellow-500">
                {" "}إلى المتجر.
              </span>
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-zinc-500">
              نعمل معك بخطوات واضحة حتى تعرف أين وصل مشروعك في كل مرحلة.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                number: "01",
                icon: Search,
                title: "تحليل",
                text: "نفهم نشاطك، منتجاتك وجمهورك.",
              },
              {
                number: "02",
                icon: Palette,
                title: "تصميم",
                text: "نبني الهوية والواجهات وتجربة المستخدم.",
              },
              {
                number: "03",
                icon: Code2,
                title: "تطوير",
                text: "نحول التصميم إلى متجر حقيقي سريع.",
              },
              {
                number: "04",
                icon: Rocket,
                title: "إطلاق",
                text: "نختبر ونجهز المتجر للإطلاق.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group rounded-3xl border border-zinc-200 p-6 transition hover:-translate-y-2 hover:border-black hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-yellow-400">
                      <Icon size={20} />
                    </div>

                    <span className="text-3xl font-black text-zinc-100 transition group-hover:text-yellow-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-black">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium leading-6 text-zinc-500">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE + DESKTOP
      ====================================================== */}

      <section className="bg-zinc-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-xs font-black text-yellow-700">
                <Smartphone size={14} />
                Mobile First
              </div>

              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                العميل يمكنه الشراء
                <br />
                <span className="text-yellow-500">
                  من أي جهاز.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm font-medium leading-8 text-zinc-500">
                أكثر من مجرد تصغير الموقع. نصمم تجربة استخدام كاملة للهاتف
                والتابلت والكمبيوتر، مع أزرار واضحة وتصفح سريع وCheckout مريح.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "تصميم Mobile First",
                  "صور منتجات محسنة",
                  "Navigation سهل",
                  "صفحة Checkout واضحة",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-black"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400">
                      <Check size={14} />
                    </div>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-300/30 blur-3xl" />

              <div className="relative flex items-end justify-center gap-5">
                {/* laptop */}

                <div className="hidden w-[75%] rounded-2xl border-8 border-zinc-800 bg-white p-2 shadow-2xl sm:block">
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-yellow-50">
                    <Image
                      src="/projects/store-desktop.jpg"
                      alt="تصميم متجر على الكمبيوتر"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-zinc-700" />
                </div>

                {/* phone */}

                <div className="relative w-40 shrink-0 rounded-[2rem] border-8 border-zinc-900 bg-zinc-900 p-1 shadow-2xl sm:w-44">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-white">
                    <Image
                      src="/projects/store-mobile.jpg"
                      alt="تصميم متجر على الهاتف"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute left-1/2 top-2 h-4 w-14 -translate-x-1/2 rounded-full bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-black p-8 text-white sm:p-12">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative">
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote className="mt-7 max-w-3xl text-2xl font-black leading-relaxed sm:text-4xl">
                &quot;لم نكن نريد مجرد متجر. أردنا تجربة تجعل العميل يشعر أن
                العلامة التجارية احترافية من أول ثانية.&quot;
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-yellow-400" />

                <div>
                  <div className="text-sm font-black">
                    عميل متجر إلكتروني
                  </div>

                  <div className="mt-1 text-xs text-zinc-500">
                    E-Commerce Project
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

      <section
        id="faq"
        className="scroll-mt-28 bg-zinc-50 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 text-xs font-black text-yellow-600">
              الأسئلة الشائعة
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              قبل أن تبدأ،
              <span className="text-yellow-500">
                {" "}إليك أهم الإجابات.
              </span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition ${
                    open
                      ? "border-yellow-300 bg-yellow-50"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 p-5 text-right"
                  >
                    <span className="text-sm font-black">
                      {faq.q}
                    </span>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                        open
                          ? "rotate-180 bg-yellow-400"
                          : "bg-zinc-100"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
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
          FINAL CTA
      ====================================================== */}

      <section
        id="contact"
        className="scroll-mt-28 px-4 pb-6 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-yellow-400 px-6 py-16 sm:px-12 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-400">
              <Store size={27} />
            </div>

            <h2 className="mt-7 text-4xl font-black leading-tight sm:text-6xl">
              هل حان وقت بناء
              <br />
              متجرك؟
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-7 text-black/60">
              أرسل لنا فكرة متجرك، نوع المنتجات، والميزات التي تحتاجها وسنبدأ
              من هناك.
            </p>

            <a
              href="#projects"
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-sm font-black text-white transition hover:bg-zinc-800"
            >
              شاهد أعمالنا
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
          <div className="flex flex-col justify-between gap-8 border-b border-zinc-200 pb-10 md:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-yellow-400">
                  <Sparkles size={19} />
                </div>

                <div className="text-xl font-black">
                  STORE<span className="text-yellow-500">X</span>
                </div>
              </div>

              <p className="mt-4 max-w-md text-sm font-medium leading-7 text-zinc-500">
                نصمم ونطور متاجر إلكترونية احترافية تساعد العلامات التجارية
                على البيع والنمو.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold text-zinc-500">
              <Link href="/" className="hover:text-black">
                الرئيسية
              </Link>

              <a href="#projects" className="hover:text-black">
                أعمالنا
              </a>

              <a href="#features" className="hover:text-black">
                المميزات
              </a>

              <a href="#process" className="hover:text-black">
                كيف نعمل؟
              </a>

              <a href="#contact" className="hover:text-black">
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 pt-7 text-[10px] font-bold text-zinc-400 sm:flex-row">
            <span>
              © 2026 STOREX. جميع الحقوق محفوظة.
            </span>

            <span>
              E-Commerce • Web Design • Development
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}