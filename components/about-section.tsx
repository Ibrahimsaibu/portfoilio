"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, Award, Star, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" className="section-padding bg-muted/40">
      <div className="container mx-auto container-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="max-w-3xl mx-auto text-foreground/80">
            A results-driven software engineer passionate about building efficient, scalable, and user-centric
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={item}>
            <Card className="h-full border-none bg-background/60 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="pb-2">
                <User className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Professional Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Skilled in the full Software Development Life Cycle (SDLC), from design and development to deployment
                  and optimization.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-none bg-background/60 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="pb-2">
                <Star className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Team Leader</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Proven expertise in leading cross-functional teams to deliver impactful solutions in industries like
                  fintech, real estate, and e-commerce.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-none bg-background/60 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Product-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Passionate about bridging the gap between design and functionality to create seamless user
                  experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-none bg-background/60 backdrop-blur-sm shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="pb-2">
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Continuous Learner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Adept at leveraging modern frameworks and tools to align technology with business objectives while
                  ensuring exceptional usability.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-background/60 backdrop-blur-sm rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Summary</h3>
          <p className="text-foreground/80 mb-6 text-lg leading-relaxed font-medium">
            Senior Frontend Engineer & Technical Lead specializing in TypeScript, React, Next.js, and AI-powered web applications. Combines deep technical expertise in full-stack integrations (REST, GraphQL, gRPC) with a modern approach to team leadership and engineering culture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-foreground/80">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">FinTech Scale</h4>
              <p className="text-sm">Architected and co-built a core banking platform deployed across multiple financial institutions, significantly reducing licensing overhead and enabling rapid multi-tenant scaling.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Legal Tech & AI Innovation</h4>
              <p className="text-sm">Led engineering teams to deliver state-of-the-art AI applications and case management portals, empowering judges and legal practitioners while modernizing Nigeria's criminal justice system.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Cloud Optimization</h4>
              <p className="text-sm">Engineered front-end and full-stack performance optimizations that slashed cloud infrastructure costs by up to 90%.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Engineering Excellence</h4>
              <p className="text-sm">Champions high-performing team cultures through automated testing frameworks (Cypress, Jest), robust code quality standards, and developer mentorship.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-background/60 backdrop-blur-sm rounded-lg shadow-lg p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          <div className="lg:col-span-2 space-y-4">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-xs px-3 py-1">Featured Milestone</Badge>
            <h3 className="text-2xl font-bold gradient-text">Google Sub-Saharan Africa AI Innovation Initiative</h3>
            <p className="text-foreground/80 leading-relaxed">
              Selected as one of the key industry leaders and AI innovators in Nigeria to meet with <strong>Matt Brittin</strong>, Google's President for Europe, Middle East, and Africa (EMEA).
            </p>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Collaborated on discussions regarding the <strong>₦2.8 Billion AI Talent Fund</strong> across Sub-Saharan Africa, aimed at empowering young Nigerians and educators with fundamental AI skills, while providing funding, mentorship, and technical guidance to accelerate local AI startups.
            </p>
          </div>
          <div className="relative h-64 lg:h-72 rounded-lg overflow-hidden shadow-md border border-muted">
            <Image
              src="/google-president-meeting.jpg"
              alt="Ibrahim Saibu meeting with Matt Brittin, Google President EMEA"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
