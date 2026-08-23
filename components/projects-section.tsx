"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" })

  const projects = [
    {
      title: "HelpDeskHQ",
      description:
        "A multi-tenant customer success platform enabling companies to manage, track, and resolve customer requests, complaints, and feedback with interactive ticket dashboards.",
      image: "",
      link: "https://helpdesk-fe-lemon.vercel.app",
      github: "",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "SaaS", "Multi-tenant", "Customer Success"],
    },
    {
      title: "Law Pavilion AI",
      description:
        "An AI-powered legal assistant featuring a GPT-based Q&A system, streaming responses, and Tesseract.js OCR, delivered in a record 3 weeks as Frontend Lead.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742309787/olaide-design_wv3pd0.png", // fallback or placeholder
      link: "https://lawpavilion.ai/",
      github: "",
      tags: ["React", "TypeScript", "Vite", "Generative AI", "OCR", "Tesseract.js"],
    },
    {
      title: "CourtAI (Judges' Case Manager)",
      description:
        "An AI-embedded case management system built for judges to streamline daily judicial activities, featuring document summarization, daily schedule planning, and AI assistants.",
      image: "",
      link: "https://court-ai.lawpavilion.com/login",
      github: "",
      tags: ["React", "TypeScript", "Tailwind CSS", "Generative AI", "Legal Tech", "Dashboard"],
    },
    {
      title: "Lawfirm AI Automation",
      description:
        "A lawyers' case manager platform automating law firm operations with embedded AI, strict role-based access control (RBAC), and process management (In Development).",
      image: "",
      link: "#",
      github: "",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Generative AI", "RBAC", "SaaS"],
    },
    {
      title: "ACJMC (Criminal Justice Portal)",
      description:
        "A digitized case-tracking platform for the Administration of Criminal Justice Monitoring Committee, completed and successfully launched in November 2025.",
      image: "",
      link: "https://acjmc.gov.ng/",
      github: "",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful APIs", "Dashboard"],
    },
    {
      title: "SeaBaas",
      description:
        "Africa's first indigenous core banking app, optimized for scalability and seamless operations. Saved Sterling Bank over $10 million in licensing fees.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742311059/seabaas_ynnriq.png",
      link: "https://sterling.ng/seabaas/",
      github: "",
      tags: ["React", "TypeScript", "Redux", "React Query", "Fintech", "Storybook"],
    },
    {
      title: "Mizan",
      description:
        "A separate core banking application designed and built for Peerless SGC, engineered in strict compliance with non-interest (Islamic/Sharia) banking law.",
      image: "",
      link: "https://mizan.seabaas.co",
      github: "",
      tags: ["React", "TypeScript", "Redux Toolkit", "React Query", "Fintech", "Islamic-Banking"],
    },
    {
      title: "Iverify.ng",
      description:
        "Identity verification platform spanning 4 countries. Designed the core system initially as a freelancer, and later scaled it as Tech Lead.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742310319/iverify-hero_xrfxi8.png",
      link: "https://iverify.ng",
      github: "",
      tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "KYC"],
    },
    {
      title: "Kpali.ng",
      description:
        "A certificate and document verification SaaS platform with a USD-based revenue model, enabling fast digital verification.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742310888/kpali-hero_upepmf.png",
      link: "https://kpali.ng",
      github: "",
      tags: ["Next.js", "TypeScript", "React Query", "SaaS", "Authentication"],
    },
    {
      title: "MyTravelExplorer",
      description:
        "A comprehensive booking app for flights and hotels, providing a seamless travel planning experience for users.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742309804/mytravelexplorer_bu0tll.png",
      link: "https://mytravelexplorer.com",
      github: "",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Travel"],
    },
    {
      title: "Eazi.rent",
      description:
        "Application that simplifies and makes rent payments flexible for tenants with integrated payment options.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742308298/eazirent_hero_kpxnqz.jpg",
      link: "#",
      github: "",
      tags: ["React Native", "JavaScript", "Node.js", "MongoDB", "Real Estate"],
    },
    {
      title: "Her.global",
      description: "Landing page for women's beauty products with integrated e-commerce functionality and analytics.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742309787/olaide-design_wv3pd0.png",
      link: "#",
      github: "",
      tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
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
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="max-w-3xl mx-auto text-foreground/80">
            A selection of projects that demonstrate my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(project.title)}`
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.link && project.link !== "#" ? (
                    <Button asChild variant="default" size="sm">
                      <Link href={project.link} target="_blank">
                        View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="default" size="sm" disabled>
                      Coming Soon <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
