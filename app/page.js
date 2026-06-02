import Image from "next/image";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Problems />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function PromoBanner() {
  return (
    <a
      href="https://xperigift.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-coffee-900 text-cream transition-colors hover:bg-coffee-800"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-2.5 text-center text-xs font-medium sm:text-sm">
        <span className="inline-flex items-center gap-1.5">
          <SparkleIcon />
          <span className="font-bold tracking-wide text-rust-300">xperigift</span>
        </span>
        <span className="hidden text-cream/70 sm:inline">·</span>
        <span className="hidden text-cream/90 sm:inline">Revenue growth service</span>
        <span className="text-cream/70">·</span>
        <span className="inline-flex items-center gap-1 font-semibold text-rust-300 group-hover:text-rust-200">
          Book your audit call
          <ArrowRightIcon />
        </span>
      </div>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-coffee-100 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <Image
            src="/img/logo.svg"
            alt="The Gift Card Cafe"
            width={64}
            height={66}
            priority
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-coffee-700 md:flex">
          <a href="#how" className="hover:text-rust-500 transition-colors">How it works</a>
          <a href="#benefits" className="hover:text-rust-500 transition-colors">Benefits</a>
          <a href="#pricing" className="hover:text-rust-500 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-rust-500 transition-colors">FAQs</a>
          <a href="#" className="hover:text-rust-500 transition-colors">Login</a>
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-rust-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-rust-600 hover:shadow-md"
        >
          Get Started Free
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-coffee-50 to-coffee-100" />
      <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-rust-100 blur-3xl opacity-60" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-8 pb-20 md:grid-cols-2 md:items-center md:pt-12 md:pb-28 lg:pt-16 lg:pb-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rust-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-rust-700">
            <span className="h-2 w-2 rounded-full bg-rust-500 animate-pulse" />
            Trusted by 6,000+ small businesses
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-coffee-900 sm:text-5xl lg:text-6xl">
            Start selling{" "}
            <span className="relative whitespace-nowrap text-rust-500">
              gift cards
              <svg
                aria-hidden
                viewBox="0 0 200 8"
                className="absolute -bottom-2 left-0 w-full"
              >
                <path
                  d="M2 5 Q 50 1, 100 4 T 198 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            in 5 minutes.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-coffee-700">
            The #1 gift card platform for spas, salons, restaurants and service
            businesses. Free to set up. Keep 90%+ of every sale. No contracts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-rust-500 px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-rust-600 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started — It's Free
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border-2 border-coffee-800 bg-white px-7 py-3.5 text-base font-semibold text-coffee-800 transition-all hover:bg-coffee-800 hover:text-cream"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-coffee-600">
            <div className="flex items-center gap-2">
              <CheckIcon />
              No credit card
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              5-minute setup
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              Cancel anytime
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <Image
            src="/img/hero-woman.png"
            alt="Small business owner boosting sales with The Gift Card Cafe"
            width={1792}
            height={2400}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { value: "6,000+", label: "Businesses" },
    { value: "15+", label: "Years in business" },
    { value: "15%", label: "Higher avg. ticket" },
    { value: "90%+", label: "Revenue kept" },
  ];
  return (
    <section className="border-y border-coffee-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-rust-500 sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-medium uppercase tracking-wide text-coffee-600">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problems() {
  const problems = [
    {
      title: "Lost revenue",
      body: "Customers walk in, browse, and leave without buying — and you have no way to capture them later.",
    },
    {
      title: "Loyalty gaps",
      body: "Without a way to bring people back, every visit is a one-shot deal. You're rebuilding your customer base every month.",
    },
    {
      title: "Seasonal slumps",
      body: "Slow weeks crush cash flow. You need a way to sell now and have customers redeem later.",
    },
    {
      title: "High-fee platforms",
      body: "Groupon takes 50%. Other deal sites take more. You end up working harder to make less.",
    },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-rust-500">
            The hidden opportunity
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-coffee-900 sm:text-4xl md:text-5xl">
            You're leaving money on the table — every single day.
          </h2>
          <p className="mt-5 text-lg text-coffee-700">
            Most small businesses miss four big revenue sources. Here's what's costing you.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-coffee-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-rust-200 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rust-50 text-rust-500 group-hover:bg-rust-500 group-hover:text-white transition-colors">
                <XIcon />
              </div>
              <h3 className="text-lg font-bold text-coffee-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-coffee-700">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      tag: "01",
      title: "Instant prepaid sales",
      body: "Add a 'Buy Gift Card' button to your site in 5 minutes. Customers spend 15% more than the card's value. Payments deposited in 2–3 days.",
      bullets: ["5-minute setup", "+15% avg. ticket", "Fast payouts"],
    },
    {
      tag: "02",
      title: "Daily deal specials",
      body: "Run Groupon-style promotions — without the 50% cut. Create urgency, fill slow days, and keep 90%+ of every dollar.",
      bullets: ["Keep 90%+ revenue", "Built-in urgency", "Fill slow days"],
    },
    {
      tag: "03",
      title: "Loyalty & retention",
      body: "Get a pre-built promo calendar plus ready-to-send email, SMS and social templates. Bring customers back month after month.",
      bullets: ["Promo calendar", "Email + SMS templates", "Social content"],
    },
    {
      tag: "04",
      title: "Peace of mind",
      body: "15+ years in business, millions processed. Completely free signup, heroic support team. We've got your back.",
      bullets: ["15+ years experience", "Free to start", "Heroic support"],
    },
  ];
  return (
    <section id="benefits" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-rust-500">
            What you get
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-coffee-900 sm:text-4xl md:text-5xl">
            Everything you need to grow — in one place.
          </h2>
          <p className="mt-5 text-lg text-coffee-700">
            Four powerful tools, designed for spas, salons, restaurants and service businesses.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="relative overflow-hidden rounded-3xl border border-coffee-100 bg-gradient-to-br from-coffee-50 to-cream p-8 transition-all hover:border-rust-200 hover:shadow-xl"
            >
              <div className="absolute -right-6 -top-6 text-7xl font-black text-rust-100 opacity-60 select-none">
                {b.tag}
              </div>
              <h3 className="relative text-2xl font-bold text-coffee-900">
                {b.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-coffee-700">
                {b.body}
              </p>
              <ul className="relative mt-6 flex flex-wrap gap-2">
                {b.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-rust-700 shadow-sm"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Sign up for free",
      body: "Create your account in under a minute. No credit card, no contract, no risk.",
    },
    {
      n: "2",
      title: "Set up in 5 minutes",
      body: "Add your business info, customize your gift card design, and drop a button on your site.",
    },
    {
      n: "3",
      title: "Start selling",
      body: "Share the link, run a promo, watch sales roll in. Payouts hit your bank in 2–3 days.",
    },
  ];
  return (
    <section id="how" className="bg-coffee-800 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-rust-300">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Up and running in three simple steps.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rust-500 text-2xl font-extrabold text-white">
                {s.n}
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-cream/80">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Basic",
      tagline: "For businesses just getting started online",
      price: "5.95%",
      priceSuffix: "per order",
      extra: "+ $99.95 one-time setup",
      cta: "Start with Basic",
      featured: false,
      features: [
        "Instant gift certificates",
        "Physical gift cards",
        "Balance management",
        "Discounts & promotions",
        "Daily deal specials",
        "Unlimited staff access",
        "Phone & online support",
      ],
    },
    {
      name: "Pro",
      tagline: "For businesses doing $600+ per month in sales",
      price: "3.95%",
      priceSuffix: "per order",
      extra: "+ $14.95 per month",
      cta: "Choose Pro",
      featured: true,
      features: [
        "Everything in Basic, plus:",
        "Unlimited gifting at no cost",
        "Gift sending tools",
        "Payment requests",
        "Lower per-order fee",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      tagline: "For businesses doing $10,000+ per month",
      price: "Custom",
      priceSuffix: "volume pricing",
      extra: "Call 1-800-410-8103",
      cta: "Talk to sales",
      featured: false,
      features: [
        "Everything in Pro, plus:",
        "Lifetime system access",
        "Custom rate negotiation",
        "Dedicated account manager",
        "Onboarding & training",
        "White-glove support",
      ],
    },
  ];
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-rust-500">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-coffee-900 sm:text-4xl md:text-5xl">
            Simple pricing. Keep 90%+ of every sale.
          </h2>
          <p className="mt-5 text-lg text-coffee-700">
            No contracts. Cancel anytime. 30-day money-back guarantee on setup fees.
          </p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? "border-2 border-rust-500 bg-gradient-to-br from-rust-50 to-cream shadow-2xl shadow-rust-500/10 lg:-mt-4 lg:mb-4"
                  : "border border-coffee-100 bg-cream"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rust-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    <StarIcon />
                    Most popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-coffee-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-coffee-700">{plan.tagline}</p>
              </div>
              <div className="mb-6 border-y border-coffee-100 py-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-coffee-900">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-coffee-600">
                    {plan.priceSuffix}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-rust-700">
                  {plan.extra}
                </p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm ${
                      f.endsWith("plus:")
                        ? "font-semibold text-coffee-900"
                        : "text-coffee-700"
                    }`}
                  >
                    {!f.endsWith("plus:") && (
                      <span className="mt-0.5 flex-shrink-0">
                        <CheckIcon />
                      </span>
                    )}
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-bold transition-all hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-rust-500 text-white shadow-lg hover:bg-rust-600 hover:shadow-xl"
                    : "border-2 border-coffee-800 bg-white text-coffee-800 hover:bg-coffee-800 hover:text-cream"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-coffee-100 bg-coffee-50 p-6 text-center">
          <p className="text-sm text-coffee-700">
            <span className="font-bold text-coffee-900">All plans include:</span>{" "}
            no contracts · cancel anytime · 30-day money-back guarantee on setup
            fees · payouts in 2–3 business days · heroic support team
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Julie",
      role: "Spa Owner",
      quote:
        "We sold over $12K in gift cards in our first holiday season. Best decision I ever made for my business.",
    },
    {
      name: "Grace",
      role: "Restaurant Owner",
      quote:
        "Daily deals filled our slowest weekdays. We're keeping 90%+ of every sale — Groupon couldn't touch this.",
    },
    {
      name: "John",
      role: "Spa Owner",
      quote:
        "Setup took me 7 minutes. By that afternoon I had my first gift card sale. It just works.",
    },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-rust-500">
            Loved by 6,000+ owners
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-coffee-900 sm:text-4xl md:text-5xl">
            Real businesses. Real results.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-coffee-100 bg-white p-8 shadow-sm"
            >
              <div className="flex gap-1 text-rust-500">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-coffee-800">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rust-100 font-bold text-rust-700">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-coffee-900">{r.name}</div>
                  <div className="text-sm text-coffee-600">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-rust-500">
            About us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-coffee-900 sm:text-4xl md:text-5xl">
            Built by small business experts, for small business owners.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-coffee-700">
            For 15+ years we've helped thousands of spas, salons, restaurants and
            service businesses sell more, retain more customers, and grow on their own
            terms. No middlemen. No 50% cuts. No surprises.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-coffee-700">
            We built The Gift Card Cafe because we saw too many great businesses
            losing money to platforms that didn't have their back. We're on a mission
            to change that.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "15+", l: "Years building this" },
            { v: "$M+", l: "Processed safely" },
            { v: "6,000+", l: "Happy businesses" },
            { v: "5 min", l: "To get started" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-coffee-100 bg-coffee-50 p-6 text-center"
            >
              <div className="text-3xl font-extrabold text-rust-500 sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-2 text-sm font-medium text-coffee-700">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How quickly do I get paid?",
      a: "Payments are deposited directly to your bank account in 2–3 business days. No waiting weeks like other platforms.",
    },
    {
      q: "Is there a maximum gift card amount?",
      a: "The maximum gift card value is $2,500 per card. There's no limit on how many cards you can sell.",
    },
    {
      q: "What fees do you charge?",
      a: "Signup is completely free. You keep 90%+ of every sale — no 50% cuts like other deal platforms.",
    },
    {
      q: "Do I need a website to use this?",
      a: "Nope. You can share your gift card link directly via email, social media, or SMS. If you have a site, you can also drop in a 'Buy Gift Card' button in 5 minutes.",
    },
    {
      q: "Can I run promotions and daily deals?",
      a: "Absolutely. Run Groupon-style daily deals, seasonal promos, or limited-time offers — all from one dashboard, all without the 50% commission.",
    },
    {
      q: "What if I need help?",
      a: "Our heroic support team has been doing this for 15+ years. Real humans, real fast responses, ready when you need us.",
    },
  ];
  return (
    <section id="faq" className="bg-coffee-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-rust-500">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-coffee-900 sm:text-4xl md:text-5xl">
            Got questions? We've got answers.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-coffee-100 bg-white p-6 shadow-sm transition-all open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-coffee-900 list-none">
                {f.q}
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rust-50 text-rust-500 transition-transform group-open:rotate-45">
                  <PlusIcon />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-coffee-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-rust-500 to-rust-700 py-20 md:py-28"
    >
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-coffee-800/30 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to start selling gift cards?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Join 6,000+ businesses already growing with The Gift Card Cafe. Free signup,
          5-minute setup, no contracts.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-rust-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get Started — It's Free
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
          >
            Talk to sales
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <CheckIcon className="text-white" />
            No credit card
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="text-white" />
            5-minute setup
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="text-white" />
            Keep 90%+ of every sale
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-coffee-900 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/img/logo.svg"
                alt="The Gift Card Cafe"
                width={44}
                height={46}
                className="brightness-0 invert"
              />
              <span className="text-lg font-bold">The Gift Card Cafe</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
              The #1 gift card platform for spas, salons, restaurants and service
              businesses. Built by small business experts, for small business owners.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cream/90">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Tutorials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cream/90">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
              <li><a href="#" className="hover:text-white">Affiliate program</a></li>
              <li><a href="#" className="hover:text-white">Terms of service</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-sm text-cream/60">
            © {new Date().getFullYear()} The Gift Card Cafe. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-cream/60">
            <ShieldIcon />
            Secure payments · 256-bit SSL
          </div>
        </div>
      </div>
    </footer>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 text-rust-500 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8.5 12 15.3 5.3a1 1 0 0 1 1.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-rust-300" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1l1.8 5.7L17.5 8 11.8 9.8 10 15.5 8.2 9.8 2.5 8l5.7-1.3z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M11 6l4 4-4 4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-4 w-4 text-rust-300" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 1l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V4l7-3zm3.7 7.7a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 1 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
