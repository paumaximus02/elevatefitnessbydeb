export const site = {
  url: "https://elevatefitnessbydeb.com",
  name: "Elevate Fitness by Deb",
  personName: "Debora De Cristofaro",
  tagline: "Everybody deserves to feel capable, confident, and pain-free",
  description:
    "Personal training with Deb — over 15 years of experience helping seniors, athletes, postpartum moms, and everyone in between reach their goals.",
  location: {
    city: "Silverdale",
    county: "Kitsap County",
    region: "WA",
    country: "United States",
  },
  seo: {
    defaultTitle: "Debora De Cristofaro | Personal Trainer | Elevate Fitness by Deb",
    defaultDescription:
      "Debora De Cristofaro is a certified personal trainer in Silverdale, Kitsap County, Washington with 15+ years of experience helping seniors, athletes, postpartum moms, and all fitness levels.",
    keywords: [
      "Debora De Cristofaro",
      "Debora personal trainer",
      "Deb personal trainer",
      "personal trainer Silverdale",
      "personal trainer Kitsap",
      "personal trainer Washington",
      "AFAA certified personal trainer",
      "Elevate Fitness by Deb",
    ],
  },
  bio: [
    "I'm Debora De Cristofaro, a certified personal trainer passionate about helping people move better and feel stronger. My fitness journey began in 2008 in Buenos Aires, Argentina, where I fell in love with group fitness as a Les Mills instructor (Body Pump, Body Combat, Body Step, Body Jam, Body Balance, and Spinning). That passion carried me to Spain, where I earned my first personal training certification at Holmes Place and added Functional Training, TRX Suspension Training, Kettlebell, Power Plate, assisted stretching, and nutrition coaching to my toolbox. In 2011, I brought that experience to California, became AFAA-certified, and continued building a career centered on one simple belief: everybody deserves to feel capable, confident, and pain-free.",
    "In 2025, I took my commitment to helping others one step further and became a certified EMT with fire-service training. My goal has always been the same: whether I'm spotting you on a squat or responding to an emergency, I want the people around me to feel safe, supported, and stronger than they were yesterday.",
    "Today, with over 15 years and dozens of certifications behind me, I train everyone: seniors who want to stay independent and play with their grandchildren, athletes chasing new PRs, teenagers building their first healthy habits, postpartum moms reclaiming their strength, and everyone in between.",
    "Whatever your age or starting point, I will meet you exactly where you are and guide you with patience, expertise, and genuine care toward the strongest, healthiest version of yourself.",
  ],
  cta: {
    title: "Ready to start?",
    text: "Contact me today to schedule your free consultation, and let's build a plan that's 100% yours!",
    button: "Schedule Free Consultation",
  },
  photo: "/images/deb.png",
  photoAlt: "Debora De Cristofaro, certified personal trainer in Silverdale, Washington",
  email: "deb@elevatefitnessbydeb.com",
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}
