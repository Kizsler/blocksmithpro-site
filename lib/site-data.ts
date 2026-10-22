// lib/site-data.ts

export const CONTACT = {
  phone1: "415-423-0182",
  phone2: "925-266-3393",
  email: "office@blocksmithpro.com",
  address: "1449 SOS Drive, Walnut Creek CA 94597",
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/bblocksmith/",
  facebook: "https://www.facebook.com/bblocksmith/",
  youtube: "https://www.youtube.com/@bblocksmith",
  linkedin: "https://www.linkedin.com/company/bb-locksmith-and-security",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
] as const;

export const SERVICES = [
  {
    slug: "commercial-locksmith",
    image: "/images/services/commercial-locksmith-1.jpg",
    title: "Commercial Service",
    description:
      "Master key systems, panic bars, high-security locks & business lockouts. Licensed C-28, bonded & insured — free on-site quote, same-day service.",
    detail:
      "Running a business comes with enough challenges without worrying about security. B&B Locksmith offers fast and dependable commercial locksmith services across the Bay Area. We provide professional installation and upgrades for commercial door locks and access control systems, including keypads, smart locks, and master key systems. We also deliver fast, reliable commercial lockout services to get you back inside quickly without causing damage.",
    features: [
      "Access Control Systems",
      "Master Key Systems",
      "High-Security Locks",
      "Panic Bars & Exit Devices",
      "Lock Repair & Replacement",
      "Mortise Locks",
      "Keypad Locks",
      "Break-In & Vandalism Repairs",
      "CCTV & Security Cameras",
      "Emergency Lockout Service",
    ],
    icon: "building",
    isEmergency: true,
    faq: [
      {
        question: "Do you work with property managers and multi-unit buildings?",
        answer:
          "Yes. B&B Locksmith handles tenant-turnover rekeying, master key system design, and ongoing hardware service for multi-unit residential and commercial portfolios across the Bay Area. Property managers can reach the same dispatch line for one-off jobs or set up recurring service — one vendor, every building, with a written quote before each job.",
      },
      {
        question: "Can you set up one key that opens everything in our office?",
        answer:
          "Yes — that's a master key system. B&B Locksmith designs keying hierarchies so ownership carries one master key while staff keys open only the doors they should. We build them on restricted keyways when key control matters, so copies can't be cut at a hardware store. Existing locks can usually be rekeyed into the system without replacing hardware.",
      },
      {
        question: "Do you meet commercial vendor and insurance requirements?",
        answer:
          "B&B Locksmith & Security Inc. is a licensed C-28 contractor, bonded and insured, and has served Bay Area commercial clients since 2011. If your vendor onboarding needs license or insurance documentation, ask when you book and we'll provide what your facilities or compliance team requires.",
      },
      {
        question: "Can you service panic bars and fire-exit hardware?",
        answer:
          "Yes. We install and repair panic bars, exit devices, door closers, and the related commercial door hardware that life-safety codes depend on. If an exit device is sticking, failing to latch, or has been propped or chained (a code violation), we'll get it operating correctly and flag anything an inspector would.",
      },
    ],
  },
  {
    slug: "residential-locksmith",
    image: "/images/services/residential-locksmith.jpg",
    title: "Residential Service",
    description:
      "Home security solutions from lock installation and rekeying to smart lock setup and emergency lockout assistance.",
    detail:
      "Lock problems can happen at any time and disrupt your day. B&B Locksmith offers trusted residential locksmith services to help with emergencies and improve your home security. We provide reliable lock installation and rekeying services including standard door locks, deadbolts, smart locks, and modern entry systems. Our team takes time to understand your home's security needs and recommends simple, effective solutions that fit your budget. Getting locked out of your home can be stressful — our trained technicians arrive on time and use safe, careful methods to open doors without causing damage to your locks or property.",
    features: [
      "Lock Installation & Rekeying",
      "Smart Locks",
      "Deadbolt Upgrades",
      "Door Closers",
      "Lever Handle Locks",
      "Keypad Locks",
      "Padlock Installation",
      "Key Copies",
      "Home Lockouts",
      "Emergency Service",
    ],
    icon: "home",
    isEmergency: true,
    faq: [
      {
        question: "Do you handle emergency home lockouts?",
        answer:
          "Yes. B&B Locksmith handles same-day emergency lockouts Monday–Saturday, 7am–6pm, with an average ETA under 30 minutes across our Bay Area service area. Call 415-423-0182 during business hours and dispatch will give you a real ETA for your address. Have photo ID or proof of residence ready — our technicians verify you live there before opening the door, which protects you as much as it protects the property.",
      },
      {
        question: "Can you open my door without damaging the lock?",
        answer:
          "In most cases, yes. B&B Locksmith uses non-destructive entry techniques first — picking, bypassing, or decoding the lock so it keeps working after the door is open. Drilling is the last resort, used only when a lock has failed internally or is a high-security cylinder designed to resist everything else, and we'll tell you before it comes to that.",
      },
      {
        question: "Should I get a smart lock or stick with a deadbolt?",
        answer:
          "Both, usually. A quality Grade-1 deadbolt is still the backbone of home security; a smart lock adds convenience — codes for guests, remote unlocking, activity logs. B&B Locksmith installs and services August, Yale, Schlage, and Kwikset smart locks and will tell you honestly whether your door, frame, and Wi-Fi setup will support the model you're considering before you buy it.",
      },
      {
        question: "How much does a residential locksmith visit cost?",
        answer:
          "It depends on the work — a lockout, a rekey, and a full hardware upgrade are very different jobs. B&B Locksmith quotes the price with you at the door before any work begins, so there are no surprises when the job is done. Rekeying several locks in one visit costs less per lock than separate trips, so it's worth handling everything at once.",
      },
    ],
  },
  {
    slug: "rekeying",
    image: "/images/services/residential-locksmith.jpg",
    title: "Rekeying",
    isEmergency: true,
    description:
      "Lock rekeying for homes, businesses, and rentals across the Bay Area — every old key stops working, your hardware stays.",
    detail:
      "Rekeying changes the pins inside your existing lock so old keys no longer work — without replacing the hardware. It's the right move after moving into a new home, between tenants, after a break-in or lost keys, or when too many copies of a key are floating around. B&B Locksmith rekeys standard door locks, deadbolts, commercial cylinders, and master key systems on-site across the Bay Area. Your technician inspects each lock first; if the hardware is worn or damaged we'll tell you straight whether rekeying or replacement is the better spend. Most homes are done in a single visit, and every lock can be keyed to a single key so one key runs the whole house. You approve the written quote before any work begins.",
    features: [
      "Whole-Home Rekeying",
      "Move-In Rekeying",
      "Tenant Turnover Rekeying",
      "Post-Break-In Rekeying",
      "Key Matching (One Key, Every Door)",
      "Deadbolt Rekeying",
      "Commercial Cylinder Rekeying",
      "Master Key System Rekeying",
      "Lost Key Lock Changes",
      "Emergency Rekeying",
    ],
    icon: "home",
    faq: [
      {
        question: "How much does it cost to rekey a lock in the Bay Area?",
        answer:
          "Cost depends on how many locks you have, the lock type, and whether any hardware needs service — which is why B&B Locksmith gives you a written quote on-site before any work begins. Rekeying is almost always significantly cheaper than replacing locks, because your existing hardware stays on the door and only the pins inside the cylinder change.",
      },
      {
        question: "Should I rekey or replace my locks when I move into a new home?",
        answer:
          "Rekey, in most cases. When you move in, you have no idea how many copies of the old key exist — previous owners, their relatives, contractors, neighbors. Rekeying makes every one of those keys useless in a single visit, and B&B Locksmith can key every door to one new key while we're there. Replacement only makes sense if the existing hardware is worn, damaged, or you want to upgrade to higher-security or smart locks.",
      },
      {
        question: "How long does rekeying take?",
        answer:
          "A typical single-family home — four to six locks — is usually done in well under an hour once the technician is at the door. B&B Locksmith rekeys on-site from the truck, so there's no taking your locks away or second appointment. Larger jobs like apartment turnovers or commercial master key systems take longer and are quoted up front.",
      },
      {
        question: "Can all my locks be keyed to one key?",
        answer:
          "Usually, yes. If your locks are the same brand or compatible keyways, B&B Locksmith can key every exterior door to a single key — one key for the front door, back door, garage entry, and side gate. If you have mixed brands we'll tell you which ones can be matched and what it would take to bring the rest in line.",
      },
    ],
  },
  {
    slug: "automotive-locksmith",
    image: "/images/services/automotive/porsche-key-fob-card.jpg",
    title: "Automotive Service",
    description:
      "Car key cutting, transponder key programming, key fob replacement, and emergency vehicle lockout services.",
    detail:
      "Getting locked out of your car can be stressful and inconvenient. B&B Locksmith offers immediate assistance with skilled technicians available Monday–Saturday, 7am–6pm. We handle all types of keys, including transponder keys, key fobs, and traditional metal keys, and work with various vehicle types. If your car key is lost, broken, or not working, we can help with fast car key replacement and auto key programming. We cut keys matching originals precisely and program smart keys and fobs for modern vehicles — all on-site so you avoid costly towing.",
    features: [
      "Car Key Replacement",
      "Car Key Duplication",
      "Car Key Programming",
      "Transponder Key Cutting",
      "Key Fob Replacement",
      "Ignition Repair & Replacement",
      "Car Lock Repair",
      "Car Lockout Service",
      "Smart Key Programming",
      "Emergency Service",
    ],
    icon: "car",
    isEmergency: true,
    faq: [
      {
        question: "I'm locked out of my car — how fast can you get to me?",
        answer:
          "B&B Locksmith dispatches across the Bay Area Monday–Saturday, 7am–6pm, with an average ETA under 30 minutes. Call 415-423-0182, tell dispatch where the car is (parking garages and trailheads included), and you'll get a real ETA before the truck rolls. We use non-destructive entry tools, so your door and window come through untouched.",
      },
      {
        question: "Can you make a car key if I lost the original?",
        answer:
          "Yes. B&B Locksmith cuts keys by code and programs transponder chips, smart keys, and fobs on the truck for most makes and models. You'll need ID and proof of ownership, like the registration in the glovebox. The whole job happens where your car is parked — no original key needed.",
      },
      {
        question: "Do I have to tow my car to the dealership for a replacement key?",
        answer:
          "Usually not. A mobile locksmith programs the new key where the car sits, which means no tow fee and no days-long dealer wait — and locksmith pricing typically comes in under the dealership for the same key. A small number of very new or exotic models do require dealer equipment; if yours is one of them, we'll tell you upfront instead of experimenting on your car.",
      },
      {
        question: "My ignition won't turn — is it the key or the ignition?",
        answer:
          "It can be either: a worn key, a failing ignition cylinder, or debris in the keyway. B&B Locksmith diagnoses before replacing anything — sometimes a freshly cut key by code solves what looks like an ignition failure. If the cylinder itself is worn, we repair or replace it on-site and cut keys to match.",
      },
      {
        question: "Can you cut keys for our fleet or work trucks?",
        answer:
          "Yes — fleet and commercial vehicle keys are routine work for B&B Locksmith. We cut and duplicate keys for work trucks, vans, and equipment on-site, including extra keys for a whole fleet in one visit. For larger vehicles like crane and box trucks we can usually make keys by code, so you don't need to bring the truck to a dealership.",
      },
      {
        question: "Do you program push-to-start and proximity keys?",
        answer:
          "Yes. B&B Locksmith programs push-to-start (proximity) smart keys and fobs for most makes and models right at your vehicle. If you've lost a push-to-start fob or need a spare, we cut the emergency blade and program the proximity key on-site — typically for less than the dealership and with no tow.",
      },
    ],
  },
  {
    slug: "security-consulting",
    image: "/images/services/Security-Consulting.jpg",
    title: "Consulting Service",
    description:
      "Expert security assessments and consulting to identify vulnerabilities and recommend comprehensive protection strategies.",
    detail:
      "Our security consulting services help you identify vulnerabilities before they become problems. We provide comprehensive property security assessments, risk analysis, security system recommendations, compliance consulting for commercial properties, and ongoing security planning. Our experienced consultants work with you to develop a protection strategy tailored to your specific needs and budget. Whether you manage a single office or a portfolio of properties, we deliver actionable recommendations grounded in 15+ years of Bay Area security experience.",
    features: [
      "Property Security Assessments",
      "Risk Analysis",
      "System Recommendations",
      "Compliance Consulting",
      "Security Planning",
      "Access Audit & Review",
    ],
    icon: "search",
  },
  {
    slug: "access-control",
    image: "/images/services/access-control-systems.jpg",
    title: "Access Control",
    description:
      "Design and installation of electronic access control systems including keypads, card readers, and biometric solutions.",
    detail:
      "Smart access makes it easier to protect and manage any property. We install and support modern access control systems that use cards, PIN codes, mobile apps, or fingerprint entry instead of regular keys. This lets you decide who can enter certain rooms, offices, or buildings and when they can do it. Digital access also lowers the risk of lost or copied keys since permissions can be changed quickly. Our setups allow you to track entry activity, helping improve safety and accountability. We are official partners and certified installers for ProdataKey, Verkada, DoorBird, Bluewave Security, CDVI, and more.",
    features: [
      "Keycard & Fob Systems",
      "Electronic Keypads",
      "Biometric Readers",
      "Mobile Credential Systems",
      "Cloud-Managed Platforms",
      "User Permission Management",
      "Entry Activity Tracking",
      "Multi-Door Solutions",
      "System Upgrades & Repair",
      "Emergency Access Recovery",
    ],
    icon: "shield",
    faq: [
      {
        question: "Our fob reader stopped working — can you repair it?",
        answer:
          "Yes. Fob and card reader repair is one of our most common access-control calls. B&B Locksmith diagnoses readers that have stopped responding, won't accept fobs, or have lost programming — at apartment buildings, offices, and gates. We repair or replace the reader, controller, or wiring, reprogram credentials, and get the door working again. We service ProdataKey, Verkada, CDVI, and most major systems.",
      },
      {
        question: "Can you fix a key fob entry system at an apartment building?",
        answer:
          "Yes — apartment and multi-unit fob systems are core work for us. Whether the whole entry system is down, individual fobs have stopped working, or you need to add or revoke tenant credentials, B&B Locksmith repairs the system and reprograms access. For property managers we handle this off your work orders with documentation for your records.",
      },
      {
        question: "Do you repair access control systems in San Francisco and the wider Bay Area?",
        answer:
          "Yes. B&B Locksmith installs and repairs electronic access control across the Bay Area, including San Francisco, Oakland, and the East Bay. We troubleshoot and fix readers, keypads, controllers, electric strikes, and maglocks, and we're certified installers for ProdataKey, Verkada, DoorBird, Bluewave, and CDVI.",
      },
    ],
  },
  {
    slug: "commercial-doors",
    image: "/images/services/commercial-doors-installation-and-replacement.jpg",
    title: "Commercial Doors",
    description:
      "Commercial door installation and repair: storefront and hollow-metal doors, closers, panic bars, hinges, latches, and frames. Free written quote.",
    detail:
      "We install and replace commercial-grade doors and hardware for offices, retail spaces, and industrial properties. Our services include commercial door installation, automatic door closer installation and adjustment, panic bar and exit device installation, ADA-compliant hardware upgrades, hollow metal frame repair, and storefront aluminum door service. We also repair the everyday problems: doors that won't latch, closers that slam or drift, sagging hinges, worn latches and strikes, damaged frames, and sliding or patio doors that won't lock. We diagnose on-site, carry common hardware on the truck, and give you a written quote before any work begins. Every installation meets local building codes and fire safety requirements.",
    features: [
      "Commercial Door Installation",
      "Door Closer Installation",
      "Panic Bar & Exit Devices",
      "ADA-Compliant Hardware",
      "Hollow Metal Frame Repair",
      "Storefront Aluminum Doors",
      "Door Won't Latch / Misalignment",
      "Door Closer Repair & Adjustment",
      "Hinge, Latch & Strike Repair",
      "Patio & Sliding Door Lock Repair",
    ],
    icon: "door",
    faq: [
      {
        question: "My commercial door won't latch — can you fix it?",
        answer:
          "Yes — a door that won't latch is one of our most common repair calls. Usually it's a misaligned strike, a worn latch, a sagging hinge, or a door that's dropped in its frame. B&B Locksmith diagnoses the actual cause on-site and adjusts or replaces the hardware so the door latches and locks properly, rather than just forcing it. We carry common closers, hinges, latches, and strikes on the truck so most repairs are done in one visit.",
      },
      {
        question: "Do you repair commercial door closers?",
        answer:
          "Yes. We repair and adjust surface-mounted and concealed door closers — doors that slam, drift, stick, or won't close fully. When a closer is past adjustment we replace it with a correctly sized commercial unit (LCN, Norton, and similar). For storefronts and offices this also keeps you compliant with fire-door and ADA closing requirements.",
      },
      {
        question: "Do you fix sliding and patio door locks?",
        answer:
          "Yes. Sliding and patio door locks — especially in apartments and rentals — wear out, jam, or come out of alignment. We repair or replace the latch, hook, and keeper hardware, adjust the door so it seats correctly, and can upgrade to higher-security patio locks where security is a concern.",
      },
    ],
  },
  {
    slug: "commercial-locking-hardware",
    image: "/images/services/commercial-locking-hardware.jpg",
    title: "Commercial Locking Hardware",
    description:
      "Supply and installation of high-grade commercial locks, deadbolts, and locking mechanisms from top manufacturers.",
    detail:
      "We supply and install commercial-grade locking hardware from top manufacturers including Schlage, Yale, ASSA ABLOY, and Medeco. Our services include high-security lock installation, master key system design, lock rekeying and re-pinning, electronic lock installation, and hardware specification consulting. We match the right hardware to your security requirements and budget with transparent pricing and expert recommendations.",
    features: [
      "High-Security Lock Installation",
      "Master Key System Design",
      "Lock Rekeying & Re-Pinning",
      "Mortise Locks",
      "Electronic Lock Installation",
      "Lock Combination Changes",
      "Hardware Specification Consulting",
    ],
    icon: "lock",
  },
  {
    slug: "gates-welding",
    image: "/images/services/gates/gates-welding-card.jpg",
    title: "Gates & Welding",
    gallery: [
      { src: "/images/services/gates/latch-guard-electric-strike.jpg", alt: "Interlocking latch guard and electric strike welded onto a steel entry gate" },
      { src: "/images/services/gates/anti-reach-mesh-gate.jpg", alt: "Gate with anti-reach mesh welded on and a lever lock installed" },
      { src: "/images/services/gates/keypad-closer-entry-gate.jpg", alt: "Building entry gate with a heavy-duty closer and a keypad lock mounted on welded plates" },
      { src: "/images/services/gates/pool-gate-mesh-closer.jpg", alt: "Pool gate with mesh and self-closing hardware" },
      { src: "/images/services/gates/welded-lock-plate.jpg", alt: "Steel plate welded across a gate to mount a lock" },
      { src: "/images/services/gates/gate-welding-in-progress.jpg", alt: "Welding a lock mount onto a gate on-site, with the welder and helmet" },
    ],
    description:
      "Security-focused gate work: anti-reach mesh welding, weatherproof electric strikes, gate keypads, and heavy-duty closers for heavy and pool gates.",
    detail:
      "Most gate hardware is put on by welding shops. B&B Locksmith approaches gates as a security problem first. We weld mesh panels onto gates so no one can reach through and open them from the inside, install interlocking latch guards (welded or screwed on) so the latch can't be pried or shimmed, and we modify gates to take high-security, weatherproof and vandal-resistant electric strikes instead of the cheap units that fail in a season. We install mechanical and digital standalone keypads made for gates and do the welding needed to mount them solidly. For heavy and oversized gates we fit heavy-duty closers, and we custom-modify closers for pool gates and other gates that a standard closer can't handle, so the gate closes and latches every time.",
    features: [
      "Anti-Reach Mesh Welding",
      "Interlocking Latch Guards (Welded or Screw-On)",
      "Gate Modifications & Custom Welding",
      "Weatherproof, Vandal-Resistant Electric Strikes",
      "Mechanical & Digital Standalone Gate Keypads",
      "Welding to Mount Keypads & Hardware",
      "Heavy-Duty Closers for Heavy Gates",
      "Custom Door Closer Modifications",
      "Pool Gate Closers & Latching",
    ],
    icon: "lock",
    faq: [
      {
        question: "People reach through our gate and open it from the inside. Can you stop that?",
        answer:
          "Yes. We weld mesh panels onto the gate around the lock and handle so no one can reach through from the outside and open it. It's one of the most effective fixes for apartment, HOA, and commercial gates, and we match the mesh to the gate so it looks like part of it.",
      },
      {
        question: "Why have a locksmith install the gate lock instead of a welding shop?",
        answer:
          "Because we start from security. A welding shop can mount hardware, but often fits a cheap strike or lock that rusts, gets forced, or fails in a season. We install weatherproof, vandal-resistant electric strikes and gate keypads, and we do the welding and modifications needed to mount them properly, so the gate actually stays secure.",
      },
      {
        question: "Can you install a keypad on our gate?",
        answer:
          "Yes. We install mechanical and digital standalone keypads made for gates, and we do the welding needed to mount them solidly so they can't be pried off or knocked out of alignment.",
      },
      {
        question: "Our gate is too heavy and won't close on its own. Can you fix it?",
        answer:
          "Yes. We install heavy-duty closers rated for heavy and oversized gates, and we custom-modify closers where a standard unit won't fit. That includes pool gates, which are common in our area and need to close and latch on their own every time.",
      },
    ],
  },
  {
    slug: "master-key-systems",
    image: "/images/services/commercial-locking-hardware.jpg",
    title: "Master Key Systems",
    description:
      "Master key system design and installation for offices, apartment buildings, and commercial properties — one master key, controlled access per door.",
    detail:
      "A master key system lets one key open every door while each individual key opens only its own — so management holds a master, staff open only their areas, and key control stays with you. B&B Locksmith designs, installs, and maintains master key systems for office buildings, apartment complexes, retail, and multi-tenant properties across the Bay Area. We can rekey your existing locks into a new hierarchy without replacing hardware, build the system on restricted keyways so keys can't be copied at a hardware store, and key common doors so one key runs the whole building. For property managers we document the keying schedule and provide a written quote before any work begins.",
    features: [
      "Master Key System Design",
      "Grand Master & Sub-Master Hierarchies",
      "Rekey Existing Locks to One Key",
      "Restricted Keyway Key Control",
      "Office Building Master Keying",
      "Apartment & Multi-Unit Systems",
      "Commercial Suite Rekeying",
      "Keying Schedule Documentation",
      "Master Key System Expansion",
      "Lost Master Key Rekeying",
    ],
    icon: "lock",
    faq: [
      {
        question: "How does a master key system work?",
        answer:
          "A master key system is built so that one master key opens every door in the system, while each door also has its own change key that opens only that door. B&B Locksmith designs the hierarchy — for example, a building master for management, sub-masters for floors or departments, and individual keys per office or unit — so everyone holds exactly the access they should and no more.",
      },
      {
        question: "Can you rekey all my locks to one key?",
        answer:
          "Yes — keying multiple locks to a single key is one of the most common requests we handle. If your locks share compatible keyways, B&B Locksmith can rekey them so one key opens the front door, back door, suite, and common areas. Where you also want individual control, we build a full master key system instead, so one master covers everything while each door keeps its own key.",
      },
      {
        question: "Can you set up a master key system for an office building?",
        answer:
          "Yes. Office buildings are a core use case: management gets a master, each tenant or department gets keys to their own space, and shared doors (entrances, utility rooms) are keyed into the plan. B&B Locksmith can usually rekey your existing hardware into the new system rather than replacing it, and we document the full keying schedule for your records.",
      },
      {
        question: "What is a restricted keyway, and do I need one?",
        answer:
          "A restricted keyway uses patented key blanks that can't be cut at an ordinary hardware store — copies can only be made by an authorized locksmith with your authorization. For master key systems where key control matters (offices, multi-unit buildings, anywhere unauthorized copies are a risk), restricted keyways are strongly worth it. B&B Locksmith will walk you through whether it fits your property and budget.",
      },
    ],
  },
  {
    slug: "intercom-buzzer-systems",
    image: "/images/services/intercom/intercom-buzzer-card.jpg",
    title: "Intercom & Buzzer Systems",
    description:
      "Intercom and buzzer entry systems for apartments, offices, HOAs, and schools: installation, repair, upgrades, and access control integration.",
    detail:
      "Intercom and buzzer systems let residents and staff see or talk to visitors before letting them in. B&B Locksmith installs, repairs, and upgrades audio and video intercoms and buzzer entry systems for single-family homes, apartments and multi-tenant buildings, offices, schools, HOAs, and gated properties. We set up tenant directories, retrofit older buildings with modern entry panels, and connect the system to electronic door access so an approved user can release the door from a handset, app, or call station. We work with all major brands and handle repairs and routine maintenance so the system keeps working.",
    features: [
      "New System Installation",
      "Repair & Upgrades",
      "Audio & Video Intercoms",
      "Buzzer Entry Systems",
      "IP-Based Solutions",
      "Multi-Tenant Directories",
      "HOA Security Solutions",
      "School & Classroom Intercoms",
      "Access Control Integration",
    ],
    icon: "mic",
    faq: [
      {
        question: "Do you install intercom systems for schools and classrooms?",
        answer:
          "Yes. B&B Locksmith installs audio and video intercom systems for schools, including classroom call buttons, front-entry visitor intercoms, and systems that tie into door access so staff can see and buzz in visitors before unlocking. We can integrate the intercom with electronic access control so the main entrance stays secure during school hours.",
      },
      {
        question: "Can you repair an existing intercom or buzzer system?",
        answer:
          "Yes — intercom and buzzer repair is regular work for us. Whether it's a single broken station, a building entry panel that won't buzz tenants in, or an aging system that needs modernizing, B&B Locksmith diagnoses and repairs audio and video intercoms for homes, apartments, offices, and schools, and can upgrade to IP-based or app-connected systems when repair isn't worth it.",
      },
      {
        question: "Can the intercom connect to our door locks or access control?",
        answer:
          "Yes. We integrate intercoms with electronic door access so an approved user can release the door from a handset, app, or call station. For apartments, offices, and schools this means visitors are seen and verified before entry, and you keep a secure main door without locking out residents or staff.",
      },
    ],
  },
  {
    slug: "keyless-entry",
    image: "/images/services/keyless-entry-systems.jpg",
    title: "Keyless Entry",
    description:
      "Keyless entry system installation including smart locks, electronic keypads, and proximity-based access solutions.",
    detail:
      "Eliminate the hassle of traditional keys with our keyless entry solutions. We install and support electronic keypad locks, proximity card systems, Bluetooth-enabled locks, PIN code access systems, and combination keyless solutions. Perfect for businesses that need to manage employee access or homeowners who want the convenience of key-free entry. Every installation is customized to your doors, layout, and daily traffic needs.",
    features: [
      "Electronic Keypad Locks",
      "Proximity Card Systems",
      "Bluetooth-Enabled Locks",
      "PIN Code Access",
      "Mobile App Entry",
      "User Permission Management",
    ],
    icon: "key",
  },
  {
    slug: "smart-locks",
    image: "/images/services/smart-locks-installation-support.jpg",
    title: "Smart Locks",
    description:
      "Installation and support for Wi-Fi and Bluetooth smart locks with remote access, scheduling, and audit trail capabilities.",
    detail:
      "Smart locks give you control of your property from anywhere. We install and support Wi-Fi and Bluetooth smart locks with remote access and monitoring, scheduled access and auto-lock features, audit trail and access logging, and integration with home automation systems. We work with leading brands including August, Yale, Schlage, and Kwikset to find the right smart lock for your needs. Our team replaces outdated locks with modern smart lock systems that work with your current doors and hardware.",
    features: [
      "Wi-Fi & Bluetooth Smart Locks",
      "Remote Access & Monitoring",
      "Scheduled Access & Auto-Lock",
      "Audit Trail & Access Logging",
      "Home Automation Integration",
      "Brand Partners: August, Yale, Schlage, Kwikset",
    ],
    icon: "smartphone",
  },
  {
    slug: "safe-installation",
    image: "/images/services/safes/hollon-safes-card.jpg",
    title: "Safe Installation",
    description:
      "Safe installation, bolt-down, relocation & locked-safe opening for homes and businesses — done by a licensed, insured Bay Area locksmith, not a delivery crew.",
    detail:
      "Professional safe installation and opening services help protect your valuables and important documents with proper care and precision. We handle residential and commercial safe installation for homes and businesses including wall safes, floor safes, fireproof safes, and burglary safes, with a focus on proper placement, strong anchoring, and long-term security. For safe opening and access recovery, we use non-destructive methods and provide discreet, respectful service protecting your contents throughout.",
    features: [
      "Wall & Floor Safe Installation",
      "Fireproof Safes",
      "Burglar-Resistant Safes",
      "Safe Anchoring & Placement",
      "Safe Opening & Lockout",
      "Combination Recovery & Changes",
      "Safe Relocation",
      "Gun Safes",
    ],
    icon: "safe",
  },
] as const;

// Services kept live (for search engines and old links) but not promoted
// anywhere on the site: menus, footer, homepage grid, services index.
export const HIDDEN_SERVICE_SLUGS: readonly string[] = ["residential-locksmith"];

// SERVICES in display order: hidden ones removed, Safes moved up to the
// second slot so it shows in the footer and homepage grid.
export const VISIBLE_SERVICES = (() => {
  const visible = SERVICES.filter((s) => !HIDDEN_SERVICE_SLUGS.includes(s.slug));
  const safes = visible.find((s) => s.slug === "safe-installation");
  const rest = visible.filter((s) => s.slug !== "safe-installation");
  return safes ? [rest[0], safes, ...rest.slice(1)] : visible;
})();

export const TESTIMONIALS = [
  {
    quote:
      "I needed an extra key for my Subaru. I chose B&B at random after another service never called back. I texted them and they got right back to me. The quote was reasonable for the fob and programming, the work got scheduled for a convenient time.",
    author: "Pamela Carr",
    rating: 5,
    source: "Google",
    date: "4 months ago",
  },
  {
    quote:
      "B&B Locksmith was absolutely phenomenal! I contacted them during the weekend and followed-up with an appointment within a day. The team showed up on time and were professional from beginning to the end. They solved my problems carefully.",
    author: "CJ Koenig",
    rating: 5,
    source: "Google",
    date: "10 months ago",
  },
  {
    quote:
      "B&B Locksmith were awesome from the beginning. I lost my car fob and the dealer quoted me an outrageous price to replace. These guys were the cheapest from other locksmiths I've called and very professional and friendly.",
    author: "Winona Farris",
    rating: 5,
    source: "Google",
    date: "2 years ago",
  },
  {
    quote:
      "They were one of a few companies that responded to my request on Yelp and had the best price. Aaron called me when on his way and was very professional and extremely personable. He was able to cut a manual key for my car that didn't exist.",
    author: "Allison White",
    rating: 5,
    source: "Google",
    date: "4 years ago",
  },
] as const;

export const CLIENT_LOGOS = [
  { name: "Compass", src: "/images/logos/compass.png" },
  { name: "CorePower Yoga", src: "/images/logos/corepower-yoga.png" },
  { name: "Five Below", src: "/images/logos/five-below.png" },
  { name: "Pandora", src: "/images/logos/pandora.png" },
  { name: "Prologis", src: "/images/logos/prologis.png" },
  { name: "Sares Regis Group", src: "/images/logos/sare-raise-group.png" },
  { name: "ZipRent", src: "/images/logos/zip-rent.png" },
  { name: "Dior", src: "/images/logos/dior.svg" },
  { name: "Herc Rentals", src: "/images/logos/herc-rentals.svg" },
  { name: "Equinox", src: "/images/logos/equinox.svg" },
  { name: "Discord", src: "/images/logos/discord.svg" },
  { name: "Twist Bio", src: "/images/logos/twist-bioscience.svg" },
  { name: "CHP", src: "/images/logos/chp.svg" },
] as const;

export const LOCATIONS = [
  {
    slug: "san-francisco",
    name: "San Francisco",
    description:
      "B&B Locksmith provides professional locksmith and security services throughout San Francisco. From commercial buildings in the Financial District to residential homes in the Sunset, our mobile fleet serves every neighborhood in the city.",
    body:
      "San Francisco is apartment-building country, and that's where we do some of our most specialized work: buzzer and intercom systems, keyed building entries, mailbox locks, and access control for multi-tenant properties from the Mission to Nob Hill. Property managers use us for unit turnovers — rekeying by the door or by the building — and for keeping common-area hardware compliant and working. The city's Victorian and Edwardian housing stock still runs plenty of original mortise locks; we service and retrofit those without wrecking hundred-year-old doors. Downtown, FiDi and SoMa offices call us for master key systems, panic hardware, and electronic access control. Our 415 line rings straight to dispatch, and trucks reach the city via the Bay Bridge from our Walnut Creek hub — same-day service, Monday through Saturday, with the price confirmed on-site before any work begins.",
    faq: [
      {
        question: "Do you really serve San Francisco from the East Bay?",
        answer:
          "Yes — our trucks cross the Bay Bridge for San Francisco calls every week, and our primary line (415-423-0182) is a San Francisco number that rings straight to dispatch. Call and we'll quote a realistic ETA for your SF address up front; average ETA across our service area is under 30 minutes, and dispatch will tell you honestly what bridge traffic means for yours.",
      },
      {
        question: "Do you repair apartment buzzer and intercom systems in San Francisco?",
        answer:
          "Yes — buzzer and intercom work for San Francisco apartment buildings is one of our specialties. We repair and replace door-release buzzers, audio and video intercoms, and telephone-entry systems, and we install modern smartphone-connected systems for buildings ready to upgrade. Property managers get one vendor for the intercom, the door hardware, and the keying.",
      },
      {
        question: "Can you work on old Victorian mortise locks?",
        answer:
          "We do it constantly. San Francisco's Victorians and Edwardians often still run original mortise hardware, and the right answer is usually service or a careful retrofit — not tearing out a century-old door. We rekey, repair, and where needed replace mortise locks with period-appropriate hardware that keeps the door looking right and locking properly.",
      },
      {
        question: "Do you handle commercial buildings in downtown San Francisco?",
        answer:
          "Yes. FiDi, SoMa, Union Square, and the rest of the city's commercial districts — master key systems, panic bars and exit devices, high-security cylinders, and access control. B&B Locksmith is a licensed C-28 contractor, bonded and insured, with documentation available for building-vendor onboarding.",
      },
    ],
  },
  {
    slug: "san-jose",
    name: "San Jose",
    description:
      "Serving businesses and homeowners across San Jose and the South Bay. Our team provides fast, reliable locksmith and security services to the largest city in the Bay Area, from downtown offices to suburban communities.",
    body:
      "San Jose is the Bay Area's biggest city, and commercial doors are the work we're asked about most here: storefront aluminum doors, hollow-metal doors and frames, closers, panic bars, and ADA-compliant hardware for retail, office, and industrial buildings from Downtown to North San Jose. We install, repair, and bring doors up to code — one licensed C-28 contractor for the door, the hardware, and the keying. Offices and tech buildings add master key systems and access control; property managers across Willow Glen, Berryessa, Evergreen, and Almaden use us for turnover rekeying; and South Bay drivers call us for car lockouts, transponder keys, and fob programming handled at the curb. Trucks run down I-680 from our Walnut Creek hub, with Santa Clara, Campbell, and Milpitas covered on the same dispatch line. Price confirmed on-site, before the work starts — every time.",
    faq: [
      {
        question: "How fast can a locksmith reach San Jose?",
        answer:
          "Our trucks run down I-680 to San Jose, and dispatch quotes a realistic ETA for your address before a truck rolls — call 415-423-0182. Average ETA across our Bay Area service area is under 30 minutes; for the South Bay we'll tell you honestly what traffic means for yours. Same-day and emergency calls run Monday–Saturday, 7am–6pm.",
      },
      {
        question: "Do you repair commercial doors in San Jose?",
        answer:
          "Yes — commercial door work is one of our biggest San Jose services. We repair and replace storefront aluminum doors, hollow-metal doors and frames, door closers, panic bars and exit devices, and ADA-compliant hardware, and every installation meets local building codes and fire safety requirements. One vendor handles the door, the hardware, and the keys.",
      },
      {
        question: "Can you handle both my San Jose business and my home?",
        answer:
          "That's the point of 15 disciplines under one roof. Businesses get master key systems, access control, high-security locks, and door hardware; homeowners get rekeying, deadbolts, smart locks, and lockout response across Willow Glen, Almaden, Evergreen, Berryessa, and the rest of the city. One dispatch line covers both — plus your car.",
      },
      {
        question: "Do you cover the wider South Bay?",
        answer:
          "Yes. San Jose calls run on the same dispatch line as Santa Clara, Campbell, Milpitas, and Morgan Hill further south. If your business has sites across the South Bay, one call books them all — and we can key multiple locations into a single master key system.",
      },
    ],
  },
  {
    slug: "fremont",
    name: "Fremont",
    description:
      "B&B Locksmith is proud to serve Fremont and the Tri-City area with professional locksmith and security solutions. From tech campuses to residential neighborhoods, we deliver trusted service throughout the East Bay.",
    body:
      "Fremont runs on commutes and shift work, and that shows up in our call log: car lockouts, lost transponder keys, and fob programming are everyday jobs here — handled at your vehicle, no tow to a dealership. The industrial and R&D corridors around Warm Springs and Bayside keep our commercial side busy with warehouse door hardware, panic bars, master key systems, and access control for facilities that badge hundreds of employees. Residentially we work every district from Mission San Jose and Niles to Ardenwood and Irvington: move-in rekeying, deadbolt upgrades, smart locks, and lockout calls. Trucks reach Fremont via 680 over the Sunol Grade or 880 down the East Bay, and the same dispatch line covers Newark and Union City, so the whole Tri-City area is one call. As always, your technician confirms the price on-site before any work begins.",
    faq: [
      {
        question: "How fast can a locksmith get to Fremont?",
        answer:
          "B&B Locksmith reaches Fremont via I-680 or I-880, and our average ETA across the Bay Area service area is under 30 minutes. Call 415-423-0182 and dispatch will quote a real ETA for your Fremont address before the truck rolls — same-day and emergency calls run Monday–Saturday, 7am–6pm, covering all of Fremont plus Newark and Union City.",
      },
      {
        question: "Can you replace or program car keys in Fremont?",
        answer:
          "Yes — automotive work is a big part of what we do in Fremont. We cut and program transponder keys, replace and program key fobs including push-to-start proximity keys, and open locked vehicles without damage, all at your location. It's typically faster and less expensive than the dealership, with no tow required.",
      },
      {
        question: "Do you handle commercial and warehouse work in Fremont?",
        answer:
          "All of it. B&B Locksmith installs and services panic bars and exit devices, commercial door hardware, master key systems, intercoms, and access control for Fremont facilities — from Warm Springs R&D buildings to Bayside warehouses and retail along Fremont Boulevard. We're a licensed C-28 contractor, bonded and insured, with vendor documentation available for facility teams.",
      },
      {
        question: "Which Fremont neighborhoods do you cover?",
        answer:
          "Every one of them: Mission San Jose, Niles, Irvington, Centerville, Ardenwood, Warm Springs, and the rest of the city, plus Newark and Union City on the same dispatch line. Residential, commercial, and automotive calls all run through the same number — 415-423-0182.",
      },
    ],
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek",
    description:
      "Based in Walnut Creek, B&B Locksmith is your local security partner. We serve businesses and residents throughout Walnut Creek, Concord, Pleasant Hill, Lafayette, and the surrounding Contra Costa County communities.",
    body:
      "Walnut Creek is home base — our trucks start and end every day here, which makes it the fastest address in our entire service area. Downtown retail around Broadway Plaza and the North Main corridor keeps us busy with storefront locks, panic hardware, master key systems, and access control; office parks along Ygnacio Valley Road and Treat Boulevard call us for tenant-turnover rekeying and vendor lock work. On the residential side we cover everything from downtown condos to Northgate and Rudgear family homes: rekeying after a move, deadbolt and smart-lock upgrades, and same-day lockout response. We're members of the Walnut Creek Chamber of Commerce (plus the Concord, Pleasant Hill, and Lafayette chambers next door), and because dispatch sits here, an emergency call from a Walnut Creek address usually gets our shortest ETA of the day. Your technician confirms the price on-site before any work begins.",
    faq: [
      {
        question: "How fast can a locksmith reach me in Walnut Creek?",
        answer:
          "Faster than anywhere else we serve — Walnut Creek is our home base, so trucks are usually minutes away rather than a highway drive. Call 415-423-0182 and dispatch will give you a real ETA for your address; same-day and emergency calls run Monday–Saturday, 7am–6pm. Average ETA across the Bay Area is under 30 minutes, and in Walnut Creek we routinely beat it.",
      },
      {
        question: "Do you work with Walnut Creek businesses?",
        answer:
          "Every week. B&B Locksmith services storefronts around Broadway Plaza and North Main, offices along Ygnacio Valley Road, and commercial buildings across downtown — storefront locks, panic bars and exit devices, master key systems, intercoms, and access control. We're a licensed C-28 contractor, bonded and insured, and a member of the Walnut Creek Chamber of Commerce; vendor documentation is available for property managers.",
      },
      {
        question: "Can you rekey my Walnut Creek home after I move in?",
        answer:
          "Yes — move-in rekeying is one of our most common Walnut Creek jobs. We rekey your existing locks so every previous key stops working, usually in a single visit, and can match multiple doors to one key while we're there. It keeps your current hardware, so it costs less than replacing locks. We quote first: your technician confirms the price on-site before starting.",
      },
      {
        question: "Do you cover the rest of central Contra Costa County?",
        answer:
          "Yes. From the Walnut Creek hub we cover Concord, Pleasant Hill, Lafayette, Alamo, Danville, and the surrounding communities on the same dispatch line — residential, commercial, and automotive calls alike. If you're anywhere in central Contra Costa, you're effectively in our backyard.",
      },
    ],
  },
  {
    slug: "oakland",
    name: "Oakland",
    description:
      "B&B Locksmith serves Oakland straight through the Caldecott — our trucks dispatch from Walnut Creek via Highway 24. Storefronts around Downtown and Jack London Square, homes from Rockridge to Fruitvale, and everything up in the hills.",
    body:
      "Oakland keeps our trucks busy. A lot of the city's housing stock is older — Craftsman and Victorian homes still running original mortise locks and hardware that nobody makes anymore — and we service, rekey, and retrofit those doors without ripping out their character. On the commercial side, Downtown, Uptown, and Jack London Square storefronts call us for panic bars, storefront locks, master key systems, and access control; property managers across the city use us for tenant-turnover rekeying. And because lockouts don't schedule themselves, the same emergency line covers Oakland: home, business, and vehicle lockouts with non-destructive entry first. Whatever the job, your technician confirms the price with you on-site before any work begins.",
    faq: [
      {
        question: "How fast can a locksmith reach me in Oakland?",
        answer:
          "B&B Locksmith dispatches to Oakland from our Walnut Creek hub, a straight run through the Caldecott Tunnel on Highway 24. Average ETA across our Bay Area service area is under 30 minutes; call 415-423-0182 and dispatch will give you a real ETA for your Oakland address — Downtown, the hills, or anywhere between — before the truck rolls. We're open for same-day and emergency calls Monday–Saturday, 7am–6pm.",
      },
      {
        question: "Do you cover all Oakland neighborhoods?",
        answer:
          "Yes. Downtown, Uptown, Jack London Square, Temescal, Rockridge, Montclair, Fruitvale, the Laurel district, East Oakland, West Oakland — if it's in Oakland, our trucks roll there. We handle residential, commercial, and automotive calls across the entire city, plus neighboring Berkeley, Alameda, and San Leandro on the same dispatch line.",
      },
      {
        question: "Can you rekey my Oakland rental between tenants?",
        answer:
          "Yes — tenant-turnover rekeying is one of the most common jobs we run in Oakland. B&B Locksmith works with individual landlords and property management companies across the city, rekeying units so previous tenants' keys stop working without replacing the hardware. If you're a renter rather than the owner, have the owner's authorization ready; we verify before we work, which protects everyone.",
      },
      {
        question: "Do you do commercial locksmith work in Oakland?",
        answer:
          "All of it. B&B Locksmith installs and services storefront locks, panic bars and exit devices, master key systems, intercoms, and access control for Oakland businesses — from single storefronts to multi-tenant buildings. We're a licensed C-28 contractor, bonded and insured, serving Bay Area commercial clients since 2011. Ask for license and insurance documentation if your building requires vendor onboarding.",
      },
    ],
  },
  {
    slug: "berkeley",
    name: "Berkeley",
    description:
      "B&B Locksmith covers Berkeley end to end — student apartments off Telegraph, brown-shingle homes in Elmwood and North Berkeley, and the storefronts along Fourth Street, Shattuck, and San Pablo.",
    body:
      "Berkeley work has its own rhythm. Every summer the city's rental stock turns over at once, and landlords and property managers call us to rekey apartments by the building — old keys dead, one visit, written quote first. The housing itself runs old: brown-shingles and bungalows with mortise locks and skeleton-key hardware that deserve a careful retrofit, not a tear-out. Around campus and along Shattuck, Telegraph, and Fourth Street, shops and restaurants use us for storefront locks, panic hardware, and access control. And the same emergency line covers the whole city — home, business, and car lockouts with non-destructive entry first, ID checked before any door opens.",
    faq: [
      {
        question: "How fast can a locksmith get to Berkeley?",
        answer:
          "B&B Locksmith dispatches to Berkeley from Walnut Creek through the Caldecott Tunnel — the same Highway 24 run that serves Oakland and Rockridge. Average ETA across our service area is under 30 minutes; call 415-423-0182 and dispatch will quote a real ETA for your Berkeley address before the truck rolls. We handle same-day and emergency calls Monday–Saturday, 7am–6pm, including student-housing lockouts.",
      },
      {
        question: "Do you rekey student apartments and rentals in Berkeley?",
        answer:
          "Constantly — Berkeley's August turnover is one of the busiest stretches of our year. B&B Locksmith rekeys units one at a time or by the building, keys property managers' stock to a master system, and makes every previous tenant's key useless without replacing the hardware. Owners or managers authorize the work; if you're a tenant, have your landlord's sign-off ready before we arrive.",
      },
      {
        question: "Can you work on the old locks in Berkeley brown-shingle homes?",
        answer:
          "Yes — and we'd rather restore than replace. A lot of Berkeley housing still runs original mortise locks and vintage hardware. B&B Locksmith services and rekeys those mechanisms where they're sound, and when one is past saving we fit modern hardware that respects the door instead of butchering it. You get a straight recommendation either way before any work begins.",
      },
      {
        question: "Do you serve businesses near the UC campus?",
        answer:
          "Yes. Storefronts and restaurants on Telegraph, Shattuck, Fourth Street, and San Pablo use B&B Locksmith for storefront locks, panic bars and exit devices, rekeying after staff changes, and access control. We're a licensed C-28 contractor, bonded and insured — documentation available if your landlord or insurer requires it.",
      },
    ],
  },
  {
    slug: "concord",
    name: "Concord",
    description:
      "Concord is our backyard — ten minutes up the road from the B&B Locksmith hub in Walnut Creek. Homes, businesses around Todos Santos Plaza, and vehicle calls across the city get our fastest response times anywhere.",
    body:
      "Because our trucks stage in Walnut Creek, Concord calls are usually our quickest of the day — no bridge, no tunnel, just up the road. We rekey and upgrade locks for homeowners across Concord's neighborhoods, handle storefront hardware and master key systems for the businesses around Todos Santos Plaza and along Clayton Road and Monument Boulevard, and run vehicle lockout and car-key calls all over the city. Property managers in Concord use us for tenant turnovers, and the same emergency line covers home, business, and auto lockouts with non-destructive entry first. Every job starts the same way: a written quote you approve before the work does.",
    faq: [
      {
        question: "How fast can a locksmith reach me in Concord?",
        answer:
          "Concord sits right next to our Walnut Creek dispatch hub, so it gets some of B&B Locksmith's fastest response times anywhere in the Bay Area — often well under our area-wide 30-minute average. Call 415-423-0182 during business hours and dispatch will give you a real ETA for your Concord address. We're open for same-day and emergency calls Monday–Saturday, 7am–6pm.",
      },
      {
        question: "Do you handle car lockouts and car keys in Concord?",
        answer:
          "Yes — Concord is steady automotive territory for us. B&B Locksmith opens locked vehicles with non-destructive tools and cuts and programs replacement keys, transponders, and fobs on the truck for most makes and models, wherever the car is parked. Bring ID and proof of ownership, like the registration, and the job happens on the spot — no tow needed.",
      },
      {
        question: "Can you upgrade the locks on my Concord home?",
        answer:
          "Yes. B&B Locksmith installs and services deadbolts, smart locks (August, Yale, Schlage, Kwikset), keypad locks, and high-security cylinders across Concord. If you've just bought a home, rekeying everything to one new key is usually the smartest first move — every unknown copy of the old key dies in a single visit, and we'll flag any hardware actually worth replacing while we're at the door.",
      },
      {
        question: "Do you work with Concord businesses?",
        answer:
          "All over the city — storefronts around Todos Santos Plaza, offices and retail along Clayton Road, Willow Pass, and Monument Boulevard. Panic bars, storefront locks, master key systems, access control, and rekeying after staff turnover. B&B Locksmith is a licensed C-28 contractor, bonded and insured, serving Contra Costa businesses since 2011.",
      },
    ],
  },
  {
    slug: "san-ramon",
    name: "San Ramon",
    description:
      "B&B Locksmith runs San Ramon straight down the 680 corridor — Bishop Ranch offices, City Center storefronts, and the neighborhoods from Twin Creeks to Dougherty Valley.",
    body:
      "San Ramon splits cleanly into two kinds of work for us. On the commercial side, Bishop Ranch and the offices around City Center keep us busy with access control, master key systems, and suite rekeying when tenants and staff change — the kind of work where vendor paperwork matters, and we carry it: licensed C-28, bonded, insured. On the residential side, San Ramon's newer housing means smart locks and keypad hardware more than vintage retrofits; we install and service August, Yale, Schlage, and Kwikset systems and rekey whole homes to a single key. Vehicle lockouts and car keys run on the same line, with a written quote approved before any work starts.",
    faq: [
      {
        question: "How fast can a locksmith reach San Ramon?",
        answer:
          "Our trucks come straight down the 680 corridor from Walnut Creek — no bridges, no tunnels. Average ETA across the B&B Locksmith service area is under 30 minutes; call 415-423-0182 and dispatch will give you a real ETA for your San Ramon address, whether that's Bishop Ranch, Dougherty Valley, or anywhere between. We're open for same-day and emergency calls Monday–Saturday, 7am–6pm.",
      },
      {
        question: "Do you handle office and suite work in Bishop Ranch?",
        answer:
          "Yes. B&B Locksmith services offices across Bishop Ranch and the City Center area — suite rekeying at tenant turnover, master key systems, access control, and exit hardware. We're a licensed C-28 contractor, bonded and insured, and can provide documentation for building-management vendor onboarding before the first visit.",
      },
      {
        question: "Can you install smart locks on my San Ramon home?",
        answer:
          "That's the most common residential call we get in San Ramon. We install and service August, Yale, Schlage, and Kwikset smart locks and keypad hardware, and we'll tell you honestly whether your door and frame will take the model you want before you buy it. If you've just moved in, pairing the smart-lock install with a whole-home rekey handles everything in one visit.",
      },
    ],
  },
  {
    slug: "dublin",
    name: "Dublin",
    description:
      "B&B Locksmith covers Dublin's fast-growing east side and established west side alike — new townhomes and HOAs, the retail at Hacienda Crossings and Fallon Gateway, and everything along the BART corridor.",
    body:
      "Dublin is growth territory: new townhome and condo communities on the east side, HOAs that need key control sorted across dozens of units, and builders' locks that homeowners want rekeyed or upgraded once they actually move in — builder-installed hardware is rarely the hardware you'd choose. B&B Locksmith rekeys new construction to a single key, upgrades to smart locks and keypad systems, and sets up master keying for HOAs and property managers. Retail at Hacienda Crossings and Fallon Gateway calls the same line for storefront locks and panic hardware, and vehicle lockouts around the BART stations and shopping centers run Monday–Saturday, 7am–6pm, with non-destructive entry first.",
    faq: [
      {
        question: "How fast can a locksmith get to Dublin?",
        answer:
          "B&B Locksmith dispatches down the 680 corridor from Walnut Creek to Dublin, Monday–Saturday 7am–6pm. Our area-wide average ETA is under 30 minutes; call 415-423-0182 and dispatch will quote a real ETA for your Dublin address — east side, west side, or at a BART station parking lot. Bring photo ID; we verify before we open anything.",
      },
      {
        question: "I just bought new construction in Dublin — should I rekey?",
        answer:
          "Yes, and right away. During construction, builder master keys and contractor copies circulate freely, and builder-grade locks are usually the cheapest hardware that passed inspection. B&B Locksmith rekeys every door to one new key in a single visit and will tell you straight which locks are worth upgrading versus which are fine as they are. It's the highest-value hour you'll spend on the house.",
      },
      {
        question: "Do you work with Dublin HOAs and property managers?",
        answer:
          "Yes. We design and service master key systems for HOA common areas — pool gates, clubhouses, utility rooms — and handle unit turnovers for property managers across Dublin. One vendor, consistent keying records, written quotes before each job, and a licensed C-28 contractor on file for your board's vendor requirements.",
      },
    ],
  },
  {
    slug: "pleasanton",
    name: "Pleasanton",
    description:
      "From the storefronts on Main Street to the offices of Hacienda Business Park, B&B Locksmith serves Pleasanton with the same crew and the same rule: the quote comes before the work.",
    body:
      "Pleasanton mixes a historic downtown with one of the East Bay's biggest business parks, and we work both ends. Main Street's storefronts use us for traditional storefront locks, panic hardware, and rekeying after staff changes — often on older doors that deserve hardware sympathetic to the building. Hacienda Business Park brings suite rekeying, master key systems, and access control, with vendor documentation ready for property management. In the neighborhoods — Birdland, Val Vista, Ruby Hill and the rest — it's deadbolts, smart locks, move-in rekeying, and the occasional urgent lockout, all on the same dispatch line out of Walnut Creek.",
    faq: [
      {
        question: "How fast can a locksmith reach Pleasanton?",
        answer:
          "B&B Locksmith runs Pleasanton calls down 680 from our Walnut Creek hub, Monday–Saturday 7am–6pm. Area-wide our average ETA is under 30 minutes; call 415-423-0182 and dispatch gives you a real ETA for your Pleasanton address before the truck rolls — downtown, Hacienda, or out by Ruby Hill.",
      },
      {
        question: "Do you service the storefronts on Main Street?",
        answer:
          "Yes — downtown Pleasanton retail is regular work for us: storefront deadbolts and mortise locks, panic bars and exit devices, rekeying when employees change, and master keying for owners with more than one location. Older downtown doors get hardware that fits the building, not whatever's cheapest on the truck.",
      },
      {
        question: "Can you handle vendor requirements for Hacienda Business Park?",
        answer:
          "Yes. B&B Locksmith & Security Inc. is a licensed C-28 contractor, bonded and insured, serving Bay Area commercial clients since 2011. We provide license and insurance documentation for property-management vendor onboarding, and handle suite rekeying, master key systems, and access control across Hacienda and Pleasanton's other office parks.",
      },
    ],
  },
  {
    slug: "livermore",
    name: "Livermore",
    description:
      "B&B Locksmith works Livermore from downtown's First Street storefronts and tasting rooms out to the ranch properties past the vineyards — locks, gates, safes, and fast same-day service for when a key quits at the worst time.",
    body:
      "Livermore stretches our trucks across more ground than most cities we serve — and more kinds of doors. Downtown, the First Street and railroad-district storefronts and tasting rooms use us for storefront locks, panic hardware, and rekeying between staff seasons. The neighborhoods bring deadbolts, smart locks, and move-in rekeying, while properties out toward the vineyards and ranchland add gate locks, padlock systems, and outbuilding security that suburban locksmiths rarely touch. Wherever the job sits, the rules hold: same-day dispatch out of Walnut Creek, non-destructive entry first on lockouts, and a written quote you approve before the work begins.",
    faq: [
      {
        question: "How fast can a locksmith reach Livermore?",
        answer:
          "B&B Locksmith dispatches to Livermore down the 680/580 corridor from Walnut Creek, Monday–Saturday 7am–6pm. Livermore sits at the far edge of our area-wide under-30-minute average, so call 415-423-0182 and dispatch will give you an honest ETA for your address — downtown, Springtown, or out past the vineyards — before the truck rolls.",
      },
      {
        question: "Do you service wineries and tasting rooms?",
        answer:
          "Yes. Livermore Valley tasting rooms and the storefronts around First Street use B&B Locksmith for storefront deadbolts, panic and exit hardware, rekeying after seasonal staff changes, and master keying across tasting room, production, and storage spaces. We're a licensed C-28 contractor, bonded and insured, with documentation available for your operator or landlord.",
      },
      {
        question: "Can you handle gates, padlocks, and outbuildings on larger properties?",
        answer:
          "That's regular Livermore work for us. We key gate locks and padlocks into the same system as the house so one key runs the property, service and replace gate hardware, and secure barns, shops, and outbuildings. If you're tired of a carabiner full of mismatched padlock keys, one visit consolidates it.",
      },
    ],
  },
  {
    slug: "richmond",
    name: "Richmond",
    description:
      "From Point Richmond's historic storefronts to the marina, the Hilltop area, and the industrial corridor, B&B Locksmith covers Richmond with commercial, residential, and same-day emergency service.",
    body:
      "Richmond's mix runs wider than most Bay Area cities: century-old storefronts and homes in Point Richmond, working waterfront at the marina, warehouses and shops along the industrial corridor, and residential neighborhoods from the Richmond Annex up to Hilltop. For businesses that means storefront hardware, panic devices, roll-up door locks, padlock systems, and master keying that keeps a yard or warehouse under one key plan. For homeowners it's deadbolt and smart-lock upgrades, rekeying at move-in, and security hardware chosen for the door it's actually going on. The same emergency line covers the whole city — home, business, and vehicle lockouts, non-destructive entry first, written quote before work.",
    faq: [
      {
        question: "How fast can a locksmith get to Richmond?",
        answer:
          "B&B Locksmith dispatches to Richmond from Walnut Creek, Monday–Saturday 7am–6pm. Area-wide our average ETA is under 30 minutes; call 415-423-0182 and dispatch will quote a real ETA for your Richmond address — Point Richmond, the Annex, Hilltop, or the marina — before the truck rolls.",
      },
      {
        question: "Do you secure warehouses and industrial properties in Richmond?",
        answer:
          "Yes. Richmond's industrial corridor is core commercial territory for B&B Locksmith: roll-up and overhead door locks, high-security padlock systems keyed to your master plan, panic and exit hardware, and access control for shops and yards. We're a licensed C-28 contractor, bonded and insured, serving Bay Area commercial clients since 2011.",
      },
      {
        question: "Can you upgrade security on my Richmond home?",
        answer:
          "Yes — and we'll match the hardware to the house, whether that's a 1910 Point Richmond Victorian with a mortise lock worth preserving or a newer home ready for a smart lock. Move-in rekeying makes every unknown key useless in one visit; Grade-1 deadbolts and reinforced strikes do more for most doors than any gadget. You get straight recommendations and a written quote before work begins.",
      },
    ],
  },
  {
    slug: "vallejo",
    name: "Vallejo",
    description:
      "B&B Locksmith serves Vallejo across the Carquinez — retail and storefronts downtown and on Sonoma Boulevard, homes from Glen Cove to Hiddenbrooke, and commercial work along the waterfront and Mare Island.",
    body:
      "Vallejo is steady commercial and residential work for B&B Locksmith. Downtown and Sonoma Boulevard storefronts call us for retail store lock repair, storefront hardware, rekeying after staff changes, and access control; Mare Island and the waterfront bring larger commercial and industrial jobs. In the neighborhoods it's deadbolts, smart locks, move-in rekeying, and lockouts. We dispatch from Walnut Creek up I-680 and across the Benicia–Martinez Bridge, Monday–Saturday 7am–6pm, with a written quote before any work begins.",
    faq: [
      {
        question: "Does B&B Locksmith serve Vallejo?",
        answer:
          "Yes. B&B Locksmith covers Vallejo for residential, commercial, and automotive work, dispatched from Walnut Creek via I-680 and the Benicia–Martinez Bridge, Monday–Saturday 7am–6pm. Call 415-423-0182 and dispatch will give you a real ETA for your Vallejo address before the truck rolls.",
      },
      {
        question: "Do you repair locks for retail stores in Vallejo?",
        answer:
          "Yes — retail and storefront lock repair is common Vallejo work for us. We repair and replace storefront deadbolts and mortise locks, panic and exit hardware, and rekey after staff turnover for shops downtown, on Sonoma Boulevard, and across the city. We're a licensed C-28 contractor, bonded and insured, with documentation available for your landlord or insurer.",
      },
      {
        question: "Can you rekey or upgrade the locks on my Vallejo home?",
        answer:
          "Yes. We rekey, repair, and upgrade residential locks across Vallejo — from Glen Cove and Hiddenbrooke to older homes near downtown. If you've just moved in, rekeying every door to one new key is the smartest first step, and we'll flag any hardware genuinely worth replacing.",
      },
    ],
  },
  {
    slug: "morgan-hill",
    name: "Morgan Hill",
    description:
      "B&B Locksmith reaches Morgan Hill at the south end of the Bay Area — HOA and gate work, commercial storefronts along Monterey Road, and residential lock service across the community.",
    body:
      "Morgan Hill sits at the southern edge of our service area, and we make the run for commercial, HOA, and residential jobs. The community's many HOAs and gated developments call us for gate locking mechanism repair, common-area access, and master keying; Monterey Road and downtown storefronts use us for commercial locks, hardware, and rekeying. Residential work runs the usual range — deadbolts, smart locks, move-in rekeying, and lockouts. Because Morgan Hill is at our far edge, call ahead and dispatch will give you an honest ETA before scheduling.",
    faq: [
      {
        question: "Does B&B Locksmith serve Morgan Hill?",
        answer:
          "Yes — Morgan Hill is at the southern edge of our Bay Area service area, and we make the trip for commercial, HOA, and residential jobs. Because it's at our far edge, call 415-423-0182 and dispatch will give you an honest ETA before scheduling, Monday–Saturday 7am–6pm.",
      },
      {
        question: "Do you repair HOA gates and gate locks in Morgan Hill?",
        answer:
          "Yes. Morgan Hill has a lot of gated communities and HOAs, and gate work is a big part of why we make the drive. We repair manual and automatic gate locking mechanisms, replace worn gate hardware, set up master keying for common areas, and work from HOA work orders with a written quote up front.",
      },
      {
        question: "Can you handle commercial locksmith work in Morgan Hill?",
        answer:
          "Yes. We service Monterey Road and downtown Morgan Hill storefronts and offices — commercial locks, panic and exit hardware, rekeying after staff changes, and access control. B&B Locksmith is a licensed C-28 contractor, bonded and insured, with vendor documentation available on request.",
      },
    ],
  },
  {
    slug: "tiburon",
    name: "Tiburon",
    description:
      "B&B Locksmith serves Tiburon and the Marin peninsula — residential lock service for hillside and waterfront homes, smart-lock installs, and rekeying, with careful work on higher-end hardware.",
    body:
      "Tiburon is residential-focused work for B&B Locksmith — hillside and waterfront homes, many with higher-end and specialty hardware that deserves a careful hand. We install and service deadbolts, smart locks, and keypad entry, handle move-in rekeying, and repair or upgrade existing locks without damaging fine doors and finishes. We also handle lockouts and gate hardware for Tiburon and neighboring Belvedere. We dispatch from Walnut Creek across the bridge, Monday–Saturday 7am–6pm; since Tiburon is across the bay, call ahead for an honest ETA.",
    faq: [
      {
        question: "Does B&B Locksmith serve Tiburon?",
        answer:
          "Yes. B&B Locksmith serves Tiburon and neighboring Belvedere for residential lock service, smart-lock installation, rekeying, and lockouts. Since Tiburon is across the bay from our Walnut Creek hub, call 415-423-0182 and dispatch will give you an honest ETA before scheduling, Monday–Saturday 7am–6pm.",
      },
      {
        question: "Do you work on higher-end and specialty door hardware?",
        answer:
          "Yes — much of Tiburon's housing has premium and specialty hardware, and we handle it carefully. B&B Locksmith services, rekeys, and upgrades high-end locks and finishes without marring fine doors, and we'll tell you honestly when a repair preserves the hardware versus when replacement is the better call.",
      },
      {
        question: "Can you install smart locks on a Tiburon home?",
        answer:
          "Yes. We install and service August, Yale, Schlage, and Kwikset smart locks and keypad entry across Tiburon, and we'll confirm your door, frame, and Wi-Fi will support the model you want before you buy it. Pairing a smart-lock install with a whole-home rekey handles everything in one visit.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "1,000+", label: "5-Star Reviews" },
  { value: "5.0", label: "Star Rating" },
  { value: "C-28", label: "Licensed" },
] as const;

export const SERVICE_CITIES = [
  { name: "San Francisco", href: "/locations/san-francisco" },
  { name: "San Jose", href: "/locations/san-jose" },
  { name: "Fremont", href: "/locations/fremont" },
  { name: "Walnut Creek", href: "/locations/walnut-creek" },
  { name: "Oakland", href: "/locations/oakland" },
  { name: "Berkeley", href: "/locations/berkeley" },
  { name: "Concord", href: "/locations/concord" },
  { name: "San Ramon", href: "/locations/san-ramon" },
  { name: "Dublin", href: "/locations/dublin" },
  { name: "Pleasanton", href: "/locations/pleasanton" },
  { name: "Livermore", href: "/locations/livermore" },
  { name: "Richmond", href: "/locations/richmond" },
  { name: "Vallejo", href: "/locations/vallejo" },
  { name: "Morgan Hill", href: "/locations/morgan-hill" },
  { name: "Tiburon", href: "/locations/tiburon" },
] as const;
