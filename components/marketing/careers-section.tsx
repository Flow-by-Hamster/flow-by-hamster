"use client";

import { useState } from "react";
import { CareersCard } from "./careers-card";
import { CareersDrawer } from "./careers-drawer";

type JobRole = {
  id: string;
  title: string;
  type: string;
  category: string;
  location: string;
  description: string;
  requirements: string[];
  perks: string[];
  applyUrl: string;
  needsToSend: string;  
};

const openPositions: JobRole[] = [
  {
    id: "brand-designer",
    title: "Brand Content Designer",
    type: "Full-Time",
    category: "Graphics & Motion",
    location: "Remote - Nigeria [Occasional collaboration sessions in Lagos]",
    description: "We are on a mission to build beautifully simplified software that completely transforms how service businesses operate across Africa. As our Brand Content Designer, you will breathe life into the HAMSTER ecosystem. You will be crafting high-end graphics, slick motion frameworks, and marketing campaigns that visually define how thousands of business owners experience Flow.",
    requirements: [
      "A brand-first designer with a high-end motion toolkit.",
      "You create intentional visuals that don't just look pretty, but inform and convert.",
      "You obsess over uniform brand experiences across every single customer touchpoint.",
      "You enjoy the raw energy of building a premium technology identity from the ground up."
    ],
    perks: [
      "Remote-first setup with real flexibility.",
      "Work side-by-side directly with the founders.",
      "A genuine seat at the table to shape an ecosystem brand at its earliest stages.",
      "Paid practical assessment project for all shortlisted candidates."
    ],
    applyUrl: "https://forms.gle/SXpg4PcwJK8exEhD9",
    needsToSend: "Your absolute best work (Portfolio link) emphasizing brand curation, crisp typography setups, and live motion design examples."
  },
  {
    id: "lead-designer",
    title: "Lead Product Designer",
    type: "Full-Time",
    category: "UI / UX",
    location: "Remote - Nigeria [Occasional collaboration sessions in Lagos]",
    description: "We are crafting a new standard for business systems. As our Lead Product Designer, you will hold the keys to the entire functional aesthetic of Flow and future HAMSTER products. Working side-by-side with the founders, you will convert messy, real-world business challenges into satisfyingly simple, predictable user interfaces.",
    requirements: [
      "A deep product thinker who genuinely sweats the micro-interactions and layout hierarchies.",
      "You know how to translate intense backend complexity into elegant user loops.",
      "You prize component consistency, extreme accessibility, and scalable system thinking.",
      "You design for users first, while mapping interfaces directly to business outcomes."
    ],
    perks: [
      "Remote-first setup with real flexibility.",
      "Work side-by-side directly with the founders.",
      "A genuine seat at the table to shape an ecosystem brand at its earliest stages.",
      "Paid practical assessment project for all shortlisted candidates."
    ],
    applyUrl: "https://forms.gle/SXpg4PcwJK8exEhD9",
    needsToSend: "Your updated design portfolio or deep case-studies demonstrating clean UI/UX architecture, reusable design system setups, and interactive web/mobile flows."
  }
];

export function CareersSection() {
  const [activeJob, setActiveJob] = useState<JobRole | null>(null);

  return (
    /* Changed to bg-transparent and added flex-1 to push footer down */
    <section className="bg-transparent flex-1 flex flex-col justify-center pb-16 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl w-full">
        
        {/* Header with Hamster Icon Branding */}
        <div className="mb-12 flex flex-col items-center text-center">
          <img 
            src="/logos/hamster_icon-nobg.png" 
            alt="Hamster Technologies" 
            className="mb-4 h-12 w-auto object-contain"
          />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#943333]">
            Hamster is hiring
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            Join our build crew
          </h2>
        </div>

        {/* List mapping */}
        <div className="space-y-3">
          {openPositions.map((job) => (
            <CareersCard
              key={job.id}
              title={job.title}
              type={job.type}
              category={job.category}
              location={job.location}
              onViewDetails={() => setActiveJob(job)}
            />
          ))}
        </div>
      </div>

      {/* Drawer Context portal */}
      <CareersDrawer 
        isOpen={activeJob !== null} 
        onClose={() => setActiveJob(null)} 
        job={activeJob} 
      />
    </section>
  );
}