"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, Award, Star, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
          <p className="text-foreground/80 mb-4">
            A results-driven software engineer with a passion for building efficient, scalable, and user-centric
            solutions. I specialize in delivering high-quality, innovative systems that meet the highest standards of
            usability and performance.
          </p>
          <p className="text-foreground/80 mb-4">
            With proven expertise in leading cross-functional teams, I've delivered impactful solutions across various
            industries including fintech, real estate, and e-commerce. My approach bridges the gap between design and
            functionality to create seamless user experiences.
          </p>
          <p className="text-foreground/80">
            I'm adept at leveraging modern frameworks and tools to align technology with business objectives while
            ensuring exceptional usability and performance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
