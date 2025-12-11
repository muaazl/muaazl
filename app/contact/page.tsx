"use client"

import React, { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  // Replace with your Formspree form ID
  const [state, formspreeHandleSubmit] = useForm("xjknpebz")
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // When Formspree reports success, show a toast and clear the form
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    }
  }, [state.succeeded, toast])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // formspreeHandleSubmit reads form fields from the event target, so just pass the event.
    await formspreeHandleSubmit(e)
    // Note: state.submitting and state.succeeded reflect status from the hook
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container-custom py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
        </p>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Pass the native form submit event into formspreeHandleSubmit */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                  {/* Formspree ValidationError will pick up field errors by name */}
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={8}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button type="submit" size="lg" disabled={state.submitting} className="w-full sm:w-auto">
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:muaazlattif@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      muaazlattif@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+94761164425"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +94 76 116 4425
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect Online</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/muaazl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/muaazlattif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}