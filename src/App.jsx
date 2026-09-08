import { useEffect, useState } from "react";
import exploreSocialLogo from "../FinalArrLogo.png";

const differentiators = [
  ["Everything in One Dashboard", "Content, upcoming posts, approvals, and published posts all in one place. So there is no need to chase for updates on emails or messages."],
  ["Approval Before Publishing", "You can review every piece of content before it goes live. This keeps the business in control of what gets published without having to manage the posting process."],
  ["No Back-and-Forth", "The dashboard makes the content schedule easy to check at any time. What is coming up, what has been approved, and what has already been posted can all be seen in one place."],
  ["Social Media, Managed Each Month", "Planning, content creation, scheduling, and publishing are handled as part of the monthly service. The dashboard provides a clear view of the work without adding another task to the day."],
];

const included = [
  ["Content Planning", "A monthly content plan built around the business."],
  ["Branded Social Posts", "Professional graphics with captions ready to publish."],
  ["Short-Form Videos services", "Reels and short videos created for social platforms."],
  ["Scheduling & Publishing", "Content scheduled and published consistently."],
  ["Facebook & Instagram Management", "Ongoing management for the selected platforms."],
  ["The Social 99 Dashboard", "Explore The Social 99 dashboard"],
];

const packageRows = [
  ["Monthly Price", "$99/month", "$199/month", "$299/month"],
  ["Graphics", "4", "8", "12"],
  ["Short-Form Videos", "2", "4", "6"],
  ["Carousels", "-", "-", "4"],
  ["Content Planning", "✓", "✓", "✓"],
  ["Captions", "✓", "✓", "✓"],
  ["Scheduling & Publishing", "✓", "✓", "✓"],
  ["Dashboard Access", "✓", "✓", "✓"],
  ["Best For", "Getting started", "Growing businesses", "Businesses needing more content"],
];

const packages = [
  ["Starter", "$99/month", "4", "2", "-", "Getting started"],
  ["Growth", "$199/month", "8", "4", "-", "Growing businesses"],
  ["Premium", "$299/month", "12", "6", "4", "Businesses needing more content"],
];

const niches = [
  ["Restaurants", "Social Media Marketing for Restaurants can turn menu items, daily specials, new dishes, dining experiences, and seasonal offers into regular content that gives people a reason to visit."],
  ["Bars", "Social Media Marketing for Bars can keep drinks, happy hours, live events, nightlife, and promotions in front of people who may want to visit."],
  ["Salons", "Haircuts, styling, coloring, treatments, nail services, special offers, and client results turned into content that keeps the salon visible."],
  ["Med Spas", "Aesthetic treatments, skincare services, treatment results, special offers, and educational content that helps potential clients learn about the services."],
  ["Pet Grooming", "Before-and-after posts, grooming services, happy pets, and seasonal promotions."],
  ["Retail & Other Small Businesses", "Products, promotions, new arrivals, and everyday business content kept consistent across social media."],
];

const moreServices = [
  ["Social Media Management", "Planning, creating, scheduling, and publishing content each month."],
  ["Short-Form Video Services", "Reels and short videos for businesses that want more video content."],
  ["Facebook & Instagram Management", "Our Facebook Management Services cover regular content, captions, scheduling, and publishing so your Facebook page stays active without you having to manage it every day."],
  ["Instagram Management Services", "Instagram Management Services cover the same regular content and publishing work, with posts and short-form video planned for how people use Instagram."],
  ["Award-Winning Websites", "Professional websites that give customers a clear place to learn more or get in touch."],
  ["Marketing for Specific Niches", "Content tailored to restaurants, bars, salons, med spas, pet groomers, and other small businesses."],
];

const guardrails = [
  ["“We tell your brand story.”", "Too vague.", "Turn your services, offers, products, and updates into useful content."],
  ["“Data-driven strategies.”", "Sounds technical without saying what happens.", "Review what performs well and use it to guide future content."],
  ["“We handle everything.”", "Doesn’t explain what “everything” means.", "Planning, captions, graphics, videos, scheduling, and publishing are handled for you."],
  ["“Custom-tailored solutions.”", "Almost every agency says it.", "Content is planned around your business, services, offers, and customers."],
  ["“Grow your online presence.”", "It could mean almost anything.", "Keep your Facebook and Instagram active with regular, relevant content."],
  ["“Boost engagement.”", "Too broad to be useful.", "Create content that encourages comments, shares, saves, and enquiries."],
  ["“Take your social media to the next level.”", "It doesn’t explain what changes.", "Replace last-minute posting with a planned monthly content schedule."],
  ["“End-to-end management.”", "Sounds corporate and unclear.", "Plan, create, schedule, and publish your content each month."],
  ["“Transform your social media.”", "No clear before-and-after.", "Keep your content planned, created, approved, and ready to publish through the Dashboard."],
];

const readiness = [
  ["✓ There’s something to promote", "A service, product, offer, event, appointment, or another reason for customers to pay attention."],
  ["✓ There’s real content to work with", "A few photos, videos, products, your space, your team, or the work happening every day."],
  ["✓ The accounts are ready", "Facebook and Instagram are set up, accessible, and connected to the right business details."],
  ["✓ Someone can approve content", "Around 30-60 minutes a week is enough to review posts and handle anything that needs the owner’s input."],
  ["✓ Customers have somewhere to go", "A phone number, booking page, website, enquiry form, or another clear next step."],
  ["✓ The website is ready", "If social media is sending people to a website, it should make it easy to understand the business and take action. Award-Winning Website Designs can help create that next step."],
  ["✓ Expectations are realistic", "Social media can support visibility and enquiries, but it cannot replace a good service, a clear offer, or a good customer experience."],
];

const process = [
  ["01. Share the Basics", "Business details, services, offers, brand information, and social media access are collected to understand what needs to be promoted."],
  ["02. Content Gets Planned", "The monthly content is planned around the business, its customers, services, and current priorities."],
  ["03. Review in the Dashboard", "Posts, captions, and creatives are added to the Social 99 Dashboard for review and approval before publishing."],
  ["04. Content Goes Live", "Approved content is scheduled and published according to the monthly plan."],
  ["05. Keep Everything on Track", "Upcoming and published content stays organized in the Dashboard, making the monthly process easy to follow."],
];

const faqs = [
  ["Which platforms does The Social 99 manage?", "We manage platforms like TikTok, Instagram, Facebook, and any other platform which help in growing the business. For small businesses, we recommend the right platform mix based on niche and country."],
  ["What do we need to get started?", "You have to share all the social media accounts, the basic photos and videos of the product/services being provided. Then the offers you currently provide. If something’s missing we will help you sort it out."],
  ["Do you work with brand‑new businesses that just opened?", "Yes, we help small businesses setting up their social media accounts, profiles, content pillars and much more. It’s easier to build and work with new businesses and build a strong system from the beginning."],
  ["How much does social media management cost?", "The Social 99 offers $99 social media marketing plans starting at $99/month, with higher plans available for businesses that need more content."],
  ["Do you offer Instagram Management Services?", "Yes. Our Instagram Management Services include content creation, captions, scheduling, and publishing to keep your Instagram active."],
  ["What if I already post sometimes but can’t stay consistent?", "That’s a common starting point. We’ll take over the planning, creation, and posting so it’s consistent every week, and we’ll use what you already like about your current content instead of starting from scratch."],
  ["Do you work with businesses that already run Google or Meta ads?", "Yes. We can focus on organic social while your ads run, or coordinate with your ads person so the messaging and offers line up. Sometimes we’ll suggest pausing or simplifying ads until your organic foundation is stronger."],
];

const blogPosts = [
  {
    slug: "social-media-engagement-to-enquiries",
    title: "Your Social Media Engagement Looks Great. So Why Isn't the Phone Ringing?",
    excerpt:
      "Getting likes but no enquiries? Engagement and conversion are two different jobs. Here are the five things usually missing from content that people enjoy but never act on.",
  },
];

const internalLinks = {
  home: "https://thesocial99.com/",
  blogs: "https://thesocial99.com/blogs",
  contentMarketing: "https://thesocial99.com/content-marketing-services",
  shortFormVideos: "https://thesocial99.com/short-form-videos-services",
  youtubeManagement: "https://thesocial99.com/youtube-management-services",
  xManagement: "https://thesocial99.com/x-twitter-management-services",
  signup: "https://thesocial99.com/signup",
  pricing: "https://thesocial99.com/pricing",
  bookCall: "https://thesocial99.com/book-a-call",
  freeTrial: "https://thesocial99.com/signup?trial=1",
  socialMediaManagement: "https://thesocial99.com/social-media-management",
  restaurants: "https://thesocial99.com/restaurants",
  bars: "https://thesocial99.com/bars",
  salons: "https://thesocial99.com/salons-and-beauty",
  medSpa: "https://thesocial99.com/med-spa",
  petGrooming: "https://thesocial99.com/pet-and-grooming",
  awardWinningWebsites: "https://thesocial99.com/award-winning-websites",
};

const nicheLinks = {
  Restaurants: internalLinks.restaurants,
  Bars: internalLinks.bars,
  Salons: internalLinks.salons,
  "Med Spas": internalLinks.medSpa,
  "Pet Grooming": internalLinks.petGrooming,
};

function TextLink({ children, href }) {
  return (
    <a className="font-semibold text-[#006fe0] underline decoration-[#006fe0]/40 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[#0059b3] hover:decoration-[#0059b3]" href={href}>
      {children}
    </a>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

function SectionShell({ children, className = "", id }) {
  return (
    <section id={id} className={`bg-white py-[60px] md:py-[80px] ${className}`}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px] 2xl:px-0">{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, children, align = "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[860px] text-center" : "max-w-[760px]"}>
      {eyebrow ? <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">{eyebrow}</p> : null}
      <h2 className="mt-[14px] text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">{title}</h2>
      {children ? <p className="mt-[16px] text-[clamp(15px,1.3vw,18px)] leading-[1.8] text-[#475467]">{children}</p> : null}
    </div>
  );
}

function CtaButton({ children, href = "#contact", variant = "primary" }) {
  const classes = variant === "primary" ? "social-btn-primary" : "social-btn-secondary";
  return (
    <a className={`group inline-flex h-[50px] items-center justify-center gap-[10px] rounded-[25px] px-[26px] text-[16px] font-medium transition-colors duration-200 mq450:h-[46px] mq450:px-[22px] mq450:text-[14.5px] ${classes}`} href={href}>
      {children}
      {variant === "primary" ? <ArrowRightIcon /> : null}
    </a>
  );
}

function BrandLink({ href = "/" }) {
  return (
    <a className="flex items-center gap-3" href={href}>
      <img className="h-[43px] w-auto mq450:h-[40px]" src={exploreSocialLogo} alt="Explore Social 99 logo" />
      <span className="whitespace-nowrap text-[22px] font-bold tracking-[-0.02em] text-[#013186] mq450:text-[19px]">
        Explore Social 99
      </span>
    </a>
  );
}

const navBase = "underline-offset-4 transition-colors duration-200 hover:text-[#013186] hover:underline";
const navActive = "text-[#013186] underline decoration-[#013186]/40 underline-offset-4 transition-colors duration-200 hover:text-[#006fe0]";

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

function Header({ current = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = current === "home";
  const links = [
    !isHome && { key: "home", label: "Home", href: "/" },
    { key: "about", label: "About", href: "/about" },
    isHome && { key: "included", label: "Included", href: "#included" },
    { key: "blogs", label: "Blogs", href: "/blogs" },
    { key: "pricing", label: "Pricing", href: isHome ? "#pricing" : "/#pricing" },
    { key: "faq", label: "FAQ", href: isHome ? "#faq" : "/#faq" },
  ].filter(Boolean);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[100] border-b border-[rgba(1,49,134,0.07)] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-[60px] 2xl:px-0">
        <BrandLink href="/" />
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-[#111] md:flex">
          {links.map(({ key, label, href }) => (
            <a className={key === current ? navActive : navBase} href={href} key={key}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a className="group hidden h-[43px] items-center gap-[10px] rounded-[25.5px] border border-[rgba(1,49,134,0.07)] bg-[rgba(188,214,255,0.37)] pl-5 pr-[14px] text-[14px] font-bold text-[#013186] transition-colors duration-200 hover:bg-[rgba(188,214,255,0.6)] md:inline-flex" href={internalLinks.bookCall}>
            Book a Call
            <ArrowRightIcon />
          </a>
          <button
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-[43px] w-[43px] items-center justify-center rounded-full border border-[rgba(1,49,134,0.07)] bg-[rgba(188,214,255,0.37)] text-[#013186] transition-colors duration-200 hover:bg-[rgba(188,214,255,0.6)] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <nav
        className={`overflow-hidden border-t border-[rgba(1,49,134,0.07)] bg-white transition-[max-height] duration-300 md:hidden ${menuOpen ? "max-h-[520px]" : "max-h-0 border-t-0"}`}
        id="mobile-nav"
      >
        <ul className="flex flex-col px-5 py-2 text-[16px] font-medium text-[#111]">
          {links.map(({ key, label, href }) => (
            <li className="border-b border-[#eef1f6] last:border-b-0" key={key}>
              <a
                className={`block py-[14px] transition-colors duration-200 ${key === current ? "font-semibold text-[#013186]" : "hover:text-[#013186]"}`}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a
              className="group inline-flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[25px] bg-[#006fe0] text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#0059b3]"
              href={internalLinks.bookCall}
              onClick={() => setMenuOpen(false)}
            >
              Book a Call
              <ArrowRightIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer className="border-t border-[rgba(1,49,134,0.07)] bg-white px-5 py-12 md:px-10 lg:px-[60px]">
      <div className="mx-auto flex max-w-[1440px] items-start justify-between gap-10 mq800:flex-col 2xl:px-0">
        <div>
          <BrandLink href="/" />
          <p className="mt-4 max-w-[320px] text-[15px] leading-[1.8] text-[#475467]">
            Social media management for small businesses, starting at $99/month.
            Planned content, regular posting, and clear approvals in one place.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-[15px] font-medium text-[#111]">
          <a className="underline-offset-4 transition-colors duration-200 hover:text-[#013186] hover:underline" href="/">Home</a>
          <a className="underline-offset-4 transition-colors duration-200 hover:text-[#013186] hover:underline" href="/about">About</a>
          <a className="underline-offset-4 transition-colors duration-200 hover:text-[#013186] hover:underline" href="/blogs">Blogs</a>
          <a className="underline-offset-4 transition-colors duration-200 hover:text-[#013186] hover:underline" href="/#pricing">Pricing</a>
          <a className="underline-offset-4 transition-colors duration-200 hover:text-[#013186] hover:underline" href="/#faq">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}

const proseP = "mt-5 text-[17px] leading-[1.9] text-[#475467]";
const proseH2 = "mt-[52px] text-[clamp(23px,2.5vw,31px)] font-semibold leading-[1.25] tracking-[-0.02em] text-black";
const proseLi = "text-[17px] leading-[1.85] text-[#475467]";

function ArticlePage() {
  const post = blogPosts[0];
  return (
    <main className="min-h-screen bg-white font-[Inter] text-[#475467]">
      <Header current="blogs" />

      <article className="bg-white pt-[54px] pb-[70px] md:pt-[70px]">
        <div className="mx-auto max-w-[820px] px-5 md:px-10 2xl:px-0">
          <nav className="flex items-center gap-2 text-[14px] font-medium text-[#7a8499]">
            <a className="underline-offset-4 transition-colors duration-200 hover:text-[#013186] hover:underline" href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a className="underline-offset-4 transition-colors duration-200 hover:text-[#013186] hover:underline" href="/blogs">Blogs</a>
          </nav>

          <h1 className="mt-[22px] text-[clamp(30px,4.2vw,50px)] font-bold leading-[1.14] tracking-[-0.028em] text-[#013186]">
            {post.title}
          </h1>

          <p className={proseP}>
            Scroll through almost any small business account and you&rsquo;ll see the same pattern. Nice photos,
            decent likes, the occasional comment saying &ldquo;love this.&rdquo; The numbers look fine.
          </p>
          <p className={proseP}>And yet enquiries stay flat.</p>
          <p className={proseP}>
            This isn&rsquo;t just a feeling. Engagement is real. It just isn&rsquo;t automatically turning into
            bookings or sales.
          </p>
          <p className={proseP}>
            Content marketing isn&rsquo;t the same as copywriting. Copywriting is built to convert. Content
            marketing is built to earn trust and build an audience over time. So a page can be doing content
            marketing correctly and still not see it show up as bookings this week, because trust-building and
            conversion are different jobs with different timelines.
          </p>
          <p className={proseP}>
            That&rsquo;s the real issue for most small businesses online. The trust-building job is getting done.
            The conversion job isn&rsquo;t.
          </p>
          <p className={proseP}>
            This is where good{" "}
            <TextLink href={internalLinks.contentMarketing}>Content Marketing Services</TextLink> actually earn
            their keep, not by posting more, but by posting the right things in the right order, on the platforms
            your customers actually use.
          </p>
          <p className={proseP}>Here&rsquo;s what&rsquo;s usually going wrong.</p>

          <h2 className={proseH2}>1. Every Post Is a Finished Result, Never a Reason to Trust You Specifically</h2>
          <p className={proseP}>
            A great-looking result tells someone the outcome is possible. It doesn&rsquo;t tell them why they
            should trust your business to deliver it for them.
          </p>
          <p className={proseP}>
            A salon shows a perfect balayage. A contractor shows a finished kitchen. A dentist shows a smile
            makeover. All impressive, but the thing a new customer is actually nervous about isn&rsquo;t whether
            the outcome is possible. It&rsquo;s whether this specific business understands what they need.
          </p>
          <p className={proseP}>
            A bit of the in-between usually does more work than another polished final shot:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-[#006fe0]">
            <li className={proseLi}>A consultation moment: &ldquo;This is what we talked through before we started&rdquo;</li>
            <li className={proseLi}>A quick clip explaining why a certain approach was chosen for this particular customer</li>
            <li className={proseLi}>A behind-the-scenes look at how the work actually gets done</li>
          </ul>
          <p className={proseP}>
            None of this needs to be polished. It works better because it looks real.
          </p>

          <h2 className={proseH2}>2. There&rsquo;s No Obvious Next Step</h2>
          <p className={proseP}>
            A great post ends. The viewer watches, feels something, and scrolls to the next thing.
          </p>
          <p className={proseP}>
            Engagement only turns into revenue if you deliberately channel it. Left alone, it just stays a nice
            number. That channeling has to happen inside the post, not somewhere the customer has to go hunting
            for it.
          </p>
          <p className={proseP}>
            This doesn&rsquo;t mean slapping &ldquo;Book Now&rdquo; or &ldquo;Order Today&rdquo; under every post.
            It means occasionally making the next step obvious and specific:
          </p>
          <blockquote className="mt-6 border-l-[3px] border-[#006fe0] pl-5 text-[17px] italic leading-[1.85] text-[#0b1f44]">
            &ldquo;This service takes about 45 minutes and starts with a quick chat. Link in bio if you&rsquo;re
            curious whether it&rsquo;d work for you.&rdquo;
          </blockquote>
          <p className={proseP}>
            Specific, low-pressure, and it answers the questions someone would actually have before reaching out:
            how long, how much effort, is this even the right fit for me.
          </p>

          <h2 className={proseH2}>3. The Content Is Made for the Ideal Customer, Not the Hesitant First-Timer</h2>
          <p className={proseP}>
            Most business content shows off the dream outcome: the shiniest result, the most dramatic
            before-and-after, the customer who clearly already trusted the process going in.
          </p>
          <p className={proseP}>
            But a lot of people scrolling aren&rsquo;t there yet. Some had a disappointing experience somewhere
            else. Some aren&rsquo;t sure if their situation is &ldquo;too complicated&rdquo; or &ldquo;not worth
            it.&rdquo; Some don&rsquo;t know what to even ask for. Some are worried about the cost before
            they&rsquo;ve even asked.
          </p>
          <p className={proseP}>
            That person isn&rsquo;t going to reach out for one impressive post alone. They need to see themselves
            somewhere in the content. A post addressing a specific concern. An explainer on what actually happens
            during a first visit. An honest answer to &ldquo;how much should I expect to pay for this.&rdquo;
          </p>
          <p className={proseP}>
            For salons looking for social media management Australia, the content should answer the questions
            potential customers have before they feel ready to book.
          </p>
          <p className={proseP}>
            If your content only ever speaks to the customer who&rsquo;s already sold, you&rsquo;re leaving out
            the one who just needs a bit more reason to trust you.
          </p>

          <h2 className={proseH2}>4. Nothing Ever Explains the &ldquo;Why&rdquo;</h2>
          <p className={proseP}>
            The point of content marketing is to educate and inform, not just to promote, because people engage
            more with content that actually helps them than with content that&rsquo;s purely trying to sell.
          </p>
          <p className={proseP}>
            The finished result is impressive. A finished result with a two-line explanation is useful, and useful
            content gets saved, shared and remembered instead of just liked in passing.
          </p>
          <p className={proseP}>Small additions make a big difference:</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-[#006fe0]">
            <li className={proseLi}>&ldquo;Why we recommended this option instead of the more obvious one&rdquo;</li>
            <li className={proseLi}>&ldquo;What this service actually includes, step by step&rdquo;</li>
            <li className={proseLi}>&ldquo;Why this approach works better for your specific situation&rdquo;</li>
          </ul>
          <p className={proseP}>
            These moments turn an account from a portfolio into something closer to a resource. The kind of page
            someone follows even before they&rsquo;re ready to buy, because it&rsquo;s actually teaching them
            something.
          </p>

          <h2 className={proseH2}>5. There&rsquo;s No Face (or Personality) Behind the Business</h2>
          <p className={proseP}>
            People don&rsquo;t just buy a service. They choose a business they feel comfortable with, especially
            for anything personal, expensive, or unfamiliar.
          </p>
          <p className={proseP}>
            If every post is product shots and finished results, there&rsquo;s no sense of who&rsquo;s actually
            behind the work. A quick clip of the owner explaining their approach. A &ldquo;day in the
            business&rdquo; story. Captions that sound like an actual person wrote them. Small things, but they go
            a long way toward making that first enquiry feel less like a gamble.
          </p>
          <p className={proseP}>
            This doesn&rsquo;t mean every owner needs to become a content creator. Even an occasional, low-effort
            personality, a caption with some real voice in it, a short intro video that only needs filming once,
            makes the account feel like a place with real people in it, not just a highlight reel.
          </p>

          <h2 className={proseH2}>Track the Metrics That Actually Matter</h2>
          <p className={proseP}>
            Small business guidance is clear on this point: likes, comments and follower counts are only a
            starting signal. The metrics that actually tell you whether content is working are calls, messages,
            website visits and enquiries. A page can be &ldquo;performing well&rdquo; by every social metric and
            still not be doing its job for the business.
          </p>
          <p className={proseP}>
            So the real audit isn&rsquo;t &ldquo;are people engaging with this.&rdquo; It&rsquo;s &ldquo;are the
            people who engage with this ever turning into someone who reaches out.&rdquo; If the answer is no, the
            content itself is usually the first place to look, not the algorithm.
          </p>

          <h2 className={proseH2}>What Actually Moves Someone From &ldquo;Nice Post&rdquo; to &ldquo;Let Me Reach Out&rdquo;</h2>
          <p className={proseP}>
            None of this means ditching your best-performing content. Those posts genuinely work and should stay a
            core part of the mix. The shift is in what surrounds them:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-[#006fe0]">
            <li className={proseLi}>A little bit of the in-between, not just the reveal</li>
            <li className={proseLi}>
              <TextLink href={internalLinks.shortFormVideos}>Short-form videos</TextLink> that show the process,
              answer common questions, or give people a feel for the experience
            </li>
            <li className={proseLi}>One clear, low-pressure next step every so often</li>
            <li className={proseLi}>Content that speaks to the hesitant first-timer, not just the customer who&rsquo;s already convinced</li>
            <li className={proseLi}>Small explanations of the &ldquo;why,&rdquo; not just the &ldquo;wow&rdquo;</li>
            <li className={proseLi}>Some actual personality behind the work</li>
          </ul>
          <p className={proseP}>
            Engagement tells you people like watching. Enquiries tell you people trust you enough to take the next
            step.
          </p>
          <p className={proseP}>
            Getting more of the second usually isn&rsquo;t about posting more. It&rsquo;s about giving people what
            they actually need to say yes.
          </p>

          <h2 className={proseH2}>Not Every Platform Needs the Same Thing From You</h2>
          <p className={proseP}>
            Most small business owners don&rsquo;t have time to sit down and figure out what belongs where, so
            everything ends up posted everywhere in roughly the same format. That&rsquo;s usually a mistake.
          </p>
          <p className={proseP}>
            Instagram is still doing most of the heavy lifting for small businesses. It&rsquo;s where the visual
            results, reels, stories and behind-the-scenes moments from earlier in this piece actually belong, and
            Instagram Management Services tend to be the first thing worth getting right.
          </p>
          <p className={proseP}>
            Facebook still matters more than people expect, particularly for reaching local, slightly older
            customers who find businesses through reviews and community groups rather than hashtags. Facebook
            Management Services can pick up that side of things.
          </p>
          <p className={proseP}>
            TikTok is where process videos and satisfying transformations travel furthest, often reaching people
            who&rsquo;ve never heard of you before. TikTok Management Services can be built specifically for that.
          </p>
          <p className={proseP}>
            YouTube works differently. Longer, explainer-style content is better suited to winning over the
            hesitant first-timer than a fifteen-second clip is, which is where{" "}
            <TextLink href={internalLinks.youtubeManagement}>YouTube Social Media Management</TextLink> comes in.
          </p>
          <p className={proseP}>
            LinkedIn is rarely about direct customers for a small business, but it&rsquo;s worth having if
            you&rsquo;re hiring or building a local reputation, and LinkedIn Social Media Management can keep it
            ticking along without much attention.
          </p>
          <p className={proseP}>
            X plays a smaller role for most small businesses these days, mostly useful for quick updates or
            customer service, so <TextLink href={internalLinks.xManagement}>X Social Media Management</TextLink>{" "}
            is usually a lighter-touch addition rather than a priority.
          </p>

          <h2 className={proseH2}>If Your Engagement Looks Good but Your Calendar Doesn&rsquo;t</h2>
          <p className={proseP}>
            Chances are the fix isn&rsquo;t a full rebuild of your content. It&rsquo;s usually smaller than that,
            more about what surrounds the posts you&rsquo;re already making than replacing them.
          </p>
          <p className={proseP}>
            The Social 99 runs a <TextLink href={internalLinks.home}>$99 social media</TextLink> marketing plan for
            businesses who want that kind of consistent, done-for-you content without jumping straight into a
            bigger package.
          </p>
          <p className={proseP}>
            Book a call and we&rsquo;ll talk through what&rsquo;s actually happening with your content.
          </p>
          
          <div className="mt-[38px] flex flex-wrap items-center gap-4">
            <CtaButton href={internalLinks.bookCall}>Book a Call</CtaButton>
            <a className="social-btn-secondary inline-flex h-[50px] items-center justify-center gap-[10px] rounded-[25px] px-[26px] text-[16px] font-semibold transition-colors duration-200 mq450:h-[46px] mq450:px-[22px] mq450:text-[14.5px]" href="/blogs">
              Back to all articles
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

const aboutPageWrap = "ml-[100px] max-w-[1100px] mq1350:ml-[80px] mq800:ml-0";
const aboutHeroWrap = "ml-[100px] max-w-[920px] mq1350:ml-[80px] mq800:ml-0";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const isAboutPage = path === "/about";
  const isBlogsPage = path === "/blogs";
  const isArticlePage = path === `/${blogPosts[0].slug}`;

  const meta = {
    "/about": {
      title: "About Explore Social 99 | The Social 99",
      description:
        "Learn about Explore Social 99 and how it helps small businesses keep social media active with clear monthly content support.",
      canonical: "https://exploresocial99.com/about",
    },
    "/social-media-engagement-to-enquiries": {
      title: "Social Media Engagement Not Converting? Explore Social 99 Can Help",
      description:
        "Getting likes but no enquiries? Explore Social 99 helps turn social media engagement into real bookings and sales. Book a quick strategy call today.",
      canonical: "https://exploresocial99.com/social-media-engagement-to-enquiries",
    },
    "/blogs": {
      title: "Blog | Social Media Insights for Small Businesses | Explore Social 99",
      description:
        "Practical articles on social media management, short-form video, and content planning for small businesses. Written to clarify how strong execution is built.",
      canonical: "https://exploresocial99.com/blogs",
    },
    "/": {
      title: "Explore Social 99 | Social Media Management Starting at $99",
      description:
        "Grow your brand with Explore Social 99’s affordable social media management services. Boost engagement, build your presence, and get started today!",
      canonical: "https://exploresocial99.com/",
    },
  };

  const { title: pageTitle, description: pageDescription, canonical: canonicalUrl } = meta[path] ?? meta["/"];
  const pageKeywords = "Social Media Management for Small Business, $99 Social Media Marketing, Facebook Management Services, Instagram Management Services, Short Form Video Services, Social Media Marketing for Restaurants, Social Media Marketing for Bars, Award Winning Websites";

  document.title = pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", pageDescription);
  document.querySelector('meta[name="keywords"]')?.setAttribute("content", pageKeywords);
  document.querySelector('meta[name="robots"]')?.setAttribute("content", "index, follow");
  document.querySelector('meta[name="author"]')?.setAttribute("content", "Explore Social 99");
  document.querySelector('meta[name="publisher"]')?.setAttribute("content", "Explore Social 99");
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", pageDescription);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
  document.querySelector('meta[property="og:type"]')?.setAttribute("content", isArticlePage ? "article" : "website");
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", pageTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", pageDescription);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", pageTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", pageDescription);

  if (isArticlePage) {
    return <ArticlePage />;
  }

  if (isBlogsPage) {
    return (
      <main className="min-h-screen bg-white font-[Inter] text-[#475467]">
        <Header current="blogs" />

        <section className="bg-white pt-[70px] pb-[50px] md:pt-[90px]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px] 2xl:px-0">
            <p className="text-center text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">The Blog</p>
            <h1 className="mx-auto mt-[16px] max-w-[1100px] text-center text-[clamp(38px,6vw,86px)] font-bold leading-[1.05] tracking-[-0.03em] text-[#013186]">
              Insights that Shape Execution
            </h1>
            <p className="mx-auto mt-[22px] max-w-[820px] text-center text-[clamp(16px,1.4vw,20px)] leading-[1.7] text-[#475467]">
              Our blog shares structured perspectives on digital work, content systems, and brand
              consistency. Each article is written to clarify how strong execution is built, not improvised.
            </p>
          </div>
        </section>

        <section className="bg-white pb-[80px]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px] 2xl:px-0">
            <div className="flex flex-wrap gap-6">
              {blogPosts.map(({ slug, title, excerpt }) => (
                <article
                  className="flex w-full max-w-[420px] flex-col rounded-[18px] border border-[#e7eaf0] bg-[#f5f9ff] p-5 shadow-[0_18px_50px_rgba(16,24,40,0.08)] transition-transform duration-200 hover:-translate-y-[3px]"
                  key={slug}
                >
                  <div className="flex min-h-[220px] items-center justify-center rounded-[14px] bg-white p-6">
                    <h2 className="text-center text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-[#013186]">
                      {title}
                    </h2>
                  </div>
                  <h3 className="mt-6 text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-[#013186]">
                    {title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-[1.75] text-[#475467]">{excerpt}</p>
                  <div className="mt-6">
                    <a
                      className="group inline-flex h-[46px] items-center justify-center gap-[10px] rounded-[10px] bg-[#013186] px-[22px] text-[15px] font-bold text-white transition-colors duration-200 hover:bg-[#012270]"
                      href={`/${slug}`}
                    >
                      Read More
                      <ArrowRightIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  if (isAboutPage) {
    return (
      <main className="min-h-screen bg-white font-[Inter] text-[#475467]">
        <Header current="about" />

        <section className="bg-white py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px] 2xl:px-0">
            <div className={aboutHeroWrap}>
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">About Explore Social 99</p>
              <h1 className="mt-[16px] text-[clamp(30px,3.8vw,54px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">About Explore Social 99</h1>
              <div className="mt-[28px] space-y-5 text-[17px] leading-[1.9] text-[#475467]">
                <p><TextLink href="/">Explore Social 99</TextLink> started because good small businesses kept going quiet online. Not from lack of quality. From lack of time.</p>
                <p>We saw the same pattern over and over. A restaurant posts its specials for a week, then nothing for a month. A salon has genuinely great before-and-after photos sitting untouched in a camera roll. A bar throws a solid event and barely anyone shows up, because nobody posted it anywhere.</p>
                <p>We started Explore Social 99 to fix that, without asking the owner to burn their evenings on Instagram.</p>
              </div>
            </div>
          </div>
        </section>

        <SectionShell className="pt-[20px]">
          <div className={aboutPageWrap}>
            <SectionIntro eyebrow="What We Believe In" title="What We Believe In" align="left" />
            <div className="mt-[34px] grid grid-cols-3 gap-5 mq800:grid-cols-1">
              <article className="rounded-[18px] border border-[#e7eaf0] bg-white p-[26px] shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#eaf1ff] text-[#013186]"><CheckIcon /></span>
                <p className="mt-5 text-[17px] leading-[1.85] text-[#475467]">Your content should look like your business, not a template. It should reflect what you actually sell, who walks through your door, and what's genuinely happening that week.</p>
              </article>
              <article className="rounded-[18px] border border-[#e7eaf0] bg-[#f8fafc] p-[26px] shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-[#013186]"><CheckIcon /></span>
                <p className="mt-5 text-[17px] leading-[1.85] text-[#475467]">You should also know exactly what you're paying for and what's getting done. That's why we keep things simple, with clear deliverables and no guessing about where your money's going.</p>
              </article>
              <article className="rounded-[18px] border border-[#013186]/10 bg-[#013186] p-[26px] shadow-[0_20px_50px_rgba(1,49,134,0.25)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white/12 text-white"><CheckIcon /></span>
                <p className="mt-5 text-[17px] leading-[1.85] text-white/85">Consistency matters more than frequency. You don't need a post every day. You need a schedule you can actually stick to, so your page doesn't disappear for weeks at a stretch.</p>
              </article>
            </div>
          </div>
        </SectionShell>

        <SectionShell className="pt-[20px]">
          <div className={aboutPageWrap}>
            <SectionIntro eyebrow="The Process" title="The Process">
              Tell us about your business, share the important information, or anything specific goal that you have in mind.
            </SectionIntro>
            <div className="mt-[40px] flex items-stretch gap-4 mq800:flex-col">
              <article className="flex-1 rounded-[16px] border border-[#eef1f6] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">From there we take the process further.</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#475467]">We plan calendars, handle the posting and create content around your business.</p>
              </article>
              <div className="flex items-center justify-center text-[#006fe0] mq800:rotate-90">
                <ArrowRightIcon />
              </div>
              <article className="flex-1 rounded-[16px] border border-[#eef1f6] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">Nothing goes live without your approvals, you can review the work at any stage.</h3>
              </article>
              <div className="flex items-center justify-center text-[#006fe0] mq800:rotate-90">
                <ArrowRightIcon />
              </div>
              <article className="flex-1 rounded-[16px] border border-[#eef1f6] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">Want to change anything?</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#475467]">Just contact the team.</p>
              </article>
            </div>
          </div>
        </SectionShell>

        <SectionShell className="pt-[20px]">
          <div className={`${aboutPageWrap} overflow-hidden rounded-[24px] border border-[rgba(1,49,134,0.08)] bg-white shadow-[0_30px_80px_-24px_rgba(1,49,134,0.30)]`}>
            <div className="grid grid-cols-2 mq800:grid-cols-1">
              <article className="border-r border-[#e7eaf0] p-[34px] mq800:border-r-0 mq800:border-b mq450:p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Small businesses</p>
                <h2 className="mt-3 text-[clamp(22px,3vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em] text-black">Who We Work With</h2>
                <p className="mt-[16px] text-[17px] leading-[1.9] text-[#475467]">Explore social 99 work with small businesses. From small to growing businesses or single entrepreneurs, we handle social media for all.  We create engaging content and give the audience a reason to make the action. Even if you are going to start a business we can help you with content strategy, get your social profiles ready.</p>
              </article>
              <article className="bg-[#f5f9ff] p-[34px] mq450:p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Clear deliverables</p>
                <h2 className="mt-3 text-[clamp(22px,3vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em] text-black">Our Promise</h2>
                <p className="mt-[16px] text-[17px] leading-[1.9] text-[#475467]">You just have to fill a form, and after that we take it forward. We focus on content that fits your business and industry. We assure no generic content, no video templates. Everything started with a new approach to make the content special.  The prices start with $99. No long term contract.</p>
              </article>
            </div>
          </div>
        </SectionShell>

        <section className="bg-white pb-[80px]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px] 2xl:px-0">
            <div className="relative overflow-hidden rounded-[28px] px-[56px] py-[80px] text-center shadow-[0_44px_100px_-32px_rgba(6,26,74,0.6),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.2)] mq450:rounded-[22px] mq450:px-[22px] mq450:py-[46px] mq800:px-[32px] mq800:py-[56px] mq1125:px-[44px] mq1125:py-[68px] [background:radial-gradient(120%_130%_at_22%_12%,#2870d8_0%,#1146a5_42%,#061a4a_100%)]">
              <h2 className="mx-auto max-w-[900px] text-[clamp(30px,3.8vw,56px)] font-bold leading-[1.08] tracking-[-0.028em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.25)]">Ready to Work Together?</h2>
              <p className="mx-auto mt-[20px] max-w-[760px] text-[clamp(14px,1.1vw,16px)] leading-[1.8] text-white/75">If social media keeps getting pushed to the bottom of your to-do list, The Social 99 can take care of the regular work for you.</p>
              <p className="mx-auto mt-[12px] max-w-[760px] text-[clamp(14px,1.1vw,16px)] leading-[1.8] text-white/75">You share the details about your business, services, products, and offers. We handle the content planning, creation, scheduling, and publishing, while you stay in control of what goes live.</p>
              <p className="mx-auto mt-[12px] max-w-[760px] text-[clamp(14px,1.1vw,16px)] leading-[1.8] text-white/75">Plans start at $99/month, with no setup fees or long-term contracts.</p>
              <p className="mx-auto mt-[12px] max-w-[760px] text-[clamp(14px,1.1vw,16px)] leading-[1.8] text-white/75">You run your business. We help keep your social media active.</p>
              <div className="mt-[38px] flex justify-center gap-[14px] mq450:flex-col">
                <a className="social-dark-primary inline-flex h-[56px] items-center justify-center rounded-full bg-white px-[32px] text-[15px] font-semibold shadow-[0_14px_36px_-10px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.9)] transition-transform duration-200 hover:-translate-y-[1px]" href={internalLinks.bookCall}>Book a Call</a>
                <a className="social-dark-secondary inline-flex h-[56px] items-center justify-center rounded-full border border-white/30 bg-white/8 px-[32px] text-[15px] font-medium backdrop-blur-sm transition-colors duration-200 hover:border-white/50 hover:bg-white/15" href={internalLinks.freeTrial}>Start Free Trial</a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white font-[Inter] text-[#475467]">
      <Header current="home" />

      <section id="top" className="bg-white py-[50px] md:pt-[80px] md:pb-[70px]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px] 2xl:px-0">
          <div className="flex items-start gap-[54px] mq1350:gap-[40px] mq1125:gap-[30px] mq800:flex-col mq800:gap-[40px]">
            <div className="flex-[1.05] mq800:w-full">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Exploresocial99</p>
              <h1 className="mt-[16px] max-w-[760px] text-[clamp(30px,3.8vw,54px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">
                Social Media Management for Small Businesses, Starting at <span className="text-[#006fe0]">$99/month</span>
              </h1>
              <p className="mt-[20px] max-w-[620px] text-[18px] font-semibold leading-[1.7] text-black">As a small business owner your business is busy. Your social media shouldn’t be.</p>
              <p className="mt-[14px] max-w-[620px] text-[17px] leading-[1.9] text-[#475467]">
                The Social 99 provides consistent{" "}
                <TextLink href={internalLinks.socialMediaManagement}>social media management</TextLink>{" "}
                that needs consistent content without another task on the to-do list.
              </p>
              <p className="mt-[12px] max-w-[620px] text-[17px] leading-[1.9] text-[#475467]">Get your social media platforms managed with planned content and regular posting.</p>
              <div className="mt-[28px] flex flex-wrap items-center gap-4">
                <CtaButton href={internalLinks.pricing}>Get Started</CtaButton>
                <a className="social-btn-secondary inline-flex h-[50px] items-center justify-center gap-[10px] rounded-[25px] px-[26px] text-[16px] font-semibold transition-colors duration-200 mq450:h-[46px] mq450:px-[22px] mq450:text-[14.5px]" href={internalLinks.signup}>
                  Starting from $99 /month.
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
            <div className="flex-1 mq800:w-full">
              <div className="rounded-[18px] border border-[#e7eaf0] bg-white p-[26px] shadow-[0_18px_50px_rgba(16,24,40,0.08)] mq450:p-4">
                <div className="rounded-[16px] bg-[#f5f9ff] p-6">
                  <a className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#013186] underline decoration-[#013186]/40 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[#006fe0] hover:decoration-[#006fe0]" href={internalLinks.signup}>The Social 99 Dashboard</a>
                  <div className="mt-6 grid gap-4">
                    {["Content", "Upcoming posts", "Approvals", "Published posts"].map((item) => (
                      <div className="flex items-center gap-4 rounded-[14px] border border-[#e3e9f5] bg-white p-4" key={item}>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#eaf1ff] text-[#013186]"><CheckIcon /></span>
                        <h2 className="text-[16px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#0b1f44]">{item}</h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <SectionIntro eyebrow="What makes The Social 99 different?" title="What makes The Social 99 different?">
          The Social 99 is not just about creating and posting content. It gives a small business a simple way to see, review, and keep track of their social media accounts without chasing for updates.
        </SectionIntro>
        <div className="mt-[46px] grid grid-cols-4 gap-5 mq1125:grid-cols-2 mq800:grid-cols-1">
          {differentiators.map(([title, text]) => (
            <article className="rounded-[18px] border border-[#e7eaf0] bg-white p-[26px] shadow-[0_18px_50px_rgba(16,24,40,0.08)]" key={title}>
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#eaf1ff] text-[#013186]"><CheckIcon /></span>
              <h3 className="mt-5 text-[clamp(20px,2.4vw,25px)] font-semibold leading-[1.3] tracking-[-0.02em] text-black">{title}</h3>
              <p className="mt-[12px] text-[15px] leading-[1.75] text-[#475467]">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-[30px] text-center text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">Managed behind the scenes. Clear in the dashboard.</p>
        <div className="mt-[24px] text-center"><CtaButton href={internalLinks.signup}>Sign in now!</CtaButton></div>
      </SectionShell>

      <SectionShell id="included" className="pt-[20px]">
        <div className="grid grid-cols-[0.85fr_1.15fr] gap-[54px] mq800:grid-cols-1 mq800:gap-[40px]">
          <SectionIntro eyebrow="Monthly services" title="What’s Included in The Social 99 monthly services?" align="left">
            Our social media management for small business service covers the regular work needed to keep your accounts active each month.
          </SectionIntro>
          <div>
            <p className="mb-5 text-[18px] font-semibold leading-[1.7] text-black">Everything needed to keep social media active each month:</p>
            <div className="grid grid-cols-2 gap-4 mq450:grid-cols-1">
              {included.map(([title, text]) => (
                <div className="rounded-[16px] border border-[#eef1f6] p-6 mq450:p-4" key={title}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#eaf1ff] text-[#013186]"><CheckIcon /></span>
                  <h3 className="mt-4 text-[18px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">
                    {title === "The Social 99 Dashboard" ? <TextLink href={internalLinks.signup}>{title}</TextLink> : title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.75] text-[#475467]">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[15px] leading-[1.75] text-[#475467]">Review upcoming content, approve posts, and track published content in one place.</p>
            <p className="mt-3 text-[18px] font-semibold leading-[1.7] text-black">One monthly service. One dashboard. No daily posting to manage.</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="pricing" className="pt-[20px]">
        <SectionIntro eyebrow="Packages" title="The Social 99 Packages for Small businesses" />
        <div className="mx-auto mt-[46px] max-w-[960px] overflow-hidden rounded-[18px] border border-[#e7eaf0] bg-white shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
          <div className="grid grid-cols-4 bg-[#013186] text-white mq800:hidden">
            <div className="p-5 text-[13px] font-bold uppercase tracking-[0.06em]">Plan</div>
            {["Starter", "Growth", "Premium"].map((plan) => <div className="p-5 text-center text-[20px] font-semibold tracking-[-0.02em]" key={plan}>{plan}</div>)}
          </div>
          <div className="hidden mq800:block">
            {packages.map(([name, price, graphics, videos, carousels, bestFor]) => (
              <article className="border-b border-[#eef1f6] p-5 last:border-b-0" key={name}>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-black">{name}</h3>
                <p className="mt-2 text-[28px] font-bold text-[#013186]">{price}</p>
                <p className="mt-4 text-[15px] leading-[1.8] text-[#475467]">Graphics: {graphics} · Short-Form Videos: {videos} · Carousels: {carousels}</p>
                <p className="mt-2 text-[14px] font-semibold text-[#0b1f44]">Best For: {bestFor}</p>
              </article>
            ))}
          </div>
          <div className="mq800:hidden">
            {packageRows.map((row) => (
              <div className="grid grid-cols-4 border-t border-[#eef1f6] first:border-t-0" key={row[0]}>
                {row.map((cell, index) => <div className={`p-5 text-[14px] leading-[1.6] ${index === 0 ? "font-bold text-[#0b1f44]" : "text-center text-[#475467]"}`} key={`${row[0]}-${cell}-${index}`}>{cell}</div>)}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-[24px] text-center text-[13px] font-medium uppercase tracking-[0.16em] text-[#7a8499]">No setup fee • Month-to-month • Cancel anytime</p>
      </SectionShell>

      <SectionShell className="pt-[20px]">
        <SectionIntro eyebrow="Built for Businesses Like Yours" title="Built for Businesses Like Yours" />
        <div className="mt-[46px] grid grid-cols-3 gap-5 mq1125:grid-cols-2 mq800:grid-cols-1">
          {niches.map(([title, text]) => (
            <article className="rounded-[18px] border border-[#e7eaf0] bg-white p-[26px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]" key={title}>
              <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">
                {nicheLinks[title] ? <TextLink href={nicheLinks[title]}>{title}</TextLink> : title}
              </h3>
              <p className="mt-[12px] text-[15px] leading-[1.75] text-[#475467]">{text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-[20px]">
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[54px] mq800:grid-cols-1 mq800:gap-[40px]">
          <div className="max-w-[760px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">More Than Just Social Media Posts</p>
            <h2 className="mt-[14px] text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">More Than Just Social Media Posts</h2>
            <p className="mt-[16px] text-[clamp(15px,1.3vw,18px)] leading-[1.8] text-[#475467]">
              <TextLink href={internalLinks.home}>$99 Social Media Marketing</TextLink> gives small businesses a simple starting point for staying active online. Along with regular social media management, there are options for short-form videos, Facebook and Instagram management, website design, and marketing for specific business niches.
            </p>
          </div>
          <div className="rounded-[22px] border border-[#e7eaf0] bg-white p-[26px] shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
            {moreServices.map(([title, text]) => (
              <div className="border-b border-[#e7eaf0] py-5 first:pt-0 last:border-b-0 last:pb-0" key={title}>
                <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">
                  {title === "Award-Winning Websites" ? <TextLink href={internalLinks.awardWinningWebsites}>{title}</TextLink> : title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#475467]">{text}</p>
              </div>
            ))}
            <p className="mt-6 text-[15px] leading-[1.75] text-[#475467]">The Social 99 also offers short-form videos, Facebook and Instagram management, Google Ads Management, website design, and marketing support for specific business niches.</p>
            <p className="mt-3 text-[18px] font-semibold leading-[1.7] text-black">Starting at $99/month, with more ways to keep the whole online presence moving.</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-[20px]">
        <SectionIntro eyebrow="The Social 99 is expanding around the world" title="The Social 99 is expanding around the world">
          From small businesses in USA, Canada to businesses in UK & Australia, The Social 99 is expanding its social media services to other countries. Social media management for small businesses in canada is now part of that growing reach.
        </SectionIntro>
        <div className="mx-auto mt-[24px] max-w-[820px] text-center">
          <p className="text-[17px] leading-[1.9] text-[#475467]">The aim isn’t to fill a calendar with ordinary posts, it’s about keeping useful, relevant content going live consistently.</p>
          <p className="mt-3 text-[17px] leading-[1.9] text-[#475467]">The Social 99 dashboard everything stays in one place, from upcoming content to approvals and published posts.</p>
        </div>
      </SectionShell>

      <SectionShell className="pt-[20px]">
        <SectionIntro eyebrow="Anti-Generic Copy Guardrails for The Social 99" title="The Social 99: No Generic Marketing Talk" />
        <div className="mx-auto mt-[46px] max-w-[1100px] overflow-hidden rounded-[18px] border border-[#e7eaf0] bg-white shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
          <div className="grid grid-cols-3 bg-[#f8fafc] text-[13px] font-bold uppercase tracking-[0.06em] text-[#0b1f44] mq800:hidden">
            <div className="p-5">Avoid</div>
            <div className="p-5">Why it feels generic</div>
            <div className="p-5">Say it more clearly</div>
          </div>
          {guardrails.map(([avoid, why, clear]) => (
            <div className="grid grid-cols-3 border-t border-[#eef1f6] mq800:grid-cols-1" key={avoid}>
              <div className="p-5 text-[14px] font-semibold leading-[1.7] text-black">{avoid}</div>
              <div className="p-5 text-[14px] leading-[1.7] text-[#475467]">{why}</div>
              <div className="p-5 text-[14px] leading-[1.7] text-[#475467]">{clear}</div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-[24px] max-w-[820px] text-center text-[17px] leading-[1.9] text-[#475467]">Learn more about <TextLink href={internalLinks.home}>Explore Social 99</TextLink> and how it helps small businesses stay consistent with their social media.</p>
      </SectionShell>

      <SectionShell className="pt-[20px]">
        <div className="rounded-[22px] border border-[#e7eaf0] bg-[#f8fafc] p-[32px] mq450:p-5">
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-[44px] mq800:grid-cols-1">
            <SectionIntro eyebrow="Is Your Business Ready for Social Media Management?" title="Is Your Business Ready for Social Media Management?" align="left">
              Before handing social media over to someone else, a few things should already be in place.
            </SectionIntro>
            <div className="grid gap-3">
              {readiness.map(([title, text]) => (
                <div className="rounded-[14px] border border-[#e3e9f5] bg-white p-4" key={title}>
                  <h3 className="text-[16px] font-semibold leading-[1.4] tracking-[-0.02em] text-black">{title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-[#475467]">
                    {title === "✓ The website is ready" ? (
                      <>
                        If social media is sending people to a website, it should make it easy to understand the business and take action.{" "}
                        <TextLink href={internalLinks.awardWinningWebsites}>Award-Winning Website Designs</TextLink> can help create that next step.
                      </>
                    ) : (
                      text
                    )}
                  </p>
                </div>
              ))}
              <p className="mt-2 text-[18px] font-semibold leading-[1.7] text-black">Most boxes checked? The regular social media work is probably ready to be handed off.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-[20px]">
        <SectionIntro eyebrow="How The Social 99 Process Works" title="How The Social 99 Process Works" />
        <div className="mt-[46px] grid grid-cols-5 gap-4 mq1125:grid-cols-3 mq800:grid-cols-1">
          {process.map(([title, text]) => (
            <article className="rounded-[16px] border border-[#eef1f6] p-6" key={title}>
              <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.02em] text-black">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-[#475467]">{text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="faq" className="pt-[20px]">
        <SectionIntro eyebrow="FAQ" title="FAQ" />
        <div className="mx-auto mt-[46px] max-w-[1094px] overflow-hidden rounded-[22px] border border-[#cbcbcb] bg-white">
          {faqs.map(([question, answer], index) => (
            <details className="group border-t border-[#ececec] first:border-t-0" key={question}>
              <summary className="flex cursor-pointer list-none items-center gap-[24px] px-[36px] py-[28px] text-left mq450:px-4 mq450:py-5">
                <span className="w-[24px] shrink-0 text-[14px] font-medium text-[#aaa]">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-[17px] font-semibold leading-[1.4] text-black mq450:text-[14px]">{question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e7eaf0] text-black group-open:text-[#c9ced8]">+</span>
              </summary>
              <p className="pb-[28px] pl-[84px] pr-[70px] text-[14px] leading-[1.7] text-[#777] mq450:pl-[40px] mq450:pr-4">{answer}</p>
            </details>
          ))}
        </div>
      </SectionShell>

      <section className="bg-white pb-[80px]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px] 2xl:px-0">
          <div className="relative overflow-hidden rounded-[28px] px-[56px] py-[80px] text-center shadow-[0_44px_100px_-32px_rgba(6,26,74,0.6),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.2)] mq450:rounded-[22px] mq450:px-[22px] mq450:py-[46px] mq800:px-[32px] mq800:py-[56px] mq1125:px-[44px] mq1125:py-[68px] [background:radial-gradient(120%_130%_at_22%_12%,#2870d8_0%,#1146a5_42%,#061a4a_100%)]">
            <h2 className="mx-auto max-w-[900px] text-[clamp(30px,3.8vw,56px)] font-bold leading-[1.08] tracking-[-0.028em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.25)]">Let’s Get Your Social Media Sorted.</h2>
            <p className="mx-auto mt-[20px] max-w-[760px] text-[clamp(14px,1.1vw,16px)] leading-[1.8] text-white/75">You don’t need to plan every post, write every caption, or spend your evenings trying to keep up with social media. Share your business details, offers, and basic content, and Explore The Social 99 takes care of the regular work.</p>
            <p className="mx-auto mt-[12px] max-w-[760px] text-[clamp(14px,1.1vw,16px)] leading-[1.8] text-white/75">From planning and content creation to scheduling and publishing, everything stays organized in one place.</p>
            <p className="mx-auto mt-[12px] max-w-[760px] text-[clamp(14px,1.1vw,16px)] leading-[1.8] text-white/75">Plans start at $99/month.</p>
            <div id="contact" className="mt-[38px] flex justify-center gap-[14px] mq450:flex-col">
              <a className="social-dark-primary inline-flex h-[56px] items-center justify-center rounded-full bg-white px-[32px] text-[15px] font-semibold shadow-[0_14px_36px_-10px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.9)] transition-transform duration-200 hover:-translate-y-[1px]" href={internalLinks.bookCall}>Book a Call</a>
              <a className="social-dark-secondary inline-flex h-[56px] items-center justify-center rounded-full border border-white/30 bg-white/8 px-[32px] text-[15px] font-medium backdrop-blur-sm transition-colors duration-200 hover:border-white/50 hover:bg-white/15" href={internalLinks.freeTrial}>Start Free Trial</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
