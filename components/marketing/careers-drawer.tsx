"use client";

type JobDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  job: {
    title: string;
    type: string;
    category: string;
    description: string;
    requirements: string[];
    perks: string[];
    applyUrl: string;
    needsToSend: string;
  } | null;
};

export function CareersDrawer({ isOpen, onClose, job }: JobDrawerProps) {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300"
      />
      
      {/* Drawer Container Panel */}
      <aside className="relative flex h-full w-full max-w-lg flex-col bg-white p-6 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
        
        {/* Header Block */}
        <div className="flex items-center justify-between border-b border-[#f4efe8] pb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#d94f24]">
              {job.type} // {job.category}
            </p>
            <h3 className="text-xl font-bold text-[#171717] tracking-tight mt-1">{job.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#e7e2d8] px-3 py-1.5 text-xs font-medium text-[#6f6b63] hover:bg-[#f7f5f0] transition-colors"
          >
            Close
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-6 flex-1 space-y-6 pb-24">
          
          {/* About The Role section */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#8c877d]">About the role</h4>
            <p className="mt-2 text-xs leading-relaxed text-[#6f6b63]">{job.description}</p>
          </div>

          {/* Core Fit section */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#8c877d] mb-3">You might be a great fit if</h4>
            <ul className="space-y-2.5">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-[#171717]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4efe8] text-[9px] text-[#d94f24] font-bold">
                    ✓
                  </span>
                  <span className="leading-normal pt-0.5">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Perks section */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#8c877d] mb-3">What to expect from us</h4>
            <ul className="space-y-2.5">
              {job.perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-[#171717]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4efe8] text-[10px]">
                    ⚡
                  </span>
                  <span className="leading-normal pt-0.5">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements to Send over */}
          <div className="rounded-xl bg-[#fcfaf7] border border-[#e7e2d8] p-4">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#d94f24]">What to prepare</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-[#6f6b63]">
              Before hitting the form link below, ensure you have your assets ready: <span className="text-[#171717] font-medium">{job.needsToSend}</span>
            </p>
          </div>
        </div>

        {/* Action Form Placement Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#f4efe8] p-4 bg-gradient-to-t from-white via-white to-white/95">
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-[#d94f24] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_10px_26px_rgba(217,79,36,0.16)] hover:bg-[#c2431c] transition-all text-center"
          >
            Launch Application Form →
          </a>
          <p className="text-center text-[10px] text-[#9c968e] mt-2">
            Applications are evaluated on a rolling basis. Early submissions preferred.
          </p>
        </div>

      </aside>
    </div>
  );
}