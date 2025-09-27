import { Section } from "./section"
import { Reveal } from "./reveal"

const testimonials = [
  {
    name: "Client A",
    role: "Founder, Startup",
    quote:
      "Ansh delivered a fast and reliable WordPress site that boosted our conversions. Great communication and attention to detail.",
  },
  {
    name: "Client B",
    role: "Owner, E‑commerce",
    quote:
      "From theme customization to WooCommerce setup, everything was smooth. Performance and UX exceeded expectations.",
  },
  {
    name: "Client C",
    role: "Project Manager",
    quote: "Professional, responsive, and thorough. Highly recommend for WordPress development and maintenance.",
  },
]

export function Testimonials() {
  return (
    <Section id="testimonials" title="Testimonials" subtitle="What clients say.">
      <div className="overflow-x-auto">
        <div className="flex snap-x snap-mandatory gap-4">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              className="snap-center min-w-[80%] md:min-w-[45%] lg:min-w-[30%] rounded-lg border bg-card p-6"
            >
              <blockquote className="text-pretty leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="mt-4 text-sm text-muted-foreground">
                {t.name} • {t.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
