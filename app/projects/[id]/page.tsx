import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Lightbulb, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = {
  "cinematch-ai": {
    title: "CineMatch AI",
    subtitle: "Movie Recommendation System",
    date: "December 2025",
    liveLink: "https://cinematch-muaaz.vercel.app/",
    sourceCode: "https://github.com/muaazl/cine-match",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "FastAPI",
      "Python",
      "Pinecone",
      "sentence-transformers",
      "TMDB API",
    ],
    problem:
      'Traditional movie recommendation systems rely on basic keyword matching or collaborative filtering, often missing the nuanced preferences users have. Users struggle to find movies based on "vibes," themes, or emotional tones they\'re looking for.',
    role: "Full-Stack Developer & AI Engineer",
    solution:
      "Built a hybrid recommendation engine that combines semantic AI with traditional filtering. The system uses sentence transformers to understand movie descriptions semantically, stores embeddings in Pinecone Vector DB, and provides a VOD-style interface for seamless discovery.",
    techStack: [
      { name: "Next.js", purpose: "Frontend framework for server-side rendering and optimal performance" },
      { name: "TypeScript", purpose: "Type-safe development for maintainable code" },
      { name: "Tailwind CSS", purpose: "Utility-first styling for responsive design" },
      { name: "Framer Motion", purpose: "Smooth animations and transitions" },
      { name: "FastAPI (Python)", purpose: "High-performance backend API for ML inference" },
      { name: "Pinecone", purpose: "Vector database for semantic search capabilities" },
      { name: "Sentence Transformers", purpose: "NLP embeddings for understanding movie descriptions" },
      { name: "TMDB API", purpose: "Movie data, metadata, and poster images" },
    ],
    features: [
      'Semantic search that understands natural language queries like "dark sci-fi with philosophical themes"',
      "Hybrid recommendation combining AI-powered semantic matching with traditional filters",
      "VOD-style interface with smooth animations and intuitive navigation",
      "Real-time movie suggestions based on user preferences and viewing history",
      "Advanced filtering by genre, year, rating, and more",
    ],
    impact:
      "Created a recommendation system that goes beyond keyword matching, allowing users to discover movies based on themes, moods, and vibes. The semantic search significantly improved user satisfaction and discovery rates.",
    lessonsLearned: [
      "Learned to optimize vector database queries for sub-second response times",
      "Gained experience in balancing AI complexity with user-friendly interfaces",
      "Understood the importance of hybrid approaches combining multiple recommendation strategies",
      "Mastered the integration of Python-based ML services with Next.js applications",
    ],
    screenshots: [
      { url: "/projects/cinematch/CineMatch%20AI%20Homepage.png", alt: "CineMatch AI Homepage" },
      { url: "/projects/cinematch/Semantic%20Search%20Results.png", alt: "Semantic Search Results" },
      { url: "/projects/cinematch/Movie%20Details%20%26%20Recommendations.png", alt: "Movie Details & Recommendations" },
    ],
  },
  "stulearn-ai": {
    title: "StuLearn AI",
    subtitle: "Research Workspace",
    date: "November 2025",
    liveLink: null,
    sourceCode: "https://github.com/muaazl/stu-learn",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Node.js", "Express", "MongoDB", "Python", "FastAPI", "HuggingFace"],
    problem:
      "Researchers and students struggle to efficiently extract insights from lengthy PDF documents. Traditional search only finds exact keywords, missing conceptual relationships and making it difficult to synthesize information across multiple documents.",
    role: "Full-Stack Developer & ML Engineer",
    solution:
      "Developed an AI-powered research workspace that transforms PDFs into queryable knowledge graphs. The system uses semantic search, automatic summarization, and topic clustering with local LLMs from HuggingFace, providing an intelligent research assistant, built on a MERN stack.",
    techStack: [
      { name: "Next.js", purpose: "Modern React framework for the frontend interface" },
      { name: "TypeScript", purpose: "Type safety across the entire stack" },
      { name: "Shadcn UI", purpose: "Accessible and customizable component library" },
      { name: "Node.js & Express", purpose: "Backend API for document processing and queries" },
      { name: "MongoDB", purpose: "Document storage for PDFs and extracted content" },
      { name: "Python & FastAPI", purpose: "ML inference server for NLP operations" },
      { name: "HuggingFace Models", purpose: "Local LLMs for summarization and embeddings" },
    ],
    features: [
      "PDF upload and automatic text extraction with structure preservation",
      "Semantic search across documents using transformer-based embeddings",
      "Automatic summarization of lengthy documents or specific sections",
      "Topic clustering to identify themes and relationships",
      "Knowledge graph visualization showing connections between concepts",
      "Query interface for natural language questions about uploaded documents",
    ],
    impact:
      "Significantly reduced research time by enabling conceptual search and automatic summarization. Users can now query their entire research library semantically rather than relying on keyword search.",
    lessonsLearned: [
      "Learned efficient PDF parsing techniques preserving document structure",
      "Gained experience running local LLMs for privacy-focused applications",
      "Understood the challenges of knowledge graph construction from unstructured text",
      "Mastered the balance between accuracy and performance in NLP pipelines",
    ],
    screenshots: [
      // { url: "/placeholder.svg?height=600&width=1200", alt: "StuLearn AI Dashboard" },
      // { url: "/placeholder.svg?height=600&width=1200", alt: "Semantic Search Interface" },
      // { url: "/placeholder.svg?height=600&width=1200", alt: "Knowledge Graph Visualization" },
    ],
  },
  "sku-matchops": {
    title: "SKU-MatchOps",
    subtitle: "SKU Matching Engine",
    date: "October 2025",
    liveLink: null,
    sourceCode: "https://github.com/muaazl/product-matcher",
    tags: ["Python", "sentence-transformers", "GLiNER", "Pandas", "Streamlit"],
    problem:
      "E-commerce businesses struggle with product catalog management when dealing with thousands of SKUs from different sources. Manual matching is time-consuming and error-prone, leading to inconsistent product data.",
    role: "AI Engineer & Python Developer",
    solution:
      "Created an AI-powered engine built to intelligently match, clean, and tag product SKU data in batches using hybrid embedding retrieval and automated rule-based logic.",
    techStack: [
      { name: "Python", purpose: "Core language for data processing and ML" },
      { name: "Sentence Transformers", purpose: "NLP embeddings for semantic product matching" },
      { name: "GLiNER", purpose: "Named Entity Recognition for precise attribute extraction" },
      { name: "Pandas", purpose: "Efficient data processing and manipulation" },
      { name: "Streamlit", purpose: "Interactive dashboard for match review" },
    ],
    features: [
      "Batch processing of product catalogs with automated rule-based logic",
      "Hybrid embedding retrieval for semantic product identification",
      "Named Entity Recognition (NER) for extracting specific product attributes",
      "Automated data cleaning and normalization",
      "Confidence scoring for match quality assessment",
    ],
    impact:
      "Reduced product catalog management time significantly through automated matching and cleaning.",
    lessonsLearned: [
      "Learned the importance of combining NLP models like GLiNER with traditional logic",
      "Gained experience in building interactive ML tools with Streamlit",
      "Understood high-performance vector retrieval techniques",
    ],
    screenshots: [
      { url: "/projects/product-matcher/ProductMatcher%20Interface.png", alt: "ProductMatcher Interface" },
    ],
  },
  "moonmafia": {
    title: "MoonMafia",
    subtitle: "A High Stakes Betting Game",
    date: "March 2026",
    liveLink: "https://moonmafia.vercel.app/",
    sourceCode: "https://github.com/muaazl/moon-mafia",
    tags: ["Python", "FastAPI", "React", "SQLAlchemy", "JWT", "Tailwind CSS", "Framer Motion"],
    problem:
      "Most online betting games lack transparency in their economic systems or fail to provide a seamless, secure identity management experience while maintaining high-speed real-time resolutions.",
    role: "Full-Stack Developer & Game Logic Engineer",
    solution:
      "Developed a high-stakes betting game featuring a custom economic engine, secure persistent identity management using JWT, and real-time integration with external vision APIs to resolve game outcomes.",
    techStack: [
      { name: "FastAPI (Python)", purpose: "High-performance backend for game logic and economic engine" },
      { name: "React", purpose: "Dynamic frontend for real-time game updates" },
      { name: "SQLAlchemy", purpose: "Database ORM for persistent storage of game state" },
      { name: "JWT", purpose: "Secure authentication and identity management" },
      { name: "Tailwind CSS", purpose: "Sleek and modern game interface design" },
    ],
    features: [
      "Custom-built economic engine for game mechanics",
      "Real-time integration with external vision APIs for outcome resolution",
      "Secure user profiles and history tracking",
      "Interactive and animated UI for engaging gameplay",
    ],
    impact:
      "Built a secure and scalable gaming platform with real-time outcome resolution.",
    lessonsLearned: [
      "Mastered real-time data handling and integration with external APIs",
      "Gained deep knowledge in building custom economic systems",
      "Understood secure identity management in high-stakes environments",
    ],
    screenshots: [],
  },
  "moodrae-ai": {
    title: "Moodrae AI",
    subtitle: "A Chat Pattern Analyzer Platform",
    date: "March 2026",
    liveLink: "https://moodrae.vercel.app/",
    sourceCode: "https://github.com/muaazl/moodrae-ai",
    tags: ["Python", "FastAPI", "Next.js", "Transformers", "spaCy", "Pandas", "Scikit-learn", "Recharts"],
    problem:
      "Personal and professional chat logs contain vast amounts of unstructured data that are difficult to analyze for trends, sentiment shifts, or speaker profiles without manual effort.",
    role: "AI Developer & Data Engineer",
    solution:
      "Built a privacy-first analytics engine using local NLP models to intelligently parse, cluster, and visualize WhatsApp chat logs for sentiment trends, topic shifts, and speaker profiling.",
    techStack: [
      { name: "FastAPI (Python)", purpose: "Backend API for processing NLP models" },
      { name: "Next.js", purpose: "Modern frontend for data visualization" },
      { name: "Transformers (HuggingFace)", purpose: "Local LLMs for sentiment analysis" },
      { name: "spaCy", purpose: "Entity recognition and chat parsing" },
      { name: "Recharts", purpose: "Interactive charts and data visualization" },
    ],
    features: [
      "Privacy-first processing using local NLP models",
      "Intelligent clustering of chat topics",
      "Sentiment trend analysis over time",
      "Speaker profiling and communication pattern detection",
    ],
    impact:
      "Provides users with deep insights into their digital communication patterns without compromising privacy.",
    lessonsLearned: [
      "Optimized local model inference for real-time analysis",
      "Learned complex data visualization techniques with Recharts",
      "Deepened understanding of entity recognition and topic modeling",
    ],
    screenshots: [],
  },
  "quran-intelligence": {
    title: "QuranIntelligence",
    subtitle: "A Quran Verse Search Platform",
    date: "April 2026",
    liveLink: null,
    sourceCode: "https://github.com/muaazl/quran-intelligence",
    tags: ["Python", "FastAPI", "sentence-transformers", "FAISS", "React", "SQLite", "Pandas"],
    problem:
      "Finding related verses in religious texts often requires specific keyword knowledge, making it difficult to explore themes or conceptual links across different sections of the text.",
    role: "AI Engineer & Backend Developer",
    solution:
      "Created an AI-powered semantic search engine designed to intelligently retrieve, analyze, and relate Quranic verses using multi-lingual embeddings and high-performance vector similarity matching.",
    techStack: [
      { name: "Python & FastAPI", purpose: "High-performance backend for semantic search" },
      { name: "Sentence Transformers (BGE-M3)", purpose: "Multi-lingual embeddings for semantic understanding" },
      { name: "FAISS", purpose: "High-performance vector indexing for fast retrieval" },
      { name: "SQLite", purpose: "Lightweight database for verse metadata" },
      { name: "React", purpose: "Clean interface for verse exploration" },
    ],
    features: [
      "Semantic search across Quranic verses in multiple languages",
      "Conceptual link detection between related verses",
      "Theme-based retrieval and exploration",
      "Fast and efficient vector retrieval using FAISS",
    ],
    impact:
      "Enables users to explore the Quran through concepts and themes rather than just keywords.",
    lessonsLearned: [
      "Evaluated different embedding models for religious text",
      "Implemented high-performance vector indexing with FAISS",
      "Handled multi-lingual data processing and retrieval",
    ],
    screenshots: [],
  },
  "unibud-lk": {
    title: "UNiBUD.LK",
    subtitle: "Student Accommodation System",
    date: "May 2025 – Present",
    liveLink: "https://unibud.lk/",
    sourceCode: null,
    tags: ["React", "TypeScript", "Express", "Node.js", "MongoDB", "Firebase"],
    problem:
      "Students struggle to find suitable accommodation near universities, while landlords have difficulty reaching their target audience. The process is fragmented across multiple platforms and lacks proper verification.",
    role: "Full-Stack Developer",
    solution:
      "Built a comprehensive platform that bridges the gap between landlords and students. The system features advanced search, property listings with verification, real-time messaging, and booking management.",
    techStack: [
      { name: "React", purpose: "Frontend UI library for interactive components" },
      { name: "TypeScript", purpose: "Type-safe development for reliability" },
      { name: "Express & Node.js", purpose: "Backend API for business logic" },
      { name: "MongoDB", purpose: "Database for property listings and user data" },
      { name: "Firebase", purpose: "Authentication and real-time messaging" },
    ],
    features: [
      "Property listing management for landlords with photo uploads",
      "Advanced search and filtering by location, price, amenities, and more",
      "User authentication and profile management",
      "Real-time messaging between students and landlords",
      "Booking and inquiry management system",
      "Review and rating system for properties",
      "Interactive map integration for property locations",
    ],
    impact:
      "Successfully connected hundreds of students with suitable accommodation. Streamlined the rental process, reducing search time from weeks to days.",
    lessonsLearned: [
      "Learned to build scalable real-time messaging systems",
      "Gained experience in handling file uploads and image optimization",
      "Understood the importance of user verification in marketplace platforms",
      "Mastered geolocation features and map integrations",
    ],
    screenshots: [
      { url: "/projects/unibud/Property%20Listings.png", alt: "Property Listings" },
      { url: "/projects/unibud/Property%20Details.png", alt: "Property Details" },
      { url: "/projects/unibud/Search%20Interface.png", alt: "Search Interface" },
    ],
  },
  "hr-payroll-system": {
    title: "HR Payroll System",
    subtitle: "Human Resources Information System",
    date: "August 2025 – Present",
    liveLink: "https://hr.panoceanic.lk/",
    sourceCode: null,
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    problem:
      "Small to medium businesses often rely on manual processes or fragmented tools for HR management, leading to inefficiencies, errors in payroll, and poor employee experience.",
    role: "Full-Stack Developer & Technical Lead",
    solution:
      "Developed a comprehensive HR management system covering employee management, attendance tracking, leave requests, announcements, payroll processing, and profile management - all in one unified platform.",
    techStack: [
      { name: "React", purpose: "Frontend framework for complex UI components" },
      { name: "TypeScript", purpose: "Type safety for large-scale application" },
      { name: "Node.js & Express", purpose: "Backend API for business logic and calculations" },
      { name: "MongoDB", purpose: "Document database for HR data" },
      { name: "Tailwind CSS", purpose: "Rapid UI development with utility classes" },
    ],
    features: [
      "Employee profile management with document storage",
      "Attendance tracking with clock-in/clock-out functionality",
      "Leave request and approval workflow system",
      "Automated payroll calculation with deductions and benefits",
      "Company-wide announcements and notifications",
      "Role-based access control for different user types",
      "Reporting and analytics dashboard for HR metrics",
      "Document management for contracts and policies",
    ],
    impact:
      "Reduced HR administrative time by 60% through automation. Eliminated payroll errors and improved employee satisfaction with self-service features.",
    lessonsLearned: [
      "Learned to implement complex role-based permission systems",
      "Gained experience in building audit trails for compliance",
      "Understood payroll calculation complexities and tax regulations",
      "Mastered workflow automation and approval systems",
    ],
    screenshots: [
      { url: "/projects/hr-system/Employee%20Management.png", alt: "Employee Management" },
      { url: "/projects/hr-system/Profile%20Interface.png", alt: "Profile Interface" },
    ],
  },
}

type ProjectId = keyof typeof projects

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const project = projects[id as ProjectId]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.problem,
    openGraph: {
      title: project.title,
      description: project.problem,
      type: "article",
      publishedTime: project.date,
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects[id as ProjectId]

  if (!project) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: project.title,
            description: project.problem,
            author: {
              "@type": "Person",
              name: "Abdul Lattif Muaaz",
            },
            datePublished: project.date,
            programmingLanguage: project.tags,
            codeRepository: project.sourceCode || undefined,
          }),
        }}
      />

      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" size="sm" className="mb-8 gap-2">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{project.date}</span>
              </div>
              {project.liveLink && (
                <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.sourceCode && (
                <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> Source Code
                  </a>
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">My Role</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.role}</p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">The Solution</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.solution}</p>

              <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {project.techStack.map((tech) => (
                  <div key={tech.name} className="border border-border rounded-lg p-4 bg-card">
                    <h4 className="font-semibold mb-1">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.purpose}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 leading-relaxed">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Impact & Results</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
              <div className="grid gap-6">
                {project.screenshots.map((screenshot, idx) => (
                  <div key={idx} className="border border-border rounded-lg overflow-hidden bg-card">
                    <img
                      src={screenshot.url || "/placeholder.svg"}
                      alt={screenshot.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    <p className="p-4 text-sm text-muted-foreground text-center">{screenshot.alt}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
              <ul className="space-y-3 text-muted-foreground">
                {project.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex gap-3 leading-relaxed">
                    <span className="text-primary mt-1">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
