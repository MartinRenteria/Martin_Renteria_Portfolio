export type Project = {
    title: string;
    summary: string;
    stack: string[];
    href?: string;
    repo?: string;
    image?: string;
    imageAlt?: string;
};

export const site = {
    language: "en",
    title: "Martin Renteria | Full-stack engineer and ccessibility specialist",
    description:
        "Portfolio of Martin Renteria: React, Next.js, and Node.js engineering with a focus on infrastructure and WCAG 2.2 AA accessibility.",
};

export const ui = {
    skipLink: "Skip to main content",
    navLabel: "Primary",
    liveSite: "Live site",
    sourceCode: "Source code",
    forProject: (title: string) => `for ${title}`,
    technologiesUsedIn: (title: string) => `Technologies used in ${title}`,
};

export const profile = {
    name: "Martin Renteria",
    role: "Full-stack & DevOps engineer, accessibility QA specialist",
    location: "Bellevue, WA",
    email: "renteriamp96@gmail.com",
    linkedin: "https://linkedin.com/in/martin-renteria",
    summary:
        "I have 4+ years of experience building, deploying, and optimizing enterprise web applications. Co-led a migration from Ruby to React, Next.js, and Node.js, ran cloud infrastructure on AWS, Heroku, and Netlify, and drove WCAG 2.1/2.2 AA compliance on high-traffic platforms.",
};

export const nav = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export const hero = {
    headlineStart: "I build web products that work for ",
    headlineHighlight: "everyone",
    headlineEnd: ".",
    primaryButton: "See projects",
    secondaryButton: "Email me",
};

export const headings = {
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education and training",
    organizations: "Organizations",
    contact: "Contact",
};

export const contact = {
    intro:
        "Open to Full-stack, DevOps, and Accessibility Engineering roles. The fastest way to reach me is email.",
    linkedinLabel: "LinkedIn",
    linkedinHidden: "profile",
};

export const projects: Project[] = [
    {
        title: " A11y-gpt-remediation-engine ",
        summary: "A11y-GPT is a web app that helps developers find and fix accessibility problems. Paste a React component and it returns the WCAG violations it found, a corrected version with a side-by-side diff, and a plain-language explanation of each change. It also generates alt-text from uploaded images and suggests color adjustments that meet contrast requirements.",
        stack: ["Next.js 15, React 19, TypeScript, Tailwind CSS, Radix UI, Google Gemini API, deployed on Vercel"],
        href: "https://a11y-gpt-remediation-engine-fccx.vercel.app/",
        repo: "https://github.com/MartinRenteria/a11y-gpt-remediation-engine",
        image: "/projectImages/a11y_gpt_remediation.png",
        imageAlt: "A11y-GPT remediation engine screenshot"
    }
];

export const projectsEmpty = {
    before: "I am still putting this section together. Check back soon, or ",
    linkText: "email me",
    after: " if you would like to hear about my work now.",
};

export const experience = [
    {
        company: "Verizon",
        place: "Dallas, TX (remote)",
        roles: [
            {
                title: "Engineer III, Quality Assurance (Accessibility Specialist)",
                period: "January 2025 to January 2026",
                points: [
                    "Ran manual and automated accessibility assessments across flagship web and mobile apps (iOS and Android) using JAWS, NVDA, VoiceOver, and TalkBack to enforce WCAG 2.1/2.2 AA compliance.",
                    "Led accessibility initiatives across high-traffic platforms, managing Jira dashboards to process findings, track defect lifecycles, and drive remediation from report to fix.",
                    "Wrote documentation packages for developers, combining Evinced visual captures, HTML semantic breakdowns, and custom video evidence with exact reproduction steps and guideline-backed fixes.",
                    "Partnered with UX designers using Figma prototypes and with front-end engineers to diagnose barriers, write reusable fixes (semantic JSX, ARIA attributes, focus management), and verify code quality.",
                ],
            },
            {
                title: "DevOps & full-stack software engineer",
                period: "November 2021 to January 2025",
                points: [
                    "Co-led the system design and migration of a legacy Ruby monolith to a React, Next.js, and Node.js architecture, integrating Contentstack CMS so non-technical stakeholders could manage web content on their own.",
                    "Built customer-facing apps from scratch, including the Verizon Connect ROI Calculator and a multi-step Intake Wizard, which handled thousands of daily high-intent inquiries and improved front-end rendering performance by 15%.",
                    "Engineered secure, high-throughput API integrations between modular front-end components and microservices, and managed database operations and health monitoring through Heroku and SQL queries.",
                    "Managed cloud and deployment pipelines on AWS (S3, EC2, IAM, Lambda), Netlify, and Cloudflare, supporting 99.9% uptime and fast CI/CD delivery for high-traffic platforms.",
                    "Used GitHub Copilot, Claude, and automated workflows to speed up refactoring, prototype new features, and raise team development velocity.",
                ],
            },
        ],
    },
];

export const skills = [
    { group: "Languages and frameworks", items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Express", "Ruby", "Python", "HTML5", "CSS3"] },
    { group: "Architecture and DevOps", items: ["System design (LLD)", "Figma", "Heroku", "Netlify CI/CD", "Cloudflare", "Contentstack", "SQL (DBeaver)", "Docker", "Git"] },
    { group: "AWS cloud services", items: ["EC2", "S3", "VPC", "IAM", "RDS", "DynamoDB", "Lambda", "CloudWatch", "CloudFormation", "Elastic Load Balancing", "Auto Scaling", "Route 53", "EBS", "AWS CLI", "Systems Manager"] },
    { group: "Networking and systems administration", items: ["Linux administration", "Bash scripting", "TCP/IP", "DNS", "Subnetting", "Routing", "Cloud security and the shared responsibility model", "Infrastructure as code", "Monitoring and troubleshooting", "Technical support and ticketing"] },
    { group: "Quality and accessibility", items: ["Automated and manual QA", "WCAG 2.1/2.2 AA", "Evinced", "JAWS", "NVDA", "VoiceOver", "TalkBack", "Focus management"] },
    { group: "AI and productivity", items: ["GitHub Copilot", "Claude", "Gemini", "Prompt engineering", "Automated workflows"] },
];

export const education = [
    { name: "Bachelor of Arts in Psychology", org: "Eastern Washington University" },
    { name: "Full-Stack Software Engineering Apprenticeship", org: "Multiverse and Verizon" },
    { name: "AWS Cloud Services Training", org: "Per Scholas AWS re/Start Program" },
    { name: "Web Development Bootcamp Certificate", org: "University of Washington" },
    { name: "Google AI Professional Certificate", org: "Coursera" },
    { name: "Google IT Professional Certificate", org: "Coursera" },
];

export const organizations = [
    {
        name: "Washington Cyber Incident Response Team (WA CIRT)",
        description:
            "A volunteer-driven team that strengthens the resilience of Washington's communities and critical infrastructure through incident response support, preparedness guidance, and cyber defense collaboration.",
    },
];
