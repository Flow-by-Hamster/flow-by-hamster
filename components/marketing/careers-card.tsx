"use client";

type JobRolePreview = {
  title: string;
  type: string;
  category: string;
  location: string;
  onViewDetails: () => void;
};

export function CareersCard({ title, type, category, location, onViewDetails }: JobRolePreview) {
  return (
    <button
      onClick={onViewDetails}
      type="button"
      className="group flex w-full flex-col justify-between rounded-2xl border border-[#e7e2d8] bg-white p-5 text-left transition-all duration-200 hover:border-[#d94f24]/30 hover:shadow-[0_8px_24px_rgba(15,23,42,0.02)] sm:flex-row sm:items-center"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#f4efe8] px-2.5 py-0.5 text-[11px] font-medium text-[#6f6b63]">
            {type}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#8c877d]">
            · {category}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-[#171717] group-hover:text-[#d94f24] transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-xs text-[#6f6b63]">
          📍 {location.split("[")[0].trim()}
        </p>
      </div>
      
      <div className="mt-4 text-sm font-semibold text-[#d94f24] sm:mt-0">
        View role →
      </div>
    </button>
  );
}