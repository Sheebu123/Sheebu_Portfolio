"use client";

import InteractiveCard from "@/components/InteractiveCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const activities = [
  {
    title: "Hackathon Participant",
    organization: "Apna College",
    description:
      "Collaborated on fast-paced product thinking, prototyping, and development under time constraints.",
  },
  {
    title: "Volunteer Teacher",
    organization: "Youth For Seva",
    description:
      "Supported teaching initiatives and community engagement through volunteer-led educational activities.",
  },
  {
    title: "Gold Badge in Python",
    organization: "HackerRank",
    description:
      "Earned the Python Gold Badge on HackerRank by solving coding challenges with a strong focus on problem-solving and language fundamentals.",
    image: "/Goldbadge.jpg",
  },
];

export default function Activities() {
  return (
    <section id="achievements" className="section-shell section-spacing">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Achievements and impact beyond coursework."
          description="Hackathons and volunteering add teamwork, communication, and real-world perspective to technical work."
        />
      </Reveal>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 sm:block" />
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 0.08}>
              <InteractiveCard className="relative glass-card p-6 sm:ml-12">
                <div className="absolute -left-[2.55rem] top-8 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-primary sm:block" />
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-primary">
                    {activity.organization}
                  </p>
                  {activity.image ? (
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-amber-300/20 bg-slate-900/80 p-1 shadow-[0_10px_30px_rgba(251,191,36,0.12)]">
                      <Image
                        src={activity.image}
                        alt={`${activity.title} badge`}
                        fill
                        sizes="56px"
                        className="object-contain p-1"
                      />
                    </div>
                  ) : null}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {activity.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {activity.description}
                </p>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
