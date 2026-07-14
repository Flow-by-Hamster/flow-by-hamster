const FOOTER_LINKS = ["Privacy", "Terms", "Support", "Blog"];

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-10 py-8 border-t border-black/10 text-[13px] text-[#888780]">
      <div className="flex items-center gap-2 font-serif text-base text-[#2C2C2A]">
        <span className="w-2 h-2 rounded-full bg-[#D85A30] inline-block" />
        Hamster
      </div>
      <div className="flex gap-5">
        {FOOTER_LINKS.map((link) => (
          <span key={link} className="hover:text-[#2C2C2A] cursor-pointer transition-colors">
            {link}
          </span>
        ))}
      </div>
      <div>© 2025 Hamster Technologies</div>
    </footer>
  );
}
