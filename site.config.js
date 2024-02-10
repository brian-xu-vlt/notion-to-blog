const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Brian Valette",
    image: "/avatar.svg",
    roles: [
      "Fullstack software engineer",
      "Coffee and Tea snob retired",
    ],
    bio: "This is Brian Report:\nmy entrepreneurial reporting to you, who made me accountable.",
    email: "brian.valette@gmail.com",
    linkedin: "brian-valette",
    github: "brian-xu-vlt",
    instagram: "",
  },
  projects: [
    {
      name: `Make me accountable, right now!`,
      href: "https://app.lyf.eu/pot/6fa92684-d7e0-4fff-adbe-bbb71951a0f6?lang=en",

    },
  ],
  // blog setting (required)
  blog: {
    title: "Brian Report",
    description: "I am still entrepreneuring.",
  },

  // CONFIG configration (required)
  link: "https://brian-vlt.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
