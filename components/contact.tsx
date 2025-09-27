"use client"

import { useState } from "react"
import { Section } from "./section"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Reveal } from "./reveal"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error("Request failed")
      toast({ title: "Message sent!", description: "Thanks for reaching out. I will reply soon." })
    } catch (e: any) {
      toast({ title: "Something went wrong", description: "Please try again later." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let’s discuss your project. I’m available for freelance and full‑time opportunities."
    >
      <Reveal className="grid gap-8 md:grid-cols-2">
        <form
          className="rounded-lg border bg-card p-6 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault()
            const fd = new FormData(e.currentTarget as HTMLFormElement)
            await onSubmit(fd)
            ;(e.currentTarget as HTMLFormElement).reset()
          }}
        >
          <div>
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              placeholder="Tell me about your goals…"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full gradient-accent text-white hover:opacity-90 transition"
          >
            {loading ? "Sending…" : "Send Message"}
          </Button>
        </form>

        <aside className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Contact Details</h3>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Amritsar, India 143105</li>
            <li>+91 84278 88070</li>
            <li>
              <a
                href="mailto:ansh93870@gmail.com"
                className="underline underline-offset-4 hover:text-foreground transition"
              >
                ansh93870@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-sm font-medium">Social</h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="mailto:ansh93870@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 hover:bg-secondary transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 hover:bg-secondary transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 hover:bg-secondary transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </aside>
      </Reveal>
    </Section>
  )
}
