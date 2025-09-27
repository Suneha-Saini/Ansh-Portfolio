import { Section } from "./section"
import { Reveal } from "./reveal"

type Item = {
  title: string
  org: string
  period: string
  location?: string
  points?: string[]
}

const experience: Item[] = [
  {
    title: "Web Developer",
    org: "Aosc technologies",
    period: "10/2024 – Present",
    location: "Amritsar, India",
    points: [
      "Built interactive, responsive pages using HTML, CSS, JavaScript",
      "Optimized performance (image compression, code minification)",
      "Maintained and customized WordPress themes and plugins",
      "Implemented backups, updates, and testing to reduce downtime",
    ],
  },
  {
    title: "Industrial Trainee",
    org: "Aosc technologies",
    period: "04/2024 – 10/2024",
    location: "Amritsar, India",
    points: [
      "Supported development tasks and documentation",
      "Learned best practices and contributed to training resources",
    ],
  },
]

const education: Item[] = [
  {
    title: "Bachelor's Degree",
    org: "Details available on request",
    period: "Year – Year",
    location: "",
    points: ["Coursework in programming, web development, and projects"],
  },
]

function TimelineList({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-l border-border pl-6">
      {items.map((it, idx) => (
        <Reveal key={idx} className="mb-8">
          {/* timeline dot */}
          <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full gradient-accent" aria-hidden="true" />
          <details className="rounded-md border bg-card/40 p-4 transition hover:bg-card/60">
            <summary className="cursor-pointer list-none">
              <h3 className="font-semibold">
                {it.title} • <span className="text-gradient">{it.org}</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                {it.period}
                {it.location ? ` • ${it.location}` : ""}
              </p>
            </summary>
            {it.points && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {it.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            )}
          </details>
        </Reveal>
      ))}
    </ol>
  )
}

export function Timeline() {
  return (
    <Section
      id="experience"
      title="Experience & Education"
      subtitle="Highlights of my professional journey and academic background."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Experience</h3>
          <TimelineList items={experience} />
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold">Education</h3>
          <TimelineList items={education} />
        </div>
      </div>
    </Section>
  )
}
