import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: {
    default: "Muaaz | Developer",
    template: "%s | Muaaz",
  },
  description:
    "Developer specializing in semantic search, machine learning, and modern web technologies. Building intelligent systems for the modern web.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "Semantic Search",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "NLP",
    "Web Development",
  ],
  authors: [{ name: "Abdul Lattif Muaaz", url: "https://github.com/muaazl" }],
  creator: "Abdul Lattif Muaaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muaazlattif.com",
    siteName: "MuaazL Portfolio",
    title: "Muaaz | Developer",
    description:
      "Developer specializing in AI/ML, semantic search, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muaaz - Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muaaz | Developer",
    description:
      "Developer specializing in AI/ML, semantic search, and modern web technologies.",
    images: ["/og-image.png"],
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
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#252525" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdul Lattif Muaaz",
              url: "https://github.com/muaazl",
              sameAs: ["https://github.com/muaazl", "https://linkedin.com/in/muaazlattif"],
              jobTitle: "Developer",
              worksFor: {
                "@type": "Organization",
                name: "Nierwell (Pvt) Ltd.",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Colombo",
                addressCountry: "Sri Lanka",
              },
              email: "muaazlattif@gmail.com",
              telephone: "+94761164425",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
