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
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "SeaBaas",
      description:
        "Africa's first indigenous core banking app, optimized for scalability and seamless operations. Saved Sterling Bank over $10 million in licensing fees.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742311059/seabaas_ynnriq.png",
      link: "https://sterling.ng/seabaas/",
      github: "",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Core-Banking", "Fintech", ".NET"],
    },
    {
      title: "Iverify.ng",
      description:
        "Robust identity verification system for authenticating government-issued IDs and phone numbers across Nigeria, Ghana, South Africa, and Uganda.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742310319/iverify-hero_xrfxi8.png",
      link: "https://iverify.ng",
      github: "",
      tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "KYC"],
    },
    {
      title: "Kpali.ng",
      description:
        "Certificate and document authentication platform with a USD-based revenue model to drive business cash flow.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742310888/kpali-hero_upepmf.png",
      link: "https://kpali.ng",
      github: "",
      tags: ["React", "JavaScript", "Express", "MySQL", "Authentication"],
    },
    {
      title: "MyTravelExplorer",
      description:
        "A comprehensive booking app for flights and hotels, providing a seamless travel planning experience for users.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742309804/mytravelexplorer_bu0tll.png",
      link: "https://mytravelexplorer.com",
      github: "",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Travel", "Flights", "Hotel"],
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
      title: "Olaide.design",
      description: "Landing page for women's beauty products with integrated e-commerce functionality and analytics.",
      image: "https://res.cloudinary.com/magnaibra/image/upload/v1742309787/olaide-design_wv3pd0.png",
      link: "https://olaide.design",
      github: "",
      tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
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
