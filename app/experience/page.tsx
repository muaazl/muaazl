import type { Metadata } from "next"
import { Briefcase, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional work experience of Muaaz - Developer.",
  openGraph: {
    title: "Experience | Muaaz",
    description: "Professional work experience - Developer.",
  },
}

const experiences = [
  {
    title: "Web Developer",
    company: "Nierwell (Pvt) Ltd.",
    period: "March 2024 – Present",
    type: "Hybrid",
    responsibilities: [
      "Led the development of a comprehensive E-Commerce software platform using the MERN Stack (MongoDB, Express.js, React, Node.js)",
      "Collaborated with cross-functional teams on database architecture design, ensuring scalable and efficient data models",
      "Managed the technical team, coordinating sprints and ensuring timely delivery of features while maintaining code quality",
      "Participated in the entire software development lifecycle from initial design and planning through implementation and deployment",
      "Implemented best practices for code review, testing, and continuous integration to maintain high development standards",
    ],
  },
  {
    title: "Search Operations Intern",
    company: "PickMe | Digital Mobility Solutions Lanka PLC",
    period: "March 2023 – November 2023",
    type: "On-site",
    responsibilities: [
      "Contributed to the enhancement of search functionality for PickMe Food & Market, improving user discovery and experience",
      "Supported the development and refinement of product tagging systems to improve search accuracy and relevance",
      "Assisted in optimizing search algorithm rules on the technical side, working with ranking and filtering mechanisms",
      "Analyzed search performance metrics and user behavior data to identify areas for improvement",
      "Collaborated with product and engineering teams to implement data-driven search improvements",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="container-custom py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Experience</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Professional journey building scalable web applications and intelligent systems
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 sm:p-8 bg-card hover:border-primary transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{exp.title}</h2>
                  <p className="text-lg text-foreground flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    {exp.company}
                  </p>
                </div>
                <div className="text-muted-foreground text-sm flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="text-right sm:text-left font-mono text-xs">{exp.type}</div>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3 leading-relaxed">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
