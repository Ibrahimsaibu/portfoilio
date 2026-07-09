"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      company: "Law Pavillion",
      position: "Senior Frontend Developer / Team Lead",
      period: "Aug 2025 - Present",
      responsibilities: [
        "Led the frontend engineering team to architect and deliver high-performance AI-powered legal solutions, including case management systems and AI assistant integrations.",
        "Built CourtAI, an AI-embedded Case Manager System for Judges, integrating document summarization and daily schedule planning to streamline judicial workflows.",
        "Currently architecting an AI-powered Case Manager for Lawyers to automate law firm operations, implementing strict Role-Based Access Control (RBAC) and process management systems.",
        "Integrated a GPT-based Q&A assistant with streaming responses, enhancing user engagement through natural language legal queries.",
        "Implemented client-side OCR document extraction using Tesseract.js, improving legal data processing efficiency and text search accuracy.",
        "Architected LP Elite, an integration suite enabling seamless interoperability between the AI application and other legacy tools subscribed to by users.",
        "Co-created and led the team to complete the ACJMC platform, which was successfully launched in Nov 2025 to digitize criminal justice administration in Nigeria.",
        "Mentored junior frontend developers and introduced comprehensive code review practices to ensure alignment with architectural standards and high code quality.",
        "Appointed Frontend Team Lead following organizational transition, taking full ownership of frontend engineering direction."
      ],
    },
    {
      company: "Peerless SGC (Sterling Financial Holdings)",
      position: "Senior Frontend Engineer (Contract)",
      period: "Jan 2024 - Jul 2025",
      responsibilities: [
        "Engineered critical front-end modules for SeaBaas, a multi-tenant core banking platform, saving Sterling Bank over $10 million in annual software licensing fees.",
        "Contracted to architect and build Mizan, a separate core banking application engineered in strict compliance with non-interest (Islamic/Sharia) banking regulations.",
        "Implemented Storybook for component-driven development and visual regression testing, boosting UI consistency and accelerating design-to-code handoffs.",
        "Developed accessible and performant interfaces using React, TypeScript, Redux, and React Query, managing real-time data sync for millions of retail banking accounts.",
        "Optimized application loading performance by 35% using code-splitting, lazy loading, and fine-grained memoization strategies.",
        "Built real-time analytics dashboards adhering to strict WCAG 2.1 AA and ARIA accessibility standards for inclusive web access.",
        "Established a robust testing strategy using Cypress for E2E tests and Jest/React Testing Library for unit tests, integrating with AWS-based CI/CD pipelines to guarantee software quality.",
        "Collaborated in Agile sprints, translating product specifications into high-quality front-end features."
      ],
    },
    {
      company: "Iverify (Rentcheck)",
      position: "Tech Lead",
      period: "Jun 2023 - Dec 2024",
      responsibilities: [
        "Initially contracted as a Freelance Frontend Developer to design and engineer the core platform from scratch; subsequently hired full-time to lead the engineering team and scale all digital products.",
        "Reduced cloud infrastructure costs by 90% (from $2,000 to $200/month) through container optimization, resource rightsizing, and efficient asset delivery.",
        "Headed the frontend team in building and scaling iverify.ng and app.iverify.ng, a multi-national identity verification system spanning Nigeria, Ghana, South Africa, and Uganda.",
        "Engineered Kpali.ng, a document authentication SaaS platform with a USD-based billing model, driving cross-border business revenue.",
        "Designed and developed secure mobile experiences using React Native, connecting over 1,000 field agents for real-time KYC validation.",
        "Worked closely with Product Managers, Designers, and Backend Engineers to translate complex user requirements into clean, scalable front-end components.",
        "Built an in-house analytics system that connects to all Rentcheck services to gather and organize data for strategic planning and growth."
      ],
    },
    {
      company: "Viajio Inc.",
      position: "Frontend / Product Lead",
      period: "Aug 2021 - May 2023",
      responsibilities: [
        "Built critical design systems and reusable component libraries, accelerating development speed for viajio.com and other internal applications.",
        "Led the frontend team to build Viajio.com, a B2B platform consolidating fragmented tours and experience spaces into a robust, high-performance portal.",
        "Collaborated with leadership to align product vision with business goals, enabling rapid and effective custom feature delivery.",
        "Introduced visual regression testing, lazy loading, and SSR with Next.js, optimizing performance and SEO.",
        "Built real-time GraphQL-integrated dashboards with rapid data synchronization and interactive filtering."
      ],
    },
    {
      company: "Grapevine Innovate",
      position: "Frontend Developer Intern",
      period: "2019 - 2021",
      responsibilities: [
        "Developed crowdfunding solutions for real estate and charity sectors, addressing usability challenges.",
        "Created mockups and functional requirements to align deliverables with stakeholder expectations.",
        "Delivered scalable, user-friendly interfaces that enhanced team productivity."
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="experience" className="section-padding bg-muted/40">
      <div className="container mx-auto container-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Professional Experience</h2>
          <p className="max-w-3xl mx-auto text-foreground/80">
            A track record of successful roles and projects across various organizations.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="relative">
          <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          {experiences.map((exp, index) => (
            <motion.div key={exp.company} variants={item} className="mb-12 relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="hidden md:block">
                    <div className="bg-background p-4 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <h4 className="text-lg font-medium text-primary">{exp.position}</h4>
                      <div className="flex items-center justify-end mt-2 text-sm text-foreground/60">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:hidden">
                    <div className="bg-background p-4 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <h4 className="text-lg font-medium text-primary">{exp.position}</h4>
                      <div className="flex items-center mt-2 text-sm text-foreground/60">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-12 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 mt-6 md:mt-0" />
                </div>

                <div className="pl-20 md:pl-12 md:w-1/2">
                  <div className="bg-background p-4 rounded-lg shadow-md">
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-background rounded-lg shadow-lg">
            <Briefcase className="h-5 w-5 text-primary mr-2" />
            <span className="text-foreground/80">
              Educational background: ND and HND in Computer Science from Yaba College of Tech
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
