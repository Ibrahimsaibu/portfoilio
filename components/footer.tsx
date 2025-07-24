import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Ibrahimsaibu", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/ibrahim-saibu", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/SaibuIbrahim", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:ibrahimsaibu2010@gmail.com", label: "Email" },
  ]

  const pageLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="font-bold text-2xl mb-4 cursor-pointer">
                <span className="gradient-text">Ibrahim</span>
                <span>.dev</span>
              </div>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Senior Frontend Engineer and Product Engineer specializing in building efficient, scalable, and
              user-centric solutions with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>Lagos, Nigeria</li>
              <li>ibrahimsaibu2010@gmail.com</li>
              <li>+2347010139295</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60">
          <p>© {currentYear} Ibrahim Saibu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
