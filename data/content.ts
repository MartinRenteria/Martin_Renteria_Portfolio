export type Project = {
    title: string;
    summary: string;
    stack: string[];
    href?: string; 
    repo?: string; 
};

export const profile = {
    name: "Martin Renteria",
    role: "Full-stack & DevOps engineer, accessibility QA specialist",
    location: "Bellevue, WA",
    email: "renteriamp96@gmail.com",
    linkedin: "https://linkedin.com/in/martin-renteria",
    summary:
        "I have 4+ years of experience building, deploying, and optimizing enterprise web applications. I led a migration from Ruby to React, Next.js, and Node.js, ran cloud infrastructure on AWS, Heroku, and Netlify, and drove WCAG 2.1/2.2 AA compliance on high-traffic platforms.",
};

export const experience = [
    {
        company: "Verizon",
        place: "Dallas, TX (remote)",
        period: "November 2021 to January 2026",
        roles: [
            {
                title: "DevOps & full-stack software engineer",
                points: [
                    "Co-led the low-level system design and migration of a legacy Ruby infrastructure to React, Next.js, and Node.js, integrated with Contentstack headless CMS, AWS S3, and Netlify continuous deployment.",
                    "Built customer-facing apps, including the Verizon Connect ROI Calculator and a multi-step ROI Intake Wizard, using modular components that improved rendering performance by 15%.",
                    "Designed API integrations and optimized SQL queries in DBeaver for reliable communication between front-end components and microservices.",
                    "Configured Heroku performance monitoring, background job queues, and alerting to track database health and resolve operational bottlenecks.",
                    "Used GitHub Copilot, Claude, and Gemini for prototyping, test generation, and refactoring, raising team delivery velocity without lowering code quality.",
                ],
            },
            {
                title: "QA Accessibility Specialist III",
                points: [
                    "Led technical accessibility work to reach WCAG 2.1/2.2 AA compliance across flagship web platforms, using JAWS, NVDA, and Evinced.",
                    "Partnered with UX designers and front-end engineers to diagnose barriers, ship reusable fixes (semantic JSX, ARIA attributes, focus management), and track remediation in Jira.",
                ],
            },
        ],
    },
];

export const skills = [
    { group: "Languages and frameworks", items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Express", "Ruby", "Python", "HTML5", "CSS3"] },
    { group: "Architecture and DevOps", items: ["System design (LLD)", "AWS (S3, EC2)", "Heroku", "Netlify CI/CD", "Contentstack", "SQL", "Docker", "Git"] },
    { group: "Quality and accessibility", items: ["Automated and manual QA", "WCAG 2.1/2.2 AA", "Evinced", "JAWS", "NVDA", "VoiceOver", "Focus management"] },
    { group: "AI and productivity", items: ["GitHub Copilot", "Claude", "Gemini", "Prompt engineering", "Automated workflows"] },
];

export const education = [
    { name: "Google AI Professional Certificate", org: "Google via Coursera", date: "March 2026" },
    { name: "Google IT Support Professional Certificate", org: "Google via Coursera", date: "August 2020" },
    { name: "Bachelor of Arts in Psychology", org: "Eastern Washington University", date: "March 2018" },
];

export const projects: Project[] = [

];