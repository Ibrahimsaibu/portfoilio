import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"
import MouseFollower from "@/components/mouse-follower"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ibrahimsaibu.dev"),
  title: {
    default: "Ibrahim Saibu | Senior Frontend & Product Engineer",
    template: "%s | Ibrahim Saibu",
  },
  description:
    "Official portfolio of Ibrahim Saibu, Senior Frontend & Product Engineer. Explore my projects, articles, and software engineering journey.",
  keywords: [
    "Ibrahim Saibu",
    "Senior Frontend Engineer",
    "Product Engineer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "ibrahimsaibu.dev",
    "Ibrahim Saibu GitHub",
    "Ibrahim Saibu LinkedIn",
    "Ibrahimsaibu",
    "ibrahim-saibu",
  ],
  authors: [
    { name: "Ibrahim Saibu", url: "https://ibrahimsaibu.dev" },
    { name: "Ibrahim Saibu", url: "https://github.com/Ibrahimsaibu" },
    { name: "Ibrahim Saibu", url: "https://www.linkedin.com/in/ibrahim-saibu" },
  ],
  creator: "Ibrahim Saibu",
  other: {
    "me:github": "https://github.com/Ibrahimsaibu",
    "me:linkedin": "https://www.linkedin.com/in/ibrahim-saibu",
    "profile:username": "Ibrahimsaibu",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibrahimsaibu.dev",
    title: "Ibrahim Saibu | Senior Frontend & Product Engineer",
    description:
      "Official portfolio of Ibrahim Saibu, Senior Frontend & Product Engineer.",
    siteName: "Ibrahim Saibu",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ibrahim Saibu Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Saibu | Senior Frontend & Product Engineer",
    description:
      "Official portfolio of Ibrahim Saibu, Senior Frontend & Product Engineer.",
    creator: "@SaibuIbrahim",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MouseFollower />
          <Navbar />
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

