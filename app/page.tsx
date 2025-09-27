import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
import { Timeline } from "@/components/timeline"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Timeline />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  )
}

function SiteHeader() {
  return (
    <div className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold text-gradient">
          AS
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-primary transition" href="#about">
            About
          </a>
          <a className="hover:text-primary transition" href="#skills">
            Skills
          </a>
          <a className="hover:text-primary transition" href="#portfolio">
            Projects
          </a>
          <a className="hover:text-primary transition" href="#experience">
            Experience
          </a>
          <a className="hover:text-primary transition" href="#contact">
            Contact
          </a>
        </nav>
        <a href="#contact" className="hidden md:block">
          <Button size="sm" className="gradient-accent text-white hover:opacity-90 transition">
            Hire Me
          </Button>
        </a>
      </div>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Ansh Sharma. All rights reserved.</p>
      </div>
    </footer>
  )
}
