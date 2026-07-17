interface ArticleFooterProps {
  tags: string[];
}

export function ArticleFooter({ tags }: ArticleFooterProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <footer className="mt-12 pt-6 border-t border-[#e7e2d8]">
      <div className="flex flex-wrap gap-1.5 items-center">
        <span className="text-[11px] font-bold text-[#8c877d] uppercase mr-1.5">Tags:</span>
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[11px] font-medium text-[#6f6b63] bg-[#f4efe8] px-2.5 py-0.5 rounded-full border border-[#e7e2d8]/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </footer>
  );
}