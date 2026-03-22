"use client";

import InteractiveCard from "@/components/InteractiveCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const educationItems = [
  {
    level: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University",
    meta: "CGPA: 7.01 | Current Student",
  },
  {
    level: "Intermediate",
    institution: "Acharya Tulsi Sarvodaya Bal Vidyalaya School Chhatarpur, Delhi",
    meta: "Percentage: 65% | Apr '21 - Mar '23",
  },
  {
    level: "Matriculation",
    institution: "GBSS No.3 Boys School Mehrauli, Delhi",
    meta: "Percentage: 66.6% | Apr '20 - Mar '21",
  },
];

const trainingItems = [
  {
    title: "Python Full Stack Development",
    meta: "Latest 28-Day Intensive Training",
    description:
      "Completed a recent full-stack training focused on understanding how modern web applications move from interface design to backend delivery.",
    details:
      "Worked with HTML, CSS, JavaScript, Next.js, Django, Django REST Framework, and Python to build a stronger foundation across frontend, backend, and API-driven development.",
    skills: ["HTML", "CSS", "JavaScript", "Next.js", "Django", "DRF", "Python"],
  },
  {
    title: "Data Structures and Algorithms",
    meta: "SkillStone | 28-Day Training",
    description:
      "Strengthened core problem-solving ability through a focused training program built around logical thinking and structured coding practice.",
    details:
      "Improved confidence in solving programming challenges by working on algorithmic thinking, core data structures, and writing cleaner, more efficient solutions.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Logic Building",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell section-spacing">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Building software with a product mindset."
          description="I focus on practical full-stack systems that balance performance, usability, and maintainable architecture."
        />
      </Reveal>

      <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]" delay={0.1}>
        <InteractiveCard className="glass-card p-8">
          <p className="text-lg leading-8 text-slate-300">
            I am a Computer Science Engineering student at Lovely Professional
            University with hands-on experience in full-stack development. I
            enjoy turning ideas into usable web products with modern frontend
            frameworks, structured backend systems, and reliable database design.
            My focus is on building applications that are practical, scalable,
            and easy to use.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Education
            </p>
            <div className="mt-6 space-y-6">
              {educationItems.map((item, index) => (
                <div
                  key={item.level}
                  className={`${
                    index !== educationItems.length - 1
                      ? "border-b border-white/10 pb-6"
                      : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {item.level}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.institution}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </InteractiveCard>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <InteractiveCard className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Current Degree
            </p>
            <p className="mt-4 text-2xl font-semibold text-white">
              B.Tech CSE
            </p>
            <p className="mt-3 leading-7 text-slate-300">
              Studying at Lovely Professional University while building academic
              foundations in software engineering, development, and system design.
            </p>
          </InteractiveCard>
          <InteractiveCard className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Focus Areas
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Data Science",
                "Full Stack Development",
                "Problem Solving",
                "Database Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </InteractiveCard>
        </div>
      </Reveal>

      <Reveal delay={0.18} className="mt-8">
        <InteractiveCard className="glass-card rounded-[2rem] p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Trainings
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Focused learning beyond academics.
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Alongside coursework, I have completed short-term intensive
              trainings to strengthen my web development workflow and problem-
              solving foundation.
            </p>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {trainingItems.map((training) => (
              <div
                key={training.title}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/65 p-6 sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  {training.meta}
                </p>
                <h4 className="mt-4 text-2xl font-semibold text-white">
                  {training.title}
                </h4>
                <p className="mt-4 leading-7 text-slate-300">
                  {training.description}
                </p>
                <p className="mt-4 leading-7 text-slate-400">
                  {training.details}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {training.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </InteractiveCard>
      </Reveal>
    </section>
  );
}
