import { Section } from "./section"
import { Reveal } from "./reveal"

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="WordPress specialist with strong front‑end fundamentals and e‑commerce experience."
    >
      <Reveal className="grid gap-8 md:grid-cols-2">
        <p className="text-pretty text-muted-foreground">
          Accomplished web developer experienced in responsive design, performance optimization, and WordPress
          customization. I craft robust, user-friendly experiences and maintain high reliability through careful
          updates, backups, and plugin management. I collaborate closely with teams and clients to ship on time and
          exceed expectations.
        </p>
        <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          {["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Elementor", "WooCommerce"].map((s) => (
            <li key={s} className="rounded-md bg-secondary/30 px-3 py-2">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
