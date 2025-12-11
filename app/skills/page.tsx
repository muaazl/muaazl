import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and expertise of Muaaz - Programming languages, frameworks, databases, AI/ML tools, and more.",
  openGraph: {
    title: "Skills | Muaaz",
    description:
      "Technical skills and expertise - Programming languages, frameworks, databases, AI/ML tools, and more.",
  },
}

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages I work with",
    skills: ["Typescript", "Javascript", "Python", "Java", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    description: "Frontend and backend frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Databases & Caching",
    description: "Data storage and management",
    skills: ["MongoDB", "MySQL", "Supabase", "Vector DB"],
  },
  {
    title: "Machine Learning & Date Tools",
    description: "AI/ML tools and libraries",
    skills: [
      "scikit-learn",
      "pandas",
      "NumPy",
      "spaCy",
      "sentence-transformers",
      "SciPy",
    ],
  },
  {
    title: "ML Techniques",
    description: "Machine learning capabilities",
    skills: [
      "Text Classification",
      "Semantic Search",
      "Clustering",
      "Summarization",
      "Similarity Scoring",
      "Basic Feature Engineering",
      "Data Cleaning & Preprocessing",
    ],
  },
  {
    title: "Developer Tools",
    description: "Version control and development tools",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render", "Trello"],
  },
  {
    title: "Other Technologies",
    description: "Additional technical skills",
    skills: ["REST APIs", "CSV/Excel Data Processing", "Web Scraping", "Firebase"],
  },
  {
    title: "Design Tools",
    description: "Design and Wireframe tools",
    skills: ["Figma", "Wireframing", "Prototyping", " Basic UI/UX Principles"],
  },
]

export default function SkillsPage() {
  return (
    <div className="container-custom py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Skills & Expertise</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          A comprehensive toolkit spanning modern web development, AI/ML engineering, and data processing
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
