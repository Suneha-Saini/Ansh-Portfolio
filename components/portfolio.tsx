import Image from "next/image"
import { Section } from "./section"
import { Reveal } from "./reveal"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Geekay Accountants",
    href: "https://geekayaccountants.com.au/",
    img: "/accounting-website-screenshot.jpg",
    tag: "Accounting & Banking Services",
  },
  {
    title: "AGB Care",
    href: "https://agbcare.com.au/",
    img: "/care-support-website-screenshot.jpg",
    tag: "NDIS / Accessibility",
  },
  {
    title: "AOSC Australia",
    href: "https://aoscaustralia.com",
    img: "/tech-company-services-website-screenshot.jpg",
    tag: "Tech Services",
  },
  {
    title: "GlitzCharm",
    href: "https://glitzcharm.com.au/",
    img: "/jewellery-shop-website-screenshot.jpg",
    tag: "E‑commerce (Jewellery)",
  },
]

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      title="Projects"
      subtitle="A selection of WordPress builds with custom themes, Elementor, and WooCommerce."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Reveal key={p.title} className="group relative overflow-hidden rounded-lg border bg-card">
            <div className="relative aspect-[16/10]">
              <Image
                src={p.img || "/placeholder.svg"}
                alt={`${p.title} preview`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">{p.tag}</p>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
            </div>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0"
              aria-label={`Open ${p.title} in a new tab`}
            />
            <div className="pointer-events-none absolute inset-0 hidden items-end justify-end p-3 group-hover:flex">
              <span className="inline-flex items-center gap-1 rounded-md bg-background/70 px-2 py-1 text-sm">
                Visit <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
