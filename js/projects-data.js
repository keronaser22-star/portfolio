/**
 * Centralized Structured Data for Kiro Naser — Director of Photography Portfolio
 * Verified real projects extracted directly from the official Google Drive archive.
 */

const PORTFOLIO_PROJECTS = [
  // --- FEATURED & COMMERCIALS / FOOD ---
  {
    id: "tungsten-onyx-cairo-gate",
    driveId: "1uW6iOwOd-56N9Y3KdojQgAXKrMmtn6XR",
    title: "Onyx — Cairo Gate Architectural Showcase",
    category: "real-estate",
    categoryLabel: "Real Estate Commercial",
    client: "Tungsten Media / Onyx",
    aspectRatio: "16:9",
    featured: true,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1uW6iOwOd-56N9Y3KdojQgAXKrMmtn6XR.jpg",
    description: "High-end architectural cinematography capturing modern spatial geometry, natural daylighting, and luxury residential interior design at Cairo Gate.",
    tags: ["Architectural Cinema", "Interior Lighting", "Gimbal Movement", "Commercial"]
  },
  {
    id: "tungsten-nussa-chef-craft",
    driveId: "1ARFJHAqtL_ca0IdgERIyAy03YNmAIPng",
    title: "Nussa — The Chef's Craft",
    category: "commercials",
    categoryLabel: "Culinary Commercial",
    client: "Tungsten Media / Nussa",
    aspectRatio: "9:16",
    featured: true,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1ARFJHAqtL_ca0IdgERIyAy03YNmAIPng.jpg",
    description: "Intimate culinary cinematography focused on macro food textures, sizzling heat dynamics, and artisanal kitchen choreography.",
    tags: ["Macro Cinematography", "Food Styling", "High Frame Rate", "Commercial"]
  },
  {
    id: "videoplayback-music-reel-01",
    driveId: "1_oTRo9ePqiD8n1JPtp0kASV4qrGaE19A",
    title: "Cinematic Music Video — Film Reel 01",
    category: "music-videos",
    categoryLabel: "Music Video",
    client: "Independent Production",
    aspectRatio: "16:9",
    featured: true,
    localVideo: "assets/videos/hero_reel.mp4",
    thumbnail: "assets/thumbnails/thumb_1_oTRo9ePqiD8n1JPtp0kASV4qrGaE19A.jpg",
    description: "Atmospheric narrative cinematography exploring dramatic chiaroscuro lighting, emotional character closeups, and rhythmic visual pacing.",
    tags: ["Music Video", "Chiaroscuro", "Narrative Drama", "Atmospheric Lighting"]
  },
  {
    id: "citrine-dental-aesthetics",
    driveId: "1SRpRfci6X5uBv9dVE4nXihM86Bv8iWEi",
    title: "Citrine — Dental Aesthetics & Precision",
    category: "medical",
    categoryLabel: "Medical Commercial",
    client: "Tungsten Media / Citrine",
    aspectRatio: "9:16",
    featured: true,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1SRpRfci6X5uBv9dVE4nXihM86Bv8iWEi.jpg",
    description: "Clean medical commercial highlighting clinical precision, pristine modern dental environments, and delicate procedural lighting.",
    tags: ["Medical Cinema", "Clinical Lighting", "Precision Focus", "Commercial"]
  },

  // --- CULINARY / FOOD COMMERCIALS ---
  {
    id: "tungsten-nussa-gourmet-sep",
    driveId: "1gDjSvGXjQ-YkcbF76eE886OTZ-BvlAe3",
    title: "Nussa — Gourmet Experience Showcase",
    category: "commercials",
    categoryLabel: "Culinary Commercial",
    client: "Tungsten Media / Nussa",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1gDjSvGXjQ-YkcbF76eE886OTZ-BvlAe3.jpg",
    description: "Vibrant culinary lighting showcasing fresh ingredients, sauce pours, and appetizing plating precision.",
    tags: ["Food Commercial", "Tabletop", "Lighting Design"]
  },
  {
    id: "tungsten-nussa-sgok-showcase",
    driveId: "14vp2woj3NRHSSBl5CmvVT8pZy8tJRMFC",
    title: "Nussa — Sgok Culinary Cut",
    category: "commercials",
    categoryLabel: "Culinary Commercial",
    client: "Tungsten Media / Nussa",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_14vp2woj3NRHSSBl5CmvVT8pZy8tJRMFC.jpg",
    description: "Dynamic close-up food commercial celebrating sizzle, spice, and authentic culinary passion.",
    tags: ["Culinary", "Slow Motion", "Commercial"]
  },
  {
    id: "tungsten-nussa-signature-dish",
    driveId: "1WR5TXRizqeHwWmthRYgJtjl0rPChC7M1",
    title: "Nussa — Signature Dish Edition",
    category: "commercials",
    categoryLabel: "Culinary Commercial",
    client: "Tungsten Media / Nussa",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1WR5TXRizqeHwWmthRYgJtjl0rPChC7M1.jpg",
    description: "High-contrast culinary cinematography with bold directional lighting highlighting texture and steam.",
    tags: ["Food Cinematography", "Commercial", "Lighting"]
  },

  // --- MEDICAL & HEALTHCARE COMMERCIALS (TUNGSTEN MEDIA) ---
  {
    id: "citrine-dr-reham",
    driveId: "1Hry5fZRYt8OYosVxefBNppZA-Kx-DeDn",
    title: "Citrine Clinics — Dr. Reham Clinical Spotlight",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Citrine",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1Hry5fZRYt8OYosVxefBNppZA-Kx-DeDn.jpg",
    description: "Professional interview and clinical commercial balancing warm physician personality with crisp medical lighting.",
    tags: ["Medical Commercial", "Interview Lighting", "Healthcare"]
  },
  {
    id: "citrine-special-edition",
    driveId: "1dfOEcYQz6Y09PpZeO91DWpUFxt9TMdDR",
    title: "Citrine Clinics — Special Edition Campaign",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Citrine",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1dfOEcYQz6Y09PpZeO91DWpUFxt9TMdDR.jpg",
    description: "Sleek healthcare campaign reel with soft key lighting and steady framing reflecting patient trust.",
    tags: ["Campaign Reel", "Healthcare", "Soft Lighting"]
  },
  {
    id: "citrine-dr-ghada-01",
    driveId: "1ACPANJYawEnyGzlN8g-BfBa4a_M0s9AU",
    title: "Citrine Clinics — Dr. Ghada Series (Part 01)",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Citrine",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1ACPANJYawEnyGzlN8g-BfBa4a_M0s9AU.jpg",
    description: "Engaging medical portrait cinematography, featuring balanced two-point lighting and clean clinic depth of field.",
    tags: ["Doctor Spotlight", "Clinic Interiors", "Commercial"]
  },
  {
    id: "citrine-dr-ghada-02",
    driveId: "1RDy3ffsR5oFMQ0UfQab_BecO-IwXAT3E",
    title: "Citrine Clinics — Dr. Ghada Series (Part 02)",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Citrine",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1RDy3ffsR5oFMQ0UfQab_BecO-IwXAT3E.jpg",
    description: "Natural skin-tone rendering and controlled studio ambient fill for healthcare consultation.",
    tags: ["Medical", "Color Grading", "Studio Fill"]
  },
  {
    id: "citrine-dr-ghada-03",
    driveId: "1YMP0fI9AAUA2HP5wJ3fBUIail4VzMFeP",
    title: "Citrine Clinics — Dr. Ghada Series (Part 03)",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Citrine",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1YMP0fI9AAUA2HP5wJ3fBUIail4VzMFeP.jpg",
    description: "Precision medical commercial framing focusing on doctor-patient rapport and clinic elegance.",
    tags: ["Healthcare Cinema", "Portrait", "Commercial"]
  },
  {
    id: "citrine-dr-ghada-04",
    driveId: "1VpyZltKkDNF4LZdVMnwL78NNKt93VLtq",
    title: "Citrine Clinics — Dr. Ghada Series (Part 04)",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Citrine",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1VpyZltKkDNF4LZdVMnwL78NNKt93VLtq.jpg",
    description: "Clean medical presentation emphasizing clarity, modern dermatology equipment, and balanced exposure.",
    tags: ["Medical Tech", "Commercial Lighting"]
  },
  {
    id: "citrine-dr-ibrahim",
    driveId: "1kP--0mdtVys2bsNazGx0-FuebN0FUP6f",
    title: "Citrine Clinics — Dr. Ibrahim Medical Reel",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Citrine",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1kP--0mdtVys2bsNazGx0-FuebN0FUP6f.jpg",
    description: "Specialized clinical spotlight featuring physician discussion, dental tools, and modern equipment ergonomics.",
    tags: ["Clinical Practice", "Healthcare Commercial"]
  },
  {
    id: "dr-sally-day2-reel04",
    driveId: "1E-OFUYDmElAo6uvs1VU_LKxNpr54CrbC",
    title: "Dr. Sally Healthcare Series — Day 02 Finale",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Dr. Sally",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1E-OFUYDmElAo6uvs1VU_LKxNpr54CrbC.jpg",
    description: "Vibrant healthcare social commercial crafted with punchy lighting and engaging vertical cinematography.",
    tags: ["Vertical Cinema", "Healthcare Social", "Commercial"]
  },
  {
    id: "dr-sally-day1-reel34",
    driveId: "1Pjl33EtJi3hQTTucGLjny8cCSdJFWzri",
    title: "Dr. Sally Healthcare Series — Day 01 Showcase",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Dr. Sally",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1Pjl33EtJi3hQTTucGLjny8cCSdJFWzri.jpg",
    description: "Sharp focus pulling and clean medical background falloff for informative physician guidance.",
    tags: ["Focus Pulling", "Medical Advice", "Social Reel"]
  },
  {
    id: "dr-sally-day2-reel01",
    driveId: "1Q8eVo0B2gTxGSvhAyWJ5Jb5ZcXddshrf",
    title: "Dr. Sally Healthcare Series — Day 02 Premier",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    client: "Tungsten Media / Dr. Sally",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1Q8eVo0B2gTxGSvhAyWJ5Jb5ZcXddshrf.jpg",
    description: "Well-balanced LED panel lighting setup tailored for social-first medical storytelling.",
    tags: ["Medical Series", "Lighting Setup", "Vertical"]
  },

  // --- REAL ESTATE & ARCHITECTURE ---
  {
    id: "real-estate-luxury-rent",
    driveId: "11KvZQr0gVO9qChuU_pZh00eFOfHTBz20",
    title: "Luxury Real Estate — Rental Property Showcase",
    category: "real-estate",
    categoryLabel: "Real Estate & Architecture",
    client: "Real Estate Commercial",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_11KvZQr0gVO9qChuU_pZh00eFOfHTBz20.jpg",
    description: "Architectural property tour using wide-angle interior framing, smooth gimbal pans, and window-light balancing.",
    tags: ["Interior Real Estate", "Gimbal Pan", "Architectural Tour"]
  },
  {
    id: "real-estate-prime-sales",
    driveId: "1zDNgLN-UI95UG6BcftbwlKRm8wT-tfdG",
    title: "Prime Estate — Exclusive Sales Cinematic Tour",
    category: "real-estate",
    categoryLabel: "Real Estate & Architecture",
    client: "Real Estate Commercial",
    aspectRatio: "9:16",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1zDNgLN-UI95UG6BcftbwlKRm8wT-tfdG.jpg",
    description: "Cinematic property walk-through capturing expansive layouts, finish details, and warm residential ambient light.",
    tags: ["Property Tour", "Real Estate Cinema", "Interior Design"]
  },

  // --- MUSIC VIDEOS & CLIPS ---
  {
    id: "videoplayback-music-reel-02",
    driveId: "1rT3ol6dCMCLl-iljZnxCRdEvxbsTMw1S",
    title: "Cinematic Music Video — Film Reel 02",
    category: "music-videos",
    categoryLabel: "Music Video & Narrative",
    client: "Music Video Production",
    aspectRatio: "16:9",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1rT3ol6dCMCLl-iljZnxCRdEvxbsTMw1S.jpg",
    description: "Stylized performance cinematography featuring moody gel highlights, dynamic handheld motion, and lens flares.",
    tags: ["Music Video", "Colored Gels", "Handheld Energy", "Performance"]
  },
  {
    id: "videoplayback-music-reel-03",
    driveId: "1Og2OqvVORwbROwTYUnb-4nfe9XbRgjVz",
    title: "Cinematic Music Video — Film Reel 03",
    category: "music-videos",
    categoryLabel: "Music Video & Narrative",
    client: "Music Video Production",
    aspectRatio: "16:9",
    featured: false,
    localVideo: null,
    thumbnail: "assets/thumbnails/thumb_1Og2OqvVORwbROwTYUnb-4nfe9XbRgjVz.jpg",
    description: "Evocative night exterior cinematography with sodium vapor backlighting, silhouetted framing, and rich shadow density.",
    tags: ["Night Cinematography", "Silhouette", "Rim Light", "Narrative"]
  }
];

// Professional Experience Organizations Data
const EXPERIENCE_COLLABORATIONS = [
  {
    name: "Tungsten Media",
    status: "Current Engagement",
    isCurrent: true,
    category: "Commercial & Media Production",
    description: "Currently collaborating with Tungsten Media as Director of Photography, filming commercial campaigns across luxury real estate, healthcare/medical brands, food/culinary cinematography, and high-production brand reels.",
    highlights: ["Onyx Cairo Gate Architectural Showcase", "Citrine Clinics Healthcare Series", "Nussa Gourmet Culinary Commercials", "High-Production Social Commercials"]
  },
  {
    name: "SAT-7",
    status: "Production Collaboration",
    isCurrent: false,
    category: "Broadcast & Media Organization",
    description: "Professional cinematography and production collaboration with SAT-7, an established international media organization, delivering high-standard visual storytelling for broadcasting and television programming.",
    highlights: ["Broadcast Media Production", "Multi-Camera Setups", "Studio & Field Cinematography"]
  },
  {
    name: "Alkarma TV Channel",
    status: "Production Collaboration",
    isCurrent: false,
    category: "Television Network & Broadcast",
    description: "Professional media and cinematography collaboration with Alkarma Channel, executing high-standard visual direction and studio lighting for television broadcast productions.",
    highlights: ["Television Production", "Studio Lighting Design", "Creative Visual Direction"]
  },
  {
    name: "NextGen",
    status: "Production Collaboration",
    isCurrent: false,
    category: "Media & Youth Organization",
    description: "Cinematography and media production collaboration with NextGen, capturing dynamic live events, conference imagery, and engaging visual campaigns.",
    highlights: ["Event & Narrative Visuals", "Dynamic Camera Work", "Creative Production Teamwork"]
  },
  {
    name: "Praise Center",
    status: "Production Collaboration",
    isCurrent: false,
    category: "Community & Media Organization",
    description: "Professional visual collaboration with Praise Center, providing dedicated camera direction and cinematic lighting for services, music events, and community media.",
    highlights: ["Live Stage Cinematography", "Atmospheric Venue Lighting", "Visual Media Production"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PORTFOLIO_PROJECTS, EXPERIENCE_COLLABORATIONS };
}
