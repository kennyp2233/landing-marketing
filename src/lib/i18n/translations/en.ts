// src/lib/i18n/translations/en.ts
// English translations

import { Translations } from './es';

export const en: Translations = {
    // Navigation
    nav: {
        solutions: "Solutions",
        projects: "Projects",
        technologies: "Technologies",
        startProject: "Start Project",
    },

    // Hero Section
    hero: {
        title: "Software that evolves",
        subtitle: "with your business.",
        description: "We design and develop custom digital ecosystems. From secure financial systems to efficient operational management.",
        cta: "Get a Quote",
        rating: "Trusted by financial institutions.",
    },

    // About Section
    about: {
        badge: "Why KHANNDA",
        title: "Invisible",
        titleHighlight: "Architecture",
        subtitle: "The technology that powers your business shouldn't be visible. It should simply work. We design systems that adapt to you, not the other way around.",
        values: {
            growth: {
                title: "Tangible Results",
                description: "We don't talk about technology. We talk about your revenue, your efficiency, and your growth.",
            },
            architecture: {
                title: "Liquid Architecture",
                description: "Systems that mold to your business model and scale with you without friction.",
            },
            quality: {
                title: "Crystal Code",
                description: "Total transparency. We give you the code, documentation, and absolute control.",
            },
        },
        dashboard: {
            newVisitors: "New Visitors",
            activeUsers: "Active Users",
            monthlyRevenue: "Monthly Revenue",
            dailyGrowth: "Daily Growth",
        },
    },

    // Services Section
    services: {
        badge: "Capabilities",
        title: "Our",
        titleHighlight: "Services",
        subtitle: "World-class software engineering to solve complex business challenges.",
        items: {
            development: {
                title: "Custom Development",
                description: "Software architecture designed to scale. Clean, modular, and maintainable code.",
                features: ["Microservices", "REST/GraphQL APIs", "Cloud Native"],
            },
            security: {
                title: "High Security & Fintech",
                description: "Critical infrastructure with banking standards. Data protection and guaranteed transactionality.",
                features: ["E2E Encryption", "PCI-DSS Compliance", "Continuous Auditing"],
            },
            automation: {
                title: "Operational Automation",
                description: "We eliminate manual work. Bots, scripts, and intelligent workflows that work 24/7.",
                features: ["RPA / Bots", "System Integration", "Webhooks & Events"],
            },
            consulting: {
                title: "Technology Consulting",
                description: "Technical debt audit and modernization roadmap for established companies.",
                features: ["Code Reviews", "System Design", "Tech Stack Selection"],
            },
        },
        metrics: {
            efficiency: { value: "+40%", label: "Operational Efficiency", desc: "Average reduction in manual workload." },
            timeToMarket: { value: "4 WKS", label: "Time-to-Market", desc: "Agile and fast development cycles." },
            ownership: { value: "100%", label: "Code Ownership", desc: "We deliver complete repositories." },
        },
    },

    // Pricing Section
    pricing: {
        badge: "Investment",
        title: "Collaboration",
        titleHighlight: "Models",
        subtitle: "Total transparency. No hidden costs.",
        plans: {
            essential: {
                name: "Essential Systematization",
                description: "Ideal for validating products or starting digital transformation.",
                pricing: "Project-Based",
                pricingNote: "Quote based on defined scope",
                features: ["MVP in 4-6 weeks", "Essential UI/UX Design", "Basic Cloud Infrastructure", "1 Month Post-Launch Support"],
                cta: "Start Conversation",
            },
            enterprise: {
                name: "Total Transformation",
                tier: "Enterprise",
                description: "For companies that require continuous evolution and scalability.",
                pricing: "Retainer / Partner",
                pricingNote: "Dedicated team + Continuous evolution",
                features: ["Dedicated Engineering Team", "Scalable Architecture & Microservices", "Continuous Security Audit", "Guaranteed 99.9% SLA"],
                cta: "Schedule Consultation",
            },
        },
    },

    // Team Section
    team: {
        badge: "Leadership",
        title: "Our",
        titleHighlight: "Team",
        subtitle: "Empathy, technique, and passion for solving real problems with code.",
        cta: {
            question: "Ready to digitize your business?",
            action: "Let's Talk",
        },
        members: {
            matias: {
                role: "Client Relations",
                description: "The bridge between your problem and our solution. Matías specializes in deeply understanding your business's operational pain points to ensure the software we build is exactly what you need, with a unique empathy in the industry.",
            },
            jose: {
                role: "Technology Strategy",
                description: "Visionary of scalable systems. José transforms abstract ideas into robust software architectures. His approach ensures your technology investment not only works today but is the solid foundation for your company's future growth.",
            },
            kevin: {
                role: "Innovation & Product",
                description: "Designer of functional experiences. Kevin ensures the complexity of code translates into simple and intuitive interfaces. His obsession is making our software easier to use than a notebook.",
            },
            kenny: {
                role: "Full Stack Developer",
                description: "Integral developer who masters both frontend and backend. Kenny builds robust applications from start to finish, ensuring every line of code adds value and performance to your business.",
            },
        },
    },

    // Solutions Page
    solutions: {
        title: "Technology that",
        titleHighlight: "Drives",
        titleEnd: "your Business",
        subtitle: "From making complex workflows automatic to building robust platforms. We create the digital ecosystem your company needs.",
        cta: "View details",
        topics: {
            automation: {
                title: "Automation",
                cardTitle: "Automation with n8n",
                description: "Connect your favorite apps and automate repetitive tasks. Intelligent workflows that save hours of manual work every week.",
                tagline: "Connect your apps. Eliminate the repetitive. Scale without limits.",
                highlights: ["Custom workflows running 24/7", "+400 ready-to-use integrations", "Average savings of 20+ hours weekly", "Zero manual errors"],
            },
            development: {
                title: "Development",
                cardTitle: "Custom Software",
                description: "Custom web and mobile application development. Scalable solutions built with the latest market technologies.",
                tagline: "Code that scales. Design that captivates. Results that matter.",
                highlights: ["Modern and responsive web apps", "iOS and Android mobile apps", "Cloud-native architectures", "Continuous support and maintenance"],
            },
            consulting: {
                title: "Consulting",
                cardTitle: "Process Optimization",
                description: "We analyze and digitize your business operations. We transform slow processes into agile and efficient systems.",
                tagline: "We transform operations. We digitize processes. We multiply results.",
                highlights: ["Deep operations analysis", "Digital transformation roadmap", "Clear and measurable KPIs", "Guaranteed ROI"],
            },
        },
    },

    // Projects Page
    projects: {
        title: "Success",
        titleHighlight: "Stories",
        subtitle: "Discover how we have transformed businesses with custom technological solutions.",
        showcase: {
            finance: {
                title: "Cooperativa César Terán",
                type: "Cooperativa Terán",
            },
            fitness: {
                title: "Gym CT Tulcán",
                type: "Gym Tulcán",
            },
            retail: {
                title: "KSZ Fútbol Club USA",
                type: "E-Commerce",
            },
        },
    },

    // Technologies Page
    technologies: {
        title: "Our",
        titleHighlight: "Tech",
        titleEnd: "Stack",
        subtitle: "We use the most modern and robust technologies on the market to build solutions that scale with your business.",
        details: {
            badge: "Why Choose Us",
            title: "Technology that",
            titleHighlight: "Powers Your Business",
            description: "We don't overwhelm you with technicalities. What matters is how our technology translates into real results for your company.",
            cta: {
                text: "Want to know more about our technical architecture?",
                button: "Let's Talk",
            },
            benefits: {
                performance: {
                    title: "Performance",
                    description: "Ultra-fast applications that your users will love. Every millisecond counts.",
                    items: ["Load times under 2 seconds", "Automatic image optimization", "Smart caching for instant navigation", "Smooth experience on any device"],
                },
                security: {
                    title: "Security",
                    description: "Enterprise-level protection for you and your customers. Your peace of mind is our priority.",
                    items: ["SSL/TLS encryption on all connections", "DDoS protection", "Daily automatic backups", "Data compliance"],
                },
                scalability: {
                    title: "Scalability",
                    description: "Grow without limits. Your platform automatically adapts to demand.",
                    items: ["Cloud infrastructure that grows with you", "No downtime during high traffic", "Unlimited user capacity", "Costs that scale with your success"],
                },
            },
        },
        stackScreen: {
            header: "Tech Stack",
            tagline: "The best tools for exceptional results",
            footer: "Modern Stack",
            updated: "Updated 2024",
        },
    },

    // Page Actions (WhatsApp Messages)
    pageActions: {
        solutions: "Hi! I'm interested in learning more about your solutions.",
        projects: "Hi! I'd like to see more details about your projects.",
        technologies: "Hi! I'd like to know more about your tech stack.",
    },

    // Footer
    footer: {
        tagline: "Invisible digital architecture for companies that scale.",
        services: {
            title: "Services",
            development: "Custom Development",
            automation: "Automation",
            consulting: "Cloud Consulting",
        },
        company: {
            title: "Company",
            about: "About Us",
            careers: "Careers",
            partners: "Partners",
        },
        legal: {
            title: "Legal",
            terms: "Terms of Service",
            privacy: "Privacy",
            status: "Status",
        },
        copyright: "All rights reserved.",
        systemStatus: "SYSTEM NORMAL",
    },

    // WhatsApp FAB
    whatsapp: {
        home: "Hello! I'm interested in learning more about your services.",
        solutions: "Hello! I'm interested in learning more about your solutions.",
        projects: "Hello! I'd like to see more details about your projects.",
        technologies: "Hello! I'd like to know more about your tech stack.",
    },
};
