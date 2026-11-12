import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import {
  capabilities,
  industries,
  process,
  services,
  strengths,
} from "@/lib/site-content";

const navigation = [
  ["What we do", "services"],
  ["Industries", "industries"],
  ["Who we are", "about"],
];

const serviceStyles: Record<string, string> = {
  engineering:
    "border-t-[#586f9b] bg-[#f7f8fc] text-[#586f9b] hover:border-[#586f9b] focus-within:border-[#586f9b]",
  cloud:
    "border-t-[#31738e] bg-[#f4f9fb] text-[#31738e] hover:border-[#31738e] focus-within:border-[#31738e]",
  ai: "border-t-[#35766b] bg-[#f2f8f5] text-[#35766b] hover:border-[#35766b] focus-within:border-[#35766b]",
  odoo: "border-t-[#875d78] bg-[#faf6f9] text-[#875d78] hover:border-[#875d78] focus-within:border-[#875d78]",
  netsuite:
    "border-t-[#496f80] bg-[#f4f7f8] text-[#496f80] hover:border-[#496f80] focus-within:border-[#496f80]",
  custom:
    "border-t-[#89633b] bg-[#faf7f2] text-[#89633b] hover:border-[#89633b] focus-within:border-[#89633b]",
};

const developmentLogos = [
  ["Next.js", "nextjs"],
  ["Flutter", "flutter"],
  ["Python", "python"],
  ["Go", "go"],
  ["Node.js", "nodejs"],
];

const serviceLogos: Record<string, string[][]> = {
  engineering: developmentLogos,
  cloud: [
    ["AWS", "aws"],
    ["Microsoft Azure", "azure"],
    ["Google Cloud", "google-cloud"],
  ],
  ai: [
    ["GPT (OpenAI)", "gpt"],
    ["Claude", "claude"],
    ["LangGraph", "langgraph"],
    ["Ollama", "ollama"],
  ],
  odoo: [["Odoo", "odoo-logo.png"]],
  netsuite: [["NetSuite", "netsuite-logo.png"]],
  custom: developmentLogos,
};

const heroExpertise = [
  { name: "", theme: "odoo", icons: serviceLogos.odoo },
  { name: "", theme: "netsuite", icons: serviceLogos.netsuite },
  {
    name: "Web development",
    theme: "web",
    icons: [
      ["Next.js", "nextjs"],
      ["Node.js", "nodejs"],
    ],
  },
  { name: "Cloud Integrations", theme: "cloud", icons: serviceLogos.cloud },
  {
    name: "AI Integrations",
    theme: "ai",
    icons: [
      ["GPT (OpenAI)", "gpt"],
      ["Claude", "claude"],
      ["LangChain", "langchain"],
    ],
  },
];

function Arrow() {
  return (
    <span
      className="inline-block shrink-0 text-xl leading-none"
      aria-hidden="true"
    >
      ↗
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:p-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <header className="relative z-20 border-b border-line bg-white">
        <nav
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px] flex min-h-[88px] items-center justify-between gap-6"
          aria-label="Primary navigation"
        >
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 font-heading text-[29px] leading-none font-semibold tracking-[-.055em]"
            aria-label="Vercent Technologies home"
          >
            <span className="flex flex-col items-center gap-[5px]">
              <span className="text-[24px] tracking-[.04em] sm:text-[27px]">
                VERCENT<span className="text-primary">.</span>
              </span>
              <span className="text-[9px] font-medium tracking-[.24em] sm:text-[10px]">
                Technologies
              </span>
            </span>
          </a>
          <ul className="hidden items-center gap-9 md:flex">
            {navigation.map(([label, id]) => (
              <li key={id}>
                <a
                  className="text-sm text-ink transition-colors hover:text-primary"
                  href={`#${id}`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-7 border px-6 py-[14px] text-sm font-medium transition-colors duration-200 border-primary bg-transparent text-primary hover:bg-primary hover:text-white"
              >
                Contact us <Arrow />
              </a>
            </li>
          </ul>
          <details className="md:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-4 py-3 text-sm [&::-webkit-details-marker]:hidden">
              Menu <span aria-hidden="true">+</span>
            </summary>
            <ul className="absolute inset-x-0 top-full border-b border-line bg-white px-5 py-5 shadow-sm">
              {navigation.map(([label, id]) => (
                <li key={id}>
                  <a
                    className="flex min-h-12 items-center justify-between text-base text-ink"
                    href={`#${id}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="flex min-h-12 items-center justify-between text-base text-ink"
                  href="#contact"
                >
                  Contact us <Arrow />
                </a>
              </li>
            </ul>
          </details>
        </nav>
      </header>

      <main id="main-content">
        <section
          className="overflow-hidden bg-[#f3f6f2]"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto flex w-full max-w-[1800px] flex-col items-start gap-10 px-5 py-12 sm:px-8 md:px-12 md:py-14 lg:flex-row lg:px-10 lg:py-16">
            <div className="w-full min-w-0 lg:min-w-[360px] lg:flex-[.8_1_0%]">
              <span className="mb-6 block text-[11px] font-semibold tracking-[.18em] text-primary uppercase">
                Vercent Technologies
              </span>
              <h1
                id="hero-heading"
                className="max-w-[760px] font-heading text-[clamp(43px,5.6vw,80px)] leading-[1.08] font-normal tracking-[-.055em]"
              >
                We help{" "}
                <span className="block text-primary">
                  business move forward.
                </span>
              </h1>
              <p className="mt-7 max-w-[535px] text-[16px] leading-[1.85] text-muted md:text-[17px]">
                We bring software engineering, cloud operations, and enterprise
                integration together to help businesses modernize applications,
                connect systems, and improve how they work.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
                <a
                  href="#services"
                  className="inline-flex min-h-[52px] items-center justify-center gap-7 border px-6 py-[14px] text-sm font-medium transition-colors duration-200 border-primary bg-primary text-white hover:border-[#0d4844] hover:bg-[#0d4844]"
                >
                  Explore our expertise <Arrow />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-5 text-sm font-medium text-primary underline-offset-8 hover:underline"
                >
                  Talk to our team <Arrow />
                </a>
              </div>
              <div className="mt-10 border-t border-line pt-6">
                <h2 className="font-heading text-base font-medium text-ink">
                  Services we provide
                </h2>
                <ul className="mt-4 flex flex-col gap-2 text-sm leading-6 text-muted">
                  {[
                    "End to End Software Development and Integrations",
                    "Payment Integrations",
                    "AI Integrations and Automations",
                    "Odoo ERP Integrations / Customizations",
                    "NetSuite ERP Integrations / Customizations",
                    "Mobile App Development — Flutter for Android and iOS",
                    "Cloud Integrations and Support",
                  ].map((service) => (
                    <li className="flex items-start gap-3" key={service}>
                      <span
                        className="mt-[9px] size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <figure
              className="w-full min-w-0 lg:flex-[1.5_1_0%] lg:self-center"
              aria-label="Vercent expertise in Odoo, NetSuite, web development, cloud, and AI integration"
            >
              <div className="expertise-diagram">
                <svg
                  className="expertise-arrows"
                  viewBox="0 0 1000 820"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <marker
                      id="expertise-arrow"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="7"
                      markerHeight="7"
                      orient="auto-start-reverse"
                    >
                      <path
                        d="m2 1 6 4-6 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="none"
                      />
                    </marker>
                  </defs>
                  <g
                    className="expertise-connectors"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    markerEnd="url(#expertise-arrow)"
                  >
                    <path
                      d="M500 380 H150 V310"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M500 380 H850 V310"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M500 440 H150 V510"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M500 440 H850 V510"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path d="M500 410 V310" vectorEffect="non-scaling-stroke" />
                  </g>
                </svg>
                {heroExpertise.map((expertise) => (
                  <div
                    className={`expertise-card expertise-${expertise.theme}`}
                    key={expertise.theme}
                  >
                    <div className="expertise-icons">
                      {expertise.theme === "ai" && (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="5" y="5" width="14" height="14" rx="2" />
                          <rect x="9" y="9" width="6" height="6" rx="1" />
                          <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" />
                        </svg>
                      )}
                      {expertise.icons.map(([name, file]) => (
                        <Image
                          key={file}
                          src={`/images/${file}${file.endsWith(".png") ? "" : ".svg"}`}
                          alt={name}
                          width={
                            expertise.theme === "odoo"
                              ? 95
                              : expertise.theme === "netsuite"
                                ? 132
                                : 36
                          }
                          height={expertise.theme === "netsuite" ? 34 : 36}
                        />
                      ))}
                    </div>
                    {expertise?.name && <h2>{expertise.name}</h2>}
                  </div>
                ))}
                <div className="expertise-center">Vercent</div>
              </div>
            </figure>
          </div>
        </section>

        <div
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px] grid border-b border-line md:grid-cols-3"
          aria-label="Our capabilities"
        >
          {strengths.map((strength, index) => (
            <div
              className="flex items-start gap-5 border-b border-line py-7 last:border-b-0 md:my-8 md:border-r md:border-b-0 md:px-6 md:py-0 md:first:pl-0 md:last:border-r-0 lg:px-10"
              key={strength.title}
            >
              <span className="pt-1 font-mono text-[11px] text-primary">
                0{index + 1}
              </span>
              <div>
                <h2 className="font-heading font-normal mb-2 text-[17px] leading-snug tracking-[-.02em]">
                  {strength.title}
                </h2>
                <p className="max-w-[290px] text-[12px] leading-[1.7] text-muted">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section
          className="bg-[#123e3a] py-16 text-white md:py-24"
          aria-labelledby="ai-intro-heading"
        >
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 px-5 sm:px-8 md:px-12 lg:flex-row lg:gap-20 lg:px-[72px]">
            <div className="min-w-0 flex-1">
              <span className="mb-6 block text-[11px] font-semibold tracking-[.18em] text-[#b4d2c1] uppercase">
                AI with purpose
              </span>
              <h2
                id="ai-intro-heading"
                className="font-heading text-[clamp(38px,4.4vw,64px)] leading-[1.12] font-normal tracking-[-.045em]"
              >
                Built on AI.
                <span className="block text-[#b4d2c1]">
                  Designed for impact.
                </span>
              </h2>
              <ul
                className="mt-8 flex flex-wrap gap-3"
                aria-label="AI technologies"
              >
                {serviceLogos.ai.map(([name, file]) => (
                  <li
                    className="flex size-12 items-center justify-center bg-white p-2.5"
                    key={file}
                  >
                    <Image
                      src={`/images/${file}.svg`}
                      alt={name}
                      title={name}
                      width={28}
                      height={28}
                      className="size-7 object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 flex-1 lg:border-l lg:border-white/20 lg:pl-12">
              <p className="max-w-[540px] text-[16px] leading-[1.9] text-[#d7e7e0] md:text-[18px]">
                From AI models that learn to agents that act, Vercent technology
                solutions reimagine the enterprise, creating an intelligent
                foundation for an adaptive and responsible AI ecosystem with
                lasting business impact.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-5 text-sm font-medium text-white underline-offset-8 hover:underline"
              >
                Let’s build the future of AI together. <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px] py-[72px] md:py-[112px]"
          aria-labelledby="services-heading"
        >
          <div className="mb-12 grid items-end gap-7 lg:mb-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <span className="mb-6 block text-[11px] font-semibold tracking-[.18em] text-primary uppercase">
                What we do
              </span>
              <h2
                className="font-heading text-[clamp(34px,4.1vw,58px)] leading-[1.15] font-normal tracking-[-.045em]"
                id="services-heading"
              >
                Expertise across your
                <br className="hidden sm:block" /> digital business.
              </h2>
            </div>
            <p className="max-w-[510px] text-[16px] leading-[1.85] text-muted">
              From customer-facing applications to the systems behind them, we
              bring the capabilities to build, connect, and sustain your
              technology.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                className={`relative flex flex-col items-start border border-[#e0e5e1] border-t-2 p-7 transition-[background-color,border-color] duration-200 lg:p-8 ${serviceStyles[service.theme]}`}
                data-service={service.theme}
                key={service.title}
              >
                <div className="mb-7 flex w-full items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-wrap items-center gap-3">
                    {serviceLogos[service.theme] ? (
                      serviceLogos[service.theme].map(([name, file]) => (
                        <Image
                          key={file}
                          src={`/images/${file}${file.endsWith(".png") ? "" : ".svg"}`}
                          alt={name}
                          title={name}
                          width={
                            service.theme === "odoo"
                              ? 95
                              : service.theme === "netsuite"
                                ? 132
                                : 30
                          }
                          height={service.theme === "netsuite" ? 34 : 30}
                          className={
                            service.theme === "netsuite"
                              ? "h-[34px] w-[132px] max-w-full object-cover"
                              : "h-[30px] w-auto max-w-full object-contain"
                          }
                        />
                      ))
                    ) : (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <title>Artificial intelligence</title>
                        <path d={service.icon} />
                      </svg>
                    )}
                  </div>
                  <span
                    className="shrink-0 pt-2 font-mono text-[11px] tracking-[.1em]"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading font-normal tracking-[-.035em] mb-4 text-[23px] leading-[1.3] text-ink">
                  {service.title}
                </h3>
                <p className="mb-7 text-[14px] leading-[1.85] text-muted">
                  {service.description}
                </p>
                <a
                  className="mt-auto inline-flex w-full items-center justify-between gap-4 text-[12px] font-medium underline-offset-4 hover:underline focus-visible:outline-current!"
                  href="#contact"
                >
                  {service.link}
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="bg-[#164b46] text-white"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px] grid items-center gap-12 py-[72px] md:grid-cols-2 md:gap-12 md:py-[96px] lg:gap-[88px]">
            <figure>
              <Image
                src="/images/team.jpg"
                alt="Engineers collaborating on software development around a shared table"
                width={1100}
                height={733}
                sizes="(max-width: 800px) 100vw, 50vw"
                className="h-[340px] w-full object-cover sm:h-[440px] md:h-[560px]"
              />
              <figcaption className="mt-5 text-[11px] text-[#c3d6cc]">
                Collaboration, from the first conversation.
              </figcaption>
            </figure>
            <div>
              <span className="mb-6 block text-[11px] font-semibold tracking-[.18em] text-[#b4d2c1] uppercase">
                Who we are
              </span>
              <h2
                className="mb-7 font-heading text-[clamp(34px,3.5vw,50px)] leading-[1.15] font-normal tracking-[-.045em]"
                id="about-heading"
              >
                Your business context.
                <br />
                Our engineering focus.
              </h2>
              <p className="mb-5 text-[15px] leading-[1.9] text-[#d0dfd9]">
                Every business has its own priorities, processes, and
                constraints. We work alongside your team to understand them
                before deciding what to build and how to deliver it.
              </p>
              <p className="mb-5 text-[15px] leading-[1.9] text-[#d0dfd9]">
                From a new digital product to a connected enterprise platform,
                our focus is on technology that serves your business today and
                can adapt as it grows.
              </p>
              <ul className="mt-7 mb-8">
                {capabilities.map((capability) => (
                  <li
                    className="flex items-start gap-4 border-b border-white/15 py-4 text-[13px] leading-[1.7] text-[#e1ebe5]"
                    key={capability}
                  >
                    <span className="text-[#a8c9b6]" aria-hidden="true">
                      →
                    </span>
                    {capability}
                  </li>
                ))}
              </ul>
              <a
                className="inline-flex items-center gap-5 text-sm font-medium text-white underline-offset-8 hover:underline"
                href="#contact"
              >
                Work with Vercent <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          id="industries"
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px] py-[72px] md:py-[112px]"
          aria-labelledby="industries-heading"
        >
          <div className="mb-12 grid items-end gap-7 lg:mb-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <span className="mb-6 block text-[11px] font-semibold tracking-[.18em] text-primary uppercase">
                Industries
              </span>
              <h2
                className="font-heading text-[clamp(34px,4.1vw,58px)] leading-[1.15] font-normal tracking-[-.045em]"
                id="industries-heading"
              >
                Different industries.
                <br />A shared need for progress.
              </h2>
            </div>
            <p className="max-w-[510px] text-[16px] leading-[1.85] text-muted">
              The right technology starts with the realities of your sector. We
              shape applications and integrations around the people, processes,
              and systems they need to support.
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article key={industry.title}>
                <div className="overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    width={650}
                    height={434}
                    sizes="(max-width: 540px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    className="aspect-[4/3] w-full object-cover saturate-75"
                  />
                </div>
                <h3 className="font-heading font-normal tracking-[-.035em] mt-6 mb-3 text-[22px] leading-[1.3]">
                  {industry.title}
                </h3>
                <p className="text-[14px] leading-[1.8] text-muted">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-8">
            <p className="text-[18px] text-ink">
              Your sector. Your operating context.
            </p>
            <a
              className="inline-flex items-center gap-5 text-sm font-medium text-primary underline-offset-8 hover:underline"
              href="#contact"
            >
              Discuss your requirements <Arrow />
            </a>
          </div>
        </section>

        <section
          className="bg-[#f2f4ef]"
          id="approach"
          aria-labelledby="approach-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px] py-[72px] md:py-[112px]">
            <div className="mb-12 grid items-end gap-7 lg:mb-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <div>
                <span className="mb-6 block text-[11px] font-semibold tracking-[.18em] text-primary uppercase">
                  How we work
                </span>
                <h2
                  className="font-heading text-[clamp(34px,4.1vw,58px)] leading-[1.15] font-normal tracking-[-.045em]"
                  id="approach-heading"
                >
                  Clear thinking.
                  <br />
                  Disciplined delivery.
                </h2>
              </div>
              <p className="max-w-[510px] text-[16px] leading-[1.85] text-muted">
                A collaborative approach with clear priorities, shared
                decisions, and continuity from the first discussion through
                ongoing operations.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <div
                  className="border-t border-[#bdcbc2] pt-6"
                  key={step.title}
                >
                  <span className="mb-9 block font-heading text-[36px] leading-none font-normal text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading font-normal tracking-[-.035em] mb-4 text-[22px] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.85] text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px] py-[72px] md:py-[112px]"
          aria-labelledby="planning-heading"
        >
          <div className="grid items-center gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-16 lg:gap-24">
            <div>
              <span className="mb-6 block text-[11px] font-semibold tracking-[.18em] text-primary uppercase">
                Your next step
              </span>
              <h2
                className="font-heading text-[clamp(34px,4.1vw,58px)] leading-[1.15] font-normal tracking-[-.045em] mb-7"
                id="planning-heading"
              >
                Modernize
                <br />
                with purpose.
              </h2>
              <p className="max-w-[510px] text-[16px] leading-[1.85] text-muted mb-8">
                Whether you are developing a product, improving cloud
                operations, or connecting enterprise systems, start with the
                business outcome. We help translate that priority into a
                practical engineering approach.
              </p>
              <a
                className="inline-flex items-center gap-5 text-sm font-medium text-primary underline-offset-8 hover:underline"
                href="#contact"
              >
                Explore the possibilities with us <Arrow />
              </a>
            </div>
            <figure>
              <Image
                src="/images/architecture.jpg"
                alt="Precise geometric lines and connected panels of a contemporary glass facade"
                width={1500}
                height={866}
                sizes="(max-width: 800px) 100vw, 60vw"
                className="aspect-[1.2] w-full object-cover sm:aspect-[1.4]"
              />
            </figure>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-line bg-[#f6f7f3] py-[72px] md:py-[96px]"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px] grid items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-28">
            <div>
              <span className="mb-6 block text-[11px] font-semibold tracking-[.18em] text-primary uppercase">
                Contact us
              </span>
              <h2
                className="mb-6 font-heading text-[clamp(44px,5vw,72px)] leading-[1.15] font-normal tracking-[-.045em]"
                id="contact-heading"
              >
                Let’s move
                <br />
                forward.
              </h2>
              <p className="max-w-[380px] text-[16px] leading-[1.85] text-muted">
                Connect with Vercent to discuss your next application,
                integration, or cloud initiative.
              </p>
              <a
                href="tel:+917034833725"
                className="mt-8 inline-flex min-h-12 items-center gap-4 text-primary underline-offset-4 hover:underline"
              >
                <span
                  className="flex size-12 shrink-0 items-center justify-center border border-line"
                  aria-hidden="true"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium tracking-[.12em] text-muted uppercase">
                    Call us
                  </span>
                  <span className="font-heading text-xl">+91 70348 33725</span>
                </span>
              </a>
            </div>
            <div className="border-t border-primary pt-7">
              <h3 className="font-heading font-normal tracking-[-.035em] mb-3 text-[25px]">
                Start a conversation
              </h3>
              <p className="mb-7 text-sm leading-7 text-muted">
                Share your details to begin discussing your business and
                technology priorities.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#112f2b] pt-14 pb-7 text-[#d1e0d7]">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[72px]">
          <div className="flex flex-wrap items-start justify-between gap-10 border-b border-white/15 pb-12">
            <div>
              <a
                className="inline-flex shrink-0 items-center gap-2 font-heading text-[29px] leading-none font-semibold tracking-[-.055em] text-white"
                href="#"
                aria-label="Vercent Technologies home"
              >
                <span className="flex flex-col items-center gap-[5px]">
                  <span className="text-[24px] tracking-[.04em] sm:text-[27px]">
                    VERCENT<span className="text-[#9bc8b9]">.</span>
                  </span>
                  <span className="text-[9px] font-medium tracking-[.24em] sm:text-[10px]">
                    Technologies
                  </span>
                </span>
              </a>
              <p className="mt-6 text-[12px] text-[#abc2b6]">
                Digital engineering. Connected business.
              </p>
            </div>
            <nav
              className="grid grid-cols-2 gap-x-10 gap-y-5 text-[13px] sm:flex sm:flex-wrap sm:gap-8"
              aria-label="Footer navigation"
            >
              <a className="hover:text-white hover:underline" href="#services">
                What we do
              </a>
              <a
                className="hover:text-white hover:underline"
                href="#industries"
              >
                Industries
              </a>
              <a className="hover:text-white hover:underline" href="#about">
                Who we are
              </a>
              <a className="hover:text-white hover:underline" href="#contact">
                Contact us
              </a>
            </nav>
          </div>
          <div className="flex flex-wrap justify-between gap-4 pt-6 text-[10px] leading-6 text-[#abc2b6]">
            <span>© 2026 Vercent Technologies. All rights reserved.</span>
            <span>Software engineering · Cloud · Enterprise integration</span>
          </div>
        </div>
      </footer>
    </>
  );
}
