import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Muaaz - AI-powered applications, full-stack systems, and innovative solutions.",
  openGraph: {
    title: "Projects | Muaaz",
    description: "Explore AI-powered applications, full-stack systems, and innovative solutions.",
  },
}

const projects = [
  {
    id: "cinematch-ai",
    title: "CineMatch AI",
    description:
      'A world-class hybrid movie recommendation engine powered by Semantic AI, Pinecone Vector DB, and a VOD-style UI. Uses NLP to understand "vibes" rather than just keywords.',
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "FastAPI", "Pinecone", "TMDB API"],
    liveLink: "https://cinematch-muaaz.vercel.app/",
    sourceCode: "https://github.com/muaazl/cine-match",
    date: "December 2025",
    featured: true,
  },
  {
    id: "product-matcher",
    title: "ProductMatcher",
    description:
      "An AI-powered engine integrated into desktop software to intelligently match, clean, and tag product SKU data in batches using a product catalog.",
    tags: ["Python", "Sentence Transformers", "Semantic Search", "Keyword Matching", "Pandas"],
    liveLink: null,
    sourceCode: "https://github.com/muaazl/product-matcher",
    date: "October 2025",
    featured: false,
  },
  {
    id: "stulearn-ai",
    title: "StuLearn AI",
    description:
      "An AI-powered research workspace that transforms PDFs into a queryable knowledge graph. Features semantic search, auto-summarization, and topic clustering using local LLMs.",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Node.js", "Express", "MongoDB", "Python", "FastAPI", "HuggingFace"],
    liveLink: null,
    sourceCode: "https://github.com/muaazl/stu-learn",
    date: "November 2025",
    featured: true,
  },
  {
    id: "unibud-lk",
    title: "UNiBUD.LK",
    description:
      "A service system to bridge the gap between landlords and students for easy accommodation finding. Streamlines the rental process with advanced search and matching.",
    tags: ["React", "TypeScript", "Express", "Node.js", "MongoDB", "Firebase"],
    liveLink: "https://unibud.lk/",
    sourceCode: null,
    date: "May 2025 – Present",
    featured: false,
  },
  {
    id: "hr-payroll-system",
    title: "HR Payroll System",
    description:
      "An administrative system for employee, attendance, leave, announcement, payroll and profile management. Comprehensive HR solution for modern businesses.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    liveLink: "https://hr.panoceanic.lk/",
    sourceCode: null,
    date: "August 2025 – Present",
    featured: false,
  },
]

export default function ProjectsPage() {
  return (
    <div className="container-custom py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Projects</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          A collection of applications showcasing AI integration, full-stack development, and innovative problem-solving
        </p>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-border rounded-lg p-6 sm:p-8 bg-card hover:border-primary transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">
                      <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                        {project.title}
                      </Link>
                    </h2>
                    {project.featured && (
                      <Badge variant="default" className="bg-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{project.date}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Link href={`/projects/${project.id}`}>
                    View Details <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                {project.liveLink && (
                  <Button asChild size="sm" variant="ghost" className="gap-2">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.sourceCode && (
                  <Button asChild size="sm" variant="ghost" className="gap-2">
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
