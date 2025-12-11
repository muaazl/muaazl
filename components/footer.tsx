import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Abdul Lattif Muaaz</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Developer building intelligent systems for the modern web.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/muaazl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/muaazlattif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:muaazlattif@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Get In Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Colombo, Sri Lanka</li>
              <li>
                <a href="mailto:muaazlattif@gmail.com" className="hover:text-foreground transition-colors">
                  muaazlattif@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+94761164425" className="hover:text-foreground transition-colors">
                  +94 76 116 4425
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Abdul Lattif Muaaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
