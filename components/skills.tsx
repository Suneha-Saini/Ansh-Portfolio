import { Section } from "./section"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

type Skill = { name: string; level: number } // level in %
const skills: Skill[] = [
  { name: "WordPress", level: 92 },
  { name: "PHP", level: 80 },
  { name: "MySQL", level: 78 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 92 },
  { name: "JavaScript", level: 82 },
  { name: "Elementor", level: 90 },
  { name: "WooCommerce", level: 85 },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Interactive proficiency bars with accessible labels.">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((s) => (
          <Reveal key={s.name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground text-sm" aria-hidden="true">
                {s.level}%
              </span>
            </div>
            <div
              className="h-3 w-full overflow-hidden rounded-full bg-secondary/30"
              role="progressbar"
              aria-valuenow={s.level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${s.name} proficiency ${s.level} percent`}
            >
              <div className={cn("h-full gradient-accent transition-all")} style={{ width: `${s.level}%` }} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
