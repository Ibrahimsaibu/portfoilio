"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      company: "Peerless SGC (Sterling Financial Holdings)",
      position: "Senior Frontend (Contract)",
      period: "Jan 2024 - Dec 2024",
      responsibilities: [
        "Contributed significantly to the success of SeaBaas, an indigenous core banking app that saved Sterling Bank over $10millions in licensing fees.",
        "Led development teams to deliver multiple critical modules integrated into SeaBaas a multi-tenancy app that is used by financial institutions to run effective services for their millions of customers.",
        "Planned and executed agile sprints, fostering seamless communication across stakeholders and ensured task are delivered on schedule.",
        "Built the End of Activities interface to monitor, in real-time, the reporting of daily, monthly and yearly activities across all branches.",
        "Ensure quality assurance is passed by running end to end (E2E) testing on seabass at every deployment environment before handover to client.",
        "Planned and executed agile sprints, fostering seamless communication across stakeholders ensuring functionality and scalability.",
      ],
    },
    {
      company: "Iverify (Rentcheck)",
      position: "Tech Lead",
      period: "Jun 2023 – Dec 2024",
      responsibilities: [
        "Optimized cloud service costs from $2000 to $200 per month while enhancing the app's performance and capabilities.",
        "Served as the administrator of the app and its infrastructures, ensuring smooth operations and reliability and scalability.",
        "Led the frontend team that built and maintained the platforms iverify.ng and app.iverify.ng, a robust identity verification system.",
        "Developed Kpali.ng, a certificate and document verification app with a USD-based revenue model, to drive business cash flow.",
        "Attended to all technical issues and served as the primary point of communication for technical concerns at Iverify.",
        "Built an in-house analytics system that connects to all Rentcheck services for strategic planning and growth.",
        "Developed mobile applications connecting thousands of agents to the platform, expanding usability and accessibility.",
        "Represented the company at technical forums, showcasing innovations, and fostering partnerships.",
      ],
    },
    {
      company: "Viajio Inc.",
      position: "Frontend / Product Lead",
      period: "Aug 2021 - May 2023",
      responsibilities: [
        "Built critical design systems and reusable components that is used to develop viajio.com and other internal apps faster.",
        "Led the frontend team that build Viajio.com platform that brings together the fragmented tours and experience space by building a robust B2B platform.",
        "Collaborated with leadership to align product vision with business goals which makes delivering of custom feature fast and effective.",
        "Delivered a cohesive, high-quality user experience that improved client and user satisfaction.",
      ],
    },
    {
      company: "Grapevine Innovate",
      position: "Frontend Developer Intern",
      period: "2019 - 2021",
      responsibilities: [
        "Developed crowdfunding solutions for real estate and charity sectors, addressing usability challenges.",
        "Created mockups and functional requirements to align deliverables with stakeholder expectations.",
        "Delivered scalable, user-friendly interfaces that enhanced team productivity.",
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
