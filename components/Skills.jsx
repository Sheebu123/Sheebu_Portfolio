"use client";

import InteractiveCard from "@/components/InteractiveCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";

const skillGroups = [
  {
    title: "Programming Languages",
    description:
      "Languages used for problem-solving, application logic, and strong programming foundations.",
    accent: {
      surface: "from-rose-500/14 via-pink-500/8 to-orange-400/10",
      bar: "from-rose-300 via-pink-300 to-orange-200",
      badge: "border-rose-300/20 bg-rose-400/10 text-rose-100",
    },
    skills: [
      { name: "C++", level: 82 },
      { name: "Python", level: 86 },
      { name: "C", level: 76 },
      { name: "Java", level: 72 },
      { name: "JavaScript", level: 84 },
    ],
  },
  {
    title: "Frameworks & Web",
    description:
      "Frontend and backend tools used to create responsive interfaces and API-driven applications.",
    accent: {
      surface: "from-cyan-500/14 via-sky-500/8 to-emerald-400/10",
      bar: "from-cyan-300 via-sky-300 to-emerald-200",
      badge: "border-cyan-300/20 bg-cyan-400/10 text-cyan-100",
    },
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 86 },
      { name: "React", level: 81 },
      { name: "Next.js", level: 83 },
      { name: "Django", level: 82 },
    ],
  },
  {
    title: "Tools & Platforms",
    description:
      "Platforms and utilities that support version control, databases, analysis, and development workflows.",
    accent: {
      surface: "from-violet-500/14 via-indigo-500/8 to-sky-400/10",
      bar: "from-violet-300 via-indigo-300 to-sky-200",
      badge: "border-violet-300/20 bg-violet-400/10 text-violet-100",
    },
    skills: [
      { name: "Git", level: 82 },
      { name: "GitHub", level: 84 },
      { name: "MySQL", level: 76 },
      { name: "PostgreSQL", level: 79 },
      { name: "Power BI", level: 70 },
      { name: "Jupyter Notebook", level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-spacing">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technology stack for end-to-end delivery."
          description="A practical toolkit shaped by full-stack projects, database work, and continuous learning."
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.08}>
            <InteractiveCard className="glass-card h-full rounded-[2rem] p-6 sm:p-7">
              <div
                className={`mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r ${group.accent.bar}`}
              />
              <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{group.description}</p>

              <div className="mt-8 grid gap-4">
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                    accent={group.accent}
                  />
                ))}
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
