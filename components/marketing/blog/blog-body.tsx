import { ReactNode } from "react";

interface BlogBodyProps {
  content: string;
}

export function BlogBody({ content }: BlogBodyProps) {
  const blocks = content.split("\n\n");

  return (
    <div className="prose prose-neutral max-w-none border-t border-[#e7e2d8] pt-6">
      {blocks.map((block, idx) => {
        const line = block.trim();
        if (!line || line.startsWith("# ")) return null;

        // Subheadings
        if (line.startsWith("## ")) {
          return (
            <h2 key={idx} className="font-serif text-xl md:text-2xl font-bold text-[#171717] mt-8 mb-4 tracking-tight">
              {line.replace("## ", "")}
            </h2>
          );
        }

        // Inner Subheadings
        if (line.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-base font-bold text-[#171717] mt-6 mb-3 tracking-tight">
              {line.replace("### ", "")}
            </h3>
          );
        }

        // Horizontal Rule
        if (line === "---") {
          return <hr key={idx} className="my-8 border-t border-[#e7e2d8]" />;
        }

        // Bullet Lists
        if (line.startsWith("- ") || line.startsWith("* ")) {
          const items = line.split("\n");
          return (
            <ul key={idx} className="space-y-2.5 my-4 pl-5 list-disc text-[#6f6b63] text-sm md:text-base">
              {items.map((li, liIdx) => (
                <li key={liIdx} className="leading-relaxed">
                  {li.replace(/^[-*]\s+/, "")}
                </li>
              ))}
            </ul>
          );
        }

        // Standalone Bold Paragraphs
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <p key={idx} className="text-sm md:text-base text-[#171717] font-bold leading-relaxed my-4">
              {line.replaceAll("**", "")}
            </p>
          );
        }

        // Editorial Pull Quotes
        if (line.startsWith("*\"") && line.endsWith("\"*")) {
          return (
            <blockquote key={idx} className="border-l-2 border-[#943333] pl-4 my-6 italic text-sm md:text-base text-[#943333]/90 font-serif">
              {line.replaceAll("*", "")}
            </blockquote>
          );
        }

        // Standard Paragraphs
        return (
          <p key={idx} className="text-sm md:text-base text-[#6f6b63] leading-relaxed my-4 whitespace-pre-line">
            {line}
          </p>
        );
      })}
    </div>
  );
}