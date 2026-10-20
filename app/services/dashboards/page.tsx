"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  ChevronUp,
  CreditCard,
  FolderKanban,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Package,
  Plus,
  Settings,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

type DashboardExampleType = "ecommerce" | "project" | "saas";

const dashboardExamples: {
  title: string;
  category: string;
  description: string;
  type: DashboardExampleType;
}[] = [
  {
    title: "لوحة تحكم متجر إلكتروني",
    category: "متاجر",
    description:
      "لوحة متكاملة لإدارة المنتجات والطلبات والعملاء والمبيعات والإحصائيات.",
    type: "ecommerce",
  },
  {
    title: "لوحة إدارة المشاريع",
    category: "إدارة",
    description:
      "تابع المشاريع والمهام والفريق والمواعيد والميزانية من مكان واحد.",
    type: "project",
  },
  {
    title: "لوحة SaaS احترافية",
    category: "SaaS",
    description:
      "واجهة عصرية لإدارة المستخدمين والاشتراكات والإيرادات والنشاط.",
    type: "saas",
  },
];

const features = [
  {
    icon: BarChart3,
    title: "إحصائيات وتقارير",
    text: "رسوم بيانية ومؤشرات واضحة تساعدك على فهم أداء مشروعك.",
  },
  {
    icon: Users,
    title: "إدارة المستخدمين",
    text: "إدارة العملاء والفريق والصلاحيات بسهولة.",
  },
  {
    icon: Package,
    title: "إدارة المحتوى",
    text: "تحكم كامل في المنتجات والخدمات والمحتوى.",
  },
  {
    icon: Zap,
    title: "سريع ومتجاوب",
    text: "يعمل بشكل ممتاز على الكمبيوتر والهاتف والتابلت.",
  },
];

const faqs = [
  {
    q: "هل يمكن تصميم لوحة خاصة حسب مشروعي؟",
    a: "نعم. نصمم الواجهة حسب طبيعة مشروعك والبيانات والوظائف التي تحتاجها، وليس مجرد قالب جاهز.",
  },
  {
    q: "هل يمكن ربط لوحة التحكم بموقعي؟",
    a: "نعم، يمكن ربطها بواجهة الموقع أو المتجر وقاعدة البيانات والـ APIs حسب احتياجات المشروع.",
  },
  {
    q: "هل اللوحة تعمل على الهاتف؟",
    a: "نعم. نصمم الواجهات بشكل Responsive لتعمل على الكمبيوتر والتابلت والهاتف.",
  },
  {
    q: "هل يمكن إضافة صلاحيات للمستخدمين؟",
    a: "نعم، يمكن إنشاء أدوار وصلاحيات مختلفة مثل المدير والموظف والمشرف والعميل.",
  },
];

function MiniBarChart() {
  const bars = [35, 52, 43, 68, 58, 82, 72, 94, 76, 100];

  return (
    <div className="flex h-32 items-end gap-2">
      {bars.map((height, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md bg-black/90 transition-all duration-500 hover:bg-yellow-400"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function DashboardPreview({
  type,
}: {
  type: "ecommerce" | "project" | "saas";
}) {
  if (type === "ecommerce") {
    return (
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#f7f7f5] shadow-2xl">
        <div className="flex h-10 items-center justify-between border-b bg-white px-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <div className="h-2 w-24 rounded-full bg-black/10" />
        </div>

        <div className="flex min-h-[330px]">
          <aside className="hidden w-40 border-l bg-black p-4 text-white md:block">
            <div className="mb-8 text-sm font-black">
              STORE<span className="text-yellow-400">X</span>
            </div>

            <div className="space-y-2 text-[10px]">
              <div className="rounded-lg bg-yellow-400 px-3 py-2 font-bold text-black">
                لوحة التحكم
              </div>
              <div className="px-3 py-2 text-white/50">الطلبات</div>
              <div className="px-3 py-2 text-white/50">المنتجات</div>
              <div className="px-3 py-2 text-white/50">العملاء</div>
              <div className="px-3 py-2 text-white/50">الإحصائيات</div>
            </div>
          </aside>

          <div className="flex-1 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="mb-1 h-3 w-28 rounded bg-black/15" />
                <div className="h-2 w-20 rounded bg-black/5" />
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                <Bell size={13} />
              </div>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["المبيعات", "48,250 DH"],
                ["الطلبات", "284"],
                ["العملاء", "1,842"],
                ["المنتجات", "126"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border bg-white p-3"
                >
                  <div className="mb-2 text-[9px] text-black/40">{label}</div>
                  <div className="text-sm font-black">{value}</div>
                  <div className="mt-1 flex items-center gap-1 text-[8px] font-bold text-green-600">
                    <TrendingUp size={9} />
                    +12.5%
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr]">
              <div className="rounded-xl border bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-black">المبيعات</span>
                  <span className="text-[9px] text-black/40">آخر 30 يوم</span>
                </div>

                <MiniBarChart />
              </div>

              <div className="rounded-xl border bg-white p-4">
                <div className="mb-4 text-xs font-black">آخر الطلبات</div>

                <div className="space-y-3">
                  {["#1048", "#1047", "#1046", "#1045"].map((order, i) => (
                    <div
                      key={order}
                      className="flex items-center justify-between border-b pb-2 last:border-0"
                    >
                      <span className="text-[9px] font-bold">{order}</span>
                      <span className="text-[9px] text-black/40">
                        {120 + i * 45} DH
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "project") {
    return (
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#f7f7f5] shadow-2xl">
        <div className="flex h-10 items-center justify-between border-b bg-white px-4">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="h-2 w-20 rounded bg-black/10" />
        </div>

        <div className="flex min-h-[330px]">
          <aside className="hidden w-40 border-l bg-white p-4 md:block">
            <div className="mb-8 text-sm font-black">
              NOIR<span className="text-yellow-500">OS</span>
            </div>

            <div className="space-y-2 text-[10px]">
              {[
                "نظرة عامة",
                "المشاريع",
                "الفريق",
                "العملاء",
                "الملفات",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 ${
                    i === 1
                      ? "bg-black font-bold text-white"
                      : "text-black/45"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="flex-1 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="mb-2 h-3 w-36 rounded bg-black/15" />
                <div className="h-2 w-24 rounded bg-black/5" />
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-yellow-400 px-3 py-2 text-[9px] font-black">
                <Plus size={11} />
                مشروع جديد
              </div>
            </div>

            <div className="mb-5 grid grid-cols-3 gap-3">
              {[
                ["المشاريع", "24"],
                ["قيد التنفيذ", "8"],
                ["مكتملة", "16"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border bg-white p-3">
                  <div className="mb-2 text-[9px] text-black/40">{label}</div>
                  <div className="text-xl font-black">{value}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-black">المشاريع الأخيرة</span>
                <MoreHorizontal size={14} />
              </div>

              <div className="space-y-3">
                {[
                  ["متجر إلكتروني", "78%"],
                  ["تطبيق العملاء", "54%"],
                  ["لوحة الإدارة", "92%"],
                ].map(([name, progress]) => (
                  <div key={name}>
                    <div className="mb-1 flex justify-between text-[9px]">
                      <span className="font-bold">{name}</span>
                      <span className="text-black/40">{progress}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-black/5">
                      <div
                        className="h-full rounded-full bg-black"
                        style={{ width: progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl">
      <div className="flex h-10 items-center justify-between border-b border-white/10 px-4">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="h-2 w-20 rounded bg-white/10" />
      </div>

      <div className="p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="mb-2 h-3 w-32 rounded bg-white/20" />
            <div className="h-2 w-24 rounded bg-white/5" />
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-black">
            <Sparkles size={13} />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            ["MRR", "$28.4K"],
            ["Users", "12.8K"],
            ["Growth", "+24.8%"],
            ["Churn", "2.1%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="mb-2 text-[9px] text-white/30">{label}</div>
              <div className="text-sm font-black text-white">{value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4 text-xs font-bold text-white">
              Revenue growth
            </div>

            <div className="relative h-32">
              <div className="absolute inset-x-0 top-0 border-t border-white/5" />
              <div className="absolute inset-x-0 top-1/2 border-t border-white/5" />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/5" />

              <div className="absolute inset-0 flex items-end gap-2">
                {[28, 40, 35, 55, 48, 72, 65, 82, 76, 96].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-yellow-400/80"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4 text-xs font-bold text-white">
              Activity
            </div>

            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-yellow-400/20" />
                  <div className="flex-1">
                    <div className="mb-1 h-1.5 w-full rounded bg-white/10" />
                    <div className="h-1.5 w-2/3 rounded bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardsPage() {
  const [activeExample, setActiveExample] = useState(0);
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
          <Link href="/" className="text-2xl font-black tracking-tight">
            STORE<span className="text-yellow-500">X</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
            <Link href="/" className="transition hover:text-yellow-500">
              الرئيسية
            </Link>

            <Link
              href="/services/stores"
              className="transition hover:text-yellow-500"
            >
              المتاجر
            </Link>

            <Link
              href="/services/dashboards"
              className="text-yellow-500"
            >
              لوحات التحكم
            </Link>

            <Link href="/#services" className="transition hover:text-yellow-500">
              خدماتنا
            </Link>

            <Link href="/#contact" className="transition hover:text-yellow-500">
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
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold">
              <LayoutDashboard size={14} />
              لوحات تحكم احترافية
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              لوحة تحكم تجعل
              <span className="block text-yellow-500">مشروعك أسهل.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              نصمم لك Dashboard احترافي لإدارة متجرك أو شركتك أو نظامك،
              بواجهة واضحة وسريعة ومصممة بالكامل حسب احتياجاتك.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-yellow-400 hover:text-black"
              >
                اطلب لوحة تحكم
                <ArrowLeft
                  size={17}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>

              <a
                href="#examples"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-white px-6 py-4 text-sm font-black transition hover:border-black"
              >
                شاهد الأمثلة
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
                Responsive
              </span>

              <span className="flex items-center gap-2">
                <Check size={14} className="text-yellow-500" />
                صلاحيات المستخدمين
              </span>
            </div>
          </div>

          {/* HERO DASHBOARD */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-yellow-300/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
              <DashboardPreview type="saas" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                  <TrendingUp size={18} />
                </div>

                <div>
                  <div className="text-[10px] text-black/40">
                    نمو هذا الشهر
                  </div>
                  <div className="text-lg font-black">+24.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
              أمثلة من أعمالنا
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Dashboards لكل نوع من المشاريع
            </h2>

            <p className="mt-5 leading-7 text-black/50">
              سواء كنت تدير متجرًا أو شركة أو SaaS، يمكننا بناء لوحة تحكم
              مناسبة تمامًا لطريقة عملك.
            </p>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {dashboardExamples.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveExample(index)}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-black transition ${
                  activeExample === index
                    ? "bg-black text-white"
                    : "border border-black/10 bg-white hover:border-black"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <DashboardPreview
                type={dashboardExamples[activeExample].type}
              />
            </div>

            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                <LayoutDashboard size={22} />
              </div>

              <h3 className="text-3xl font-black">
                {dashboardExamples[activeExample].title}
              </h3>

              <p className="mt-4 leading-7 text-black/50">
                {dashboardExamples[activeExample].description}
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "واجهة واضحة وسهلة الاستخدام",
                  "إحصائيات وتقارير",
                  "إدارة المستخدمين والصلاحيات",
                  "تصميم متجاوب مع جميع الأجهزة",
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

      {/* FEATURES */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-400">
                لماذا Dashboard؟
              </div>

              <h2 className="max-w-xl text-4xl font-black sm:text-5xl">
                كل شيء تحتاجه في مكان واحد.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-white/45">
              بدل التنقل بين عشرات الأدوات، اجمع أهم المعلومات والعمليات
              داخل واجهة واحدة مصممة خصيصًا لك.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group bg-[#0d0d0d] p-8 transition hover:bg-[#151515]"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black transition group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-xl font-black">{feature.title}</h3>

                  <p className="mt-3 max-w-md leading-7 text-white/40">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE CAN BUILD */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
                حلول مخصصة
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                نبني Dashboard
                <span className="text-yellow-500"> على مقاس مشروعك.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-black/50">
                لا تحتاج إلى تغيير طريقة عملك لتناسب لوحة جاهزة. نحن نقوم
                بالعكس: نصمم اللوحة لتناسب طريقة عملك.
              </p>

              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-black text-white transition hover:bg-yellow-400 hover:text-black"
              >
                تحدث معنا عن مشروعك
                <ArrowLeft size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: ShoppingCart,
                  title: "E-commerce",
                  text: "إدارة المتاجر والطلبات",
                },
                {
                  icon: FolderKanban,
                  title: "Projects",
                  text: "إدارة المشاريع والفرق",
                },
                {
                  icon: CreditCard,
                  title: "Finance",
                  text: "الفواتير والمدفوعات",
                },
                {
                  icon: Users,
                  title: "CRM",
                  text: "العملاء والمبيعات",
                },
                {
                  icon: BarChart3,
                  title: "Analytics",
                  text: "تقارير وإحصائيات",
                },
                {
                  icon: Settings,
                  title: "Custom",
                  text: "حلول خاصة",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                      <Icon size={18} />
                    </div>

                    <h3 className="font-black">{item.title}</h3>

                    <p className="mt-2 text-xs leading-5 text-black/45">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
              طريقة العمل
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              من الفكرة إلى Dashboard جاهز
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["01", "نفهم مشروعك", "نحدد احتياجاتك والوظائف المطلوبة."],
              ["02", "نصمم الواجهة", "نحول الفكرة إلى UI احترافي وواضح."],
              ["03", "نطور النظام", "نبني الواجهة والوظائف المطلوبة."],
              ["04", "نطلق المشروع", "اختبار وتسليم وتجهيز المشروع."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-black/10 p-7"
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
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-yellow-600">
              الأسئلة الشائعة
            </div>

            <h2 className="text-4xl font-black">هل لديك سؤال؟</h2>
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
                جاهز تبني لوحة تحكم احترافية؟
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/60">
                أخبرنا عن مشروعك وسنساعدك في تحويل فكرتك إلى Dashboard
                واضحة وسريعة وسهلة الاستخدام.
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
      <footer className="border-t border-black/10 bg-[#f8f8f5]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="font-black">
            STORE<span className="text-yellow-500">X</span>
          </div>

          <div className="text-black/40">
            نصمم تجارب رقمية تساعد مشروعك على النمو.
          </div>

          <div className="text-xs text-black/35">
            © 2026 جميع الحقوق محفوظة
          </div>
        </div>
      </footer>

      {/* FLOATING DECORATION */}
      <div className="pointer-events-none fixed bottom-6 left-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-black text-yellow-400 shadow-xl lg:flex">
        <LayoutDashboard size={18} />
      </div>
    </main>
  );
}