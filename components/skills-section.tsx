"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Server, Database, Cpu, Palette, UserCheck, LineChart, Brain, Globe } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        "React",
        "React Native",
        "Next.js",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Gsap",
        "Framer Motion",
        "Storybook",
      ],
    },
    {
      title: "Backend & ORM",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Node.js", "NestJs", "C# (.NET)", "CMS (Sanity, Strapi)", "Prisma", "Sequelize"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB)"],
    },
    {
      title: "Testing & Deployment",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: ["Jest", "Cypress", "AWS", "GCP", "DigitalOcean", "CI/CD"],
    },
    {
      title: "Design & UI",
      icon: <Palette className="h-6 w-6 text-primary" />,
      skills: ["UI/UX Design", "Tailwind CSS", "SCSS", "Responsive Design", "Animation"],
    },
    {
      title: "Soft Skills",
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      skills: ["Leadership", "Critical Thinking", "Mentorship", "Collaboration", "Problem Solving"],
    },
    {
      title: "Product & Business",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      skills: ["Product Management", "Business Analysis", "Strategic Planning", "Agile Methodologies"],
    },
    {
      title: "Learning & Growth",
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: ["Continuous Learning", "Knowledge Sharing", "Technology Trends"],
    },
    {
      title: "Miscellaneous",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["Server Administration", "Search Engine Optimization (SEO)", "Product Development"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto container-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="max-w-3xl mx-auto text-foreground/80">
            A comprehensive set of technical and soft skills developed through years of experience in the software
            industry.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-background/60 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-muted rounded-md mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span className="text-foreground/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
