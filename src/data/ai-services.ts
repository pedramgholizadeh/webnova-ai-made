export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface SampleWork {
  title: string;
  client: string;
  result: string;
  image: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  problem: string;
  solutionTitle: string;
  solutionDescription: string;
  solutionPoints: string[];
  samples: SampleWork[];
  pricing: PricingTier[];
  formTitle: string;
  icon: string;
}

const englishServices: ServiceData[] = [
  {
    slug: "ai-landing-page",
    title: "AI Landing Page Design",
    icon: "🚀",
    heroTitle: "Landing Pages Powered by AI That Actually Convert",
    heroSubtitle: "Get a high-converting, professional landing page designed with AI in as little as 72 hours.",
    problem: "Most businesses have weak landing pages that waste ad spend and fail to convert visitors into customers. Manual design is expensive and slow.",
    solutionTitle: "We build AI-powered landing pages that perform",
    solutionDescription: "Human creativity + AI efficiency to create high-converting landing pages.",
    solutionPoints: [
      "Audience research & professional copywriting with AI",
      "Modern, mobile-first visual design",
      "Speed and SEO optimization",
      "Automatic A/B testing & user behavior analysis",
      "CRM and marketing tool integration"
    ],
    samples: [
      { title: "SaaS Product Landing", client: "Accounting Software", result: "3.4× higher conversion rate", image: "https://picsum.photos/id/1015/800/600" },
      { title: "Online Course Landing", client: "Digital Academy", result: "1,800 leads in first month", image: "https://picsum.photos/id/1033/800/600" },
      { title: "Consulting Services", client: "Financial Advisory", result: "42% booking rate", image: "https://picsum.photos/id/160/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€1,290", period: "one-time", features: ["Full landing page design", "AI-assisted copy", "Mobile optimization", "5 business day delivery", "1 revision round"] },
      { name: "Premium", price: "€2,450", period: "one-time", features: ["Everything in Normal", "Deep audience research", "A/B testing setup", "CRM integration", "3 revision rounds"], popular: true },
      { name: "Max", price: "€3,900", period: "one-time", features: ["Everything in Premium", "Multilingual version", "Full marketing automation", "30-day performance optimization"] },
    ],
    formTitle: "Order Your AI Landing Page"
  },
  {
    slug: "ai-website",
    title: "AI Website Design",
    icon: "🌐",
    heroTitle: "Modern Websites Built with AI",
    heroSubtitle: "Fast, beautiful, and intelligent websites designed and optimized with the help of AI.",
    problem: "Traditional websites are slow to build, expensive to maintain, and often become outdated quickly.",
    solutionTitle: "Websites that combine human design with AI power",
    solutionDescription: "We use AI to accelerate design, content creation, and optimization while maintaining premium human quality.",
    solutionPoints: [
      "Professional UI/UX designed with AI assistance",
      "AI-generated content + human refinement",
      "Extremely fast performance (Core Web Vitals)",
      "Easy-to-use content management system",
      "Ongoing security and support"
    ],
    samples: [
      { title: "Fashion E-commerce", client: "Clothing Brand", result: "270% increase in online sales", image: "https://picsum.photos/id/106/800/600" },
      { title: "Corporate Website", client: "Consulting Firm", result: "3× more qualified leads", image: "https://picsum.photos/id/201/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€2,800", period: "one-time", features: ["Up to 8 pages", "AI + Human design", "Speed optimization", "Contact forms", "10-day delivery"] },
      { name: "Premium", price: "€4,500", period: "one-time", features: ["Up to 15 pages + blog", "Advanced SEO", "Full CMS", "Payment integration", "2 months support"], popular: true },
      { name: "Max", price: "€7,200", period: "one-time", features: ["Unlimited pages + shop", "AI Chatbot", "Full automation", "6 months support"] },
    ],
    formTitle: "Build Your AI-Powered Website"
  },
  {
    slug: "mobile-app-design",
    title: "Android & iOS App Design",
    icon: "📱",
    heroTitle: "Mobile Apps Users Actually Love",
    heroSubtitle: "Beautiful, high-performance apps for Android and iOS with exceptional user experience.",
    problem: "Many apps suffer from poor UX, bugs, low retention, and fail to engage users after the first use.",
    solutionTitle: "World-class mobile apps with premium UX",
    solutionDescription: "We design and develop apps that feel premium and perform flawlessly on both platforms.",
    solutionPoints: [
      "Premium UI/UX design for mobile",
      "Native + cross-platform development (Flutter/React Native)",
      "Thorough testing and performance tuning",
      "App Store and Google Play publishing support",
      "Ongoing updates and maintenance"
    ],
    samples: [
      { title: "Health & Fitness App", client: "Health Startup", result: "50k downloads in 3 months", image: "https://picsum.photos/id/251/800/600" },
      { title: "Educational Platform", client: "Learning App", result: "4.8 rating on stores", image: "https://picsum.photos/id/160/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€8,500", period: "one-time", features: ["Full UI/UX design", "Single platform", "App store submission", "3 months support"] },
      { name: "Premium", price: "€13,500", period: "one-time", features: ["Android + iOS", "Backend included", "Push + payments", "6 months support"], popular: true },
      { name: "Max", price: "€19,500", period: "one-time", features: ["Full app + web version", "AI features", "Analytics & optimization", "1 year support"] },
    ],
    formTitle: "Start Your Mobile App Project"
  },
  {
    slug: "web-app",
    title: "Web Application Design",
    icon: "💻",
    heroTitle: "Powerful Custom Web Applications",
    heroSubtitle: "Internal tools, SaaS platforms, and complex web apps built for real business needs.",
    problem: "Companies still rely on spreadsheets or expensive, inflexible legacy software.",
    solutionTitle: "Custom web apps that perfectly fit your workflow",
    solutionDescription: "We build scalable, secure web applications that replace inefficient processes.",
    solutionPoints: [
      "Professional dashboard and interface design",
      "Modern tech stack (Next.js, TypeScript)",
      "High security and scalability",
      "Integration with existing tools and APIs",
      "Optional AI features built-in"
    ],
    samples: [
      { title: "Operations Dashboard", client: "Distribution Company", result: "65% faster reporting", image: "https://picsum.photos/id/201/800/600" },
      { title: "Custom CRM", client: "Marketing Agency", result: "80% team productivity boost", image: "https://picsum.photos/id/1033/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€6,200", period: "one-time", features: ["Up to 5 modules", "Admin panel", "Database setup", "3 months support"] },
      { name: "Premium", price: "€9,800", period: "one-time", features: ["Unlimited modules", "Advanced authentication", "Reporting system", "6 months support"], popular: true },
      { name: "Max", price: "€14,500", period: "one-time", features: ["AI features included", "Multi-tenant architecture", "Public API", "1 year support"] },
    ],
    formTitle: "Order Your Custom Web App"
  },
  {
    slug: "ai-instagram-story",
    title: "AI Instagram Story Design",
    icon: "📸",
    heroTitle: "Instagram Stories That Stop the Scroll",
    heroSubtitle: "Daily professional, high-engagement Instagram Stories created with AI assistance.",
    problem: "Creating consistent daily stories is time-consuming and most brands post low-quality, repetitive content.",
    solutionTitle: "Stories that keep your brand top of mind",
    solutionDescription: "We combine creativity with AI to deliver scroll-stopping stories that drive engagement.",
    solutionPoints: [
      "On-brand visual design",
      "Strong copy and calls-to-action",
      "Trend-aware and timely content",
      "Engagement optimization",
      "Weekly or daily delivery options"
    ],
    samples: [
      { title: "Beauty Brand Stories", client: "Cosmetics Company", result: "18% average engagement", image: "https://picsum.photos/id/1005/800/600" },
      { title: "E-commerce Stories", client: "Fashion Store", result: "90% more site traffic", image: "https://picsum.photos/id/106/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€390", period: "/month", features: ["15 Stories per month", "Design + Copy", "Delivery every 2 days"] },
      { name: "Premium", price: "€790", period: "/month", features: ["30 Stories per month", "Interactive elements", "Performance reports"], popular: true },
      { name: "Max", price: "€1,250", period: "/month", features: ["Unlimited + Reels", "Content strategy", "Monthly consulting"] },
    ],
    formTitle: "Start Your AI Story Package"
  },
  {
    slug: "ai-instagram-post",
    title: "AI Instagram Carousel Design",
    icon: "🖼️",
    heroTitle: "Carousel Posts That Hold Attention",
    heroSubtitle: "High-performing multi-slide Instagram posts with powerful storytelling.",
    problem: "Single-image posts no longer perform well as users scroll past them quickly.",
    solutionTitle: "Story-driven carousels that get saved and shared",
    solutionDescription: "We create narrative-driven carousels optimized for saves, shares, and algorithm reach.",
    solutionPoints: [
      "Cohesive, premium visual systems",
      "Narrative copywriting that educates",
      "AI-assisted ideation and trends",
      "Algorithm-friendly formatting",
      "Monthly content calendar included"
    ],
    samples: [
      { title: "Educational Finance Carousel", client: "Financial Advisor", result: "4,000+ saves", image: "https://picsum.photos/id/201/800/600" },
      { title: "Product Showcase", client: "Tech Brand", result: "14% engagement rate", image: "https://picsum.photos/id/160/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€490", period: "/month", features: ["12 carousel posts", "Design + Copy", "Content calendar"] },
      { name: "Premium", price: "€890", period: "/month", features: ["20 posts + 4 Reels", "Audience research", "Analytics report"], popular: true },
      { name: "Max", price: "€1,490", period: "/month", features: ["Unlimited posts", "Full strategy", "Weekly consulting"] },
    ],
    formTitle: "Order AI Carousel Package"
  },
  {
    slug: "ai-avatar",
    title: "AI Avatar Creation",
    icon: "👤",
    heroTitle: "Realistic AI Avatars That Speak for Your Brand",
    heroSubtitle: "Professional AI avatars that can present, explain, and sell 24/7.",
    problem: "Founders and experts spend too much time recording videos and creating repetitive content.",
    solutionTitle: "Lifelike avatars with your voice and style",
    solutionDescription: "We create realistic AI avatars that represent your brand with natural speech and movement.",
    solutionPoints: [
      "Photorealistic avatar creation",
      "Lip-sync and natural speech",
      "Text-to-video generation",
      "Use for training, sales, support",
      "Multiple languages and styles"
    ],
    samples: [
      { title: "Course Instructor Avatar", client: "Online Academy", result: "70% reduction in content costs", image: "https://picsum.photos/id/1005/800/600" },
      { title: "Sales Avatar", client: "SaaS Company", result: "45% higher demo conversion", image: "https://picsum.photos/id/1011/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€1,890", period: "one-time", features: ["1 basic avatar", "10 minutes of video", "Standard voice"] },
      { name: "Premium", price: "€3,200", period: "one-time", features: ["Photorealistic avatar", "30 minutes video", "Your own voice", "Multiple styles"], popular: true },
      { name: "Max", price: "€5,500", period: "one-time", features: ["Unlimited avatars", "Long-form videos", "Website integration", "Ongoing updates"] },
    ],
    formTitle: "Create Your AI Avatar"
  },
  {
    slug: "ai-influencer",
    title: "AI Influencer Creation",
    icon: "⭐",
    heroTitle: "Your Own Fully Controlled AI Influencer",
    heroSubtitle: "Virtual influencers 100% dedicated to your brand that work around the clock.",
    problem: "Working with real influencers is expensive, unpredictable, and carries brand risk.",
    solutionTitle: "A virtual influencer 100% dedicated to your brand",
    solutionDescription: "We build complete AI influencers with personality, content, and audience engagement.",
    solutionPoints: [
      "Complete personality and backstory design",
      "Content creation across platforms",
      "Automated audience engagement",
      "Product promotion and direct sales",
      "Detailed performance reporting"
    ],
    samples: [
      { title: "Beauty Influencer", client: "Cosmetics Brand", result: "180k followers in 4 months", image: "https://picsum.photos/id/1009/800/600" },
      { title: "Tech Influencer", client: "Startup", result: "11% engagement rate", image: "https://picsum.photos/id/201/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€2,450", period: "/month", features: ["1 AI Influencer", "15 posts/month", "Monthly report"] },
      { name: "Premium", price: "€4,200", period: "/month", features: ["Full influencer setup", "30 pieces of content", "Active engagement"], popular: true },
      { name: "Max", price: "€6,800", period: "/month", features: ["Multiple influencers", "Full campaigns", "Direct sales integration"] },
    ],
    formTitle: "Launch Your AI Influencer"
  },
  {
    slug: "social-media-analytics",
    title: "Social Media Analysis",
    icon: "📊",
    heroTitle: "Data That Drives Real Growth",
    heroSubtitle: "Deep analysis and actionable insights for your social media performance.",
    problem: "Brands create content but have no clear idea what actually works and why.",
    solutionTitle: "Professional analysis + clear recommendations",
    solutionDescription: "We turn your social data into clear insights and executable growth strategies.",
    solutionPoints: [
      "Full analysis across Instagram, LinkedIn, TikTok and more",
      "Best time, format, and content type identification",
      "Competitor analysis",
      "Monthly reports + live dashboard",
      "Actionable strategy recommendations"
    ],
    samples: [
      { title: "FMCG Brand Analysis", client: "Food Company", result: "90% better ad efficiency", image: "https://picsum.photos/id/251/800/600" },
      { title: "Agency Performance", client: "Digital Agency", result: "35% engagement improvement", image: "https://picsum.photos/id/1033/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€590", period: "/month", features: ["Monthly report", "3 platforms", "Key recommendations"] },
      { name: "Premium", price: "€990", period: "/month", features: ["Report + live dashboard", "5 platforms", "Competitor analysis", "Strategy call"], popular: true },
      { name: "Max", price: "€1,590", period: "/month", features: ["AI insights", "Monthly strategy", "Implementation support"] },
    ],
    formTitle: "Get Your Social Media Analysis"
  },
  {
    slug: "ad-campaign",
    title: "Advertising Campaign & Execution",
    icon: "📢",
    heroTitle: "Advertising That Delivers Real ROI",
    heroSubtitle: "Strategy, creative development, and execution for Instagram, Google, and LinkedIn.",
    problem: "Many companies spend heavily on ads but see very poor or negative return on investment.",
    solutionTitle: "Data-driven campaigns with strong creative",
    solutionDescription: "We handle the full cycle from strategy to optimization for profitable campaigns.",
    solutionPoints: [
      "Audience research and campaign strategy",
      "High-quality ad creative production",
      "Daily budget management and optimization",
      "Transparent, detailed reporting",
      "Organic + paid synergy"
    ],
    samples: [
      { title: "Product Launch Campaign", client: "Tech Startup", result: "8.4× ROAS", image: "https://picsum.photos/id/160/800/600" },
      { title: "Lead Generation", client: "Education Platform", result: "65% lower cost per lead", image: "https://picsum.photos/id/201/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€1,590", period: "/month", features: ["1 platform management", "Basic creative", "Monthly reporting"] },
      { name: "Premium", price: "€2,850", period: "/month", features: ["Multi-platform", "Professional creative", "Daily optimization"], popular: true },
      { name: "Max", price: "€4,500", period: "/month", features: ["360° campaign", "Content production", "AI targeting", "Strategy sessions"] },
    ],
    formTitle: "Launch Your Ad Campaign"
  },
  {
    slug: "ai-automation",
    title: "AI Business Automation",
    icon: "⚙️",
    heroTitle: "Automate Your Business with AI",
    heroSubtitle: "Smart automations that eliminate repetitive work and multiply productivity.",
    problem: "Teams waste countless hours on repetitive tasks like replying, posting, and reporting.",
    solutionTitle: "AI automations that work like an extra team member",
    solutionDescription: "We identify and automate your workflows using modern AI tools and integrations.",
    solutionPoints: [
      "Customer support and inquiry automation",
      "Content creation and posting automation",
      "Smart lead management and follow-ups",
      "Automated reporting and insights",
      "Integration with Make, Zapier, n8n and custom APIs"
    ],
    samples: [
      { title: "Support Automation", client: "E-commerce Store", result: "70% faster response time", image: "https://picsum.photos/id/251/800/600" },
      { title: "Marketing Automation", client: "Agency", result: "45 hours saved per week", image: "https://picsum.photos/id/1033/800/600" },
    ],
    pricing: [
      { name: "Normal", price: "€2,290", period: "one-time", features: ["1 automation flow", "Full setup", "Team training"] },
      { name: "Premium", price: "€3,850", period: "one-time", features: ["Up to 5 flows", "AI Agent included", "Advanced integrations", "3 months support"], popular: true },
      { name: "Max", price: "€6,400", period: "one-time", features: ["Full business automation", "Multiple AI agents", "Management dashboard", "6 months support"] },
    ],
    formTitle: "Automate Your Business"
  }
];

const germanServices: ServiceData[] = englishServices.map(service => ({
  ...service,
  title: service.title
    .replace("AI Landing Page Design", "KI-Landingpage Design")
    .replace("AI Website Design", "KI-Website Design")
    .replace("Android & iOS App Design", "Android & iOS App Design")
    .replace("Web Application Design", "Web App Entwicklung")
    .replace("AI Instagram Story Design", "KI-Instagram Story Design")
    .replace("AI Instagram Carousel Design", "KI-Instagram Karussell Design")
    .replace("AI Avatar Creation", "KI-Avatar Erstellung")
    .replace("AI Influencer Creation", "KI-Influencer Erstellung")
    .replace("Social Media Analysis", "Social Media Analyse")
    .replace("Advertising Campaign & Execution", "Werbekampagnen & Ausführung")
    .replace("AI Business Automation", "KI Business Automatisierung"),
  heroTitle: service.heroTitle,
  heroSubtitle: service.heroSubtitle,
  problem: service.problem,
  solutionTitle: service.solutionTitle,
  solutionDescription: service.solutionDescription,
  solutionPoints: service.solutionPoints,
  formTitle: service.formTitle
}));

export const servicesData = {
  en: englishServices,
  de: germanServices
};

export function getService(slug: string, lang: 'en' | 'de' = 'en'): ServiceData | undefined {
  const services = servicesData[lang] || servicesData.en;
  return services.find(s => s.slug === slug);
}

export function getAllServices(lang: 'en' | 'de' = 'en'): ServiceData[] {
  return servicesData[lang] || servicesData.en;
}
