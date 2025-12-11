import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Muaaz",
  description:
    "Developer specializing in semantic search, machine learning, and modern web technologies.",
  openGraph: {
    title: "Muaaz | Developer",
    description: "Full-Stack Developer specializing in AI/ML, semantic search, and modern web technologies.",
  },
}

export default function Home() {
  return (
    <div className="container-custom py-20 lg:py-32">
      <div className="max-w-4xl">
        <div className="mb-6">
          <p className="text-muted-foreground text-sm sm:text-base mb-4">Hi, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">Muaaz</h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-mono mb-8">
            and I'm Developer
          </p>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 text-pretty max-w-2xl">
          I'm interested in building intelligent, high-performance web applications that bridge the gap between
          cutting-edge AI and exceptional user experiences. Specializing in semantic search, machine learning, 
          and modern full-stack development.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <Button asChild size="lg" className="gap-2">
            <Link href="/projects">
              View My Work <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/muaazl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/muaazlattif"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:muaazlattif@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email Contact"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="mt-32 grid md:grid-cols-3 gap-8">
        <div className="border border-border rounded-lg p-6 bg-card hover:border-primary transition-colors">
          <h3 className="text-2xl font-bold mb-2">5+</h3>
          <p className="text-muted-foreground">Projects Shipped</p>
        </div>
        <div className="border border-border rounded-lg p-6 bg-card hover:border-primary transition-colors">
          <h3 className="text-2xl font-bold mb-2">2+</h3>
          <p className="text-muted-foreground">Years Experience</p>
        </div>
        <div className="border border-border rounded-lg p-6 bg-card hover:border-primary transition-colors">
          <h3 className="text-2xl font-bold mb-2">3.4</h3>
          <p className="text-muted-foreground">GPA in Computer Science</p>
        </div>
      </div>
    </div>
  )
}
