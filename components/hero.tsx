import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <header id="home" className="relative pt-16 md:pt-24">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="gradient-accent absolute inset-0 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-3/5">
            <p className="text-sm tracking-wide text-muted-foreground">Hello, I&apos;m</p>
            <h1 className="mt-2 text-pretty text-4xl md:text-6xl font-bold">Ansh Sharma</h1>
            <h2 className="mt-2 text-foreground/90 text-2xl md:text-3xl">WordPress Developer</h2>
            <p className="mt-4 text-muted-foreground max-w-prose">
              I build fast, secure, and conversion-focused WordPress websites with custom themes, WooCommerce, and
              Elementor—optimized for performance and SEO.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:ansh93870@gmail.com">
                <Button className="gradient-accent text-white hover:opacity-90 transition">Get in touch</Button>
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition"
              >
              </a>
              <nav aria-label="Social links" className="flex items-center gap-3">
                <a
                  href="mailto:ansh93870@gmail.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 hover:bg-secondary transition"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ansh-sharma-1ba135308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 hover:bg-secondary transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/anshsharma0007"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 hover:bg-secondary transition"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </nav>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative h-40 w-40 md:h-56 md:w-56 rounded-full ring-4 ring-primary/20 overflow-hidden">
              <Image
                src="/Ansh.jpeg"
                alt="Professional photo of Ansh Sharma"
                fill
                sizes="224px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
