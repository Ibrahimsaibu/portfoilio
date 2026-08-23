import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Ibrahim Saibu | Senior Frontend & Product Engineer",
  description:
    "Portfolio of Ibrahim Saibu, a Senior Frontend Engineer and Product Engineer specializing in React, Next.js, and modern web technologies.",
}

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ibrahim Saibu",
    url: "https://ibrahimsaibu.dev",
    image: "https://ibrahimsaibu.dev/profile-picture.jpg",
    jobTitle: "Senior Frontend & Product Engineer",
    sameAs: [
      "https://github.com/Ibrahimsaibu",
      "https://www.linkedin.com/in/ibrahim-saibu",
      "https://x.com/SaibuIbrahim",
    ],
    email: "mailto:info@ibrahimsaibu.dev",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Development",
      "Software Engineering",
      "Product Engineering",
      "Web Development",
    ],
  }

  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
