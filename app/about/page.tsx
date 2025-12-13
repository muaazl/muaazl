import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Muaaz - Developer based in Colombo, Sri Lanka.",
  openGraph: {
    title: "About | Muaaz",
    description: "Learn more about Muaaz - Developer.",
  },
}

export default function AboutPage() {
  return (
    <div className="container-custom py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Building intelligent systems at the intersection of AI and web development
        </p>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Abdul Lattif Muaaz, a Developer based in Colombo, Sri Lanka. I enjoy building fast, clean, and
              user-focused web applications, and I’m especially drawn to projects where I can blend smart features with
              solid engineering.
            </p>

            <p>
              I work across the full stack with modern web technologies, and I’m currently exploring how AI and
              data-driven features can enhance real products. I like experimenting with models, understanding 
              how they work, and figuring out how to integrate them into practical applications.
            </p>

            <p>
              At the moment, I&apos;m working at PickMe as a Search Operation Intern, Contributing to the improvement 
              of search functionality at PickMe Food and Market by supporting tagging systems and assisting in refining 
              algorithm rules on the technical side. I also work at Nierwell (Pvt) Ltd. as a Web Developer, helping build 
              their E-Commerce platform using the MERN stack. I’m involved in database design, technical decisions, and 
              sprint planning to keep development smooth and efficient.
            </p>

            <p>
              I&apos;m currently pursuing my B.Sc. (Hons) in Computer Science at SLIIT City UNI (University of Bedfordshire,
              UK). Before this, I completed my HND in Computer Science with a GPA of 3.4 and my Foundation Certificate
              in IT with a GPA of 3.2.
            </p>

            <p>
              Outside of work, I&apos;m usually exploring new AI tools, experimenting with personal projects, or trying out
              new frameworks and ideas to sharpen my skills and stay updated with the fast-moving tech world.
            </p>
          </div>
          <div className="mt-12 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-foreground">B.Sc. (Hons) Computer Science</h3>
                </div>
                <p className="text-muted-foreground">SLIIT City UNI (University of Bedfordshire, UK)</p>
                <p className="text-sm text-muted-foreground mt-1">Reading</p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-foreground">Higher National Diploma in IT</h3>
                  <Badge variant="outline" className="w-fit">
                    GPA: 3.4
                  </Badge>
                </div>
                <p className="text-muted-foreground">SLIIT City UNI (University of Bedfordshire, UK)</p>
                <p className="text-sm text-muted-foreground mt-1">March 2024 – November 2025</p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-semibold text-foreground">Foundation Certificate in IT</h3>
                  <Badge variant="outline" className="w-fit">
                    GPA: 3.2
                  </Badge>
                </div>
                <p className="text-muted-foreground">SLIIT City UNI (University of Bedfordshire, UK)</p>
                <p className="text-sm text-muted-foreground mt-1">February 2023 - November 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
