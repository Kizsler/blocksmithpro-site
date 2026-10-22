// lib/careers-data.ts — open positions for /careers and /careers/[slug].
// To close a role, remove it from JOBS. To change pay, edit payMin/payMax and
// payLabel together so the visible range and the Google for Jobs markup match.

export type Department = "field" | "sales" | "marketing" | "operations";

export const DEPARTMENTS: { id: Department; name: string; blurb: string }[] = [
  { id: "field", name: "Field Technicians", blurb: "Hands-on work in the van and on the job site." },
  { id: "sales", name: "Sales", blurb: "Win the work and price it right." },
  { id: "marketing", name: "Marketing", blurb: "Grow our brands online and keep the phones ringing." },
  { id: "operations", name: "Operations & Office", blurb: "Keep the jobs, the crews, and the company running." },
];

export type JobSection = { heading: string; items: string[] };

export type Job = {
  slug: string;
  title: string;
  department: Department;
  type: "Full-time";
  /** Shown on the card and the job page. */
  payLabel: string;
  /** Google for Jobs salary markup. */
  payMin: number;
  payMax: number;
  payUnit: "HOUR" | "YEAR";
  /** One-line extra under the pay, e.g. expected total with commission. */
  payNote?: string;
  summary: string;
  about: string[];
  sections: JobSection[];
  /** Role-specific application fields. */
  extraQuestion?: { name: string; label: string; type: "url" | "textarea"; required?: boolean };
  experienceOptions: string[];
};

const FIELD_EXPERIENCE = ["None yet, I want to learn", "Less than 2 years", "2 to 5 years", "5+ years"];

const STANDARD_BENEFITS = [
  "Medical, dental, and vision available",
  "401(k) with company match",
  "Paid vacation and holidays",
];

export const JOBS: Job[] = [
  {
    slug: "commercial-locksmith-technician",
    title: "Commercial Locksmith Technician",
    department: "field",
    type: "Full-time",
    payLabel: "$25 to $38/hr, based on experience",
    payMin: 25,
    payMax: 38,
    payUnit: "HOUR",
    summary:
      "Install, rekey, and repair commercial door hardware, master key systems, and exit devices for offices, property managers, and industrial sites.",
    about: [
      "You'll handle commercial locksmith work for our clients across the Bay Area: offices, property management portfolios, schools, and industrial facilities. You'll work out of a fully stocked company van, running service calls on your own and joining larger installs with the crew.",
    ],
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Rekey, repair, and replace commercial locks, cylinders, and door hardware",
          "Install and service exit devices, panic bars, closers, and mortise locks",
          "Build and maintain master key systems",
          "Handle commercial lockouts and break-in repairs",
          "Keep job notes, photos, and parts used up to date in our system",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Commercial locksmith experience",
          "Valid California driver's license and a clean driving record",
          "Able to pass a background check",
          "BSIS locksmith registration, or willing to get it (we'll walk you through it)",
        ],
      },
      {
        heading: "Nice to have",
        items: [
          "Access control or electrified hardware experience (this moves you toward the top of the range)",
          "Master keying and restricted keyway experience",
        ],
      },
      { heading: "Pay and benefits", items: ["$25 to $38 per hour, based on experience", ...STANDARD_BENEFITS] },
    ],
    experienceOptions: FIELD_EXPERIENCE.slice(1),
  },
  {
    slug: "access-control-low-voltage-technician",
    title: "Access Control & Low Voltage Technician",
    department: "field",
    type: "Full-time",
    payLabel: "$28 to $40/hr, based on experience",
    payMin: 28,
    payMax: 40,
    payUnit: "HOUR",
    summary:
      "Install and service card access, electrified locks, intercoms, and low voltage wiring on commercial jobs. Access only: $28 to $38/hr. With locksmith skills too: up to $40/hr.",
    about: [
      "You'll install and service access control and electrified hardware for our commercial clients: offices, property management companies, and industrial facilities across the Bay Area. You'll work from a stocked company van, sometimes solo on service calls and sometimes with a crew on larger installs.",
    ],
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Install and terminate card readers, controllers, power supplies, door contacts, and REX devices",
          "Install and wire electrified hardware: electric strikes, maglocks, electrified exit devices, and power transfers",
          "Pull and terminate low voltage cable in commercial buildings",
          "Program and commission systems on platforms like PDK and other cloud access control systems",
          "Troubleshoot service calls and keep existing systems running",
          "Keep job notes, photos, and parts used up to date in our system",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Access control or low voltage install experience",
          "Comfortable reading door hardware schedules and wiring diagrams",
          "Valid California driver's license and a clean driving record",
          "Able to pass a background check",
          "Comfortable on ladders and working in ceilings",
        ],
      },
      {
        heading: "Nice to have",
        items: [
          "Locksmith skills (pays more): rekeying, master keying, door closers, exit devices, and commercial door hardware",
          "Manufacturer certifications",
          "Intercom and camera experience",
        ],
      },
      {
        heading: "Licensing",
        items: [
          "California requires locksmith and alarm employees to be registered with the Bureau of Security and Investigative Services (BSIS). Not registered yet? We'll walk you through it.",
        ],
      },
      {
        heading: "Pay and benefits",
        items: [
          "Access control only: $28 to $38 per hour, based on experience",
          "Access control plus locksmith skills: up to $40 per hour",
          ...STANDARD_BENEFITS,
        ],
      },
    ],
    experienceOptions: FIELD_EXPERIENCE.slice(1),
  },
  {
    slug: "safe-technician",
    title: "Safe Technician",
    department: "field",
    type: "Full-time",
    payLabel: "$25 to $38/hr, based on experience",
    payMin: 25,
    payMax: 38,
    payUnit: "HOUR",
    summary:
      "Open, repair, service, and install residential and commercial safes and vaults, including manipulation and drilling.",
    about: [
      "You'll handle safe work for homes and businesses across the Bay Area: openings, combination changes, repairs, deliveries, and bolt-down installs. You'll work from a stocked company van and take the safe calls the rest of the team can't.",
    ],
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Open locked-out safes by manipulation or drilling, then repair them",
          "Change combinations and service mechanical and electronic safe locks",
          "Deliver and bolt down residential, commercial, and drop safes",
          "Service vaults and depository safes for commercial clients",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Hands-on safe opening and service experience",
          "Valid California driver's license and a clean driving record",
          "Able to pass a background check",
          "BSIS locksmith registration, or willing to get it",
        ],
      },
      {
        heading: "Nice to have",
        items: ["Lock manipulation skills", "General commercial locksmith experience"],
      },
      { heading: "Pay and benefits", items: ["$25 to $38 per hour, based on experience", ...STANDARD_BENEFITS] },
    ],
    experienceOptions: FIELD_EXPERIENCE.slice(1),
  },
  {
    slug: "locksmith-apprentice",
    title: "Locksmith Apprentice / Trainee",
    department: "field",
    type: "Full-time",
    payLabel: "$20 to $25/hr, based on hands-on tool experience",
    payMin: 20,
    payMax: 25,
    payUnit: "HOUR",
    summary: "No experience needed. Ride with senior techs, learn the trade, and get paid while you train.",
    about: [
      "This is how you get into the trade. You'll ride along with our senior technicians, learn commercial locksmithing from the ground up, and take on more of the work yourself as you go. When you're ready, you move up to Technician.",
    ],
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Assist senior techs on service calls and installs",
          "Learn rekeying, lock repair, door hardware, and key cutting",
          "Help load, organize, and stock the van",
          "Take on your own jobs as your skills grow",
        ],
      },
      {
        heading: "What you need",
        items: [
          "No locksmith experience required",
          "Comfortable with hand and power tools (construction, handyman, or electrical work is a plus and starts you higher)",
          "Valid California driver's license and a clean driving record",
          "Able to pass a background check",
          "Reliable, on time, and ready to learn",
        ],
      },
      {
        heading: "Pay and benefits",
        items: ["$20 to $25 per hour, based on hands-on tool experience", "Paid on-the-job training", ...STANDARD_BENEFITS],
      },
    ],
    experienceOptions: FIELD_EXPERIENCE,
  },
  {
    slug: "commercial-sales-rep-estimator",
    title: "Commercial Sales Rep / Estimator",
    department: "sales",
    type: "Full-time",
    payLabel: "$70,000 to $90,000 base + uncapped commission",
    payMin: 70000,
    payMax: 90000,
    payUnit: "YEAR",
    payNote: "Expected total pay: $110,000 to $140,000+ per year (base salary + commission).",
    summary:
      "Find and win new commercial clients. Prospect property managers, facility managers, and GCs, then walk sites and quote locksmith, door hardware, and access control work. Some leads come from us. Most come from you.",
    about: [
      "This is a hunter role. Your main job is to go out and find new commercial business: property managers, facility managers, general contractors, and building owners across the Bay Area who need locksmith, door hardware, and access control work.",
      "We'll pass you the leads that come in from our website and phones, but that's the smaller part of the job. You'll build your own pipeline, open new accounts, quote the work accurately, and close it. Roughly 60% of your time goes to finding new clients, 25% to site walks and estimating, and 15% to leads we hand you.",
    ],
    sections: [
      {
        heading: "Find and open new accounts",
        items: [
          "Prospect every day: property management companies, facility managers, GCs, office parks, industrial sites, schools, medical offices, and HOAs",
          "Cold call, email, LinkedIn, and walk in. You set the meetings, not us",
          "Network where our clients are: BOMA, IREM, local chambers, and industry events",
          "Get B&B on GC bid lists and on property managers' approved vendor lists",
          "Spot bigger opportunities inside existing buildings: master key systems, access control upgrades, and full door hardware retrofits",
        ],
      },
      {
        heading: "Estimate and close",
        items: [
          "Walk sites and survey doors, hardware, and access control needs",
          "Build accurate quotes with real labor and parts, so the job makes money after it's sold",
          "Read plans and door hardware schedules for bid work",
          "Present proposals, negotiate, and close",
          "Turn one-time jobs into recurring service agreements",
          "Hand off sold jobs cleanly to our project and field teams",
        ],
      },
      {
        heading: "Track it",
        items: [
          "Log every call, meeting, quote, and deal in our CRM",
          "Own your weekly numbers on our EOS scorecard: outreach, meetings set, quotes sent, and revenue closed",
        ],
      },
      {
        heading: "What success looks like",
        items: [
          "First 30 days: ride along with our techs, learn our services and pricing, and quote your first jobs with a senior team member",
          "First 90 days: build a target list of 200 property managers, facility managers, and GCs, reach out to every one of them, and land your first 5 new commercial accounts",
          "First year: 30+ new commercial accounts and $400,000+ in closed revenue, with most of it from clients you found yourself",
        ],
      },
      {
        heading: "What you need",
        items: [
          "2+ years in locksmith, access control, door hardware, or low voltage, in the field or in sales",
          "A track record of finding your own clients, not just working inbound leads",
          "Enough technical knowledge of commercial door hardware and access control to quote a job accurately",
          "Comfortable with cold outreach, follow-up, and rejection",
          "Organized with a CRM and good at follow-through",
          "Valid California driver's license and a clean driving record",
        ],
      },
      {
        heading: "Nice to have",
        items: [
          "Existing relationships with Bay Area property managers, facility managers, or GCs",
          "Estimating from plans and door hardware schedules",
          "DHI certification",
        ],
      },
      {
        heading: "Pay and benefits",
        items: [
          "$70,000 to $90,000 base, based on experience",
          "Uncapped commission. The more you find and close, the more you make",
          "Expected total pay: $110,000 to $140,000+ per year (base salary + commission)",
          "Car allowance, with a company car after probation",
          ...STANDARD_BENEFITS,
        ],
      },
    ],
    extraQuestion: {
      name: "biggestAccount",
      label: "Biggest account you found and closed yourself",
      type: "textarea",
      required: true,
    },
    experienceOptions: ["2 to 4 years", "5 to 9 years", "10+ years"],
  },
  {
    slug: "digital-marketing-manager",
    title: "Digital Marketing Manager",
    department: "marketing",
    type: "Full-time",
    payLabel: "$75,000 to $95,000/yr, based on experience",
    payMin: 75000,
    payMax: 95000,
    payUnit: "YEAR",
    summary:
      "Run all marketing for two local brands: B&B and our sister locksmith company. Film real jobs with our techs and post short-form video to Instagram and TikTok, run Google Ads, and own SEO. Use AI tools daily for content, editing, and ads, and bring in freelancers when needed. Measured on leads.",
    about: [
      "You'll run all the marketing for B&B Locksmith & Security and our sister locksmith company. That's two local brands with one marketer who owns all of it: social media, video, Google Ads, SEO, and how we show up online.",
      "This isn't a desk job that only schedules posts. You'll go out with our techs to film real work, turn it into content, and tie everything back to one question: is the phone ringing?",
    ],
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Plan, shoot, and post short-form video for Instagram, TikTok, Facebook, YouTube Shorts, and LinkedIn for both brands",
          "Go out on job sites with our techs to capture real installs, access control work, safe jobs, and before-and-afters",
          "Run and improve our Google Ads campaigns, with a clear eye on cost per lead",
          "Own SEO for both websites: Google Business Profiles, service area pages, blog content, and review growth",
          "Use AI tools every day for scripts, captions, ad copy, editing, graphics, and research, and keep up with new tools as they come out",
          "Bring in and manage freelance editors or designers when a project needs more than you can do in-house",
          "Track leads, cost per lead, and what's working, and report the numbers every week on our scorecard",
        ],
      },
      {
        heading: "What you need",
        items: [
          "2+ years of hands-on digital marketing experience across social media, paid ads, and SEO",
          "A portfolio: accounts, videos, or campaigns you've actually run, with results. A strong portfolio counts more than years on a resume",
          "Real experience running Google Ads with a budget",
          "Strong working knowledge of AI tools for marketing, such as ChatGPT, Claude, CapCut, and Canva",
          "Comfortable shooting good video on a phone and editing it, or knowing how to get it edited fast",
          "Valid California driver's license to get to job sites",
        ],
      },
      {
        heading: "Nice to have",
        items: [
          "Marketing experience for a local service business, trades company, or B2B company",
          "Video editing in CapCut, Premiere Pro, or DaVinci Resolve",
          "Google Ads certification",
          "Experience with social scheduling and analytics tools",
        ],
      },
      { heading: "Pay and benefits", items: ["$75,000 to $95,000 per year, based on experience", ...STANDARD_BENEFITS] },
    ],
    extraQuestion: {
      name: "portfolio",
      label: "Portfolio or social accounts you've run",
      type: "url",
      required: true,
    },
    experienceOptions: ["2 to 4 years", "5 to 7 years", "8+ years"],
  },
  {
    slug: "office-administrator-dispatcher",
    title: "Office Administrator / Dispatcher",
    department: "operations",
    type: "Full-time",
    payLabel: "$20 to $29/hr, based on experience",
    payMin: 20,
    payMax: 29,
    payUnit: "HOUR",
    summary: "Answer calls, schedule techs, keep jobs moving, and handle invoicing and customer follow-up.",
    about: [
      "You're the person who keeps the day running. You'll answer the phones, get jobs scheduled, route our techs, and make sure every job gets invoiced and followed up. You'll work out of our Walnut Creek office.",
    ],
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Answer calls and emails from customers, property managers, and vendors",
          "Schedule and dispatch technicians, and adjust the day when emergencies come in",
          "Create quotes and invoices, and follow up on open jobs",
          "Keep customer and job records accurate in our system",
          "Support the team with ordering and day-to-day office tasks",
        ],
      },
      {
        heading: "What you need",
        items: [
          "Office, dispatch, or customer service experience",
          "Clear, friendly phone manner, even on a busy day",
          "Organized and comfortable juggling a lot at once",
          "Comfortable with computers, scheduling software, and email",
        ],
      },
      {
        heading: "Nice to have",
        items: ["Dispatch experience at a trades or service company", "QuickBooks or invoicing experience"],
      },
      { heading: "Pay and benefits", items: ["$20 to $29 per hour, based on experience", ...STANDARD_BENEFITS] },
    ],
    experienceOptions: ["Less than 2 years", "2 to 5 years", "5+ years"],
  },
];

export const JOBS_POSTED = "2026-10-22";

export function getJob(slug: string) {
  return JOBS.find((job) => job.slug === slug);
}

export const WHY_WORK_HERE = [
  {
    title: "Pay posted up front",
    description: "Every job lists its real pay range, so you know where you stand before you apply.",
  },
  {
    title: "Company van and tools",
    description:
      "Field techs get a fully stocked work van and the tools to do the job right. Depending on the role, some techs take their van home and head straight to their first job. Office staff work out of our Walnut Creek office.",
  },
  {
    title: "Paid training",
    description: "Learn access control, electrified hardware, and new product lines on the clock.",
  },
  {
    title: "Benefits",
    description: "Medical, dental, and vision available. 401(k) with company match. Paid vacation and holidays.",
  },
  {
    title: "Steady commercial work",
    description: "Year-round work for offices, property managers, and industrial sites. Not just lockout calls.",
  },
  {
    title: "Clear goals, no guessing",
    description: "We run on EOS. Clear roles, a weekly team meeting, and goals everyone can see.",
  },
] as const;

export const CAREER_PATH = [
  { title: "Apprentice / Trainee", description: "Ride with senior techs and learn the trade, paid." },
  { title: "Technician", description: "Run your own calls and installs in your own van." },
  { title: "Senior / Lead Tech", description: "Lead bigger jobs and train the next group." },
  { title: "Project Manager / Supervisor", description: "Run projects, crews, and client relationships." },
] as const;

export const HIRING_STEPS = [
  { title: "Apply online", description: "About 5 minutes. Works on your phone. Resume optional for field roles." },
  { title: "Quick phone call", description: "If it's a fit, we'll call you to talk about the role." },
  { title: "Interview", description: "Meet the team. Field roles talk through real jobs with us." },
  { title: "Offer and start", description: "Background check, onboarding, and you're on the team." },
] as const;
