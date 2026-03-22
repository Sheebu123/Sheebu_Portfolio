"use client";

import CertificateCard from "@/components/CertificateCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025",
    description:
      "A cloud-focused certification covering architecture, infrastructure concepts, and distributed computing fundamentals.",
    skills: ["Cloud", "Architecture", "Infrastructure"],
    image: "/NPTEL.png",
    link: "/NPTEL.png",
  },
  {
    title: "GenAI Fundamentals",
    issuer: "Disha",
    date: "2025",
    description:
      "Built foundational understanding of generative AI concepts, terminology, and application-driven learning.",
    skills: ["AI Basics", "GenAI", "Fundamentals"],
    image: "/GenAI%20Fundamentals.png",
    link: "/GenAI%20Fundamentals.png",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "SkillStone",
    date: "2025",
    description:
      "Strengthened problem-solving through common data structures, algorithmic approaches, and optimization patterns.",
    skills: ["DSA", "Logic", "Optimization"],
    image: "/DSA.png",
    link: "/DSA.png",
  },
  {
    title: "Mastering Generative AI",
    issuer: "Infosys Springboard",
    date: "2025",
    description:
      "Explored practical GenAI concepts, prompting strategies, and real-world use cases for modern software workflows.",
    skills: ["GenAI", "Prompting", "AI Tools"],
    image: "/Mastering%20Generative%20AI.png",
    link: "/Mastering%20Generative%20AI.png",
  },
  {
    title: "What is Data Science",
    issuer: "Coursera",
    date: "2024",
    description:
      "Introduced the core ideas of data science, including workflows, practical applications, and the role of data-driven thinking.",
    skills: ["Data Science", "Analytics", "Fundamentals"],
    image: "/Data%20Science.png",
    link: "/Data%20Science.png",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    description:
      "Focused on HTML, CSS, layout systems, and mobile-first approaches for building responsive user interfaces.",
    skills: ["HTML", "CSS", "Responsive UI"],
    image: "/Responsive%20web%20design.png",
    link: "/Responsive%20web%20design.png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell section-spacing">
      <Reveal>
        <SectionHeading
          eyebrow="Certifications"
          title="Interactive proof of continuous learning."
          description="A learning journey across cloud, AI, data science, algorithms, and modern web development."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certificate, index) => (
          <Reveal key={certificate.title} delay={index * 0.06}>
            <CertificateCard {...certificate} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
